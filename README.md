# NailedIT-Study
First let's analyze the information, Jim wants to see about the customers:

1.) All the customers (all information)
2.) Customers who has negative balance – so he can quickly call and ask them for the money
3.) Total balance (sum of all balance fields for all customers)
4.) All inactive users - so he can quickly call them and make them special discounted offer

We can already tell, that 3 out of 4 requirements represent different views of the same set of data - customers. Proposition is to add easily accessible buttons to switch between those views. 4th requirement is a calculated summary, which can be fit nicely in the status bar.

Because Jim works with a lot of customers daily, he needs basic contact information very closely at hand. Chances are he a diligent worker and he remembers most important details about his clients but it's almost impossible to remember all the emails and phone numbers.

When planning and preparing client calls, Jim may need some additional information, however. It would be good to have a brief history of previous orders from the client, as well as some automatic analytics (marketing category/affinity is taken from Google Analytics as an example, I assume Watson Personality Insight do the same thing) based on sales data.

After this brief analysis, a basic draft is made (main draft v1) for a simple and fast app, that gives Jim a list of client cards, containing most of the information he needs. With a click he can expand the card and get comprehensive customer profile with available data (being a client manager, Jim probably need most of it except purely technical things like guid) as well as some predictions based on it (predicted interesting items, supplementary goods for already purchased devices, consumables etc.).

***

A couple of changes were made during the development, in particular the position of "balance bar" was changed. When the whole screen was filled with cards, different colors created a bit of a visual noise and it became hard to separate one card from another, so I moved it on top to create a visual color pair. As an added benefit, this color pair clearly tells Jim the current situation on every particular client before he even notices the numbers.

Regarding his request to pre-calculate discount he can offer, I added this extra bit on the balance bar. It's not ideal, but adheres to the principle that required information has to be accessible with minimal amount of clicks. Jim will probably appreciate the simplicity :)

***

As an additional functionality, I would propose more filters to sort the cards even further. Having 4 main colors to indicate client statuses, I would turn buttons into checkboxes-lamps, white one being a "clear-filter" button. Slightly under the status lamps, I would put a sliding tray with more traditional filter fields (country, gender, age ranges, interests etc). So they are not in the way, but close by when needed.

To facilitate the speed with which the Jim cas go through cards, I would also add an override for right mouse button click so that  it acts as a "go back".  Option to write an e-mail / make a call to a client with one click from the app would also be useful.

For reporting purposes Jim would probably need a bunch of charts indicating overall balance changes, the amount of clients who previously were inactive but started to do purchases again and other performance KPIs. He may also like to have the data on most/least engaged affinity groups / categories to prioritise.

