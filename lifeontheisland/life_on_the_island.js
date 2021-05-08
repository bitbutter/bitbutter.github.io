var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"theme: light"},{"->":"start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"start":["^A long, long time ago there was a family who were swept up in a hurricane. They landed on a wild island.","\n","^They were William and Kimberly Taylor, their eldest child Lucas, his younger sister Olivia and the baby Charlotte. Their two female cats were with them too; Oscar a tortoiseshell, and the white-haired Tigger who had one green eye, the other blue.","\n",{"->":"mountains"},{"#f":1}],"mountains":[[["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^The family landed on a small patch of grass. Immediately to the West was an imposing range of mountains. To the East a forest. The ocean extended beyond a cliff edge to the North. To the south were grasslands. The island terrain rose toward a volcano in the center.",{"->":".^.^.17"},null],"s1":["pop","<>","^ After another long treck the Taylors arrived back in the foothills of the mountians.",{"->":".^.^.17"},null],"#f":5}],"\n",["ev",{"^->":"mountains.0.top"},"/ev","thread",{"->":"examine_map"},"ev","str",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^They explored the mountain range.",{"->":".^.^.17"},null],"s1":["pop","^They climbed higher into the mountains.",{"->":".^.^.17"},null],"#f":5}],"/str",{"^->":"mountain_squirrels"},{"f()":"came_from"},"!","/ev",{"*":".^.c-0","flg":5},"ev","str","^They went East to the forest.","/str","/ev",{"*":".^.c-1","flg":4},["ev",{"^->":"mountains.0.top.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^They headed South towards the grasslands.",{"->":"$r","var":true},null]}],{"c-0":["\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^They set off into the mountains. ","<>",{"->":".^.^.17"},null],"s1":["pop","^Feeling weary they began the climb into the mountains once more. ","<>",{"->":".^.^.17"},null],"#f":5}],"\n",{"->":"mountain_squirrels"},{"#f":5}],"c-1":["^ The Taylors headed East. Gradually the hills receded. They reached a boundary of trees and continued inside.","\n",{"->":"forest"},{"#f":5}],"c-2":["ev",{"^->":"mountains.0.top.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],"\n",{"->":"grasslands"},"done",{"#f":5}],"#f":7,"#n":"top"}],null],{"#f":1}],"mountain_squirrels":[["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^For a day and a half the Taylor family travelled into steeper and steeper terrain. Baby Charlotte felt very heavy in the sling. Kimberly and William took it in turns to carry her. The cats, though nimble on their feet, found it hard to climb. The kids were so exhausted they felt like they couldn't continue.",{"->":".^.^.17"},null],"s1":["pop",{"->":".^.^.17"},null],"#f":5}],"\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Just as dusk was falling they reached a plateau high in the mountains. They heard an odd chattering noise. Olivia pointed and they all saw five or six small shapes jumping around among some trees. Lucas shouted \"They're Squirrels!\" Surprisingly they didn't run off.",{"->":".^.^.17"},null],"s1":["pop","^Later in the day they reached the same plateau as before. The Squirrels emerged again chattering happily as if to greet them.",{"->":".^.^.17"},null],"#f":5}],"\n","ev",{"VAR?":"can_understand_animals"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",1,"/ev",{"VAR=":"remove_monkey_mission","re":true},{"#":"IMAGE: squirrel.png"},"^The lead squirrel approached them and said \"Welcome travellers! Perhaps we can help each other. If you remove the Monkeys from the trees in the forest, we will gladly help you build a home.\"","\n",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^The furry animals came closer. One of them squeaked urgently and waved his paws. \"If only we could understand him\" said Olivia.",{"->":".^.^.17"},null],"s1":["pop","^Lucas grumbled \"We still don't know what the Squirrel's are trying to tell us. Maybe we should investigate the forest more.\"",{"->":".^.^.17"},null],"#f":5}],"\n",{"->":".^.^.^.9"},null]}],"nop","\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^The exhausted family huddled together and slept among the Squirrels for the night. They set off again early the next day.",{"->":".^.^.17"},null],"s1":["pop","<>","^ Once again the Taylors camped here for the night, setting off early the next morning.",{"->":".^.^.17"},null],"#f":5}],"\n",{"->":"mountains"},{"#f":3}],"grasslands":[[["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^An immense sea of grass rolled gently in the wind. Here and there were tall trees.",{"->":".^.^.17"},null],"s1":["pop",{"->":".^.^.17"},null],"#f":5}],"\n","ev",{"VAR?":"can_find_tree"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",1,"/ev",{"VAR=":"have_key","re":true},"^Olivia looked up from the map. \"Over there!\" She pointed to a tree in the distance. They all ran over. They looked up at its branches. \"I see a key up there\" said Lucas. \"Hmm there are no branches to climb up on\" said William.","\n",{"#":"IMAGE: key.png"},"^Charlotte who was now old enough to speak looked thoughtfully at the trunk \"The tree is a bit rotten here\" she observed. William and Kimberly exchanged a glance and both heaved against the trunk. With a soggy tearing sound the tree broke at the base and toppled over. Lucas grabbed the key and put it in his pocket.","\n","^A moment later the two cats reappeared (no one noticed they'd been gone) and two Jackdaws were accompanying them in the air. \"It's dangerous in the dark part of the North-Eastern forest\" said the larger of the two birds \"There are spiders, traps, and wolves that can get you killed\". His companion added \"This key that you found opens a secret passage under the lava river leading to the cave of bats. The tunnel entrance is marked by a large mound of moss.\"","\n","^The Talyors all gave thanks at once. \"No problem, we were glad to help!\" the larger bird said, and the two of them flew West until they couldn't be seen.","\n",{"->":".^.^.^.6"},null]}],"nop","\n",["ev",{"^->":"grasslands.0.top"},"/ev","thread",{"->":"examine_map"},["ev",{"^->":"grasslands.0.top.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^The Taylors headed toward the mountains to the North",{"->":"$r","var":true},null]}],["ev",{"^->":"grasslands.0.top.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^They went to the beach at the Southern tip of the island",{"->":"$r","var":true},null]}],["ev",{"^->":"grasslands.0.top.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^The family went East into the desert",{"->":"$r","var":true},null]}],"ev","str","^The family travelled to the forest","/str",{"VAR?":"have_key"},"/ev",{"*":".^.c-3","flg":5},{"c-0":["ev",{"^->":"grasslands.0.top.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"mountains"},{"#f":5}],"c-1":["ev",{"^->":"grasslands.0.top.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"beach"},{"#f":5}],"c-2":["ev",{"^->":"grasslands.0.top.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"desert"},{"#f":5}],"c-3":["^ The Taylors left the grasslands, travelled through the desert and entered the forest.","\n",{"->":"forest"},{"#f":5}],"#f":7,"#n":"top"}],null],{"#f":1}],"forest":[["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^The forest was full of life. All kinds of exotic noises echoed around them. They caught glimpses of monkeys, foxes, turtles, and many other kinds.",{"->":".^.^.17"},null],"s1":["pop",{"->":".^.^.17"},null],"#f":5}],"\n","ev",{"VAR?":"can_understand_animals"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","<>","^ ",["ev","visit",2,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Animal sounds blasted from the trees.",{"->":".^.^.17"},null],"s1":["pop","^The forest was filled with the din of animal sounds",{"->":".^.^.17"},null],"#f":5}],"\n",{"->":"forest.8"},null]}],"nop","\n","ev",{"VAR?":"squirrel_friends"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",["ev","visit",3,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^A group of monkeys on a nearby branch eyed the group.",{"->":".^.^.23"},null],"s1":["pop","^The monkeys they saw earlier were pacing around in the bushes.",{"->":".^.^.23"},null],"s2":["pop","^A nearby monkey skrieked at Oliva who jumped back in fright",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":"forest.16"},null]}],"nop","\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^To the East the canopy became denser, allowing only tiny slivers of sunlight through. To the South patches of sand started to appear between the trees.",{"->":".^.^.17"},null],"s1":["pop",{"->":".^.^.17"},null],"#f":5}],"\n",{"->":".^.options"},{"options":[[["ev",{"^->":"forest.options.0.top"},"/ev","thread",{"->":"examine_map"},["ev",{"^->":"forest.options.0.top.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"remove_monkey_mission"},1,"==","/ev",{"*":".^.^.c-0","flg":19},{"s":["^They all threw pine cones at the Monkeys in the trees.",{"->":"$r","var":true},null]}],["ev",{"^->":"forest.options.0.top.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^They decided to stay here and study the animals",{"->":"$r","var":true},null]}],["ev",{"^->":"forest.options.0.top.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^They travelled East, deeper into the forest.","/str","/ev",{"*":".^.^.c-2","flg":6},{"s":["^  ",{"->":"$r","var":true},null]}],["ev",{"^->":"forest.options.0.top.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^  They headed South towards the desert.",{"->":"$r","var":true},null]}],["ev",{"^->":"forest.options.0.top.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^  The Taylors went west, towards the mountains.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"forest.options.0.top.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","<>","^ The monkeys swung away shrieking.","\n","^The next morning the squirrel leader was standing before them. \"Thank you! This will be our new home. Now we will help you create your own home. Come with us!\" The family followed the squirrel gang to the South, into a wide expanse of sand.","\n","ev",1,"/ev",{"VAR=":"squirrel_friends","re":true},{"->":"desert"},{"#f":5}],"c-1":["ev",{"^->":"forest.options.0.top.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"VAR=":"can_understand_animals","re":true},"<>","^. After three months of investigation, the Taylor family were able to understand most of the animal noises and communicate with the animals themselves. They all felt hopeful that this new ability would help them escape the island.","\n",{"->":".^.^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"forest.options.0.top.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"^ ",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^They",{"->":".^.^.17"},null],"s1":["pop","^Once more they",{"->":".^.^.17"},null],"#f":5}],"^ travelled East, deeper into the forest.","\n",{"->":"deeper_forest"},{"#f":5}],"c-3":["ev",{"^->":"forest.options.0.top.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"desert"},{"#f":5}],"c-4":["ev",{"^->":"forest.options.0.top.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":"mountains"},{"#f":5}],"#f":7,"#n":"top"}],null],{"#f":1}],"#f":1}],"deeper_forest":[[["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","<>","^ Here it was difficult to tell if it was night or day. There were no large animal paths the Taylors could follow and progress was slow. Wolves howled in the distance.",{"->":".^.^.17"},null],"s1":["pop","<>","^ Again the Taylors struggled through the dark forest",{"->":".^.^.17"},null],"#f":5}],"\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Finally their path was blocked by a wide flow of lava. \"I don't think we can go any further\" said Kimberly. William nodded reluctantly.",{"->":".^.^.17"},null],"s1":["pop","<>","^ until they reached the lava flow.",{"->":".^.^.17"},null],"#f":5}],"\n",["ev","str","^","/str","/ev",{"temp=":"explorer"},["ev","visit",2,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","\n","ev","str","^Lucas","/str","/ev",{"temp=":"explorer","re":true},{"->":".^.^.17"},null],"s1":["pop","\n","ev","str","^Olivia","/str","/ev",{"temp=":"explorer","re":true},{"->":".^.^.17"},null],"#f":5}],"\n","ev",{"CNT?":"found_hidden_door"},"/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"hidden_door"},{"->":".^.^.^.12"},null]}],"nop","\n","ev",{"^->":"deeper_forest.0.top"},"/ev","thread",{"->":"examine_map"},"thread",{"->":"deeper_forest_navigation"},"ev","str","ev",{"VAR?":"explorer"},"out","/ev","^ explored the area.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^\"Wait a minute\" said ","ev",{"VAR?":"explorer"},"out","/ev","^. \"Let me take a quick look around.\"","\n","ev",{"VAR?":"explorer"},"/ev",{"->":"found_hidden_door"},{"#f":5}],"#f":7,"#n":"top"}],null],{"#f":1}],"desert":["ev",{"VAR?":"home"},"/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"desert_home"},{"->":"desert.4"},null]}],"nop","\n","ev",{"VAR?":"squirrel_friends"},1,"==",{"VAR?":"home"},0,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"squirrels_build_a_home"},{"->":"desert.16"},null]}],"nop","\n",{"->":"barren_desert"},{"#f":1}],"found_hidden_door":[{"temp=":"explorer"},"ev","str","^","/str","/ev",{"temp=":"pronoun"},"ev",{"VAR?":"explorer"},"str","^Lucas","/str","==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^he","/str","/ev",{"temp=":"pronoun","re":true},{"->":".^.^.^.16"},null]}],[{"->":".^.b"},{"b":["\n","ev","str","^she","/str","/ev",{"temp=":"pronoun","re":true},{"->":".^.^.^.16"},null]}],"nop","\n","ev",{"VAR?":"explorer"},"out","/ev","^ soon found a tund of moss a few meters from the lava flow. The moss was loose and seemed to be covering a ditch. The heat was intense but ","ev",{"VAR?":"pronoun"},"out","/ev","^ clambered down, pushing back vines and bushes. A few seconds later ","ev",{"VAR?":"pronoun"},"out","/ev","^ yelled out \"Come and look at this!\".","\n",{"->":"hidden_door"},"done",{"#f":1}],"hidden_door":[["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^In the side of the ditch closest to the lava flow there was a black door.",{"->":".^.^.17"},null],"s1":["pop","<>","^ The secret door was still uncovered in the ditch.",{"->":".^.^.17"},null],"#f":5}],"\n","ev",{"VAR?":"have_key"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^William stepped forward and put the key in the lock. It turned easily. He pushed the door open, its hinges squeaking and cobwebs tearing. He glanced back at the others. Kimberly nodded, and cautiously the Taylors entered the gloom.","\n",{"->":"tunnel"},{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["\n",["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","<>","^ William tugged and pushed at the door but it seemed to be locked. The family exhanged glances but no one could suggest a way to get in.",{"->":".^.^.23"},null],"s1":["pop","^\"We need a key\" said William.",{"->":".^.^.23"},null],"s2":["pop","^\"Maybe the key is somewhere on the island\" said Olivia.",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":".^.^.^.7"},null]}],"nop","\n","thread",{"->":"deeper_forest_navigation"},{"#f":1}],"deeper_forest_navigation":[["ev","str","^They headed back to the brighter part of the forest.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^Relieved to be returning they",{"->":".^.^.23"},null],"s1":["pop","^Glad to escape the overwhelming noise of the insects here they",{"->":".^.^.23"},null],"s2":["pop","^They",{"->":".^.^.23"},null],"#f":5}],"^ headed back to the brighter part of the forest.","\n","<>","^ ",["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^\"I'm glad to see some sunlight again\" said Kimberly.",{"->":".^.^.23"},null],"s1":["pop","^Here it felt safer.",{"->":".^.^.23"},null],"s2":["pop",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":"forest"},{"#f":5}]}],{"#f":1}],"barren_desert":[["^The desert was a punishing place to be. There were no landmarks to navigate by.","\n",["ev",{"^->":"barren_desert.0.top"},"/ev",{"->":"desert_navigation"},{"#f":7,"#n":"top"}],null],{"#f":1}],"squirrels_build_a_home":["ev",1,"/ev",{"VAR=":"map","re":true},"^Even through the featureless desert, the squirrels seemed to know exactly where they were going. They came to a smashed aeroplane partially buried under the sand. The squirrels jumped on it and using their claws and teeth slowly formed the wreck into what looked like a simple house with a small shed attached to it. \"There you are!\" said the lead squirrel when they were done. \"Enjoy your new home! Oh and you might find this useful.\" He handed William a rolled-up map. \"Thank you!\" the happy family called out as the squirrels disappeared again into the desert.","\n",{"#":"IMAGE: house.png"},"^The Taylor family clambered inside their new home, found their beds, and quickly fell asleep.","\n","^They next day Olivia and Lucas left the house while the others were sleeping. They went to look for desert animals. After some time they found a snake with two small horns above its eyes.","\n",[["ev",{"^->":"squirrels_build_a_home.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^They left the snake alone",{"->":"$r","var":true},null]}],["ev",{"^->":"squirrels_build_a_home.11.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^They brought the snake home",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"squirrels_build_a_home.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","<>","^ and returned home to tell the others about it.","\n",{"->":"desert_home"},{"#f":5}],"c-1":["ev",{"^->":"squirrels_build_a_home.11.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^They walked home, Lucas carefully carrying the snake. As he laid it on the ground inside the front door it lunged at him. Lucas ducked back just in time to avoid its bite.","\n",["ev","str","^Lucas puts the snake in a cage.","/str","/ev",{"*":".^.c-0","flg":20},["ev",{"^->":"squirrels_build_a_home.11.c-1.9.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Lucas released the snake again.",{"->":"$r","var":true},null]}],{"c-0":["\n","ev",1,"/ev",{"VAR=":"has_snake","re":true},"^Grabbing the snake just behind its head Lucas thrust it into the cage and quickly closed the door. ",{"->":".^.^.^.^.^.again"},"\n",{"#f":5}],"c-1":["ev",{"^->":"squirrels_build_a_home.11.c-1.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","<>","^ It quickly slithered off to find shelter. ",{"->":".^.^.^.^.^.again"},"\n","done",{"#f":5}]}],{"#f":5}]}],{"again":["ev",{"^->":"squirrels_build_a_home.again"},"/ev","thread",{"->":"desert_navigation"},[["ev",{"^->":"squirrels_build_a_home.again.5.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^They siblings went out again looking for wildlife",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"squirrels_build_a_home.again.5.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","<>","^. They looked for three hours but didn't find anything.","\n",[["ev",{"^->":"squirrels_build_a_home.again.5.c-0.10.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^They went back home",{"->":"$r","var":true},null]}],["ev",{"^->":"squirrels_build_a_home.again.5.c-0.10.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^They ventured further in to the desert",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"squirrels_build_a_home.again.5.c-0.10.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"squirrels_build_a_home.again.5.c-0.10.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"VAR=":"has_lizard","re":true},"<>","^. Olivia spotted a sunbathing lizard, unusually large and bright red. Lucas snuck up and grabbed it pushing into a bag in one swift movement. The pair walked back home.","\n","^Olivia fetched a glass case. Lucas placed the lizard inside it.","\n",{"->":".^.^.^.^.^"},"done",{"#f":5}]}],{"#f":5}]}],{"#f":3}],"#f":1}],"desert_home":[["^The Taylor family spent the rest of the day at their home in the desert. The next day dawned.","\n",["ev",{"^->":"desert_home.0.top"},"/ev","thread",{"->":"desert_navigation"},"done",{"#f":7,"#n":"top"}],null],{"#f":1}],"desert_navigation":[{"temp=":"go_back_to"},["ev",{"^->":"desert_navigation.1.top_desertnav"},"/ev","thread",{"->":"examine_map"},[["ev",{"^->":"desert_navigation.1.top_desertnav.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^They family headed North to the forest.",{"->":"$r","var":true},null]}],["ev",{"^->":"desert_navigation.1.top_desertnav.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^The Taylors went South to the island's only beach.",{"->":"$r","var":true},null]}],["ev",{"^->":"desert_navigation.1.top_desertnav.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^They all travelled West to the grasslands.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"desert_navigation.1.top_desertnav.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"forest"},{"->":".^.^.^.done"},{"#f":5}],"c-1":["ev",{"^->":"desert_navigation.1.top_desertnav.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"beach"},{"->":".^.^.^.done"},{"#f":5}],"c-2":["ev",{"^->":"desert_navigation.1.top_desertnav.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"grasslands"},{"->":".^.^.^.done"},{"#f":5}],"#f":7,"#n":"top_desertnav"}],{"done":[{"->":"go_back_to","var":true},{"#f":5}]}],{"#f":1}],"beach":[["ev",1,"/ev",{"VAR=":"has_torch","re":true},["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^They arrived at the beach and walked along the shore. Among a pile of seaweed and shells Kimberly spotted a dark oblong. It was a mechanically powered flashlight with a trigger you could squeeze in your hand. \"This will be helpful\" she said, putting it in her backpack.",{"->":".^.^.17"},null],"s1":["pop","^Again the Taylors looked out at the unending sea. Lucas wondered if they'd ever get off this island.",{"->":".^.^.17"},null],"#f":5}],"\n",["ev",{"^->":"beach.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^They went North-East, to the desert",{"->":"$r","var":true},null]}],["ev",{"^->":"beach.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^They went North-West, to the grasslands",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"beach.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"desert"},{"->":".^.^.top"},{"#f":5}],"c-1":["ev",{"^->":"beach.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"grasslands"},{"->":".^.^.top"},{"#f":5}],"top":["ev",{"^->":"beach.0.top"},"/ev","thread",{"->":"examine_map"},"done",{"#f":7}]}],{"#f":1}],"tunnel":["ev",{"VAR?":"has_torch"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n","^It was pitch black. \"I can't see my hand in front of my face\" said Kimberly. The ground was uneven and the family made very slow progress. After about an hour they were relieved to see a faint glow of daylight up ahead. ",{"->":"bats"},"\n",{"->":"tunnel.6"},null]}],[{"->":".^.b"},{"b":["\n","^William turned on the torch and shone it around. The walls of the tunnel were soil and rock. The light helped the Taylors step over the uneven floor. After ten minutes of walking Lucas noticed an alchove set into the wall. \"Hey, look at this!\" A small chest rested on the ledge.","\n",["ev",{"^->":"tunnel.5.b.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Olivia opened the chest.",{"->":"$r","var":true},null]}],["ev",{"^->":"tunnel.5.b.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^They kept moving",{"->":"$r","var":true},null]}],{"->":"tunnel.6"},{"c-0":["ev",{"^->":"tunnel.5.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"VAR=":"has_necklace","re":true},"<>","^ Inside was a necklace. It had a glass pendant inside which a four-leaf clover was encased. \"This will be useful\" said Olivia, putting on the necklace.","\n",{"->":"bats"},{"#f":5}],"c-1":["ev",{"^->":"tunnel.5.b.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"bats"},{"#f":5}]}]}],"nop","\n",{"#f":1}],"bats":[[{"#":"IMAGE: bat.png"},"ev",{"VAR?":"has_necklace"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^Further on the","\n",{"->":"bats.0.6"},null]}],[{"->":".^.b"},{"b":["\n","^The","\n",{"->":"bats.0.6"},null]}],"nop","\n","<>","^ tunnel opened up into a cave with a small crack in the roof. Twenty or so blood-sucking bats were hanging motionlessly. Beneath them a gleaming engine rested on the cave floor. It was the engine of the aeroplane in the desert! Perhaps if they could take the engine they could leave the island. But the bats weren't going to make it easy.","\n",["ev","str","^The cats fought the bats","/str","/ev",{"*":".^.c-0","flg":20},["ev",{"^->":"bats.0.opts.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Lucas tried to sneak past the bats.",{"->":"$r","var":true},null]}],["ev",{"^->":"bats.0.opts.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"has_torch"},"/ev",{"*":".^.^.c-2","flg":19},{"s":["^\"I have an idea\" said Charlotte.",{"->":"$r","var":true},null]}],{"c-0":["^ Oscar and Tigger approached the bats.","\n","ev",-1,"/ev",{"temp=":"failed_cat_fights"},[["ev",{"VAR?":"failed_cat_fights"},1,"+",{"temp=":"failed_cat_fights","re":true},"/ev",["ev",{"^->":"bats.0.opts.c-0.6.cat_fight_opts.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.","/str","/ev",{"*":".^.^.c-0","flg":22},{"s":["^Both cats attacked the bats together",{"->":"$r","var":true},null]}],["ev",{"^->":"bats.0.opts.c-0.6.cat_fight_opts.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"failed_cat_fights"},0,"==","/ev",{"*":".^.^.c-1","flg":3},{"s":["^Tigger fought the bats while Oscar tried to grab the motor.",{"->":"$r","var":true},null]}],["ev",{"^->":"bats.0.opts.c-0.6.cat_fight_opts.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"failed_cat_fights"},1,"==","/ev",{"*":".^.^.c-2","flg":3},{"s":["^Oscar made another rush for the engine while Tigger slashed at the bats.",{"->":"$r","var":true},null]}],["ev",{"^->":"bats.0.opts.c-0.6.cat_fight_opts.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"failed_cat_fights"},2,"==","/ev",{"*":".^.^.c-3","flg":3},{"s":["^Both cats tried to grab the engine together.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bats.0.opts.c-0.6.cat_fight_opts.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","<>","^ while the Talyors crept over to the engine and lifted it between them. As quickly as they could they made their way back through the tunnel. The cats came running out after them. \"Phew! that was hard\" said Oscar. Tigger had a big scratch across her nose, \"You're totally right\" she agreed.","\n","^They headed towards their desert home lugging the heavy engine.","\n",{"->":"desert_plane"},{"#f":5}],"c-1":["ev",{"^->":"bats.0.opts.c-0.6.cat_fight_opts.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","<>","^ But there were too many of them. Enough to fight off Tiger while protecting the engine from Oscar. ",{"->":".^.^"},"\n",{"#f":5}],"c-2":["ev",{"^->":"bats.0.opts.c-0.6.cat_fight_opts.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","<>","^ The bats evaded Tigger and pushed Oscar back, scratching at his nose. ",{"->":".^.^"},"\n",{"#f":5}],"c-3":["ev",{"^->":"bats.0.opts.c-0.6.cat_fight_opts.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n","<>","^ But at the last moment the bats flocked together and lifted the engine out of reach of the cats' paws. ",{"->":".^.^"},"\n",{"#f":5}],"#f":5,"#n":"cat_fight_opts"}],null],{"#f":5}],"c-1":["ev",{"^->":"bats.0.opts.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","<>","^ But they swarmed around him. He couldn't get to the engine so he ran back to the others.","\n",{"->":".^.^"},{"#f":5}],"c-2":["ev",{"^->":"bats.0.opts.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","<>","^ \"Those bats, we can dazzle them\" She grabbed for the torth in Kimberly's backpack and shone it right at the bats. The other ran over to the engine, hoisted it up, and the whole family ran back down the tunnel. They headed towards their desert home lugging the heavy engine.","\n",{"->":"desert_plane"},{"->":".^.^"},{"#f":5}],"#f":5,"#n":"opts"}],null],{"#f":1}],"desert_plane":["^Back at home Charlotte let out a strange piercing yell. As the rest of the family watched a dust cloud approached from the North. \"It's the Squirrels!\" shouted Lucas. Charlotte addressed the lead Squirrel, pointing to the salvaged engine. \"Would you please turn our home back into a working aeroplane?\"","\n","^Again the Squirrels gnawed and chewed, pushed and pulled until it looked like a brand-new aeroplane.","\n","^The Taylor's climbed in. Oscar took the pilot seat. \"I didn't know you could fly\" said Tigger with surprise.","\n","^The engines fired up and the plance blasted off into the clouds. They lived joyfully ever after.","\n","done","end",{"#f":1}],"examine_map":[{"temp=":"go_back_to"},[["ev",{"^->":"examine_map.1.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"map"},{"CNT?":".^.^.done"},"!","&&","/ev",{"*":".^.^.c-0","flg":3},{"s":["^Olivia examined the map they got from the Squirrels ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"examine_map.1.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"VAR=":"can_find_tree","re":true},{"#":"IMAGE: map.png"},"^The map depicted the island they were on. Olivia pointed to a cross mark in the South-Western grasslands \"This looks interesting\". \"Like a place we should visit\" replied Lucas.","\n",{"->":".^.^.done"},{"#f":5}],"done":[{"->":"go_back_to","var":true},"done",{"#f":5}]}],{"#f":1}],"came_from":[{"temp=":"x"},"ev",{"VAR?":"x"},"turns",0,"==","/ev","~ret","\n",{"#f":1}],"clicked_from":[{"temp=":"x"},"ev",{"VAR?":"x"},"turns",1,"==","/ev","~ret","\n",{"#f":1}],"global decl":["ev",0,{"VAR=":"can_understand_animals"},0,{"VAR=":"remove_monkey_mission"},0,{"VAR=":"map"},0,{"VAR=":"squirrel_friends"},0,{"VAR=":"home"},0,{"VAR=":"has_lizard"},0,{"VAR=":"has_snake"},0,{"VAR=":"have_key"},0,{"VAR=":"can_find_tree"},0,{"VAR=":"has_torch"},0,{"VAR=":"has_necklace"},"/ev","end",null],"#f":1}],"listDefs":{}};