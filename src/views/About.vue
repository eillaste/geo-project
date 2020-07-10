<template>
  <div class="about">
    <h1>About</h1>
    <blockquote
      class="blockquote"
    >This project was built with Vue.js, Vue CLI, Vuetify and Leaflet.js</blockquote>
    <h2>Features:</h2>
    <ul>
      <li class="blockquote">
        Search, filter, and sort data from Estonian geocollections information
        system public API's Locality table
      </li>
      <li class="blockquote">
        Browse Locality details, including an overview, data tables of related
        drillcores, samples, and specimens, a location map, and an image gallery
      </li>
      <li class="blockquote">
        Add interesting locations to Favourites for quick referencing and custom
        sorting capabilities
      </li>
      <li class="blockquote">
        Persist search results and selected Favourites to local storage for
        improved navigation during a session
      </li>
    </ul>

    <h2>Ideas for improvement:</h2>
    <ul>
      <li class="blockquote">Multilanguage support</li>
      <li class="blockquote">Adding a state management library like Vuex</li>
      <li class="blockquote">Additional search options</li>
      <li class="blockquote">Data export capabilities from Favourites</li>
    </ul>

    <h2>Challenges:</h2>
    <ul>
      <li class="blockquote">
        Having previously used mainly React.js for front-end development, I was
        excited to see Vue.js in the project requirements. Most of the time was
        spent on figuring out the ins and outs of the framework. I enjoyed
        working with Vue quite a lot, and hope to learn more about its ecosystem
      </li>
      <li class="blockquote">
        Because I wanted to minimize the amount of pop-up windows and keep the
        SPA-like navigation without integrating a state management library, I
        chose to persist search results to local storage and ease data retrieval
        during back and forth navigation between different Views
      </li>
      <li class="blockquote">
        As the limit to maximum returned results per query was set to 1000 I had
        to find a way to make recurring requests to retrieve the data from
        subsequent pages in cases where there were more than 1000 results in
        total
      </li>
      <li class="blockquote">
        Initially I planned to implement an autocomplete feature to the Form's
        input fields for improved UX but in the end chose not to do so, as I
        didn't find a quick and easy way to dynamically access the relevant
        data, i.e. a list of all countries or a list of all settlements –
        getting an
        <code>"Error: lookup in table 'list_asustusyksus' not possible"</code>
        when tryin to query list_countries and list_asustusyksus tables. But
        apart from that, the Django REST API was a breeze to work with
      </li>
    </ul>
    <br />
    <h2>Thank you!</h2>
    <br />
  </div>
</template>
