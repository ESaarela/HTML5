<!doctype.html>
<!--kaksoisnapsauta tekstiä, kun testaat. fonttikoon pitöisi kasvaa ja tekstin varjostuksen tulla liukuvasti esiin 10:sekunnissa-->
<link rel="stylesheet href=kasvu.css>
<p>class=kasvu ondbclick="this.style.textShadow = '0.1em 0.1em 0.05em #9f9'; this.style.fontsize = '64pt' ">Tarvitsemme kasvua!</p>
p.kasvu{
transition-property: font-size, text-shadow;
Transition-duration:10s;
}