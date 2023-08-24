---

# INSTRUCTIONS GENERAL:
# - These are some of the main mandatory variables needed for functionality.

layout: layouts/jointts/job-updated              # layout used to render job information
title: "TTS: Director of Product Management"     # title of the page/position
title-header: Director of Product Management
permalink: /join/tts-director-product-management/             # should be unique /join/<unique-value>
tags: job                                        # tag used to sort into job collection
state: upcoming                                  # upcoming, open, closed | template = excluded
job_post_type: usajobs                           # not sure if this is used anymore?

# INSTRUCTIONS UPCOMING: 
# - These fields are required for `state: upcoming`

role_name: TTS - Director of Product Management  # name of role
opens: '2023-09-11 09:00'                        # Will not appear on /join until
closes: '2023-09-15 23:59'                       # Will disappear from /join 
weeks_open: 52
location: 'Virtual (100% Remote)'
gs_level: '15'
salary_min: '136,908'
salary_max: '183,500'
org: 'TTS'
contact_name: 'TTS Talent Team'
contact_email: 'jointts@gsa.gov'

# OPTIONAL UPCOMING -
# - to remove, just elete info_sessions or leave it blank info_sessions:
info_sessions:                             
  - link: https://www.google.com/url?q=https://gsa.zoomgov.com/meeting/register/vJIsdOuhqjIpHtnWZrKqsxnppsouGp2n3w0&sa=D&source=calendar&ust=1693251092764189&usg=AOvVaw38y3JYB4016v33To-LAQGV
    date: '2023-09-07 13:30'
    time: 1:30-2:30pm ET (10:30am -11:30am PT)

# INSTRUCTIONS OPEN: 
# - These fields are required for `state: open`

job_announcement_number: 'TODO'
pd_job_title: ''
num_vacancies: '100'
series: '2210'
apply_url: 'TODO'
ohrm_contact_email: 'tts-hrstaffers@gsa.gov'
ohrm_contact_name: 'Loyola Ukpokodu'
bargaining_unit: 'Non Bargaining Unit'
promotion_potential: '15'
supervisory_status: 'No'

---

