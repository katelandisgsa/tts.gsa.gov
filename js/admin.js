require('netlify-cms');
require('@uswds/uswds');

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
    let isUpcomingSection;
    let isOpenSection;
    let isClosedSection;
    console.log(ourData);

    if (jobIsUpcoming) {
      isUpcomingSection = h('div', { className: 'usa-alert usa-alert-info' },
      h('div', { className: 'usa-alert-body' },
        h('h3', { className: 'usa-alert-heading' }, 'Upcoming role'),
        h('p', { className: 'usa-alert-text' }, `This role is not yet open for applications. It will open on ${ourData.opens}`),
      )
      )
    }

    if (jobIsClosed) {
      isClosedSection = h('div', { className: 'usa-alert usa-alert-warning' },
      h('div', { className: 'usa-alert-body' },
        h('h3', { className: 'usa-alert-heading' }, 'This job posting has closed.'),
        h('p', { className: 'usa-alert-text' }, 'Please see our other open positions.'),
      )
      )
    }

    if (jobIsOpen) {
      isOpenSection = h('div', { className: 'usa-alert usa-alert-info' },
      h('div', { className: 'usa-alert-body' },
        h('h3', { className: 'usa-alert-heading' }, 'Apply now!'),
        h('p', { className: 'usa-alert-text' }, `This role is open for applications until ${ourData.closes}`),
      )
      )
    }

   return h('section', { className: 'usa-section job-posting padding-top-4' },
     h('div', { className: 'grid-container' },
       h('div', { className: 'grid-row grid-gap'},
         h('div', { className: 'desktop:grid-col-12 usa-prose margin-bottom-3' },
           h('h1', {}, ourData.title),
           isOpenSection,
           isClosedSection,
           isUpcomingSection,
         )
       )
     )
   );
  }
});

CMS.registerPreviewTemplate('Jobs', JobPreview);
