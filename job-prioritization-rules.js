// Job Prioritization Rules System
// This file contains all the rules for scoring and prioritizing job applications
// Edit these rules to customize how jobs are ranked and filtered

const JOB_PRIORITIZATION_RULES = {
  // Job Title Grading System (A/B/C tiers)
  titleGrades: {
    A: [
      'Solutions Engineer', 'Sales Engineer', 'Customer Success Engineer',
      'Implementation Specialist', 'Solutions Architect', 'Pre-Sales Engineer',
      'Technical Account Manager', 'Customer Success Manager', 'Partner Solutions Manager',
      'Product Specialist', 'Solutions Consultant', 'Client Solutions Manager',
      'Customer Implementation Manager', 'Onboarding Specialist (Technical)',
      'Enterprise Customer Success Manager', 'Technical Project Manager',
      'Technical Solutions Specialist', 'Customer Enablement Manager',
      'Client Success Engineer', 'Platform Solutions Engineer'
    ],
    B: [
      'Business Development Manager', 'Account Executive', 'Account Manager',
      'Partner Development Manager', 'Customer Support Lead', 'Technical Trainer',
      'Product Manager (Associate or Mid-Level)', 'Product Marketing Specialist',
      'Implementation Coordinator', 'Customer Operations Manager', 'Sales Operations Specialist',
      'Technical Support Engineer', 'Relationship Manager', 'Solutions Analyst',
      'Client Services Manager', 'Professional Services Consultant', 'Field Applications Engineer',
      'Inside Sales Engineer', 'Channel Account Manager', 'Engagement Manager'
    ],
    C: [
      'Customer Service Representative', 'Data Entry Clerk', 'Administrative Assistant',
      'Marketing Associate', 'Social Media Coordinator', 'IT Support Technician',
      'Retail Sales Associate', 'Call Center Agent', 'Junior Developer', 'Office Manager',
      'Project Assistant', 'Operations Coordinator', 'QA Tester', 'Recruiter',
      'HR Assistant', 'Graphic Designer', 'Content Writer', 'Data Analyst',
      'Product Research Intern', 'Sales Associate'
    ]
  },

  // Scoring Weights (total should add up to 100)
  scoringWeights: {
    titleGrade: 30,        // Job title fit (A=100, B=60, C=20)
    location: 20,          // Location preference (remote=100, hybrid=80, onsite=40)
    salary: 15,            // Salary alignment (meets expectations=100, below=40)
    companySize: 10,       // Company size preference
    industry: 10,          // Industry preference
    urgency: 10,           // Application deadline urgency
    source: 5              // Application source quality
  },

  // Location Preferences (higher score = better fit)
  locationScores: {
    'remote': 100,
    'hybrid': 80,
    'onsite': 40,
    'flexible': 90
  },

  // Company Size Preferences
  companySizeScores: {
    'startup': 60,        // 1-50 employees
    'small': 70,          // 51-200 employees
    'medium': 80,         // 201-1000 employees
    'large': 90,          // 1000+ employees
    'enterprise': 85      // Fortune 500
  },

  // Industry Preferences
  industryScores: {
    'technology': 100,
    'saas': 100,
    'fintech': 90,
    'healthcare': 80,
    'ecommerce': 85,
    'consulting': 75,
    'retail': 30,         // For immediate work category
    'hospitality': 20,    // For immediate work category
    'other': 50
  },

  // Salary Expectations (adjust these based on your needs)
  salaryExpectations: {
    minimum: 60000,       // Minimum acceptable salary
    target: 80000,        // Target salary
    excellent: 100000     // Excellent salary
  },

  // Urgency Scoring (based on days until deadline)
  urgencyScores: {
    immediate: 100,       // Due today
    urgent: 90,           // Due in 1-2 days
    soon: 70,             // Due in 3-7 days
    moderate: 50,         // Due in 8-14 days
    low: 30,              // Due in 15+ days
    none: 20              // No deadline
  },

  // Application Source Quality
  sourceScores: {
    'company_website': 100,
    'linkedin': 90,
    'referral': 95,
    'indeed': 70,
    'glassdoor': 75,
    'other': 60
  },

  // Keywords that boost score (skills, technologies, etc.)
  skillKeywords: [
    'sales', 'customer success', 'solutions', 'technical', 'implementation',
    'partnerships', 'account management', 'client relations', 'product',
    'saas', 'b2b', 'enterprise', 'api', 'integration', 'onboarding'
  ],

  // Keywords that reduce score (not a good fit)
  negativeKeywords: [
    'entry level', 'intern', 'junior', 'temporary', 'contract',
    'part time', 'commission only', 'unpaid', 'volunteer'
  ],

  // Job Categories for Different Search Strategies
  jobCategories: {
    primary: {
      name: 'Primary Career Path',
      description: 'High-paying sales & CS roles with growth potential',
      targetSalary: 80000,
      priority: 1
    },
    immediate: {
      name: 'Immediate Work',
      description: 'Quick-hire jobs for immediate income (retail, hospitality)',
      targetSalary: 30000,
      priority: 2
    },
    pathway: {
      name: 'Pathway to Product',
      description: 'Roles that could lead to product development',
      targetSalary: 60000,
      priority: 3
    }
  }
};

