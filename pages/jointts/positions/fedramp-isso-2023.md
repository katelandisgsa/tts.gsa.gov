---
#
# This template has general instructions on variables to create open and upcoming jobs
#

# INSTRUCTIONS GENERAL:
# - These are some of the main mandatory variables needed for functionality.

layout: layouts/jointts/job-updated              # layout used to render job information
title: "FedRAMP: Information Systems Security Officer (ISSO)/Cloud Security Assessment GS13"
title-header: FedRAMP - Information Systems Security Officer
permalink: /join/fedramp-isso-cloud-security/             # should be unique /join/<unique-value>
tags: job                                        # tag used to sort into job collection
state: upcoming                                  # upcoming, open, closed | template = excluded
job_post_type: usajobs                           # not sure if this is used anymore?

# INSTRUCTIONS UPCOMING: 
# - These fields are required for `state: upcoming`

role_name: FedRAMP ISSO                          # name of role
opens: '2023-12-26 09:00'                        # Will not appear on /join until
closes: '2024-02-01 23:59'                       # Will disappear from /join 
weeks_open: 52
location: 'Anywhere in the U.S. (remote)'
gs_level: '13, 14, 15'
salary_min: '98,496'
salary_max: '158,432'
org: 'TTS'
contact_name: 'TTS Talent Team'
contact_email: 'jointts@gsa.gov'

# OPTIONAL UPCOMING -
# - to remove, just elete info_sessions or leave it blank info_sessions:
info_sessions:                             
  - link: https://www.eventbrite.com/...
    date: '2023-08-13 15:00'
    time: 3:00-3:30pm ET
  - link: https://www.eventbrite.com/...
    date: '2023-08-14 16:00'
    time: 4:00-4:30pm ET

# INSTRUCTIONS OPEN: 
# - These fields are required for `state: open`

job_announcement_number: 'TODO'
pd_job_title: 'IT Specialist (SYSANALYSIS)'
num_vacancies: '100'
series: '2210'
apply_url: 'TODO'
ohrm_contact_email: 'tts-hrstaffers@gsa.gov'
ohrm_contact_name: 'Loyola Ukpokodu'
bargaining_unit: 'Non Bargaining Unit'
promotion_potential: '15'
supervisory_status: 'No'

#
#
# the following is an example of the markkdown used to render this job's page (at the permalink)
#
#

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

The American people deserve to trust that their government is effectively securing their online interactions. Those agencies, in turn, trust FedRAMP to provide fair, accurate and unbiased assessments of cloud service offerings. FedRAMP is a government-wide program that promotes the adoption of secure cloud services across the federal government by providing a standardized approach to security and risk assessment and maintaining a centralized repository of security packages that agencies can request and reuse.

The FedRAMP Program Lead will unite vision and execution to lead an interdisciplinary team in delivering the IT/Cybersecurity assessment of commercial cloud services leveraging current industry and government cybersecurity laws and policies.

## Key objectives
### 1. Own the product vision and lead end-to-end product/program development and management.
- Operates as part of the FedRAMP Cloud Assessment Team supporting program strategy and roadmap, including objectives, goals, and metrics, in support of federal cybersecurity and FedRAMP program policy.
- Develop a communications strategy and training that includes internal/external government and commercial stakeholders supporting Vulnerability Management program goals and expectations.
- Identify, proactively monitor and address program risks associated with cybersecurity and vulnerability management within the cloud cybersecurity assessment process.
### 2. Work with the team to set and meet quality standards for vulnerability management deliverables.
- Make evidence-based program decisions through use of user research, analytics, and other tools.
- Ensure commercial cloud service providers adhere to federal regulations and standards.
- Work with agency partners to enable cybersecurity risk management.
- Work with partners and stakeholders to operate within established in-house cloud security assessment program.
- Collaborate with partners to navigate complex bureaucratic relationships to bring stakeholders together around a common program vision and strategy to support the cybersecurity assessment of commercial cloud services..
- Work with partners to establish relationships with their security, operations, and IT teams that will help sustain the product in the long term.
### 3. Build expertise around program management.
- Keep abreast of program management best practices and share within the TTS organization to grow overall program management quality.
- Stay on top of new technologies and how they can be used to help solve government problems.
- Contribute to FedRAMP’s culture of transparency by publishing accounts of successes and challenges to help promote transparency and help agencies and commercial entities understand and navigate program complexities
- Continually seek out new tools that could improve the way we work.
- Pay attention to well-supported open source product offerings that can be reused in a government context to solve common problems.


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
