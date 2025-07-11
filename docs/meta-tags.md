Copied from http://code.lancepollard.com/complete-list-of-html-meta-tags/

## Basic HTML Meta Tags

```html
<meta charset="UTF-8" />
<meta name="keywords" content="your, tags" />
<meta name="description" content="150 words" />
<meta name='subject' content='your website's subject'>
<meta name="copyright" content="company name" />
<meta name="language" content="ES" />
<meta name="robots" content="index,follow" />
<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />
<meta name="abstract" content="" />
<meta name="topic" content="" />
<meta name="summary" content="" />
<meta name="Classification" content="Business" />
<meta name="author" content="name, email@hotmail.com" />
<meta name="designer" content="" />
<meta name="reply-to" content="email@hotmail.com" />
<meta name="owner" content="" />
<meta name="url" content="http://www.websiteaddress.com" />
<meta name="identifier-URL" content="http://www.websiteaddress.com" />
<meta name="directory" content="submission" />
<meta name='pagename' content='jQuery Tools, Tutorials and Resources - O'Reilly Media'>
<meta name="category" content="" />
<meta name="coverage" content="Worldwide" />
<meta name="distribution" content="Global" />
<meta name="rating" content="General" />
<meta name="revisit-after" content="7 days" />
<meta name="subtitle" content="This is my subtitle" />
<meta name="target" content="all" />
<meta name="HandheldFriendly" content="True" />
<meta name="MobileOptimized" content="320" />
<meta name="date" content="Sep. 27, 2010" />
<meta name="search_date" content="2010-09-27" />
<meta name="DC.title" content="Unstoppable Robot Ninja" />
<meta name="ResourceLoaderDynamicStyles" content="" />
<meta name="medium" content="blog" />
<meta
    name="syndication-source"
    content="https://mashable.com/2008/12/24/free-brand-monitoring-tools/"
/>
<meta
    name="original-source"
    content="https://mashable.com/2008/12/24/free-brand-monitoring-tools/"
/>
<meta name="verify-v1" content="dV1r/ZJJdDEI++fKJ6iDEl6o+TMNtSu0kv18ONeqM0I=" />
<meta name="y_key" content="1e39c508e0d87750" />
<meta name="pageKey" content="guest-home" />
<meta itemprop="name" content="jQTouch" />
<meta http-equiv="Expires" content="0" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="imagetoolbar" content="no" />
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

## OpenGraph Meta Tags

```html
<meta name="og:title" content="The Rock" />
<meta name="og:type" content="movie" />
<meta name="og:url" content="http://www.imdb.com/title/tt0117500/" />
<meta name="og:image" content="http://ia.media-imdb.com/rock.jpg" />
<meta name="og:site_name" content="IMDb" />
<meta name="og:description" content="A group of U.S. Marines, under command of..." />

<meta name="fb:page_id" content="43929265776" />
<meta name="application-name" content="foursquare" />
<meta name="og:email" content="me@example.com" />
<meta name="og:phone_number" content="650-123-4567" />
<meta name="og:fax_number" content="+1-415-123-4567" />

<meta name="og:latitude" content="37.416343" />
<meta name="og:longitude" content="-122.153013" />
<meta name="og:street-address" content="1601 S California Ave" />
<meta name="og:locality" content="Palo Alto" />
<meta name="og:region" content="CA" />
<meta name="og:postal-code" content="94304" />
<meta name="og:country-name" content="USA" />

<meta property="fb:admins" content="987654321" />
<meta property="og:type" content="game.achievement" />
<meta property="og:points" content="POINTS_FOR_ACHIEVEMENT" />

<meta property="og:video" content="http://example.com/awesome.swf" />
<meta property="og:video:height" content="640" />
<meta property="og:video:width" content="385" />
<meta property="og:video:type" content="application/x-shockwave-flash" />
<meta property="og:video" content="http://example.com/html5.mp4" />
<meta property="og:video:type" content="video/mp4" />
<meta property="og:video" content="http://example.com/fallback.vid" />
<meta property="og:video:type" content="text/html" />

