# Football Standings
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![made-with-javascript-doc](https://img.shields.io/badge/Made%20with-Javascript-1f425f.svg)](https://www.sphinx-doc.org/)

Football Standings is a cross platform widget that you can integrate in your Website. The widget is customizable.

## Summary
- [Getting started](#getting-started)
- [Customize the widget](#customize-the-widget)
- [Available competitions](#available-competitions)
- [Integration](#integration)
- [Browsers support](#browsers-support)

## Getting started
To use our widget you need to enable a public key from [football-data](https://www.football-data.org/).

## Customize the widget
To customize the widget you can use the following css custom properties:

| Name | Description |
| ------ | ------ |
| --header-position | TBD |
| --header-color | TBD |
| --header-background | TBD |
| --subheader-color | TBD |
| --subheader-background | TBD |
| --table-border-color | TBD |
| --table-color | TBD |
| --table-background | TBD |

## Available competitions

| Key | Competition |
| ------ | ------ |
| SA | Serie A |
| PL | Premier League |
| PD | Liga |
| BL1 | Bundesliga |
| FL1 | Ligue |
| DED | Eredivise |

## Integration

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
      .theme-red {
        --header-background: #D32F2F;
        --subheader-background: #F44336;
      }
    </style>
</head>
<body>
    <gm-football-standings class="theme-red" competition="SA" season="2019" key="public-key-here">
    </gm-football-standings>
    <script src="standing-football/bundle.js"></script>
</body>
</html>
```

## Browsers support

:white_check_mark: Chrome
<br/>
:white_check_mark: Firefox
<br/>
:white_check_mark: Safari
<br/>
:white_check_mark: Edge

Keep calm and code!
<br>
[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)