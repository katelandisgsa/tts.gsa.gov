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
    let isUpcomingSection;
    console.log(ourData);
    if (jobIsUpcoming) {
      isUpcomingSection = h('p', { className: 'test' }, `${ourData.org} will soon be accepting applications for GS-${ourData.gs_level} ${ourData.role_name} roles.`);
    }

   return h('div', { className: 'grid-col' },
     isUpcomingSection,
      h('div', {}, `You supplied: ${ourData.closes} as the end date`)
   );
  }
});

// CMS.registerPreviewTemplate('Jobs', JobPreview);
