https://ruby-china.org/topics/29352?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io

http://www.tuicool.com/articles/BrAVv2y


css的模块化方案:
1.使用json的方式来写样式。具体可采用的解决方案有react-style、jsxstyle、radium。
  缺点：
  (1)不能利用成熟的CSS预处理器；
  (2):hover、:active等伪类处理起来比较复杂。
2.依旧使用CSS,但使用JS来管理样式依赖。具体可采用的解决方案为CSS Modules。
  优点:
  (1)能最大化地利用现有CSS生态和JS 模块化能力。
  (2)简单易用，没有引入任何复杂性。
  (3)不依赖任何现有的Js框架。