<meta property="og:audio" content="http://example.com/amazing.mp3" />
<meta property="og:audio:title" content="Amazing Song" />
<meta property="og:audio:artist" content="Amazing Band" />
<meta property="og:audio:album" content="Amazing Album" />
<meta property="og:audio:type" content="application/mp3" />
```

## Create Custom Meta Tags

Use custom meta tags to store data that you need in Javascript, instead of hard-coding that data into your Javascript. I store my Google Analytics code in meta tags. Here's some examples:

```html
<meta name="google-analytics" content="1-AHFKALJ" />
<meta name="disqus" content="abcdefg" />
<meta name="uservoice" content="asdfasdf" />
<meta name="mixpanel" content="asdfasdf" />
```

## Company/Service Meta Tags

#### ClaimID

```html
<meta name="microid" content="mailto+http:sha1:e6058ed7fca4a1921cq91d7f1f3b8736cd3cc1g7" />
<meta name="readability-verification" content="E7aEHvVQpWc8VHDqKvaB2Z58hek2EAv2HuLuegv7" />
<meta name="google-site-verification" content="4SMIedO1X4IkYrYuhEC2VuovdQM36Xxb0btUjElqQyg" />
<meta name="ICBM" content="40.746990, -73.980537" />
<meta name="generator" content="WordPress 3.3.1" />
<meta
    name="norton-safeweb-site-verification"
    content="tz8iotmk-pkhui406y41y5bfmfxdwmaa4a-yc0hm6r0fga7s6j0j27qmgqkmc7oovihzghbzhbdjk-uiyrz438nxsjdbj3fggwgl8oq2nf4ko8gi7j4z7t78kegbidl4"
/>
```

#### Apple Meta Tags

```html
<meta name="apple-mobile-web-app-title" content="My App" />
<!-- New in iOS6 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-touch-fullscreen" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="format-detection" content="telephone=no" />
<meta name='viewport' content='width=device-width; content='width = 320; initial-scale=1.0;
maximum-scale=1.0; user-scalable=yes; target-densitydpi=160dpi'>

<link href="/apple-touch-icon.png" rel="apple-touch-icon" type="image/png" />
<link href="touch-icon-ipad.png" rel="apple-touch-icon" sizes="72x72" />
<link href="touch-icon-iphone4.png" rel="apple-touch-icon" sizes="114x114" />
<link href="/startup.png" rel="apple-touch-startup-image" />

<link
    href="http://github.com/images/touch-icon-iphone4.png"
    sizes="114x114"
    rel="apple-touch-icon-precomposed"
/>
<link
    href="http://github.com/images/touch-icon-ipad.png"
    sizes="72x72"
    rel="apple-touch-icon-precomposed"
/>
<link
    href="http://github.com/images/apple-touch-icon-57x57.png"
    sizes="57x57"
    rel="apple-touch-icon-precomposed"
/>
```

#### Internet Explorer Meta Tags

```html
<meta http-equiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
<meta http-equiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />
<meta name="mssmarttagspreventparsing" content="true" />
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
<meta name="msapplication-starturl" content="http://blog.reybango.com/about/" />
<meta name="msapplication-window" content="width=800;height=600" />
<meta name="msapplication-navbutton-color" content="red" />
<meta name="application-name" content="Rey Bango Front-end Developer" />
<meta name='msapplication-tooltip' content='Launch Rey Bango's Blog'>
<meta
    name="msapplication-task"
    content="name=About;action-uri=/about/;icon-uri=/images/about.ico"
/>
<meta
    name="msapplication-task"
    content="name=The Big List;action-uri=/the-big-list-of-javascript-css-and-html-development-tools-libraries-projects-and-books/;icon-uri=/images/list_links.ico"
/>
<meta
    name="msapplication-task"
    content="name=jQuery Posts;action-uri=/category/jquery/;icon-uri=/images/jquery.ico"
/>
<meta
    name="msapplication-task"
    content="name=Start Developing;action-uri=/category/javascript/;icon-uri=/images/script.ico"
/>
<meta name="msvalidate.01" content="6E3AD52DC176461A3C81DD6E98003BC9" />
<meta http-equiv="cleartype" content="on" />
```

#### Google Meta Tags

```html
<meta
    name="news_keywords"
    content="World Cup, Brazil 2014, Spain vs Netherlands, soccer, football"
