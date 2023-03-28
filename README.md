# crunchyroll-proto-app

I am a beginner in React Native and I wanted to challenge myself by creating a project that mimics the Crunchyroll app. Crunchyroll is a popular streaming service for anime and manga fans. I have been working on this project and learning React Native for about a week. The project is still a work in progress.

The main goal of this project is to learn how to use React Native components and libraries to create a user interface that resembles the Crunchyroll app. I am not focusing on the backend but rather on the layout, design, and functionality of the screens. I am using static data for now to populate the views.

## Sections

The project consists of three main sections: Home, My Lists, and Account. These sections are accessible through a Tab Navigator at the bottom of the screen. The Tab Navigator is implemented using React Navigation, which is a popular library for navigation in React Native apps.

### Home
The Home section is the first screen that the user sees when they open the app. It displays a list of anime and manga titles that are featured, popular, or recommended by Crunchyroll. Each category has a horizontal scrollable list of cards that show the title, image, and other info. The user can also see a banner at the top of the screen that advertises a new or upcoming title. However, none of these elements are clickable yet, so the user cannot see more details or watch any video.

### My Lists
The My Lists section is where the user can manage their personal lists of anime and manga titles. It has a nested Tab Navigator that has four sub-sections: Crunchylists, Watchlist, History, and Offline. The Crunchylists section at the moment has a placeholder card, but in the future the functionality will allows the user to create and edit custom lists of their favorite titles. The Watchlist section shows the titles that the user has added to their watchlist. The History section shows the titles that the user has recently watched or read. Similar to the Crunchylists section, the Offline section at the moment has a placeholder card, but in the future will show the titles that the user has downloaded for offline viewing. Each sub-section has a vertical scrollable list of cards that show the title, image, and progress of each item (EXCEPT FOR Crunchylists and Offline sections for now). However, as with the Home section, none of these elements are interactive yet.

### Account
The Account section is where the user can access their profile and settings. It has a vertical scrollable list of rows that show different options for the user to customize their account. Some of these options have a Switch component that allows the user to toggle them on or off. For example, the user can enable or disable mature content, using cellular data, or showing closed captions. Other options have an arrow icon that indicates that they can navigate to another screen. For example, the user can go to their profile, subscription, help center, or feedback screens. These screens are dummy pages that only show a title and a back button. The Account section uses a Stack Navigator from React Navigation to handle the transitions between screens.
