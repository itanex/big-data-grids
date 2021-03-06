# Big Data and Grids

The project I was analyzing different approaches to presenting big data in a table where the user would be able to interact with it efficiently.

JavaScript allows you to store Math.MaxInt elements into an array. Therefore, one should be able to present large record sets into the HTML of a page. Given the ability of JavaScript, presenting big data into the HTML DOM in a way that performance and user experience is not impacted, should be rather easy.

## Analysis

Using common AngularJS techiniques and libraries, I will illustrate each approach using the same data model. Each example will present the user with a Data Grid to interact with the data. This will demonstrate what the user will experience, along with being able to see the code approach that was required to achive the solution.

### Approaches

1. Simple Display (ng-repeat)

This first approach demonstrates how the performance of the page degrades as the dataset gets larger. ng-repeat is only optimized to handle small record sets. It does have the ability to filter and handle other scenarios, however, implementing this solution did not handle 5000+ records with a good user experience due to poor performance.

2. Large Data (ng-repeat)

This second approach demonstrated how ng-repeat handles larger datasets. It becomes apparent really quick that ng-repeat is generating many dom modifications and the user has to wait till the entire dom is updated with the complete dataset.

3. AVS (sf-virtual-scroll)

sf-virtual-scroll is a piece of code that is designed to render a virtualized list of content from the entire dataset and manage the sliding window of actual rendered content. The API of this library is a bit tidious and without an actual Bower package, makes managing the versions being used even harder. The benefit of AVS is that it was designed to be free from angular and other libraries, however, its API does not lend itself to being friendly to work within angular. I was able to generate the angularization of this library to a point that performance was not really hit. My ultimate goal of displaying 1 million records handles fairly well and the time from generation to display is nearly imperceivable to the user.

4. Angular-UI Grid (ui-grid)

The Angular-UI team provides a full feature rich Grid component that lends itself to nearly any requirement you would have. It even includes the option to virtualize the list of your dataset to increase performance. The drawback is that you have to turn this feature on when you populate your grid. This is by design because most datasets really do not benefit from the overhead required in the virtualization process that is used in this component. Additionally, if your dataset grows over time instead of the static generation that this demonstration uses, you would have a major redraw effect occur if, you were to change the option after your dataset reached a certain limit. Overall, the only perceiveable performance hit was when dropping large datasets into the grid, but even at 1 million, the wait time was 5 seconds or less.

## Conclusion

To summarize, using ng-repeat should be used sparingly and optimized accordingly. As your dataset increases in quantity, it is advisable to utilize a virtualized view of the content in your dataset. With the two solutions investigated here, both are still using ng-repeat, but the approach to how things are done internally are figured out for you so there is no reinvention of performance that needs to be handled. Angular-UI Grid is full featured and provides many premade processes you would want to take advantage of, however, it is restricted to rendering out grids only and there is no real virtualized list solution in the Angular-UI library for truely customizing your display. If your solution is really just a list instead of a grid, the sf-virtual-scroll solution provides you with the ability to be fully custom on how your data goes, however you are limited by the features and you will need to handle filtering, sorting and other features yourself.
