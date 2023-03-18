# **NiteLife**
This repo will be for the development of a bar app. There are infinite directions that this could go but to start off here are some base hopes/ideas for base functionality

![NiteLife Logo](data:image/png;base64,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TQwODqa+vr6J7fXr11fbk42NjaV58+aVVftZvXp1mjNnTrV94sSJ9Ouvv1bbU3HzzTenO++8s9q+cOFCOnr0aLXdzF133ZVuuummavvHH39Mp0+frrbr6e7uTj09PWU1M3744Yc0MjJSVv90++23p2XLlpXV1H333Xfp+++/L6v2sXbt2jQ8PFxWs9uxY8fSzz//XFaXmz9/fnrggQfKamqmc7+NbtOqJUuWpBUrVpRVSr/88kv65ptvymr6Fi5cmO67776yml3yY2x+fM3yv9eZfhwILQed1rz//vv5Pz/VjP/Ala9ebjxwE/u044yOjpbvtFYbGBiou0+zeeKJJ8o91Gpnzpypu0+9mfx3duDAgbr7XJqdO3eWPWfOnj176v5el6a/v7/sOT35e653v9d6xoNevsPZ79FHH637Z8xz7733lr2mbjr32+g2rc7WrVvLvf1taGio7n5TnUceeaTc4+zT29s78ecYD3r5Kq3wknsHe/LJJ9MzzzxTVgDMZoLe4fbv3z/x8nk7+eOPP9L58+cbzp9//ln2/vul/3r7TJ7ff/+97N1cvr+TJ09OaUZHR8utAa4+Qe9wN954Yzp06NDE++rt4tVXX63eq28077zzTtk7pQ8//LDuPpPn5ZdfLns3l9/fv+eee6Y0b7zxRrk1wNUn6FQHTe3cubOsAJiNBL2DnTt3rmyl9OKLL6YHH3ywrIB2dNttt6WlS5c2ncWLF5db0EkEvYPliJ89e7banjt3bjp8+HC64YYbqjUwfbfcckvasWNH01m3bl25RWvefffddObMmaYzMDBQbkEnEfQO9tNPP1VHudfKqQjy58Rfe+21ahuYvnxOgz179jSdxx9/vNwC/jtB73Aff/xx2rt3b1ml9Oyzz06cPAeA2UPQqQ6I+/LLL8sqpTfffNPZmaANffrpp9UnOhrNZ599Vvam0wg61ee5N2zYMPE57VtvvTW9/fbbqaurq1oD7WHXrl3pscceazh5HzqToFPJ549+/vnnyypVB+v09/eXVee544470rffftvy5AOc4JJ8jvf33nuv4XzxxRdlb5gZgs6E119/PX300UdlldIrr7ySVq1aVVadJV9g5+6772558qsacEm+UM9TTz3VcN56662yN8wMQWdCPtp906ZN1ZXQsuuuu676KFv+FYD2JuhcJl9idPPmzWWVqmfo+Zl6p8mf5b3//vtbnsmfFAC4FgSdf/jggw/SgQMHyipV76VP9QQYs12+OMzXX3/d8uT/CMGVlq9x/tBDDzWc2XoddP47Qaeubdu2VQd7Zflo94MHD3qfGK6xfHXETz75pOHs27ev7E2nEXTq+u2336qPso2NjVXr7u7uy561A9BeBJ1/9fnnn6eXXnqprFLq7e1Nzz33XFkB/yZ/7DF/LK3RvPDCC2VvmBmCTkP5gLihoaGyStW53vO1v6HdHD9+vHp7qJXZvn17udWVsWDBgrRmzZqGs3z58rJ3606ePJm++uqrliYfB0JnEXQaunjxYnr66aerE2Vk119/fdq9e3e1DVxdW7ZsSatXr25pTp06VW5FpxB0msoPDFu3bi2rlObPn1+2AGgXgk5LDh061FHXWJ4zZ05atGjRlGbhwoXl1gBXn6DTsvxy39mzZ8sqtpUrV6bz589PafLn0QGuFUGnZaOjo2njxo3pr7/+Kl8BoF0IOlNy5MgRpzkFaENdtXxFDloyODiY+vr6JrbXr19fbU+WT8SSr9QF7WLt2rVpeHi4rKC95cfY/PiajYyMpJ6enmqb5jxDB4AABB0AAhB0AAhA0AEgAEEHgAAEHQACEHQACEDQASAAQQeAAAQdAAIQdAAIQNABIABBB4AABB0AAhB0AAhA0AEgAEEHgAAEHQACEHQACEDQASAAQQeAAAQdAAIQdAAIQNABIABBB4AABB0AAhD0GTZ37txUq9WMaZsZHh4uP51AZIIOAAEIOgAEIOgAEICgA0AAgg4AAXTV8mGwtGRwcDD19fWVFQBX0sjISOrp6SkrmvEMHQACEHQACMBL7gAQgGfoABCAoANAAIIOAAEIOgAEIOgAEICgA0AAgg4AAQg6AAQg6AAQgKADQACCDgABCDoABCDoABCAoANAAIIOAAEIOgAEIOgAEICgA0AAgg4AAQg6AAQg6AAQgKADQACCDgABCDoABCDoABCAoANAAIIOAAEIOgAEIOgAEICgA0AAgg4AAQg6AAQg6AAQgKADQACCDgABCDoABCDoABCAoANAAIIOAAEIOgAEIOgAEICgA0AAgg4AAQg6AAQg6AAQgKADQACCDgABCDoAzHop/R+BZYdiCGxyTgAAAABJRU5ErkJggg==)

## Base Ideas & Proposed Functionality

**NOTE:** All names/ideas here are completely arbitrary, they don't have to be named that and we don't have to implement them if we don't want to.

+ Login/Account services
    + Tiered accounts to generate revenue?
    + Types of Accounts: DJ/Band, Bartender/Owner, General Public
+ Interactive map (similar to snapchat, better than google maps or apple maps)
    + Ability to view venues/bars in your area and display certain stats as "*tags*" or *values*.
        + `sardine-scale`: Amount of current attendees/how packed is it.
        + `music`: **type of music playing** (*live band?, DJ, performer*), **what genre** (*hiphop, rap, edm, country, rock, etc*). 
        + `age-range`: avg age of people in attendance
        + `ragecage`: how intoxicated are people?
        + `publicRating` vs `NiteLifeRating`: overall rating system for each bar, possible app generated rating system that takes into account a person's personal likes (*what we think you may like*)
        + `drinkdeals`: section for promotions or drink deals ("*#lationight!, #bogoirishcarbombs!, etc*")
    + Each bar/venue will have a `promoter` or `performer` account linked to it for who is performing at that time.
        + they can have an individual rating system as well
    + possible pictures or review section where users can leave a review

## Proposed Support Technologies

+ **[ReactNative](https://reactnative.dev/docs/getting-started)**: The frontend, [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) based app building platform. 
+ **[GraphQL](https://graphql.org/code/#javascript)**: The API platform @bcain150 proposes we use. This is new and up-and-coming, a more simple way to handle making [API requests](https://learning.postman.com/docs/getting-started/sending-the-first-request/#api-requests-defined).
+ **TODO**: Backend?
+ **TODO**: Necessary Cloud Services?

## Development Process
+ Use VSCode to branch, make Pull Requests via GitHub repo.
+ **TODO**: *in the future add more here such as: dependencies, recommended vscode plugins, unit testing framework, CI/CD, etc?*
    

