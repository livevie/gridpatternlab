var myTabs = Frtabs({
    // String - Outer container selector, hook for JS init() method
    selector: '.js-fr-tabs',

    // String - List selector to transform into tablist
    tablistSelector: '.js-fr-tabs__tablist',

    // String - Containers which hold content, toggled via tabs
    tabpanelSelector: '.js-fr-tabs__panel',

    // String - Class name that will be added to the selector when the component has been initialised
    tabsReadyClass: 'fr-tabs--is-ready'
});