/>
```

#### TweetMeme Meta Tags

```html
<meta name="tweetmeme-title" content="Retweet Button Explained" />
```

#### Blog Catalog Meta Tags

```html
<meta name="blogcatalog" />
```

#### Rails Meta Tags

```html
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="/bZVwvomkAnwAI1Qd37lFeewvpOIiackk9121fFwWwc=" />
```

## HTML Link Tags

```html
<link
    rel="alternate"
    type="application/rss+xml"
    title="RSS"
    href="http://feeds.feedburner.com/martini"
/>
<link
    rel="alternate"
    type="application/atom+xml"
    title="Atom 0.3"
    href="https://example.com/feed.atom"
/>
<link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
<link rel="fluid-icon" type="image/png" href="/fluid-icon.png" />
<link rel="me" type="text/html" href="http://google.com/profiles/thenextweb" />
<link rel="shortlink" href="http://blog.unto.net/?p=353" />
<link rel="archives" title="May 2003" href="http://blog.unto.net/2003/05/" />
<link rel="index" title="DeWitt Clinton" href="http://blog.unto.net/" />
<link
    rel="start"
    title="Pattern Recognition 1"
    href="http://blog.unto.net/photos/pattern_recognition_1_about/"
/>
<link rel="bookmark" title="Styleguide" href="http://paulrobertlloyd.com/about/styleguide/" />
<link
    rel="search"
    href="/search.xml"
    type="application/opensearchdescription+xml"
    title="Viatropos"
/>

<link rel="self" type="application/atom+xml" href="http://www.syfyportal.com/atomFeed.php?page=3" />
<link rel="first" href="http://www.syfyportal.com/atomFeed.php" />
<link rel="next" href="http://www.syfyportal.com/atomFeed.php?page=4" />
<link rel="previous" href="http://www.syfyportal.com/atomFeed.php?page=2" />
<link rel="last" href="http://www.syfyportal.com/atomFeed.php?page=147" />

<link
    rel="canonical"
    href="http://smallbiztrends.com/2010/06/9-things-to-do-before-entering-social-media.html"
/>
<link
    rel="EditURI"
    type="application/rsd+xml"
    title="RSD"
    href="http://smallbiztrends.com/xmlrpc.php?rsd"
/>
<link rel="pingback" href="http://smallbiztrends.com/xmlrpc.php" />
<link
    rel="stylesheet"
    media="only screen and (max-device-width: 480px)"
    href="http://wordpress.org/style/iphone.css"
    type="text/css"
/>
<link
    rel="wlwmanifest"
    href="http://www.example.com/wp-includes/wlwmanifest.xml"
    type="application/wlwmanifest+xml"
/>
```

<link rel='help' title='FAQ' href='/faq'>
<link rel='logo' type='image/svg' href='https://playfoursquare.s3.amazonaws.com/press/logo/foursquare-logo.svg'>
<link rel='P3Pv1' href='/w3c/p3p.xml'>
<link rel='publisher' href='https://plus.google.com/115081025762845243709/'>
<link rel='image_src' href='http://du3itj18e4z0b.cloudfront.net/7b29fe/images/icon-facebook.gif' type='image/jpeg'>

<link rel='author' href='humans.txt' type='text/plain'>
<link href='http://thenextweb.com/2009/01/08/how-to-snap-up-that-twitter-username-youve-always-wanted/' rel='original-source'>
<link rel='profile' title='Microformats' href='http://microformats.org/profile/specs/'>
<link rel='profile' href='http://gmpg.org/xfn/11'>
<link rel='chrome-webstore-item' href='https://chrome.google.com/webstore/detail/noojglkidnpfjbincgijbaiedldjfbhh'>

```
## Other Resources

- [HTML5 Boilerplate explanations and suggestions of header tags](http://html5boilerplate.com/docs/head-Tips/)
- [Dublic Core Meta Tags](http://www.seoconsultants.com/meta-tags/dublin/)
- [Apple Meta Tags](http://developer.apple.com/safari/library/documentation/appleapplications/reference/safarihtmlref/articles/metatags.html)
- [OpenGraph Meta Tags](http://opengraphprotocol.org/)
- [Link Tag Meaning](http://intertwingly.net/wiki/pie/LinkTagMeaning)
- [Google Chrome HTML5 Tags](http://www.html5rocks.com/)
```
