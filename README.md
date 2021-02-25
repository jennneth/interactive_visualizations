# interactive_visualizations
<strong>Belly Button Diversity</strong>
Because we all want to know what is going on in there.

Select a Subject ID to display the dashboard for that person.

![](/screenshots/selection.png)

![](/screenshots/dashboard.png)

The dataset contains metadata about the Subject such as gender, enthnicity, etc.  This information is displayed in the Demographic Info section.

![](/screenshots/demographics.png)

The microbial species (also called operational taxonomic units, or OTUs, in the study)found in Subject's belly button are counted and the top 10 are displayed in the bar graph.

![](/screenshots/bar.png)

All of the OTUs for Subject are displayed in the bubble chart.

![](/screenshots/bubble.png)

How this project is built:
This project reads in scientific data from a JSON file. The data is analyzed before the dashboard is prepared.

The data is parsed and saved using d3.
Charts are created using plotly.
