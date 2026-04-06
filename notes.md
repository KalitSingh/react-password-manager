### Few Observations 
- margin + width:100% don't use together as it make your element out of its parent container 

### Problem - How to Use different <img/> element according to media query through jsx.
- Using
```
<picture>
<source media="()" srcSet=""/> // For tablet/mobile
<source media="()" srcSet="" /> // For Laptop
<img/> // default img jiske classes, alt hote hai
</picture> 
```

- <source>: ye media, srcSet 2 attribute leta hai jisme se media eise use hoti hai media="(min-width: 768px)".
    Aour srcSet="linkOfImage" for specified device via media attribute.
    Note: default <img/> element ki classes, alt value hi <source/> element wali image me bhi lagengi.


### Problem - Alignment of Dynamic Cards takes extra width when single card goes in next below row line in UI, using Flexbox for layouting its not achieveable.
- So Replaced Flexbox from Grid. Grid Solved  this problem very easily and now all cards starts taking equal witdh bhale jaye jyada cards hone ki wajah se single card blow row line me ku na aa jaye.