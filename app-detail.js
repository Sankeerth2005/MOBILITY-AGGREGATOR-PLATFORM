// Get the app name from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const appName = urlParams.get('app'); // Get app name from URL

// Simulated app data
const appDetails = {
    Uber: {
        companyOverview: 'Uber Technologies, Inc. is an American technology company that focuses on ride-hailing services, food delivery, package delivery, couriers, freight transportation, a partnership with Lime scooters and bikes, and a partnership with Joby Aviation to develop an aerial taxi service.',
        androidLink: 'https://play.google.com/store/apps/details?id=com.ubercab',
        iosLink: 'https://apps.apple.com/us/app/uber/id368677368',
        bookLink: 'https://www.uber.com',
    },
    Ola: {
        companyOverview: 'Ola is an Indian multinational ride-sharing company offering services that include ride-hailing, vehicle leasing, and financial services.',
        androidLink: 'https://play.google.com/store/apps/details?id=in.olacabs.customer',
        iosLink: 'https://apps.apple.com/us/app/ola-cabs/id536613207',
        bookLink: 'https://www.olacabs.com',
    },
    // Add other apps here (e.g., Meru, Rapido, Bounce, etc.)
};

// Update the app detail page with the selected app's details
if (appDetails[appName]) {
    document.getElementById('app-name').textContent = appName;
    document.getElementById('company-overview').textContent = appDetails[appName].companyOverview;
    document.getElementById('android-link').href = appDetails[appName].androidLink;
    document.getElementById('ios-link').href = appDetails[appName].iosLink;
    document.getElementById('book-link').href = appDetails[appName].bookLink;
} else {
    document.getElementById('company-overview').textContent = 'Details not available for this app.';
}
