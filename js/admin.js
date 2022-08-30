require('netlify-cms');
require('@uswds/uswds');

// This registers the USWDS 3 stylesheet with NetlifyCMS so we can use USWDS utilities/components
(() => {
  const stylesheets = document.querySelectorAll("link[rel=stylesheet]");

  stylesheets.forEach(sheet => CMS.registerPreviewStyle(sheet.href));
})();

var JobPreview = createClass({
  render: function() {
    const { entry } = this.props
    const ourData = entry.getIn(['data']).toJS();
    const jobIsOpen = ourData.state === 'open';
    const jobIsUpcoming = ourData.state === 'upcoming';
    const jobIsClosed = ourData.state === 'closed';
    const gsLookup = {
        '12': 'GS-12 Step 1 $79,363 to GS-13 Step 10 $126,742',
        '13': 'GS-13 Step 1 $94,373 to GS-13 Step 10 $150,703',
        '14': 'GS-14 Step 1 $111,521 to GS-14 Step 10 $176,300',
        '15': 'GS-15 Step 1 $131,178 to GS-15 Step 10 $176,300',
    };
    let isUpcomingSection;
    let isOpenSection;
    let isClosedSection;
    console.log(ourData);

    if (jobIsUpcoming) {
      isUpcomingSection = h('div', { className: 'usa-alert usa-alert-info bg-primary-lighter' },
      h('div', { className: 'usa-alert-body padding-left-4' },
        h('h3', { className: 'usa-alert-heading' }, 'Upcoming role'),
        h('p', { className: 'usa-alert-text' }, `This role is not yet open for applications. It will open on ${ourData.opens}`),
      )
      )
    }

    if (jobIsClosed) {
      isClosedSection = h('div', { className: 'usa-alert usa-alert-warning bg-secondary-lighter' },
      h('div', { className: 'usa-alert-body padding-left-4' },
        h('h3', { className: 'usa-alert-heading' }, 'This job posting has closed.'),
        h('p', { className: 'usa-alert-text' }, 'Please see our other open positions.'),
      )
      )
    }

    if (jobIsOpen) {
      isOpenSection = h('div', { className: 'usa-alert usa-alert-info bg-primary-lighter' },
      h('div', { className: 'usa-alert-body padding-left-4' },
        h('h3', { className: 'usa-alert-heading' }, 'Apply now!'),
        h('p', { className: 'usa-alert-text' }, `This role is open for applications until ${ourData.closes}`),
      )
      )
    }

    let hiringGuideLink = h('a', { href: 'https://join.tts.gsa.gov/rolling-hiring' }, 'guide');

    let thisJobGSLevels = ourData.gs_level.split(',');

    let gsListItems = thisJobGSLevels.map(level => {
      level = level.trim();
      return h('li', {}, gsLookup[level]);
    });

    let gsUnorderedList = h('ul', {}, ...gsListItems);

   return h('section', { className: 'usa-section job-posting padding-top-4' },
     h('div', { className: 'grid-container' },
       h('div', { className: 'grid-row grid-gap'},
         h('div', { className: 'desktop:grid-col-12 usa-prose margin-bottom-3' },
           h('h1', {}, ourData.title),
           isOpenSection,
           isClosedSection,
           isUpcomingSection,
           h('div', { className: 'desktop:grid-col-4 desktop:margin-top-0 order-first' },
               h('div', { className: 'desktop:grid-col-8 usa-prose'},
                   h('h2', { className: 'padding-top-4' }, 'Opportunity overview'),
                   h('p', {}, 'These opportunities are located in the General Services Administration (GSA), Federal Acquisition Service (FAS), Technology Transformation Services (TTS). TTS applies modern methodologies and technologies to improve the lives of the public and public servants. We help agencies make their services more accessible, efficient, and effective with modern applications, platforms, processes, personnel, and software solutions.'),
                   h('p', {}, `We will be interviewing and hiring for this role on an ongoing basis and to help navigate the process, we’ve created a ${hiringGuideLink} to help explain what to expect after submitting your resume.`),
                   h('h2', {}, 'Role summary'),
                   h('p', {}, 'Designers at TTS work across design contexts. They drive research activities, derive insights, generate concepts, communicate those concepts clearly, and work with cross functional teams to build and test them. They model best practices in user-centered design within TTS and across the federal government through advocacy and coaching.'),
                   h('h2', {}, 'Basic information'),
                   h('p', {},
                     h('span', { className: 'text-bold'}, 'Location: '),
                     h('span', {}, `${ourData.location}`)
                   ),
                   h('p', {},
                     h('span', { className: 'text-bold'}, 'Salary Range: '),
                     h('span', {}, 'The salary ranges for this position are:')
                   ),
                   gsUnorderedList,
                   h('p', {},
                     h('span', {}, 'Please note the maximum salary available for the GS pay system is '),
                     h('span', { className: 'text-bold' }, `$${ourData.salary_max}`)
                   )
             )
           )
         )
       )
     )
   )
  }
});

CMS.registerPreviewTemplate('Jobs', JobPreview);
