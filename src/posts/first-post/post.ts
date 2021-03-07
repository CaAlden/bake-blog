import { Units } from "../../../types";

const blog = `
# First Bake Post

### Introduction

For our first bake we decided we would try to start so we chose cookies! For these experiments we chose two of the classics: [Chocolate Chip Cookies](/recipes/chocolate-chip-cookies) and [Sugar Cookies](/recipes/sugar-cookies). Our goal with these bakes, and the blog in general, is to learn more about baking through experimentation. In each of our bakes, we're hoping to approach the recipes and baking with no assumptions. Particularly in these first bakes, our experimentation will be less directed at solving any specific baking question. Instead, we intend to explore what effect the ratios of each ingredient has on the overall recipes.

Right out of the gate, we admittedly bit off more than we could chew. In fact, we didn't fully finish baking each of the cookie doughs until a week after our initial bake day. This was largely do to a failure on our part to manage the scope creep when we got into the planning step. The first thing we did when deciding on what to experiment with was to look at a bunch of recipes to see what made the cookies tick.

For both types of cookie we looked up ~10 recipes from different sources. Then, we went through the process of normalizing the ingredients to discover the relative ratios of each ingredient in each of the recipes. With this in mind, we gained an idea for what switches and gears we had to play with when designing our own recipes. Finally we picked out a few pieces in particular that seemed the most important and decided to test our what would happen when we pushed those ratios to the extremes.

## Sugar Cookies

The sugar cookie [recipes](#further-reading) we drew on for inspiration were all relatively simple. From the simplicity we decided that it might be possible to fully deconstruct these recipes in every meaningful direction.

We identified **flour**, **sugar**, and **butter** as the main components of the sugar cookie recipes. The remaining ingredients did not show high variance between any of the recipes we referenced. After normalizing the ingredient ratios, we had data for the upper and lower bounds on each ingredient.

| Ingredient | Highest Ratio | Lowest Ratio | Average Ratio |
| ---------- | ------------- | ------------ | ------------- |
| **Flour**  | 48.86%        | 37.02%       | 43.75%        |
| **Sugar**  | 34.71%        | 21.13%       | 26.44%        |
| **Butter** | 32.39%        | 25.68%       | 27.07%        |

From this data we decided to test 3 concentrations of flour and sugar. Quickly, we realized that a bake that was low concentration sugar and flour would necessarily need another ingredient to make up the difference, and given that butter was the next most important ingredient behind flour and sugar, it became our third variable. Below are the ratios of each ingredient across our experimental doughs.

| Bake Profile               | Flour | Sugar | Butter |
| -------------------------- | ----- | ----- | ------ |
| Low Flour, Low Sugar       | 35%   | 21%   | 42%    |
| Low Flour, Medium Sugar    | 35%   | 26%   | 37%    |
| Low Flour, High Sugar      | 35%   | 31%   | 32%    |
| Medium Flour, Low Sugar    | 43%   | 21%   | 34%    |
| Medium Flour, Medium Sugar | 43%   | 26%   | 29%    |
| Medium Flour, High Sugar   | 43%   | 31%   | 24%    |
| High Flour, Low Sugar      | 50%   | 21%   | 27%    |
| High Flour, Medium Sugar   | 50%   | 26%   | 22%    |
| High Flour, High Sugar     | 50%   | 31%   | 17%    |

The "Medium Flour-Medium Sugar" variety was essentially the average cookie, synthesized as a literal average of all the ingredient ratios from the recipes we referenced. You can see that the "Low Flour-Low Sugar" and "High Flour-High Sugar" extreme doughs are pushing the envelope pretty far from the ratios we saw in the recipes. Some of the combinations resulted in cookies that altered the nature of the cookie so drastically that they were arguably not "sugar cookies" anymore. That's not to say that those bakes were bad, in fact the best tasting result in our opinion was the least like a sugar cookie.

With these ratios in mind, we set to work creating the 9 doughs. Each recipe was originally intended to make 24-36 cookies which would've resulted in a mountainous **486** cookies if we didn't drastically reduce the bake yield. Instead, we calculated a yield of just 3 cookies for each dough (weighing 27.9 grams which was the average cookie size from all of the recipes we looked at).

Working with essentially 90 grams of dough for each bake proved to be difficult, and just making the doughs took the better part of the evening. We began baking at around 4pm and we hadn't set the dough to rest in the refridgerator for the sugar cookies until 9pm. With an eye on the clock, we shifted to baking the chocolate chip cookies. We ultimately didn't get around to baking the sugar cookies on the first day.

A few days later, we came back refreshed and ready to test out baking the sugar cookies. There was an element of trial and error with the bake itself since we needed to suss out how long to bake in our oven. It turned out to be slightly longer than the recipes indicated was necessary, due we suspect to a somewhat unreliable temperature guage in our oven. Finally, after cooking each of our doughs, we began the process of tasting and noting the various differences between each of our experimental cookies. In addition to the "fresh out of the oven" taste, we also tasted each cookie the following day and one week after the initial bake.

### Specific Recipe Takeaways

Okay so, let's take a look at our notes for each fo the specific bakes! We discovered that the flour content affected the form of the resulting bakes. The lower the flour, the more the cookies spread out. The low flour bakes, therefore, spread out the most and felt the lightest in comparison with their flour-ful brothers and sisters. As we moved up the flour scale, the form came together. The high flour cookies in general were overpowered by the amount of flour. They held their form the best, but at what cost! Most of the "good" cookies were unsurprisingly in the medium flour range.

--------------------

#### Low Flour - Low Sugar - [recipe](/recipes/sugar-cookies?Composure="Low"&Sweetness="Low")

The day of the bake, this cookie was one of the worst. The low amount of flour and sugar meant that the cookie was essentially all butter. When the butter was still warm, the cookie had virtually no form. The day after and again a week later, the cookie performed better. The butter had resolidified and came through. Unfortunately the low sugar content meant the cookie didn't taste like much of anything.

**Verdict**: DO NOT RECOMMEND

--------------------

#### Low Flour - Medium Sugar - [recipe](/recipes/sugar-cookies?Composure="Low"&Sweetness="Medium")

This cookie ended up spreading out and being a bit chewier the day of. This cookie tasted better on the second day and a week later which I attribute to the solidification of the butter. The medium amount of sugar meant that this one tasted a bit better and by the 1 week mark it had solidified some from becoming a bit stale to the point that it would've been a very good tea cookie.

**Verdict**: Still not a strong recommendation since I would only recommend this for the tea cookie quality, but there were other ratios that performed better in that respect.

--------------------

#### Low Flour - High Sugar - [recipe](/recipes/sugar-cookies?Composure="Low"&Sweetness="High")

Now we arrive at an interesting cookie. The low flour meant that this cookie spread out super thin in the oven and the high sugar content partially caramelized. This cookie was crunchy and delicious on all three tasting attempts and was both Sara and my favorite of the whole batch. With that said, this cookie wasn't exactly a "sugar cookie". The low form and crunchiness pushed it all the way into some other cookie category. We either invented a new type of cookie or rediscovered some type of snickerdoodle.

**Verdict**: Not a sugar cookie, but I **strongly recommend** it if you want some simple and delicious cookies!

--------------------

#### Medium Flour - Low Sugar - [recipe](/recipes/sugar-cookies?Composure="Medium"&Sweetness="Low")

This cookie had more form than the low flour cookies. The taste was decent when they were fresh out of the oven. We both felt that it would be a good tea cookie, but it wasn't very sweet and as such didn't leave much of an impression. It would be a good vehicle for super sweet icings for example since it won't push the sweetness over the top. My notes for this cookie say that it wasn't very good the next day, but then was back up towards the top of the cookies we made when I taste tested it a week later.

**Verdict**: Recommended _if_ you want a cookie that isn't going to overpower the bake with sweetness. There were still better stand-alone cookies for tea and in general.

--------------------

#### Medium Flour - Medium Sugar - [recipe](/recipes/sugar-cookies?Composure="Medium"&Sweetness="Medium")

This was our absolutely average sugar cookie recipe. It ended up being a very good cookie though, so maybe the recipes we sourced were circling around something good after all. It wasn't an exciting cookie, but it was certainly unoffensive and would be really good in a setting where you are looking for a stand-alone cookie that isn't overly sweet. If you wanted to use sweet toppings or just to eat something with tea, this is a strong choice.

**Verdict**: Super standard sugar cookie. If you're looking for a sugar cookie recipe and don't want to modify the experience at all **this is your cookie**.

--------------------

#### Medium Flour - High Sugar - [recipe](/recipes/sugar-cookies?Composure="Medium"&Sweetness="High")

All of the notes on this cookie were essentially the same as the **Medium Flour - Medium Sugar** with the note that it was sweeter. With no toppings or accompaniment, these cookies slightly edged out the medium-medium ones. If you intended to add a sweet topping, the sweetness might be overpowering.

**Verdict**: **Recommended Stand-alone**. Be careful about too much sugar if adding icing.

--------------------

#### High Flour - Low Sugar - [recipe](/recipes/sugar-cookies?Composure="High"&Sweetness="Low")

Now we reach the zone of "is this even edible". I begrudingly grant it that title, but this cookie was unpleasent. Fresh out of the over, both Sara and I barely managed to eat even a small bite from this cookie. The high ratio of flour meant that the cookie turned into a paste as soon as you tried to eat it. Particularly fresh out of the oven when the butter didn't have a chance to solidify, this cookie turned into mush. On later tastings, it improved some, but the low sugar content meant that the cookie was never particularly pleasent. The one positive thing I can say is that it held it shape very well. If form is all that matters, and you're out of sugar then I suppose you could make this cookie.

**Verdict**: DO NOT RECOMMEND

--------------------

#### High Flour - Medium Sugar - [recipe](/recipes/sugar-cookies?Composure="High"&Sweetness="Medium")

This one was also not particularly pleasent. It tasted slightly better but was ultimately not very flavorful. An uncooked flour flavor persisted through the bake which was not ideal flavor-wise. It did hold it's shape as well, but was otherwise unremarkable.

**Verdict**: DO NOT RECOMMEND

--------------------

#### High Flour - High Sugar - [recipe](/recipes/sugar-cookies?Composure="High"&Sweetness="High")

As far as the high flour content cookies go, this one is the best, but I would still put it in the bottom half of the pack on the whole. If the form is all that matters I recommend this cookie, since it held its shape better than the lower flour content cookies and didn't taste _horrible_. On successive taste tests, the overall experience improved. In most respects, I would suggest making one of the other cookies over this one unless the shape holding is very important.

**Verdict**: Only recommended **if form is the most important thing** for the bake you are making.

--------------------

### Sugar Cookie Post-Mortem

In the end, we tested out 9 types of sugar cookie. Some were good, others inedible. Moreso than the actual knowledge of how to make a sugar cookie, this bake was instructive in that we learned that taking on too many variables can lead to a stressful baking process. We learned that we should gather the recipes, normalize the ingredients, and plan out the experiments _before_ the day on which we intend to bake.

## Chocolate Chip Cookies

Many of the lessons learned from the sugar cookies were partially learned while making the chocolate chip cookies since we did both at the same time. The chocolate chip cookie planning followed essentially the same pattern as the planning we did for the sugar cookies. First we searched for around ~10 chocolate chip cookie recipes. Along the way, however, we found a really interesting [video](https://youtu.be/oCt3xhKCX1k) about ways that you could improve on the ancient standard version of the chocolate chip cookie. In particular, that video points out that modifying the ratio of egg yolk to egg white can have a massive affect on the resulting cookie texture.

Having just discovered that we were tracking far too many variables in the sugar cookie experiment, we decided to limit our test this time to specifically the egg yolk-to-white ratio. We also attempted to discover the perfect bake time since there seemed to be a large amount of disagreement about that between the recipes. Finally, for this bake we closely followed the [Allrecipes Chocolate Chip Cookie Recipe](https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/) with the only deviation being with the eggs.

We made a dough with a regular whole egg, one with just the egg yolk, and one with a ratio of 2:1 yolk to whites.We converted each of our recipes into percentages and created a recipe with a yield of 9 cookies per dough. Each dough was then tested by baking them for 12, 15, and 18 minutes. On the whole, there seemed to be a fair amount of variance in the level of "doneness" of the cookies with our main takeaway being that the oven temperature wasn't very reliable. The first batch we made by baking at 190°C for 10 minutes came out essentially raw. We ultimately put that one back in for another few minutes and shifted up our bake times for the rest of the tests.

### Egg Ratio Discoveries

From our bakes, we discovered that the amount of egg white in the dough dramatically affects the resulting cookie's texture (essentially confirming the discussion we saw in the video). The dough using whole eggs was much crispier than the other doughs, but also more brittle. The dough using only egg yolks came out more like a brownie than a cookie. The dough using 2:1 ratio bake was somewhere in the middle.

We kept a test cookie from each batch and sampled them over the course of the following week. The cookies made with more yolk took longer to go stale (although all three types tasted fine a week later). I also inadvertantly discovered that the cookies behaved differently when exposed to the cold. On a frigid morning I attempted to taste test each cookie, only to discover that the all yolk cookie had become as hard as stone. The whole egg cookie seemed to manage the cold the best and was edible without heating it up.

### Bake Temperature Discoveries

As mentioned above, our baking time experiments didn't yield many useful results, but we did learn one thing I think is worth sharing. In general, I would suggest tuning your bake to your oven, aiming for about a 10 minute bake time if you can rely on your oven reaching [190°C|375°F](#units). If, however, you underbake the yolk only cookie, we found that the next day, the cookie had approximately the taste and texture of the cookie dough you might get in cookie dough ice cream. If you're tempted to make homemade cookie dough ice cream but are afraid of using uncooked cookie dough, then I would recommend the yolk only dough with a bake time of ~8 minutes. I am not a food safety expert, but e coli at least should be [long dead](https://www.scienceofcooking.com/important_cooking_temperatures.htm#:~:text=160%C2%B0F%2F70%C2%B0C%20%2D%2D%20Temperature%20needed%20to,coli%20and%20Salmonella.&text=While%20Salmonella%20is%20killed%20instantly,See%20the%20chart%20below.) if the cookie approaches an internal temperature even close to [100°C|200°F](#units).



## Final Thoughts

Working on this first blog post / bake was a ton of fun and I'm excited to do more bakes going forward! I lost my SD card before writing this post, so unfortunately there aren't many pictures to go along with this. Future posts will be supported by images I promise! I also feel that we have ironed out a lot of the kinks in the planning process. Future blogs may at least benefit from that lesson learned.

I also just want to quickly say thanks to Sara for letting me use her kitchen for these bakes! Check out the [About](/about) page for more information about who we are and what we're doing on this blog! If you have any suggestions for experiments you would like to see or recipes you'd like us to tackle, please shoot me a message!

## Further Reading

We built our recipes off of the works of several other recipe sites. If you're interested in other cookie recipes, please check out the links below!

**Sugar Cookies**:
- [Sallys Baking Addiction](https://sallysbakingaddiction.com/best-sugar-cookies/)

- [Allrecipes](https://www.allrecipes.com/recipe/9870/easy-sugar-cookies/)

- [Food Network](https://www.foodnetwork.com/recipes/alton-brown/sugar-cookies-recipe-1914697)

- [Life, Love, and Sugar](https://www.lifeloveandsugar.com/best-soft-and-chewy-sugar-cookies/)

- [The New York Times](https://cooking.nytimes.com/recipes/1020651-basic-sugar-cookies)

- [Betty Crocker](https://www.bettycrocker.com/recipes/classic-sugar-cookies/90993177-b5fe-4cc7-a6b6-8f58913d36e8)

- [Hanielas](https://www.hanielas.com/sugar-cookie-recipe-for-cut-out-cookies/)

- [Joy of Baking](https://www.joyofbaking.com/SugarCookies.html)

**Chocolate Chip Cookies**:
- [Basics with Babish](https://basicswithbabish.co/basicsepisodes/2017/10/23/baressentials-7xwwz)

- [Allrecipes](https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/)

- [Joy, Food, Sunshine](https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/)

- [Sallys Baking Addiction](https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/)

- [Betty Crocker](https://www.bettycrocker.com/recipes/ultimate-chocolate-chip-cookies/77c14e03-d8b0-4844-846d-f19304f61c57)

- [Tasty](https://tasty.co/recipe/the-best-chewy-chocolate-chip-cookies)

- [Nestle](https://www.verybestbaking.com/toll-house/recipes/original-nestle-toll-house-chocolate-chip-cookies/)

- [Joy of Baking](https://www.joyofbaking.com/ChocolateChipCookies.html)

- [tomiz](https://tomiz.com/recipe/pro/detail/20200114020756)
`;

export default {
  [Units.Metric]: blog,
  [Units.Imperial]: blog,
};
