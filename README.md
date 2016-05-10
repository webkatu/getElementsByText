#getElementsByText


This method is to get elements that contains the text.

## Usage

`document.getElementsByText(text);`

or

`Element.getElementsByText(text);`

## Example

```
<html>
<head>
	<title>ABCDEF</title>
</head>
<body>
	<p>AB<span>CD</span>EF</p>ABCD
</body>
</html>
```

```
document.getElementsByText('CD'); // -> [<title>, <span>, <body>]
document.body.getElementsByText('AB'); // -> [<p>, <body>]
document.body.getElementsByText('CDE'); // -> null
```

## Install
`<script src="getElementsByText.js"></script>`

build.js is getElementsByText.js.

## Licence

[MIT](https://github.com/webkatu/getElementsByText/blob/master/LICENSE)