// Function to calculate job match score
function calculateJobScore(job, userPreferences = {}) {
  let totalScore = 0;
  const weights = JOB_PRIORITIZATION_RULES.scoringWeights;
  
  // Title Grade Score (0-100)
  const titleScore = getTitleScore(job.title);
  totalScore += (titleScore * weights.titleGrade) / 100;
  
  // Location Score (0-100)
  const locationScore = getLocationScore(job.location, userPreferences.locationPreference);
  totalScore += (locationScore * weights.location) / 100;
  
  // Salary Score (0-100)
  const salaryScore = getSalaryScore(job.salary, userPreferences.salaryExpectations);
  totalScore += (salaryScore * weights.salary) / 100;
  
  // Company Size Score (0-100)
  const companySizeScore = getCompanySizeScore(job.companySize);
  totalScore += (companySizeScore * weights.companySize) / 100;
  
  // Industry Score (0-100)
  const industryScore = getIndustryScore(job.industry);
  totalScore += (industryScore * weights.industry) / 100;
  
  // Urgency Score (0-100)
  const urgencyScore = getUrgencyScore(job.deadline);
  totalScore += (urgencyScore * weights.urgency) / 100;
  
  // Source Score (0-100)
  const sourceScore = getSourceScore(job.source);
  totalScore += (sourceScore * weights.source) / 100;
  
  // Apply keyword bonuses/penalties
  const keywordBonus = getKeywordBonus(job.description, job.title);
  totalScore = Math.min(100, totalScore + keywordBonus);
  
  return Math.round(totalScore);
}

// Helper functions for scoring
function getTitleScore(title) {
  const grades = JOB_PRIORITIZATION_RULES.titleGrades;
  const titleLower = title.toLowerCase();
  
  for (const grade of grades.A) {
    if (titleLower.includes(grade.toLowerCase())) return 100;
  }
  for (const grade of grades.B) {
    if (titleLower.includes(grade.toLowerCase())) return 60;
  }
  for (const grade of grades.C) {
    if (titleLower.includes(grade.toLowerCase())) return 20;
  }
  
  return 30; // Default for unknown titles
}

function getLocationScore(location, userPreference = 'remote') {
  const locationLower = (location || '').toLowerCase();
  const scores = JOB_PRIORITIZATION_RULES.locationScores;
  
  if (locationLower.includes('remote')) return scores.remote;
  if (locationLower.includes('hybrid')) return scores.hybrid;
  if (locationLower.includes('onsite') || locationLower.includes('on-site')) return scores.onsite;
  if (locationLower.includes('flexible')) return scores.flexible;
  
  return scores.onsite; // Default
}

function getSalaryScore(salary, userExpectations = JOB_PRIORITIZATION_RULES.salaryExpectations) {
  if (!salary) return 50; // Neutral if no salary info
  
  const salaryNum = parseInt(salary.replace(/[^0-9]/g, ''));
  if (isNaN(salaryNum)) return 50;
  
  if (salaryNum >= userExpectations.excellent) return 100;
  if (salaryNum >= userExpectations.target) return 80;
  if (salaryNum >= userExpectations.minimum) return 60;
  
  return 30; // Below minimum
}

function getCompanySizeScore(companySize) {
  const sizeLower = (companySize || '').toLowerCase();
  const scores = JOB_PRIORITIZATION_RULES.companySizeScores;
  
  if (sizeLower.includes('startup')) return scores.startup;
  if (sizeLower.includes('small')) return scores.small;
  if (sizeLower.includes('medium')) return scores.medium;
  if (sizeLower.includes('large')) return scores.large;
  if (sizeLower.includes('enterprise')) return scores.enterprise;
  
  return 50; // Default
}

function getIndustryScore(industry) {
  const industryLower = (industry || '').toLowerCase();
  const scores = JOB_PRIORITIZATION_RULES.industryScores;
  
  for (const [key, score] of Object.entries(scores)) {
    if (industryLower.includes(key)) return score;
  }
  
  return 50; // Default
}

function getUrgencyScore(deadline) {
  if (!deadline) return JOB_PRIORITIZATION_RULES.urgencyScores.none;
  
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const daysUntil = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
  
  if (daysUntil <= 0) return JOB_PRIORITIZATION_RULES.urgencyScores.immediate;
  if (daysUntil <= 2) return JOB_PRIORITIZATION_RULES.urgencyScores.urgent;
  if (daysUntil <= 7) return JOB_PRIORITIZATION_RULES.urgencyScores.soon;
  if (daysUntil <= 14) return JOB_PRIORITIZATION_RULES.urgencyScores.moderate;
  
  return JOB_PRIORITIZATION_RULES.urgencyScores.low;
}

function getSourceScore(source) {
  const sourceLower = (source || '').toLowerCase();
  const scores = JOB_PRIORITIZATION_RULES.sourceScores;
  
  for (const [key, score] of Object.entries(scores)) {
    if (sourceLower.includes(key)) return score;
  }
  
  return scores.other;
}

function getKeywordBonus(description, title) {
  const text = (description + ' ' + title).toLowerCase();
  let bonus = 0;
  
  // Positive keywords
  for (const keyword of JOB_PRIORITIZATION_RULES.skillKeywords) {
    if (text.includes(keyword)) bonus += 2;
  }
  
  // Negative keywords
  for (const keyword of JOB_PRIORITIZATION_RULES.negativeKeywords) {
    if (text.includes(keyword)) bonus -= 5;
  }
  
  return Math.max(-10, Math.min(10, bonus)); // Cap between -10 and +10
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { JOB_PRIORITIZATION_RULES, calculateJobScore };
}