{%- if state == 'upcoming' -%}
  {{ org }} will soon be accepting applications for GS-{{ gs_level }} - {{ role_name }} roles.
  {%- if opens == 'tbd' -%} The target date for when these positions will be officially open to application has not yet been determined. If you'd like to be
  notified when these positions are open, sign up to our [mailing list]({{ site.baseurl }}/newsletter).
  {%- endif -%}

  {%- unless opens == 'tbd' -%}
  Applications will be open for submission on {{ opens | date: '%A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to
  learn more about the application process.
  {%- endunless -%}
{%- endif -%}

## Opportunity overview

These opportunities are located in the General Services Administration (GSA), Federal Acquisition Service (FAS), Technology Transformation Services (TTS). TTS applies modern methodologies and technologies to improve the lives of the public and public servants. We help agencies make their services more accessible, efficient, and effective with modern applications, platforms, processes, personnel, and software solutions.

We will be interviewing and hiring for this role on an ongoing basis and to help navigate the process, we’ve created a [guide](https://join.tts.gsa.gov/rolling-hiring/) to help explain what to expect after submitting your resume.

## Role summary

TTS has grown tremendously in the last few years to 24+ different products and services and over 500 employees. As a result, we need to update and implement new and consistent product management practices in order to meet the organization's size and complexity. It is essential that we mature our standards of practice for creating  product visions focused on customer experiences and value to the American public with strategies that result in predictable, reliable outputs and outcomes.

The  new TTS  Director Of Product Management will lead these efforts. This new position will report directly to the TTS Deputy Director. This vital role will determine the approach to developing strategies, roadmaps, and feature definitions for future products and platforms. The position also serves as an internal and external representative for TTS’ products and works directly with the greater TTS organization to better understand market needs and use of technologies. 

The ideal candidate will encompass the following: 

- A strategic thinker who knows how to define compelling product visions based on rigorous and inclusive research and service design, designing a measurable strategy to achieve that vision, communicating the vision, and driving delivery against the strategy.
- An experienced leader who knows from successes and failures the best practices for product management and software development for digital products and network services
- An influential facilitator who knows how to effectively communicate and motivate cross-functional teams to build the right thing.
- A pragmatic detective comfortable with uncertainty and ambiguity using both quantitative and qualitative methods to evaluate the direction of products.
- An empathetic coach, teacher, and advocate who helps staff develop the skills to manage products.
- A knowledgeable champion for promoting greater equity and accessibility in the development of products and platforms

## Key objectives
### 1. Defining and deploying standards of practice for product management at TTS**
The Director of Product Management will work collaboratively with product development teams and organizational leadership and be responsible for setting the general approach to and standards of practice of the product management discipline at TTS. This includes defining the tools, methodologies, and artifacts used by product managers throughout the organization. 

The director is also responsible for the rollout and adoption of these practices across the organization through a consultative partnership, and leverages the director’s subject matter expertise and data-driven approach to influence teams in a matrixed environment. In addition: 
- Ensuring product teams are co-designing with state and local governments, tribal nations, and community-based organizations (CBOs) supporting historically-marginalized communities and people with disabilities.
- Continually promoteTTS’s values by making a strong case for iterative, user-centered design on every project.

### 2. Establishing and executing product portfolio management at TTS**
Through TTS’ rapid growth, the scope of its products, programs, and stakeholders has become complex. The Director will practice consistent product portfolio management to moderate and manage this. In collaboration with TTS leadership, the director will establish the process and policies for the intake, evaluation, and prioritization of new product ideas and requests. This will involve:
- Defining business processes for the intake of new product ideas and requests with internal and external stakeholders. This may also include implementation of toolsets that enable the organization, and communication of the TTS product and program landscape holistically. 
- Establishing the evaluation criteria used by leadership to approve or reject new requests. These criteria will include assessing customer value, level of effort, financial viability, technical feasibility, total cost of ownership, and regulatory requirements. 
- Creating methodologies for approved requests to be prioritized by development teams within their existing scope of work taking into account the needs of stakeholders and TTS’ overall organizational goals.
- Thoughtfully rolling out this new practice across the organization leveraging best practices in change management for successful adoption
- Executing and managing the operations of the portfolio management process once it is established. 

### 3. Leading engagements with internal and external stakeholders**
The Director of Product will be responsible for engaging with stakeholders of all kinds to promote TTS’ products and services along with advancing the organization’s goals and objectives. This may include:
- Partnering with other program and product leaders within TTS to enable success for the entire organization 
- Speaking at conferences and events to connect with government leaders and others in the civic technology space
- Collaborating with other parts of GSA and other government agencies to expand the impact and potential of TTS’ products and services

### 4. Advising TTS leadership on product-related strategies, practices, and policy**
The director will be a key member of the delivery team and will work closely with the TTS Director, and Deputy Director along with front office advisors to realize the organization’s goals and objectives. It is expected that the director will:
- Contribute meaningfully to discussions and take ownership of selected artifacts and deliverables for TTS’ product strategies, practices, and policies. These deliverables could be wide ranging and may involve decision memos, research reports, market analysis, and more. 
- Provide subject matter expertise in the areas of modern software development practices, research and development methodologies, and customer-experience / human-centered design. 
- Collaborating with other parts of GSA and other government agencies to expand the impact and potential of TTS’ products and services

### 5. Hiring, training, and supervising a team to assist in delivering results**
The Director will  hire, train, and supervise a team to advance the goals and objectives stated above. The team may include full-time federal employees, temporary contract personnel, and/or external consultants serving as subject matter experts. It is critical that the director be knowledgeable in management practices and capable of leading a team. Specific responsibilities include:
- Collaborating with TTS talent acquisition, GSA human resources, and procurement to identify full-time and temporary staffing options and secure appropriately skilled talent
- Hire and onboard team members with clear training plans and performance expectations that include annual performance goals for each role
- Assist in the development of individual career paths through identifying professional goals, development opportunities, and learning needs.
- Create a team culture of collaboration, inclusivity, and accountability
- Serve as a coach, mentor, and teacher to the team

## Basic information

**Location:**
{{ location }}

**Salary Range:**
The salary ranges for this position are:
- ${{salary_min}} to ${{salary_max}}

Your salary, including base and locality, will be determined upon selection, dependent on your actual duty location.

You can find more information about this in the [compensation and benefits section on our site](https://join.tts.gsa.gov/compensation-and-benefits/).

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a
salary calculator [OPM's 2022 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2022/general-schedule-gs-salary-calculator/).

Please note the maximum salary available for the GS pay system is **$183,500**

Note: You may not be eligible for the maximum salary as it is locality dependent. Please refer to the maximum pay for your locality.

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands).

**Travel requirement:**
Occasional travel may be required up to 10%-20% per year.

**Security clearance:**
Public trust. Background investigation required.

**Work schedule:**
Full time.

**Appointment type:**
This is a term limited appointment with the ability to extend for a total of eight years.

**Employee benefits:**
[Learn more about the benefits we offer.](https://join.tts.gsa.gov/compensation-and-benefits/)
  - Health insurance (choose from a wide range of plans)
  - Life insurance coverage with several options
  - Sick leave and vacation time, including 10 paid holidays per year
  - Thrift Savings Plan (similar to a 401(k) plan)
  - Flexible work schedules and telework
  - Transit and child care subsidies
  - Training and development
  - Flexible spending accounts
  - Long-term care insurance
  - Training and development
  - Direct Deposit of salary check to financial organization required.

## Qualifications

Provide as much detail as possible on your resume so that we can evaluate your previous experience. Follow our [guidance on creating a federal style resume.](https://join.tts.gsa.gov/resume/)

Qualification determinations can’t be made when resumes don’t include the required information. Failure to provide required information may result in disqualification.

For each job on your resume, provide:
- The exact dates you held each job (from month/year to month/year or “present”)
- Number of hours per week you worked (if part time)

All applications will be reviewed by a panel of subject matter experts against a scoring rubric created for this role. In order to properly be able to evaluate your previous experience, we recommend being as detailed as possible in your resume and following our general guidance on creating federal style resume.


## How To Apply

Submit a complete online application prior to {{ closes | date: '%l:%M%P %Z ET on %A, %B %e, %Y' }}. Please fill out all applicable fields.

<section class="usa-grid-full">
  <a class="usa-button usa-button-secondary" href="{{ apply_url }}">Click here to apply</a>
</section>

**Need Assistance in applying or have questions regarding this job opportunity, please email {{ contact_name }} at** [{{ contact_email }}](mailto:{{ contact_email }}).
