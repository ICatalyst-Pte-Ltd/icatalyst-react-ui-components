import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { jsxs, jsx, Fragment } from '@emotion/react/jsx-runtime';
import createCache from '@emotion/cache';
import { useTheme, CacheProvider } from '@emotion/react';
import { Typography, LinearProgress, CircularProgress, Alert, AlertTitle, Button as Button$1, Tooltip, IconButton as IconButton$1, Paper, Modal, ButtonGroup, Popper, Grow, ClickAwayListener, MenuList, MenuItem, Snackbar as Snackbar$1, GlobalStyles, alpha, TextField as TextField$2, InputAdornment, useAutocomplete, Fade, List, ListItem, ListItemText, CssBaseline, CardHeader as CardHeader$1, CardContent, Card as Card$1, CardActions, CardMedia, Slide, Dialog as Dialog$1, AppBar, DialogContent as DialogContent$1, Divider, DialogActions, Toolbar, FormControl, FormControlLabel, Checkbox, FormHelperText, InputLabel, Select, Chip, Autocomplete, Link as Link$1, ListItemIcon, Menu, ListSubheader, ListItemButton, Badge, Drawer, TableBody as TableBody$1, TableRow, TableCell, TableHead, TableSortLabel, TableContainer, Table as Table$1, ListItemAvatar } from '@mui/material';
import React, { useContext, useRef, useMemo, useEffect, useState, useLayoutEffect, useCallback, createContext, Suspense, forwardRef, useImperativeHandle, Component, useId, isValidElement } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { useLocation, matchRoutes, useMatch, Outlet, Navigate, useRoutes, BrowserRouter, useResolvedPath, useNavigate, NavLink as NavLink$1 } from 'react-router-dom';
import { mostReadable, tinycolor, _, formatString, BasicI18NStrategy, DataRepository, isEmail, isName, isValidPassword, isURL, createColorPalette, deepFreeze, getMimeType } from '@icatalyst/js-core';
import { makeStyles } from 'tss-react/mui';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IonIcon from '@reacticons/ionicons';
import MUIIcon from '@mui/material/Icon';
import * as tablerIcons from 'tabler-icons-react';
import { of, fromEvent, debounceTime, BehaviorSubject } from 'rxjs';
import { LocalizationProvider as LocalizationProvider$1, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import io from 'socket.io-client';
import IframeResizer from 'iframe-resizer-react';
import _$1 from 'lodash';
import pluralize from 'pluralize';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import moment from 'moment';
import { RichTextEditor } from '@ckeditor/ckeditor5-custom';
import { usePopupState, bindToggle, bindPopper } from 'material-ui-popup-state/hooks';
import { ColorBox, createColor } from 'mui-color';
import { useTable, useFlexLayout, useGlobalFilter, useSortBy, usePagination, useRowSelect } from 'react-table';

library.add(fas, far, fab);

var staticInit = (() => {
});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const useStyles$1j = makeStyles()(theme => {
  return {
    root: {
      alignSelf: 'center',
      height: '100%',
      display: 'flex',
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    title: {
      marginTop: theme.spacing(4),
      paddingBottom: theme.spacing(1)
    },
    linearProgress: {
      width: theme.breakpoints.values.sm
    },
    circularProgress: {}
  };
});
function Loader({
  className,
  style,
  classes: classesProp,
  title,
  id,
  color = 'primary',
  variant = 'linear',
  minValue = 0,
  maxValue = 100,
  value
}) {
  var _a;
  const {
    classes,
    cx
  } = useStyles$1j(undefined, {
    props: {
      classes: classesProp
    }
  });
  const theme = useTheme();
  const normalizedValue = value === undefined || value === null ? value : (value - minValue) * 100 / (maxValue - minValue);
  const progressVariant = value === undefined || value === null ? 'indeterminate' : 'determinate';
  color = color || (((_a = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.primary.main, theme.palette.secondary.main])) === null || _a === void 0 ? void 0 : _a.toHex8String()) === theme.palette.primary.main ? 'primary' : 'secondary');
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [title && jsx(Typography, Object.assign({
      className: cx(classes.title),
      variant: "h6"
    }, {
      children: title
    })), variant === 'linear' && jsx(LinearProgress, {
      className: cx(classes.linearProgress),
      "aria-label": title,
      id: id,
      color: color,
      value: normalizedValue,
      variant: progressVariant
    }), variant === 'circular' && jsx(CircularProgress, {
      className: cx(classes.circularProgress),
      "aria-label": title,
      id: id,
      color: color,
      value: normalizedValue,
      variant: progressVariant
    })]
  }));
}

var v = "4.8.0";
var meta = {
	g: "LottieFiles AE ",
	a: "",
	k: "",
	d: "",
	tc: ""
};
var fr = 25;
var ip = 0;
var op = 273;
var w = 500;
var h = 500;
var nm = "not_found";
var ddd = 0;
var assets = [
	{
		id: "image_0",
		w: 175,
		h: 173,
		u: "",
		p: "data:image/png;base64,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",
		e: 1
	},
	{
		id: "image_1",
		w: 85,
		h: 85,
		u: "",
		p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAYAAAA49ahaAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAEE0lEQVR4nO2d/XXaMBTF72OB0AnqThA6Qd0JygalEzQj0A3aCUo3gAnqbEAmKNmATHD7hyTqEuMvycgW73cOJzYY83zzJMuS3pNgJJDMAWT2tQAwb/jKEcDe/RWRYjjruiGxfpjkEkBuX/eBTvsEI/QWQCEix0DnHS8klyS3JI+8DluSK5JNXj8tSGYk11cUsoojyQ3JLLYeXlgxNxGFvMT0xCU5p/HMsbPhFKoFmjozZjHvypHkQ2zdKqHxzm1kgXwoGLBK8G5S0bQvtwDuvK2JywuABxHZ+J5o5vNlmqLzG9MXFDDX8JPkd98T9fZUkhsAn30NGCk7AKu+Dw+9RE1cUMcTgLyPsJ1FJblHuMfKsdNL2E51qvXQWxEUMNdasGN7trWoN1Lkq7iHad20ppWo9i5/i4I6PlinakVjnWrbob89DEqJL23asbWi2rrkgDTaoSF4gblx7esOair+G6igZe5gNKnloqg0PfOfAhqUCvck13UHVBZ/LfaNvABYiMih6sNLnvoAFbSOOwAX+wheeartAvszoEEp8bFqFLfKU9eDm5IO66o3//NU9dJevPLWc09dXc2UdFidv3HuqUfoDaoPb8o9WSdPte1SFbQfq/LO7NIHSidW5Z1T8dei78079zAwA7ToB2LpNlzxz+PYkRS521BRw5G7DQEAkoxmSlq8F5H9zPbsK2HIAFP8s6hmpMUCUFFDcxJ1EdmQlJgDRtTxT3ydDhngOetPecVbQEUdBC3+A6CiDsAMZihaCYjWqQOgooblGTCiph8Uez0OgBG1dgab0okjoJ4amj2gnhqaA6Cd1KExndR25ymqKYngZlg7UbUK8OfRbThRO4W0KJWcNHSiFnHsSIrCbcwAwE6u2sWyJgGeyxEr5cdUrQL6synvlOdSafBEf96VgypOnmqrAPXW7uzOo1R0ero/9dPTreK/rmjQ1Hmsik7RkB8/2oX8qLe2ptJLAQ2j9OH9pWjqyuEU2xJYD2nRxPlRF57eFO9fAPgQ2qKJ8wwT7Huxc79p4G8FEzGs/KMxX1WtqPamNc4Eg3H41iZNc6u8VDZV21dfiybOTkSWzYd1SPZFcovbzVTRKelXF1HnMH2Gt5TsC+iRRa1TWrobFLZVdp9zOk37sf+tHLcxUOg8tPP4Xd+slHOYbsJU27C9M1ICPSeoichRRHKk2Uewg4eggOesPxFZAfiCdB4QvonIchQrWZBckNwPlYX7Chw41shHxl95og/fOfZ8/zQrUUwhPX1BclqBeSRza/jYKDjWot4WGnHHsIbKllMX8xyaVSseeN0b2oGmns+uea1RFvmyF1le5CvksM0j/i3yFWU2Y7SV08rQ3DAymIhutxRdBhvrWcEzzBiaW5LuALMknU4JTZW/U1qiUwiP8oYAAAAASUVORK5CYII=",
		e: 1
	},
	{
		id: "image_2",
		w: 186,
		h: 242,
		u: "",
		p: "data:image/png;base64,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",
		e: 1
	},
	{
		id: "image_3",
		w: 216,
		h: 260,
		u: "",
		p: "data:image/png;base64,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",
		e: 1
	},
	{
		id: "comp_0",
		layers: [
			{
				ddd: 0,
				ind: 1,
				ty: 2,
				nm: "magnify",
				refId: "image_0",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 1,
						k: [
							{
								i: {
									x: [
										0.833
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.333
									],
									y: [
										0
									]
								},
								t: 0,
								s: [
									0
								]
							},
							{
								i: {
									x: [
										0.833
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.167
									],
									y: [
										0
									]
								},
								t: 42,
								s: [
									75
								]
							},
							{
								i: {
									x: [
										0.833
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.167
									],
									y: [
										0
									]
								},
								t: 90,
								s: [
									8
								]
							},
							{
								i: {
									x: [
										0.833
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.167
									],
									y: [
										0
									]
								},
								t: 121,
								s: [
									32
								]
							},
							{
								i: {
									x: [
										0.833
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.167
									],
									y: [
										0
									]
								},
								t: 134,
								s: [
									32
								]
							},
							{
								i: {
									x: [
										0.833
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.167
									],
									y: [
										0
									]
								},
								t: 164,
								s: [
									53
								]
							},
							{
								i: {
									x: [
										0.833
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.167
									],
									y: [
										0
									]
								},
								t: 183,
								s: [
									53
								]
							},
							{
								i: {
									x: [
										0.667
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.167
									],
									y: [
										0
									]
								},
								t: 219,
								s: [
									53
								]
							},
							{
								t: 272,
								s: [
									0
								]
							}
						],
						ix: 10
					},
					p: {
						a: 1,
						k: [
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 0,
								s: [
									333.752,
									339.42,
									0
								],
								to: [
									-26,
									-25,
									0
								],
								ti: [
									-4.333,
									25,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 42,
								s: [
									177.752,
									189.42,
									0
								],
								to: [
									4.333,
									-25,
									0
								],
								ti: [
									-25.667,
									-23.333,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.167,
									y: 0
								},
								t: 90,
								s: [
									359.752,
									189.42,
									0
								],
								to: [
									25.667,
									23.333,
									0
								],
								ti: [
									4.667,
									-23.333,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 0.667
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 121,
								s: [
									331.752,
									329.42,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.167,
									y: 0
								},
								t: 134,
								s: [
									331.752,
									329.42,
									0
								],
								to: [
									-28.333,
									4.667,
									0
								],
								ti: [
									28.333,
									-4.667,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 0.667
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 164,
								s: [
									161.752,
									357.42,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.167,
									y: 0
								},
								t: 183,
								s: [
									161.752,
									357.42,
									0
								],
								to: [
									0,
									-24.333,
									0
								],
								ti: [
									-28.667,
									3,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.167,
									y: 0
								},
								t: 219,
								s: [
									161.752,
									211.42,
									0
								],
								to: [
									28.667,
									-3,
									0
								],
								ti: [
									-28.667,
									-21.333,
									0
								]
							},
							{
								t: 272,
								s: [
									333.752,
									339.42,
									0
								]
							}
						],
						ix: 2
					},
					a: {
						a: 0,
						k: [
							87.194,
							86.29,
							0
						],
						ix: 1
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6
					}
				},
				ao: 0,
				ip: 0,
				op: 750,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 2,
				ty: 2,
				nm: "glass 2",
				parent: 1,
				refId: "image_1",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 20,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							68.687,
							68.686,
							0
						],
						ix: 2
					},
					a: {
						a: 0,
						k: [
							42.065,
							42.066,
							0
						],
						ix: 1
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6
					}
				},
				ao: 0,
				ip: 0,
				op: 750,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 3,
				ty: 2,
				nm: "glass",
				parent: 1,
				td: 1,
				refId: "image_1",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							68.687,
							68.686,
							0
						],
						ix: 2
					},
					a: {
						a: 0,
						k: [
							42.065,
							42.066,
							0
						],
						ix: 1
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6
					}
				},
				ao: 0,
				ip: 0,
				op: 750,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 4,
				ty: 0,
				nm: "paper",
				tt: 1,
				refId: "comp_1",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							250,
							250,
							0
						],
						ix: 2
					},
					a: {
						a: 0,
						k: [
							250,
							250,
							0
						],
						ix: 1
					},
					s: {
						a: 0,
						k: [
							125,
							125,
							100
						],
						ix: 6
					}
				},
				ao: 0,
				w: 500,
				h: 500,
				ip: 0,
				op: 750,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 5,
				ty: 0,
				nm: "paper",
				refId: "comp_1",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							250,
							250,
							0
						],
						ix: 2
					},
					a: {
						a: 0,
						k: [
							250,
							250,
							0
						],
						ix: 1
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6
					}
				},
				ao: 0,
				w: 500,
				h: 500,
				ip: 0,
				op: 750,
				st: 0,
				bm: 0
			}
		]
	},
	{
		id: "comp_1",
		layers: [
			{
				ddd: 0,
				ind: 1,
				ty: 2,
				nm: "paper_1",
				refId: "image_2",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							263.625,
							231.897,
							0
						],
						ix: 2
					},
					a: {
						a: 0,
						k: [
							92.771,
							120.853,
							0
						],
						ix: 1
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6
					}
				},
				ao: 0,
				ip: 0,
				op: 750,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 2,
				ty: 2,
				nm: "paper_2",
				refId: "image_3",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							214.478,
							258.49,
							0
						],
						ix: 2
					},
					a: {
						a: 0,
						k: [
							107.933,
							130,
							0
						],
						ix: 1
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6
					}
				},
				ao: 0,
				ip: 0,
				op: 750,
				st: 0,
				bm: 0
			}
		]
	}
];
var layers = [
	{
		ddd: 0,
		ind: 1,
		ty: 0,
		nm: "not_found 2",
		refId: "comp_0",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					250,
					250,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					250,
					250,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		w: 500,
		h: 500,
		ip: 0,
		op: 273,
		st: 0,
		bm: 0
	}
];
var markers = [
];
var defaultLottie = {
	v: v,
	meta: meta,
	fr: fr,
	ip: ip,
	op: op,
	w: w,
	h: h,
	nm: nm,
	ddd: ddd,
	assets: assets,
	layers: layers,
	markers: markers
};

const globalAxios = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});
function createTokenRefreshInterceptor(axios, refreshTokenURI) {
  return axios.interceptors.response.use(response => response, error => {
    var _a;
    const originalRequest = error.config;
    // if the error was a 401 then refresh the token if it has expired
    if (originalRequest && ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 401 && !originalRequest.__sent) {
      originalRequest.__sent = true;
      return axios.post(refreshTokenURI, {}, {
        withCredentials: true
      }).then(res => {
        if (res.status === 201) {
          return axios(originalRequest);
        }
        return Promise.reject(error);
      });
    }
    // console.log('axios interceptor', { error });
    //   if (error?.response?.status === 403 && !previousRequest?.sent) {
    //     previousRequest.sent = true;
    //     const newAccessToken = await refresh();
    //     previousRequest.headers[AUTHORIZATION] = `Bearer ${newAccessToken}`;
    //     return axiosPrivate(previousRequest);
    //   }
    //   return Promise.reject(error);
    return Promise.reject(error);
  });
}

function useAxios() {
  return globalAxios;
}

function useApplication() {
  return useContext(AppContext);
}

function useMemoDeepCompare(callback, dependencies = [], comparator, debug) {
  const previousValue = useRef(undefined);
  const previousRef = useRef([]);
  const previous = previousRef.current;
  return useMemo(() => {
    const isEqual = comparator ?
    // If a custom comparator has been provided use it
    comparator(previous, dependencies) :
    // Otherwise do a deep compare on each item
    // finding the first non matching item
    !dependencies.find((d, index) => !_.isEqual(d, previous[index]));
    if (!isEqual) {
      if (debug) {
        const updatedProps = Object.entries(dependencies).reduce((acc, [key, value]) => {
          if (!_.isEqual(previous[key], value)) {
            acc[key] = {
              from: previous[key],
              to: value
            };
          }
          return acc;
        }, {});
        if (Object.keys(updatedProps).length > 0) {
          console.info(`${debug}:`, updatedProps);
        }
      }
      previousRef.current = dependencies;
      previousValue.current = callback();
    }
    return previousValue.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies, comparator]);
}

function useObservable(observable, setter, deps = [], debug) {
  useEffect(() => {
    const subscription = observable.subscribe(result => {
      setter(state => {
        if (!_.isEqual(state, result)) {
          if (debug) {
            const updatedProps = Object.entries(result).reduce((acc, [key, value]) => {
              if (!_.isEqual(state[key], value)) {
                acc[key] = {
                  from: state[key],
                  to: value
                };
              }
              return acc;
            }, {});
            if (Object.keys(updatedProps).length > 0) {
              console.log(`useObservable - ${debug}:`, updatedProps);
            }
          }
          return result;
        }
        if (debug) {
          console.log(`useObservable - ${debug}: No changes`);
        }
        return state;
      });
    });
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

function useApplicationRepository(repositoryName, dataDefinition) {
  const {
    repositories = {}
  } = useContext(AppContext);
  const {
    useRepository,
    repositoryDescriptor
  } = useMemoDeepCompare(() => {
    const repository = repositories[repositoryName];
    if (!repository) {
      const repositoryNames = Object.keys(repositories).join(', ');
      throw new Error(`The application repository '${repositoryName}' does not exist in this application.  Try one of [${repositoryNames}]`);
    }
    const dataRepository = repository.getDefinition(dataDefinition);
    if (!dataRepository) {
      const repositoryNames = Object.keys(repository.getDefinitions()).join(', ');
      throw new Error(`The data definition for '${dataDefinition}' does not exist in the repository '${repositoryName}'.  Try one of [${repositoryNames}]`);
    }
    return {
      useRepository: dataRepository.useRepository,
      repositoryDescriptor: dataRepository.getDescriptor()
    };
  }, [repositories, repositoryName, dataDefinition]);
  const [repo, data] = useRepository([repositories, repositoryName, dataDefinition]);
  const [repoData, setRepoData] = useState(data);
  useEffect(() => {
    setRepoData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repo]);
  useObservable((repo === null || repo === void 0 ? void 0 : repo.getObservable()) || of(data), setRepoData);
  return {
    repository: repo,
    repositoryDescriptor: repositoryDescriptor,
    dataState: repoData
  };
}

function useAuthContext() {
  const {
    getAuthContext
  } = useContext(AppContext);
  const {
    auth
  } = getAuthContext();
  return auth;
}

/* eslint-disable react-hooks/exhaustive-deps */
function usePrevious(value, deps = []) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value, ...deps]);
  return ref.current;
}

function useBreakpoint(func, breakpoint, deps = []) {
  const [width, setWidth] = useState(window.innerWidth);
  const previousWidth = usePrevious(width);
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, breakpoint]);
  useEffect(() => {
    if (previousWidth === undefined) {
      // Always trigger on a first update
      func(width > breakpoint, width);
    } else {
      // Only trigger if we have crossed the threshold
      if (previousWidth < breakpoint && width >= breakpoint || previousWidth >= breakpoint && width < breakpoint) {
        func(width > breakpoint, width);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  useEffect(() => {
    // As the actual breakpoint has changed we need to trigger
    func(width > breakpoint, width);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint]);
}

function useCurrentPath(routes) {
  const location = useLocation();
  const matchedRoutes = matchRoutes(routes, location);
  return [matchedRoutes && matchedRoutes.length > 0 ? matchedRoutes[0].pathname : location.pathname, matchedRoutes === null || matchedRoutes === void 0 ? void 0 : matchedRoutes.map(r => r.route)];
}

/**
 * Helper hook to extract the proper auth context
 */
function useAuthorisation() {
  const {
    getAuthContext
  } = useApplication();
  return getAuthContext();
}

function filterRoutes(checkRoles, routes = []) {
  return routes.filter(r => {
    return !r.auth || checkRoles(r.auth);
  }).map(r => {
    if (r.routes) {
      return Object.assign(Object.assign({}, r), {
        routes: filterRoutes(checkRoles, r.routes)
      });
    } else {
      return r;
    }
  });
}
function reverseIndex(routes, contextDepth) {
  const index = {};
  function traverse(current, depth, path) {
    if (typeof current !== 'object' || current === null) {
      return;
    }
    if (Array.isArray(current)) {
      current.forEach(r => {
        traverse(r, depth, path);
      });
    } else {
      if (!current.path) {
        return;
      }
      if (depth === contextDepth) {
        if (!index[path]) {
          index[path] = [];
        }
        index[path].push(current);
      }
      if (depth <= contextDepth) {
        if (current.routes) {
          traverse(current.routes, depth + 1, `${path}${current.path}`);
        }
      }
    }
  }
  traverse(routes, 0, '');
  return {
    routes: index,
    keys: Object.keys(index).map(p => p.replace(/\/\*?$/, '')).sort().reverse()
  };
}
function useContextRoutes(routes, contextDepth) {
  var _a;
  const location = useLocation();
  const match = useMatch(location.pathname);
  const routePath = (_a = match === null || match === void 0 ? void 0 : match.pattern) === null || _a === void 0 ? void 0 : _a.path;
  const {
    auth = {},
    isInRole
  } = useAuthorisation();
  // create a reverse index of the authorised routes
  const authorisedRoutes = useMemo(() => {
    return reverseIndex(filterRoutes(isInRole, routes), contextDepth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, routes, isInRole, contextDepth]);
  const currentContextPath = useMemo(() => {
    return authorisedRoutes.keys.find(r => {
      return routePath === null || routePath === void 0 ? void 0 : routePath.startsWith(r);
    });
  }, [authorisedRoutes, routePath]);
  return {
    routePath,
    routes: authorisedRoutes.routes[currentContextPath || '']
  };
}

/**
 * https://github.com/kentcdodds/use-deep-compare-effect
 */
function checkDeps(deps) {
  if (!deps || !deps.length) {
    throw new Error('useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.');
  }
  if (deps.every(isPrimitive)) {
    throw new Error('useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
  }
}
function isPrimitive(val) {
  return val == null || /^[sbn]/.test(typeof val);
}
function useDeepCompareMemoize(value) {
  const ref = React.useRef();
  if (!_.isEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}
function useDeepCompareEffect(callback, dependencies) {
  if (process.env['NODE_ENV'] !== 'production') {
    checkDeps(dependencies);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, useDeepCompareMemoize(dependencies));
}

function useDebounce(func, wait, options) {
  return useRef(_.debounce(func, wait, options)).current;
}

// https://dev.to/ag-grid/react-18-avoiding-use-effect-getting-called-twice-4i9e
function useEffectOnce(effect, deps = []) {
  const destroyFunc = useRef();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);
  const [val, setVal] = useState(0);
  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }
  useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true;
    }
    // this forces one render after the effect is run
    setVal(val => val + 1);
    return () => {
      // if the comp didn't render since the useEffect was called,
      // we know it's the dummy React cycle
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, deps);
}

// FROM: https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// FROM : https://usehooks-ts.com/react-hook/use-event-listener
function useEventListener(eventName, handler, element, options) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(() => {
    // Define the listening target
    const targetElement = (element === null || element === void 0 ? void 0 : element.current) || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }
    // Create event listener that calls handler function stored in ref
    const eventListener = event => savedHandler.current(event);
    targetElement.addEventListener(eventName, eventListener, options);
    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, options]);
}

function useForm(initialState, validate, onSubmit) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  useDeepCompareEffect(() => {
    setForm(initialState);
    setErrors({});
  }, [initialState]);
  const handleChange = useCallback((event, newValue) => {
    if (event) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const target = event.target;
      event.persist && event.persist();
      let value = target.value;
      // Checkboxes and dates are handled differently
      if (target.type === 'checkbox') {
        value = target.checked;
      } else if (target.type === 'datetime-local' || target.type === 'date') {
        value = value && value.length > 0 ? new Date(value).getTime() : null;
      }
      let validationForm = form;
      const fieldName = target.name;
      if (!fieldName) {
        console.error('target.name is not set in event', {
          event,
          newValue
        });
      }
      setForm(_form => {
        // @ts-expect-error setIn is a mixin added
        validationForm = _.setIn(Object.assign({}, _form), fieldName, value);
        return validationForm;
      });
      setErrors(previousErrors => {
        return validate ? validate(validationForm, fieldName, previousErrors) : {};
      });
    } else if (newValue) {
      let validationForm = form;
      const fieldNames = [];
      Object.keys(newValue).forEach(key => {
        fieldNames.push(key);
        setForm(_form => {
          // @ts-expect-error setIn is a mixin added
          validationForm = _.setIn(Object.assign({}, _form), key, newValue[key]);
          return validationForm;
        });
        setErrors(previousErrors => {
          return validate ? validate(validationForm, fieldNames, previousErrors) : {};
        });
      });
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [initialState]);
  const resetForm = useCallback(() => {
    setForm(initialState);
    setErrors({});
  }, [initialState]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setInForm = useCallback((name, value) => {
    let validationForm = form;
    setForm(_form => {
      // @ts-expect-error setIn is a mixin added
      validationForm = _.setIn(_form, name, value);
      return validationForm;
    });
    setErrors(previousErrors => {
      return validate ? validate(validationForm, name, previousErrors) : {};
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, validate]);
  const handleSubmit = useCallback((event, afterSubmit, callback) => {
    if (event) {
      event.preventDefault();
    }
    if (onSubmit) {
      onSubmit(form);
    }
    if (afterSubmit) {
      afterSubmit(event, callback, form);
    }
  }, [onSubmit, form]);
  const checkIsValid = useCallback(fields => {
    return validate ? Object.entries(validate(form, fields)).flatMap(([key, entry]) => entry).length === 0 : false;
  }, [form, validate]);
  return {
    form,
    handleChange,
    handleSubmit,
    resetForm,
    setForm,
    setInForm,
    modified: !_.isEqual(form, initialState),
    errors: errors,
    validate: validate,
    isValid: checkIsValid
  };
}

// based on https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
// updated the watch parameters on the useCallback for flexibility
function useHookWithRefCallback(callback, deps = []) {
  const ref = useRef(null);
  const setRef = useCallback(node => {
    if (node) {
      callback && callback(node);
    }
    ref.current = node;
    setRef.current = node;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [setRef];
}

const LocalizationContext = createContext({
  t(...params) {
    const [text, ...rest] = params;
    if (!text) {
      return text;
    }
    return formatString(text, ...rest);
  },
  setVocabulary: () => {
    // No Default Action
  },
  isRTL: () => false,
  onInvalidTranslation: () => {
    // No Default Action
  },
  loadVocabularies: () => []
});
function LocalizationProvider({
  children,
  localizationStrategy
}) {
  const strategy = useRef(new BasicI18NStrategy());
  useEffect(() => {
    if (localizationStrategy) {
      strategy.current = localizationStrategy;
    } else {
      strategy.current = new BasicI18NStrategy();
    }
  }, [localizationStrategy]);
  const [availableVocabularies, setAvailableVocabularies] = useState(null);
  useEffect(() => {
    if (!availableVocabularies) {
      setAvailableVocabularies(strategy.current.loadVocabularies());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return jsx(LocalizationContext.Provider, Object.assign({
    value: {
      t: (...params) => strategy.current.t(...params),
      setVocabulary: (name, vocabularyDefinition) => strategy.current.setVocabulary(name, vocabularyDefinition),
      isRTL: () => strategy.current.isRTL(),
      onInvalidTranslation: (text, vocabulary) => strategy.current.onInvalidTranslation(text, vocabulary),
      loadVocabularies: () => strategy.current.loadVocabularies()
    }
  }, {
    children: jsxs(LocalizationProvider$1, Object.assign({
      dateAdapter: AdapterMoment
    }, {
      children: [!availableVocabularies && jsx(Loader, {}), availableVocabularies && children]
    }))
  }));
}

function useLocalization(text) {
  if (!text) {
    text = '';
  }
  const params = typeof text === 'string' ? [text] : text;
  const translationText = params && params[0] || '';
  const localization = useContext(LocalizationContext);
  const [translation, setTranslation] = useState(translationText);
  useEffect(() => {
    setTranslation(localization.t(...params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, localization]);
  return translation;
}

// FROM: https://github.com/juliencrn/usehooks-ts/blob/master/src/useEventCallback/useEventCallback.ts
function useEventCallback(fn) {
  const ref = useRef(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });
  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);
  return useCallback((...args) => ref.current(...args), [ref]);
}

// FROM: https://usehooks-ts.com/react-hook/use-local-storage
function useLocalStorage(key, initialValue) {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback(() => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? parseJSON$1(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(readValue);
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useEventCallback(value => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === 'undefined') {
      console.warn(`Tried setting localStorage key “${key}” even though environment is not a client`);
    }
    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value;
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));
      // Save state
      setStoredValue(newValue);
      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  });
  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleStorageChange = useCallback(event => {
    if ((event === null || event === void 0 ? void 0 : event.key) && event.key !== key) {
      return;
    }
    setStoredValue(readValue());
  }, [key, readValue]);
  // this only works for other documents, not the current one
  useEventListener('storage', handleStorageChange);
  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEventListener('local-storage', handleStorageChange);
  return [storedValue, setValue];
}
// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON$1(value) {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value !== null && value !== void 0 ? value : '');
  } catch (_a) {
    console.log('parsing error on', {
      value
    });
    return undefined;
  }
}

const ORIGIN = Object.freeze({
  x: 0,
  y: 0,
  screenX: 0,
  screenY: 0,
  pageX: 0,
  pageY: 0,
  offsetX: 0,
  offsetY: 0,
  clientX: 0,
  clientY: 0
});
const useMouse = (ref, options) => {
  const [position, setPosition] = useState(ORIGIN);
  const handleMouseMove = _.debounce(e => {
    setPosition({
      x: e.x,
      y: e.y,
      screenX: e.screenX,
      screenY: e.screenY,
      pageX: e.pageX,
      pageY: e.pageY,
      offsetX: e.offsetX || e.layerX,
      offsetY: e.offsetY || e.layerX,
      clientX: e.clientX,
      clientY: e.clientY
    });
  }, (options === null || options === void 0 ? void 0 : options.debounce) || 0, {
    maxWait: 500
  });
  // Set up the listeners when the element is available
  useEffect(() => {
    if (ref && ref.current) {
      const element = ref.current;
      element.addEventListener('mousemove', handleMouseMove);
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
      };
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, options]);
  return position;
};

function useRepository(repository, deps = [], debug) {
  const [data, setData] = useState(repository.getState());
  // Note the repository is a mutable object so comparisons directly wont work.  We check the URL instead
  const repoURL = repository.getBaseURL();
  const memoisedRepo = useMemo(() => {
    return repository;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repoURL]);
  useEffect(() => {
    setData(memoisedRepo.getState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repoURL]);
  if (debug) {
    debug = `useRepository - ${debug}:${memoisedRepo.getBaseURL()}`;
  }
  useEffect(() => {
    if (debug) {
      console.log(`${debug}: Subscribe`);
    }
    const observable = memoisedRepo.getObservable();
    const subscription = observable.subscribe(result => {
      setData(state => {
        if (!_.isEqual(state, result)) {
          if (debug) {
            const updatedProps = Object.entries(result).reduce((acc, [key, value]) => {
              if (!_.isEqual(state[key], value)) {
                acc[key] = {
                  from: state[key],
                  to: value
                };
              }
              return acc;
            }, {});
            if (Object.keys(updatedProps).length > 0) {
              console.log(`${debug}:`, updatedProps);
            }
          }
          return result;
        }
        if (debug) {
          console.log(`${debug}: No changes`);
        }
        return state;
      });
    });
    return () => {
      if (debug) {
        console.log(`${debug}: Unsubscribe`);
      }
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
  return [memoisedRepo, data];
}

function useObservableRepository(props, deps = []) {
  const repository = useMemo(() => {
    return new DataRepository(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);
  // TODO: Populate with initial state;
  const [data, setData] = useState(repository.getState());
  useIsomorphicLayoutEffect(() => {
    const subscription = repository.getObservable().subscribe(result => {
      setData(result);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, deps);
  return [repository, data];
}

function useScript(src) {
  const [status, setStatus] = useState(src ? 'loading' : 'idle');
  useEffect(() => {
    if (!src) {
      setStatus('idle');
      return;
    }
    // Check if it already exists
    let script = document.querySelector(`script[src="${src}"]`);
    if (!script) {
      // Does not exist so create it
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.setAttribute('data_status', 'loading');
      document.body.appendChild(script);
      // Store the status so we can read from other instances of the hook
      const setAttribute = event => {
        script === null || script === void 0 ? void 0 : script.setAttribute('data-status', event.type === 'load' ? 'ready' : 'error');
      };
      script.addEventListener('load', setAttribute);
      script.addEventListener('error', setAttribute);
    } else {
      // Exists so get the status
      setStatus(script.getAttribute('data-status'));
    }
    const setState = event => {
      setStatus(event.type === 'load' ? 'ready' : 'error');
    };
    script.addEventListener('load', setState);
    script.addEventListener('error', setState);
    return () => {
      if (script) {
        script.removeEventListener('load', setState);
        script.removeEventListener('error', setState);
      }
    };
  }, [src]);
  return status;
}

function useSessionStorage(key, initialValue) {
  // Get from session storage then
  // parse stored json or return initialValue
  const readValue = useCallback(() => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? parseJSON(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading sessionStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(readValue);
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to sessionStorage.
  const setValue = useEventCallback(value => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window == 'undefined') {
      console.warn(`Tried setting sessionStorage key “${key}” even though environment is not a client`);
    }
    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value;
      // Save to session storage
      window.sessionStorage.setItem(key, JSON.stringify(newValue));
      // Save state
      setStoredValue(newValue);
      // We dispatch a custom event so every useSessionStorage hook are notified
      window.dispatchEvent(new Event('session-storage'));
    } catch (error) {
      console.warn(`Error setting sessionStorage key “${key}”:`, error);
    }
  });
  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleStorageChange = useCallback(event => {
    if ((event === null || event === void 0 ? void 0 : event.key) && event.key !== key) {
      return;
    }
    setStoredValue(readValue());
  }, [key, readValue]);
  // this only works for other documents, not the current one
  useEventListener('storage', handleStorageChange);
  // this is a custom event, triggered in writeValueTosessionStorage
  // See: useSessionStorage()
  useEventListener('session-storage', handleStorageChange);
  return [storedValue, setValue];
}
// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON(value) {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value !== null && value !== void 0 ? value : '');
  } catch (_a) {
    console.log('parsing error on', {
      value
    });
    return undefined;
  }
}

function useTraceProps(props, prefix = '') {
  useMemoDeepCompare(() => {
    // Nothing to do, handled by the deep compare
  }, props, undefined, prefix);
}

function useWebsockets(host, namespace, events) {
  var _a;
  const socket = useRef(null);
  const [socketID, setSocketID] = useState(null);
  const [connected, setConnected] = useState(((_a = socket.current) === null || _a === void 0 ? void 0 : _a.connected) || false);
  const [error, setError] = useState(null);
  function emitWSEvent(event, payload) {
    socket.current && socket.current.emit(event, Object.assign(Object.assign({}, payload), {
      socketID: socketID,
      timestamp: Date.now()
    }));
  }
  useEffect(() => {
    if (socket.current) {
      Object.keys(events).forEach(e => {
        var _a;
        return (_a = socket.current) === null || _a === void 0 ? void 0 : _a.off(e);
      });
      socket.current.close();
    }
    if (host) {
      const ws = io(host + `/${namespace}`, {
        autoConnect: false,
        transports: ['websocket']
      });
      ws.on('connect', () => {
        setConnected(true);
        setSocketID(ws.id);
        setError(null);
      });
      ws.on('disconnect', value => {
        setConnected(false);
        setError(null);
        setSocketID(null);
        ws.close();
      });
      ws.on('connect_error', err => {
        setError(err.message);
        setConnected(false);
        setSocketID(null);
        ws.close();
      });
      ws.on('error', err => {
        setError(err.message);
      });
      Object.keys(events).forEach(e => {
        ws.on(e, value => {
          events[e](e, value);
        });
      });
      ws.connect();
      socket.current = ws;
    } else {
      socket.current = null;
    }
    return () => {
      if (socket.current) {
        Object.keys(events).forEach(e => {
          var _a;
          return (_a = socket.current) === null || _a === void 0 ? void 0 : _a.off(e);
        });
        socket.current.close();
      }
    };
  }, [host, namespace]);
  return {
    host: host,
    namespace: namespace,
    connected: connected,
    socketID: socketID,
    error: error,
    emitEvent: emitWSEvent
  };
}

const initialState$4 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
function useMeasure() {
  const [element, ref] = useState(null);
  const [rect, setRect] = useState(initialState$4);
  const observer = useMemo(() => {
    return new window.ResizeObserver(entries => {
      if (entries[0]) {
        const {
          x,
          y,
          width,
          height,
          top,
          left,
          bottom,
          right
        } = entries[0].contentRect;
        setRect({
          x,
          y,
          width,
          height,
          top,
          left,
          bottom,
          right
        });
      }
    });
  }, []);
  useIsomorphicLayoutEffect(() => {
    if (element) {
      observer.observe(element);
      return () => {
        observer.disconnect();
      };
    } else {
      return () => {
        // Do nothing
      };
    }
  }, [element]);
  return [ref, rect];
}

const useStyles$1i = makeStyles()(( /*theme*/
) => {
  return {
    root: {
      alignSelf: 'center',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  };
});
function LottieLoader({
  className,
  style,
  classes: classesProp,
  src,
  defaultSrc = defaultLottie
}) {
  const {
    classes,
    cx
  } = useStyles$1i(undefined, {
    props: {
      classes: classesProp
    }
  });
  const parseLottie = lottie => {
    return typeof lottie === 'string' ? lottie : JSON.stringify(lottie);
  };
  const [ref, {
    width,
    height
  }] = useMeasure();
  const lottieSrc = useMemo(() => {
    return parseLottie(src || defaultSrc);
  }, [src, defaultSrc]);
  const scriptStatus = useScript('https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js');
  const [lottieRef] = useHookWithRefCallback(ref => {
    if (ref && scriptStatus === 'ready' && !src) {
      ref.src = lottieSrc;
    }
  }, [scriptStatus, lottieSrc]);
  const LottiePlayer = React.createElement('lottie-player', {
    ref: lottieRef,
    src: lottieSrc,
    background: 'transparent',
    speed: 1,
    style: {
      width,
      height
    },
    loop: true,
    autoplay: true
  });
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: style,
    ref: ref
  }, {
    children: scriptStatus === 'ready' && LottiePlayer
  }));
}

const useStyles$1h = makeStyles()(( /*theme*/
) => {
  return {
    root: {}
  };
});
function SuspenseLoader({
  className,
  style,
  classes: classesProp,
  children
}) {
  useStyles$1h(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx(Suspense, Object.assign({
    fallback: jsx(Loader, {
      variant: "circular"
    })
  }, {
    children: children
  }));
}

function DefaultAuthGuard({
  roles,
  paths
}) {
  const location = useLocation();
  const {
    auth = {},
    isInRole
  } = useAuthorisation();
  const {
    user
  } = auth;
  const {
    login,
    unauthorised
  } = paths;
  const externalLogin = login.startsWith('http');
  // Prevent looping
  const isInGuard = location.pathname.endsWith(unauthorised) || location.pathname.endsWith(login);
  // Just for clarity on the code
  const isAuthenticated = Boolean(user);
  // If we are redirecting to an external login, update the location
  if (!isAuthenticated && externalLogin) {
    window.location.href = login;
    return null;
  } else {
    return isInGuard || isInRole(roles) ?
    // The user has the appropriate role assigned
    jsx(SuspenseLoader, {
      children: jsx(Outlet, {})
    }) : jsx(Navigate, {
      to: user ?
      // There is a user but they are not authorised for this page
      unauthorised :
      // There is no user so ask them to log in
      login,
      state: {
        from: location
      },
      replace: true
    });
  }
}

const AuthContext = createContext({});
function useDefaultAuthorisation() {
  return useContext(AuthContext);
}
function DefaultAuthProvider({
  children,
  paths = {}
}) {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist') || 'false'));
  const [authPaths] = useState(_.merge({}, {
    login: '/login',
    unauthorised: '/unauthorised',
    logout: '/logout'
  }, paths));
  const isInRole = useCallback(roles => {
    if (!auth || !auth.user) {
      return false;
    }
    return false;
  }, [auth]);
  const logoutUser = accessToken => {
    console.log('redirect to logout page');
  };
  return jsx(AuthContext.Provider, Object.assign({
    value: {
      auth,
      setAuth,
      persist,
      setPersist,
      GuardComponent: _a => {
        var {
            roles
          } = _a,
          rest = __rest(_a, ["roles"]);
        return jsx(DefaultAuthGuard, Object.assign({
          paths: authPaths,
          roles: roles
        }, rest));
      },
      isInRole,
      logoutUser
    }
  }, {
    children: children
  }));
}

const useStyles$1g = makeStyles()((theme, {
  inheritFontSize,
  size,
  color
}) => {
  const sizes = {
    inherit: inheritFontSize && (typeof inheritFontSize === 'string' ? inheritFontSize : `${inheritFontSize}px`) || 'inherit',
    small: theme.typography.pxToRem(20),
    medium: theme.typography.pxToRem(24),
    large: theme.typography.pxToRem(36)
  };
  const colors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    action: theme.palette.action.active,
    error: theme.palette.error.main,
    disabled: theme.palette.action.disabled,
    inherit: undefined
  };
  return {
    root: {},
    ionWrapperFn: {
      width: size === 'inherit' ? `calc(${sizes[size]} - 2px) !important` : `calc(${sizes[size]} - 2px) !important`,
      height: size === 'inherit' ? `calc(${sizes[size]} - 2px) !important` : `calc(${sizes[size]} - 2px) !important`,
      padding: 0,
      '& svg': {
        height: '85%',
        width: '85%'
      }
    },
    faWrapper: {
      // fa icon designs are generally heavier and therefore end up appearing larger
      // so reducing the size so they are visually equivalent
      '& svg': {
        height: '85%',
        width: '85%'
      }
    },
    tabWrapper: {},
    iconWrapperSizeFn: {
      display: 'flex !important',
      alignItems: 'center',
      justifyContent: 'center',
      width: `${sizes[size]} !important`,
      height: `${sizes[size]} !important`,
      '& svg': {
        height: '95%',
        width: '95%'
      }
    },
    colorFn: {
      color: colors[color]
    }
  };
});
function Icon({
  className,
  style,
  sx,
  children = 'question_mark',
  color = 'inherit',
  size = 'medium',
  classes: classesProp,
  onClick
}) {
  const inheritFontSize = size === 'inherit' ? style === null || style === void 0 ? void 0 : style.fontSize : undefined;
  const {
    classes,
    cx
  } = useStyles$1g({
    size,
    color,
    inheritFontSize
  }, {
    props: {
      classes: classesProp
    }
  });
  if (children.startsWith('fa ')) {
    const faType = children.substring(3).split(' ', 2);
    if (faType.length === 1) {
      faType.unshift('fas');
    }
    const faIcon = faType;
    return jsx("span", Object.assign({
      className: cx(classes.root, classes.iconWrapperSizeFn, classes.colorFn, classes.faWrapper, className),
      style: style
    }, {
      children: jsx(FontAwesomeIcon, {
        icon: faIcon,
        onClick: onClick
      })
    }));
  } else if (children.startsWith('ion ')) {
    const ionType = children.substring(4).split(' ', 2);
    const ionIcon = ionType[0];
    return jsx(IonIcon, {
      style: style,
      className: cx(classes.root, classes.iconWrapperSizeFn, classes.ionWrapperFn, classes.colorFn, className),
      onClick: onClick,
      name: ionIcon
    });
  } else if (children.startsWith('tab ')) {
    const tablerType = children.substring(4).split(' ', 2);
    const tablerIcon = _.capitalize(tablerType[0]);
    const TabIcon = tablerIcons[tablerIcon];
    return jsx(TabIcon, {
      style: style,
      className: cx(classes.root, classes.iconWrapperSizeFn, classes.tabWrapper, classes.colorFn, className),
      onClick: onClick,
      name: tablerIcon
    });
  } else {
    return jsx(MUIIcon, Object.assign({
      className: cx(classes.root, className),
      style: style,
      color: color,
      fontSize: size,
      sx: sx,
      onClick: onClick
    }, {
      children: children
    }));
  }
}

const useStyles$1f = makeStyles()(theme => {
  return {
    root: {
      width: '100%',
      boxSizing: 'border-box'
    },
    alertTitle: {},
    alertTitleNoContent: {
      marginBottom: 0
    }
  };
});
function Error$1({
  className,
  style,
  error,
  children,
  size = 'medium',
  classes: classesProp,
  iconMapping
}) {
  const {
    classes,
    cx
  } = useStyles$1f(undefined, {
    props: {
      classes: classesProp
    }
  });
  const iconMap = _.merge({
    error: 'error_outlined',
    info: 'info_outlined',
    success: 'task_alt',
    warning: 'report_problem_outlined'
  }, iconMapping || {});
  const title = (error === null || error === void 0 ? void 0 : error.message) || '';
  const severity = (error === null || error === void 0 ? void 0 : error.severity) || 'error';
  return jsx(Alert, Object.assign({
    className: cx(classes.root, className),
    style: style,
    severity: severity,
    icon: jsx(Icon, Object.assign({
      size: size
    }, {
      children: iconMap[severity]
    }))
  }, {
    children: jsxs(Fragment, {
      children: [title && jsx(AlertTitle, Object.assign({
        className: cx(classes.alertTitle, !children && classes.alertTitleNoContent)
      }, {
        children: title
      })), children]
    })
  }));
}

const useStyles$1e = makeStyles()(theme => {
  return {
    root: {},
    variantPill: {
      borderRadius: '500px'
    },
    noContentMargin: {
      '& .MuiButton-startIcon, & .MuiButton-endIcon': {
        marginLeft: 0,
        marginRight: 0
      }
    }
  };
});
function Button(_a) {
  var {
      className,
      children,
      variant = 'contained',
      icon,
      iconPosition = 'start',
      style,
      color = 'primary',
      size = 'medium',
      classes: classesProp
    } = _a,
    rest = __rest(_a, ["className", "children", "variant", "icon", "iconPosition", "style", "color", "size", "classes"]);
  const {
    classes,
    cx
  } = useStyles$1e(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx(Button$1, Object.assign({
    className: cx(classes.root, className, !children && classes.noContentMargin, variant === 'pill' && classes.variantPill),
    style: style,
    variant: variant === 'pill' ? 'contained' : variant,
    color: color,
    size: size,
    startIcon: icon && iconPosition === 'start' && jsx(Icon, {
      children: icon
    }),
    endIcon: icon && iconPosition === 'end' && jsx(Icon, {
      children: icon
    })
  }, rest, {
    children: children
  }));
}

const useStyles$1d = makeStyles()((theme, {
  size,
  color
}) => {
  // As we want width and height to be equal same we need to parse size
  const sizes = {
    inherit: '1.3em',
    small: theme.typography.pxToRem(20 + 8),
    medium: theme.typography.pxToRem(24 + 8),
    large: theme.typography.pxToRem(36 + 8)
  };
  let palette = null;
  if (color === 'disabled') {
    palette = {
      main: theme.palette.action.disabled,
      contrastText: theme.palette.getContrastText(theme.palette.action.active)
    };
  } else if (color === 'action') {
    palette = {
      main: theme.palette.action.active,
      contrastText: theme.palette.getContrastText(theme.palette.action.active)
    };
  } else if (color !== 'inherit') {
    palette = theme.palette[color];
  }
  return {
    root: {
      cursor: 'default'
    },
    icon: {},
    iconBtn: {
      width: sizes[size],
      height: sizes[size]
    },
    root_text: {
      color: (palette === null || palette === void 0 ? void 0 : palette.main) ? `${palette.main} !important` : undefined
    },
    root_contained: {
      backgroundColor: (palette === null || palette === void 0 ? void 0 : palette.main) ? `${palette.main} !important` : undefined,
      color: (palette === null || palette === void 0 ? void 0 : palette.contrastText) ? `${palette.contrastText} !important` : undefined
    },
    root_outlined: {
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderColor: (palette === null || palette === void 0 ? void 0 : palette.main) ? `${palette.main} !important` : undefined,
      color: (palette === null || palette === void 0 ? void 0 : palette.main) ? `${palette.main} !important` : undefined
    }
  };
});
function IconButton(_a) {
  var {
      className,
      title,
      icon,
      style,
      color = 'primary',
      size = 'medium',
      variant = 'text',
      id,
      classes: classesProp
    } = _a,
    rest = __rest(_a, ["className", "title", "icon", "style", "color", "size", "variant", "id", "classes"]);
  const {
    classes,
    cx
  } = useStyles$1d({
    size,
    color
  }, {
    props: {
      classes: classesProp
    }
  });
  return jsx(Tooltip, Object.assign({
    title: title || ''
  }, {
    children: jsx("span", Object.assign({
      id: id,
      className: cx(classes.root)
    }, {
      children: jsx(IconButton$1, Object.assign({
        className: cx(classes.iconBtn, classes[`root_${variant}`], className),
        "aria-label": title,
        style: style,
        color: "inherit"
      }, rest, {
        children: jsx(Icon, Object.assign({
          size: size,
          color: "inherit",
          className: cx(classes.icon)
        }, {
          children: icon
        }))
      }))
    }))
  }));
}

const useStyles$1c = makeStyles()((theme, {
  count
}) => {
  var _a, _b, _c, _d, _e, _f;
  const columnTemplate = Array(count).fill('auto').join(' ');
  return {
    root: {
      display: 'grid',
      gridTemplateColumns: columnTemplate,
      gap: theme.spacing(1),
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'auto',
        justifyItems: 'end',
        alignItems: 'start'
      }
    },
    action: {},
    action_iconButton: {},
    action_button: {
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
    action_color_inherit: {},
    action_color_default: {},
    action_color_action: {},
    action_color_disabled: {},
    action_color_primary: {
      color: `${(_a = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.primary.light, theme.palette.primary.main, theme.palette.primary.dark], {})) === null || _a === void 0 ? void 0 : _a.toHex8String()}`
    },
    action_color_secondary: {
      color: `${(_b = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.secondary.light, theme.palette.secondary.main, theme.palette.secondary.dark], {})) === null || _b === void 0 ? void 0 : _b.toHex8String()}`
    },
    action_color_error: {
      color: `${(_c = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.error.light, theme.palette.error.main, theme.palette.error.dark], {})) === null || _c === void 0 ? void 0 : _c.toHex8String()}`
    },
    action_color_info: {
      color: `${(_d = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.info.light, theme.palette.info.main, theme.palette.info.dark], {})) === null || _d === void 0 ? void 0 : _d.toHex8String()}`
    },
    action_color_success: {
      color: `${(_e = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.success.light, theme.palette.success.main, theme.palette.success.dark], {})) === null || _e === void 0 ? void 0 : _e.toHex8String()}`
    },
    action_color_warning: {
      color: `${(_f = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.warning.light, theme.palette.warning.main, theme.palette.warning.dark], {})) === null || _f === void 0 ? void 0 : _f.toHex8String()}`
    }
  };
});
function Actions({
  className,
  style,
  classes: classesProp,
  variant = 'iconButton',
  actions
}) {
  const {
    classes,
    cx
  } = useStyles$1c({
    count: actions.length
  }, {
    props: {
      classes: classesProp
    }
  });
  const renderedActions = useMemoDeepCompare(() => {
    return actions.map(action => {
      const ActionComponent = variant === 'iconButton' ? IconButton : Button;
      const actionColor = action.color || 'primary';
      return typeof action !== 'function' ? jsx(ActionComponent, Object.assign({
        color: variant === 'iconButton' ? 'inherit' : actionColor,
        variant: action.variant || 'text'
      }, action, {
        className: cx(classes.action, classes[`action_${variant}`], classes[`action_color_${actionColor}`], action.className),
        children: action.title
      }), action.key || action.title || action.name) : action();
    });
  }, [actions, variant]);
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: renderedActions
  }));
}

const useStyles$1b = makeStyles()((theme, {
  verticalAlign,
  horizontalAlign,
  imageSrc,
  imageFit,
  imagePosition,
  imageAlpha,
  backgroundColor,
  square
}) => {
  var _a;
  const vertical = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end'
  };
  const horizontal = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };
  return {
    root: {
      display: 'flex',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      boxSizing: 'border-box',
      borderRadius: square ? 0 : theme.shape.borderRadius,
      overflow: 'hidden',
      padding: theme.spacing(3),
      flexShrink: 1,
      flexGrow: 1,
      position: 'relative',
      isolation: 'isolate',
      backgroundColor: backgroundColor || undefined,
      color: (_a = mostReadable(backgroundColor || theme.palette.background.default, [theme.palette.text.primary, theme.palette.text.secondary, theme.palette.primary.contrastText, theme.palette.secondary.contrastText])) === null || _a === void 0 ? void 0 : _a.toHex8String()
    },
    containerImageFn: imageSrc ? {
      backgroundImage: `url('${imageSrc}')`,
      objectFit: imageFit,
      backgroundSize: imageFit === 'fill' ? 'auto' : imageFit,
      backgroundPosition: imagePosition,
      backgroundRepeat: 'no-repeat',
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        backgroundColor: backgroundColor || theme.palette.background.default,
        opacity: 1 - imageAlpha
      }
    } : {},
    contentAlignFn: {
      justifyContent: vertical[verticalAlign],
      alignItems: horizontal[horizontalAlign]
    }
  };
});
const Container = forwardRef((props, ref) => {
  const {
      className,
      style,
      children,
      verticalAlign = 'top',
      horizontalAlign = 'left',
      imageSrc,
      imageFit = 'cover',
      imagePosition = 'center',
      imageAlpha = 0.25,
      backgroundColor = null,
      elevation = 0,
      variant = 'elevation',
      square = false,
      classes: classesProp
    } = props,
    rest = __rest(props, ["className", "style", "children", "verticalAlign", "horizontalAlign", "imageSrc", "imageFit", "imagePosition", "imageAlpha", "backgroundColor", "elevation", "variant", "square", "classes"]);
  // TODO: Create a useBackgroundColor hook which will get the parent element with a background set and extract the color
  const [derivedBackground, setDerivedBackground] = useState(null);
  useEffect(() => {
    let color = backgroundColor;
    if (color) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const parsedColor = tinycolor(backgroundColor);
      color = parsedColor.isValid ? parsedColor.toHex8String() : null;
    }
    if (color !== derivedBackground) {
      // @ts-expect-error typing specified ref could be an instance or fuction, that is basically what we are chacking here
      if (ref === null || ref === void 0 ? void 0 : ref.current) {
        // @ts-expect-error typing specified ref could be an instance or fuction, that is basically what we are chacking here
        ref.current.backgroundColor = color;
      }
      setDerivedBackground(color);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundColor]);
  const {
    classes,
    cx
  } = useStyles$1b({
    verticalAlign,
    horizontalAlign,
    imageSrc,
    imageFit,
    imagePosition,
    imageAlpha,
    square,
    backgroundColor: derivedBackground
  }, {
    props: {
      classes: classesProp
    }
  });
  const [pageRef] = useHookWithRefCallback(newRef => {
    if (newRef && !derivedBackground) {
      const color = tinycolor(getComputedStyle(newRef).backgroundColor);
      if (color.getAlpha() > 0) {
        const extractedColor = color.toHex8String();
        setDerivedBackground(extractedColor);
        // @ts-expect-error typing specified ref could be an instance or fuction, that is basically what we are chacking here
        if (ref === null || ref === void 0 ? void 0 : ref.current) {
          // @ts-expect-error typing specified ref could be an instance or fuction, that is basically what we are chacking here
          ref.current.backgroundColor = extractedColor;
        }
      }
    }
  }, []);
  useImperativeHandle(ref, () => {
    // @ts-expect-error required because of modals in mui
    pageRef.current.backgroundColor = derivedBackground;
    return pageRef.current;
  }, [pageRef, derivedBackground]);
  return jsx(Paper, Object.assign({
    className: cx(classes.root, classes.contentAlignFn, className, classes.containerImageFn),
    square: square,
    variant: variant,
    ref: pageRef,
    style: style,
    elevation: _.clamp(elevation, 0, 24)
  }, rest, {
    children: children
  }));
});
Container.displayName = 'Container';

const useStyles$1a = makeStyles()(( /*theme*/
) => {
  return {
    root: {
      position: 'relative',
      width: '100%',
      height: '100%',
      '& > div': {
        position: 'absolute !important'
      },
      display: 'flex',
      flexDirection: 'column'
    },
    modalWrapper: {
      width: '100%',
      height: '100%'
    },
    iframe: {
      border: 'none',
      flexGrow: 1
    },
    modalBackdrop: {
      position: 'absolute'
    }
  };
});
function WebContainer({
  className,
  style,
  id = 'webModalWrapper',
  src,
  title,
  sandbox = ['allow-same-origin', 'allow-scripts', 'allow-forms', 'allow-downloads'],
  classes: classesProp
}) {
  const {
    classes,
    cx
  } = useStyles$1a(undefined, {
    props: {
      classes: classesProp
    }
  });
  useStyles$1a();
  const [loaded, setLoaded] = useState(false);
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style,
    id: id
  }, {
    children: [jsx(IframeResizer, {
      className: cx(classes.iframe),
      title: title,
      id: `${id}_iframe`,
      src: src,
      sandbox: sandbox.join(' '),
      onLoad: () => {
        setLoaded(true);
      },
      style: {
        width: '1px',
        minWidth: '100%'
      },
      autoResize: true,
      scrolling: true
    }), jsx(Modal, Object.assign({
      container: () => {
        return document.getElementById(id);
      },
      open: !loaded,
      componentsProps: {
        backdrop: {
          className: cx(classes.modalBackdrop)
        }
      }
    }, {
      children: jsx("div", Object.assign({
        className: cx(classes.modalWrapper)
      }, {
        children: jsx(Loader, {})
      }))
    }))]
  }));
}

const useStyles$19 = makeStyles()(theme => {
  return {
    root: {
      '& .MenuButton .MuiButton-endIcon, & .MenuButton .MuiButton-startIcon': {
        marginLeft: 0,
        marginRight: 0
      }
    },
    root_text: {},
    root_outlined: {},
    root_contained: {},
    root_pill: {
      borderRadius: '500px'
    },
    menu: {
      zIndex: 999
    },
    menuContainer: {
      padding: theme.spacing(0)
    },
    optionWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    itemIconButton: {
      marginRight: theme.spacing(2)
    }
  };
});
function SplitButton({
  className,
  variant = 'contained',
  icon = 'arrow_drop_down',
  iconPosition = 'start',
  style,
  color = 'primary',
  size = 'medium',
  id,
  placement = 'bottom-end',
  onChange,
  options = [],
  selectedIndex = 0,
  renderOption,
  clickOnSelect = false,
  classes: classesProp
}) {
  const {
    classes,
    cx
  } = useStyles$19(undefined, {
    props: {
      classes: classesProp
    }
  });
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[selectedIndex]);
  const menuID = `${id}_split_menu`;
  renderOption = renderOption || (option => {
    return jsxs("div", Object.assign({
      className: cx(classes.optionWrapper)
    }, {
      children: [jsx(Icon, Object.assign({
        className: cx(classes.itemIconButton, option.className),
        size: "inherit",
        color: "inherit",
        title: option.label
      }, {
        children: option.icon || 'blank'
      })), (option.selectedLabel || option.label) && jsx(Typography, {
        children: selectedOption === option && option.selectedLabel || option.label
      })]
    }));
  });
  useEffect(() => {
    setSelectedOption(options[selectedIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);
  const toggleMenu = () => {
    setOpen(previousOpen => !previousOpen);
  };
  const onMenuClosed = () => {
    setOpen(false);
  };
  const selectOption = (e, option) => {
    setSelectedOption(option);
    setOpen(false);
    if (clickOnSelect) {
      option.onClick && option.onClick(null, option);
    }
  };
  const buttonText = (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.selectedLabel) || (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) || '';
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [jsxs(ButtonGroup, Object.assign({
      className: cx(classes[`root_${variant}`]),
      variant: variant === 'pill' ? 'contained' : variant,
      color: color,
      size: size,
      ref: anchorRef,
      "aria-label": buttonText
    }, {
      children: [jsx(Button, Object.assign({
        variant: variant,
        color: color,
        size: size,
        icon: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.icon,
        iconPosition: iconPosition,
        onClick: e => {
          (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.onClick) && selectedOption.onClick(e, selectedOption);
        }
      }, {
        children: buttonText
      })), jsx(Button, {
        className: cx('MenuButton'),
        size: "small",
        icon: icon,
        variant: variant,
        color: color,
        "aria-controls": open ? menuID : undefined,
        "aria-expanded": open ? 'true' : undefined,
        "aria-label": buttonText,
        "aria-haspopup": "menu",
        onClick: toggleMenu
      })]
    })), jsx(Popper, Object.assign({
      className: cx(classes.menu),
      open: open,
      anchorEl: anchorRef.current,
      role: "menu",
      transition: true,
      disablePortal: true,
      placement: placement
    }, {
      children: ({
        TransitionProps
      }) => {
        return jsx(Grow, Object.assign({}, TransitionProps, {
          children: jsx(Container, Object.assign({
            elevation: 1,
            className: cx(classes.menuContainer)
          }, {
            children: jsx(ClickAwayListener, Object.assign({
              onClickAway: onMenuClosed
            }, {
              children: jsx(MenuList, Object.assign({
                id: menuID,
                autoFocusItem: true
              }, {
                children: options.filter(o => o !== selectedOption).filter(i => i).map(option => {
                  return jsx(MenuItem, Object.assign({
                    onClick: e => {
                      selectOption(e, option);
                    }
                  }, {
                    children:
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    renderOption(option)
                  }), option.label);
                })
              }))
            }))
          }))
        }));
      }
    }))]
  }));
}

const useStyles$18 = makeStyles()(theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      background: theme.palette.background.default
    },
    root_prominent: {
      height: '100%',
      padding: theme.spacing(3),
      paddingTop: theme.spacing(4)
    },
    root_condensed: {
      height: 'auto',
      minHeight: 'auto',
      padding: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      marginRight: theme.spacing(2)
    },
    list: {
      alignSelf: 'stretch'
    },
    list_prominent: {
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginTop: theme.spacing(1),
      '& > *': {
        marginBottom: theme.spacing(1)
      }
    },
    list_condensed: {
      padding: theme.spacing(0.5),
      marginTop: theme.spacing(0.5),
      '& > *': {
        marginBottom: theme.spacing(0.5)
      }
    },
    contentWrapper: {
      textAlign: 'center',
      margin: theme.spacing(2),
      alignSelf: 'center'
    }
  };
});
function ErrorWrapper({
  className,
  style,
  classes: classesProp,
  role = 'alert',
  title,
  showDetails = process.env['NODE_ENV'] !== 'production',
  errors = [],
  children,
  variant = 'prominent',
  icon = 'error_outlined'
}) {
  const {
    classes,
    cx
  } = useStyles$18(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsxs(Container, Object.assign({
    className: cx(classes.root, classes[`root_${variant}`], className),
    style: style,
    role: role
  }, {
    children: [title && jsxs("div", Object.assign({
      className: cx(classes.titleWrapper)
    }, {
      children: [jsx(Icon, Object.assign({
        color: "error",
        className: cx(classes.icon)
      }, {
        children: icon
      })), jsx(Typography, Object.assign({
        color: "error",
        variant: "h5",
        component: "h1"
      }, {
        children: title
      }))]
    })), jsx("div", Object.assign({
      className: cx(classes.list, classes[`list_${variant}`])
    }, {
      children: errors.filter((e, index, self) => {
        return self.findIndex(error => error.message === e.message) === index;
      }).map((error, index) => {
        return jsx(Error$1, {
          error: error
        }, error.message || index);
      })
    })), children && jsx("div", Object.assign({
      className: cx(classes.contentWrapper)
    }, {
      children: children
    }))]
  }));
}

// TODO: Use localisation for title and button text
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      title: props.title || 'Oops something went wrong and we cannot recover from it.',
      buttonText: 'Reload'
    };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      errors: [{
        message: error.message
      }]
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState(state => {
      return Object.assign(Object.assign({}, state), {
        errors: [error]
      });
    });
  }
  render() {
    const errors = this.state.errors;
    const title = this.state.title;
    const buttonText = this.state.buttonText;
    const {
      children
    } = this.props;
    return errors && errors.length > 0 ? jsx(ErrorWrapper, Object.assign({
      title: title,
      errors: errors
    }, {
      children: jsx(Button, Object.assign({
        icon: "refresh",
        color: "secondary",
        onClick: () => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      }, {
        children: buttonText
      }))
    })) : children;
  }
}

const useStyles$17 = makeStyles()(( /*theme*/
) => {
  return {
    root: {},
    alert: {
      alignItems: 'center'
    }
  };
});
function Snackbar(_a) {
  var {
      className,
      style,
      classes: classesProp,
      message,
      action,
      variant = 'message',
      autoHideDuration = 6000,
      open,
      onClose
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "message", "action", "variant", "autoHideDuration", "open", "onClose"]);
  const {
    classes,
    cx
  } = useStyles$17(undefined, {
    props: {
      classes: classesProp
    }
  });
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open, message]);
  return jsx(Snackbar$1, Object.assign({
    className: cx(classes.root, className),
    style: style,
    message: variant === 'message' ? message : null,
    action: variant === 'message' ? action : null,
    autoHideDuration: autoHideDuration,
    onClose: (e, reason) => {
      setIsOpen(false);
      onClose && onClose(e, reason);
    },
    open: isOpen
  }, rest, {
    children: variant !== 'message' ? jsxs(Alert, Object.assign({
      className: cx(classes.alert),
      severity: variant
    }, {
      children: [message, action]
    })) : undefined
  }));
}

const useStyles$16 = makeStyles()(theme => {
  return {
    root: {
      background: theme.palette.background.default
    }
  };
});
function UpdateAvailable({
  className,
  style,
  classes: classesProp
}) {
  const {
    classes,
    cx
  } = useStyles$16(undefined, {
    props: {
      classes: classesProp
    }
  });
  const [updateAvailable, setUpdateAvailable] = useState(false);
  useEffect(() => {
    const listener = () => {
      setUpdateAvailable(true);
    };
    window.addEventListener('updateAvailable', listener);
    return () => {
      window.removeEventListener('updateAvailable', listener);
    };
  }, []);
  const onReload = () => {
    window.location.reload();
  };
  // TODO: Make use of localization for text in this control
  return updateAvailable && jsx(Modal, Object.assign({
    open: updateAvailable,
    onClose: onReload
  }, {
    children: jsxs(Container, Object.assign({
      className: cx(classes.root, className),
      verticalAlign: "center",
      horizontalAlign: "center"
    }, {
      children: [jsx(Typography, Object.assign({
        variant: "h6"
      }, {
        children: "An update is available"
      })), jsx(Typography, Object.assign({
        variant: "subtitle1"
      }, {
        children: "Please refresh for the latest version"
      })), jsx(Button, Object.assign({
        color: "secondary",
        variant: "contained",
        size: "large",
        icon: "refresh",
        onClick: onReload
      }, {
        children: "Refresh"
      }))]
    }))
  })) || null;
}

const initialState$3 = {
  open: false
};
const dialog$1 = createSlice({
  name: 'icatalyst/contextPanel',
  initialState: initialState$3,
  reducers: {
    openPanel: (_, action) => {
      return Object.assign(Object.assign({}, action.payload), {
        open: true
      });
    },
    closePanel: () => {
      return {
        open: false
      };
    }
  }
});
const reduxConfig$4 = {
  ignoredActions: ['icatalyst/contextPanel/openPanel'],
  ignoredPaths: ['icatalyst/contextPanel']
};

const initialState$2 = {
  open: false
};
const dialog = createSlice({
  name: 'icatalyst/dialog',
  initialState: initialState$2,
  reducers: {
    openDialog: (_, action) => {
      return Object.assign(Object.assign({}, action.payload), {
        open: true
      });
    },
    closeDialog: () => {
      return {
        open: false
      };
    }
  }
});
const reduxConfig$3 = {
  ignoredActions: ['icatalyst/dialog/openDialog'],
  ignoredPaths: ['icatalyst/dialog']
};

const initialState$1 = {
  open: false
};
const message = createSlice({
  name: 'icatalyst/message',
  initialState: initialState$1,
  reducers: {
    showMessage: (_, action) => {
      return Object.assign(Object.assign({}, action.payload), {
        open: true
      });
    },
    hideMessage: () => {
      return {
        open: false
      };
    }
  }
});
const reduxConfig$2 = {
  ignoredActions: ['icatalyst/message/openDialog'],
  ignoredPaths: ['icatalyst/message']
};

const initialState = {
  layoutSettings: {},
  current: {
    layouts: {}
  },
  userSettings: {
    layouts: {}
  }
};
const settings = createSlice({
  name: 'icatalyst/settings',
  initialState: initialState,
  reducers: {
    /**
     * Updates the layout to the new layout state.  This also removes
     * and user overrides
     * @param state the current state
     * @param action the new layout configuration
     * @returns the new state
     */
    resetLayout(state, action) {
      state.layoutSettings[action.payload.name] = action.payload;
      state.userSettings.layouts[action.payload.name] = {};
      state.current.layouts[action.payload.name] = action.payload;
    },
    /**
     * Updates the user settings and the current layout based on the updates provided
     * @param state the current state
     * @param action the updates to apply
     * @returns the new state
     */
    setLayoutUserSettings(state, action) {
      const _a = action.payload,
        {
          name
        } = _a,
        rest = __rest(_a, ["name"]);
      // Update the user settings
      state.userSettings.layouts[name] = _.merge({}, state.userSettings.layouts[name], rest);
      // Update the current state
      state.current.layouts[name] = _.merge(state.layoutSettings[name], state.userSettings.layouts[name]);
    },
    /**
     * Updates the default settings, this should be used if the underlying layout
     * changes but you want to keep the user applied changes to the new layout
     * @param state the current state
     * @param action the new default configuration
     * @returns the new state
     */
    setDefault(state, action) {
      const {
        name
      } = action.payload;
      state.layoutSettings[name] = action.payload;
      // Update the current state
      state.current.layouts[name] = _.merge(state.layoutSettings[name], state.userSettings.layouts[name]);
    }
  }
});
const reduxConfig$1 = {};

var applicationSlices = [dialog$1, dialog, message, settings];
const actions = {
  contextPanel: dialog$1.actions,
  dialog: dialog.actions,
  message: message.actions,
  settings: settings.actions
};
const reduxConfig = [reduxConfig$4, reduxConfig$3, reduxConfig$2, reduxConfig$1].reduce((acc, config) => {
  const accConfig = acc.reduxSerializableConfig;
  if (config.ignoredPaths) {
    accConfig.ignoredPaths = [...accConfig.ignoredPaths, ...config.ignoredPaths];
  }
  if (config.ignoredActionPaths) {
    accConfig.ignoredActionPaths = [...accConfig.ignoredActionPaths, ...config.ignoredActionPaths];
  }
  if (config.ignoredActions) {
    accConfig.ignoredActions = [...accConfig.ignoredActions, ...config.ignoredActions];
  }
  return acc;
}, {
  reduxSerializableConfig: {
    ignoredPaths: [],
    ignoredActionPaths: [],
    ignoredActions: []
  }
});

function getApplicationReducers() {
  return applicationSlices.reduce((acc, slice) => {
    acc[slice.name] = slice.reducer;
    return acc;
  }, {});
}

const useAppDispatch = useDispatch;
const useAppSelector = useSelector;
function useLayoutSelector(name) {
  return useSettingsSelector().current.layouts[name];
}
function useSettingsSelector() {
  return useAppSelector(state => {
    return state['icatalyst/settings'];
  });
}
function useDialogSelector() {
  return useAppSelector(state => {
    return state['icatalyst/dialog'];
  });
}
function useContextPanelSelector() {
  return useAppSelector(state => {
    return state['icatalyst/contextPanel'];
  });
}
function useMessageSelector() {
  return useAppSelector(state => {
    return state['icatalyst/message'];
  });
}

function createStore({
  reducers
}) {
  return configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      // There are some actions that are non serialisable
      serializableCheck: reduxConfig.reduxSerializableConfig
    }),
    reducer: Object.assign(Object.assign({}, getApplicationReducers()), reducers)
  });
}

const useStyles$15 = makeStyles()(theme => {
  return {
    root: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      background: 'green',
      width: theme.spacing(12),
      height: theme.spacing(12),
      paddingRight: theme.spacing(1),
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderColor: theme.palette.divider
    },
    textArea: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      overflow: 'hidden',
      maxWidth: '100%',
      paddingLeft: theme.spacing(1)
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'right',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      overflow: 'hidden'
    }
  };
});
function ColorSwatch({
  className,
  style,
  classes: classesProp,
  title,
  color
}) {
  const {
    classes,
    cx
  } = useStyles$15(undefined, {
    props: {
      classes: classesProp
    }
  });
  const theme = useTheme();
  const colorHex = tinycolor(color).toHex8String();
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: Object.assign(Object.assign({}, style), {
      backgroundColor: colorHex,
      color: theme.palette.getContrastText(colorHex)
    })
  }, {
    children: jsxs("div", Object.assign({
      className: cx(classes.textArea)
    }, {
      children: [jsx(Tooltip, Object.assign({
        title: title
      }, {
        children: jsx(Typography, Object.assign({
          className: cx(classes.title),
          variant: "body1"
        }, {
          children: title
        }))
      })), jsx(Typography, Object.assign({
        variant: "caption"
      }, {
        children: colorHex
      }))]
    }))
  }));
}

const useStyles$14 = makeStyles()(theme => {
  return {
    root: {
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      marginTop: theme.spacing(2),
      height: 'auto',
      width: '100%',
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: '100%'
    },
    variants: {
      paddingLeft: 0
    },
    swatches: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    title: {
      fontWeight: 'bold'
    }
  };
});
function ColorChart({
  className,
  style,
  classes: classesProp,
  title,
  colors,
  variants = false
}) {
  const {
    classes,
    cx
  } = useStyles$14(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsxs(Container, Object.assign({
    elevation: variants ? 0 : 1,
    className: cx(classes.root, variants && classes.variants, className),
    style: style
  }, {
    children: [jsx(Typography, Object.assign({
      className: cx(classes.title),
      variant: "subtitle1",
      gutterBottom: true
    }, {
      children: title
    })), jsx("div", Object.assign({
      className: cx(classes.swatches)
    }, {
      children: Object.entries(colors).map(([key, color]) => {
        return typeof color === 'string' ? jsx(ColorSwatch, {
          title: key,
          color: color
        }, key) : jsx(ColorChart, {
          title: `${title} - ${key}`,
          colors: color,
          variants: true
        }, key);
      })
    }))]
  }));
}

function Theme({
  children
}) {
  const {
    themes
  } = useApplication();
  // TODO: Get the name of the active default theme
  const selectedThemeName = 'default';
  const selectedTheme = themes && themes[selectedThemeName];
  return jsxs(ThemeProvider, Object.assign({
    theme: selectedTheme || {}
  }, {
    children: [jsx(GlobalStyles, {
      styles: {
        html: {
          height: '100%',
          width: '100%',
          backgroundColor: selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.palette.background.default
        },
        body: {
          height: '100%',
          width: '100%'
        },
        '#root': {
          height: '100%',
          width: '100%'
        },
        '::-webkit-scrollbar': {
          backgroundColor: selectedTheme.palette.action.hover,
          borderRadius: (selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.spacing(1)) || 8,
          width: (selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.spacing(1.5)) || 12
        },
        '::-webkit-scrollbar-track, ::-webkit-scrollbar-corner': {
          background: 'transparent'
        },
        /* Track */
        '::-webkit-scrollbar-track': {
          borderRadius: (selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.spacing(1)) || 8
        },
        /* Handle */
        '::-webkit-scrollbar-thumb': {
          backgroundColor: alpha((selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.palette.primary.compliment) || 'grey', 1 - ((selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.palette.action.disabledOpacity) || 0.38)),
          backgroundClip: 'content-box',
          borderRadius: (selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.spacing(1)) || 8,
          border: `${selectedTheme.spacing(0.5)} solid transparent`
        }
      }
    }), children]
  }));
}

const useStyles$13 = makeStyles()(theme => {
  const pillPadding = 2;
  return {
    root: {},
    root_filled: {},
    root_outlined: {},
    root_standard: {},
    root_pill: {
      '& .MuiInputBase-root': {
        borderRadius: '500px',
        paddingLeft: theme.spacing(pillPadding),
        paddingRight: theme.spacing(pillPadding)
      },
      '& .MuiInputLabel-root': {
        paddingLeft: theme.spacing(pillPadding)
      },
      '& .Mui-focused .MuiOutlinedInput-notchedOutline legend span': {
        marginLeft: theme.spacing(pillPadding * 0.75)
      }
    },
    emptyLabel: {
      '& .Mui-focused .MuiOutlinedInput-notchedOutline legend span': {
        marginLeft: 0
      }
    },
    inputLabel: {}
  };
});
function createInputStyle(theme, rootClass) {
  const inputPlaceholderHidden = {
    opacity: '0 !important'
  };
  const inputPlaceholderVisible = {
    opacity: 1
  };
  const inputPlaceholder = {
    opacity: 1,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  return Object.assign(Object.assign({}, theme.typography.body1), {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    border: 'none',
    font: 'inherit',
    letterSpacing: 'inherit',
    color: 'currentColor',
    padding: '4px 0 5px',
    background: 'none',
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: 'transparent',
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: '100%',
    // Fix IE11 width issue
    animationName: 'mui-auto-fill-cancel',
    animationDuration: '10ms',
    '&::-webkit-input-placeholder': inputPlaceholder,
    '&::-moz-placeholder': inputPlaceholder,
    // Firefox 19+
    '&:-ms-input-placeholder': inputPlaceholder,
    // IE11
    '&::-ms-input-placeholder': inputPlaceholder,
    // Edge
    '&:focus': {
      outline: 'none'
    },
    '&:invalid': {
      boxShadow: 'none'
    },
    '&::-webkit-search-decoration': {
      // Remove the padding when type=search.
      WebkitAppearance: 'none'
    },
    '&:-webkit-autofill': {
      WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
      WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
      caretColor: theme.palette.mode === 'light' ? null : '#fff',
      borderRadius: 'inherit',
      animationDuration: '5000s',
      animationName: 'mui-auto-fill'
    },
    [`.${rootClass} label[data-shrink=false] + .MuiInputBase-formControl &`]: {
      '&::-webkit-input-placeholder': inputPlaceholderHidden,
      '&::-moz-placeholder': inputPlaceholderHidden,
      // Firefox 19+
      '&:-ms-input-placeholder': inputPlaceholderHidden,
      // IE11
      '&::-ms-input-placeholder': inputPlaceholderHidden,
      // Edge
      '&:focus::-webkit-input-placeholder': inputPlaceholderVisible,
      '&:focus::-moz-placeholder': inputPlaceholderVisible,
      // Firefox 19+
      '&:focus:-ms-input-placeholder': inputPlaceholderVisible,
      // IE11
      '&:focus::-ms-input-placeholder': inputPlaceholderVisible
      // Edge
    },
    '.MuiInputBase-inputAdornedStart &': {
      paddingLeft: 0
    },
    '.MuiInputBase-inputAdornedEnd &': {
      paddingRight: 0
    }
  });
}
const InputBase = forwardRef((_a, ref) => {
  var _b, _c, _d;
  var {
      className,
      style,
      classes: classesProp,
      id,
      variant = 'outlined',
      autoComplete = 'off',
      fullWidth = true,
      clearable = false,
      icon,
      iconColor = 'primary',
      iconSize = 'medium',
      value,
      errors,
      label,
      placeholder,
      helperText,
      InputComponent,
      InputProps,
      onChange,
      shrink,
      clearableIconLabel,
      clearableIcon = 'cancel',
      clearableIconColor = 'inherit',
      clearableDisabled,
      clearableVisible,
      onClearableClick,
      size
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "id", "variant", "autoComplete", "fullWidth", "clearable", "icon", "iconColor", "iconSize", "value", "errors", "label", "placeholder", "helperText", "InputComponent", "InputProps", "onChange", "shrink", "clearableIconLabel", "clearableIcon", "clearableIconColor", "clearableDisabled", "clearableVisible", "onClearableClick", "size"]);
  const tempID = useId();
  const controlID = id || tempID;
  const hasErrors = errors && errors.length > 0;
  const labelText = useLocalization(label);
  const placeholderText = useLocalization(placeholder);
  const translatedHelperText = useLocalization(hasErrors ? errors[0] : helperText);
  const [stateValue, updateStateValue] = useState(value || '');
  const {
    classes,
    cx
  } = useStyles$13(undefined, {
    props: {
      classes: classesProp
    }
  });
  const setStateValue = value => {
    updateStateValue(value || '');
  };
  useEffect(() => {
    setStateValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const inputRef = useRef();
  const isClearableDisabled = clearableDisabled ? clearableDisabled((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.value) : !((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.value);
  const isClearableVisible = clearableVisible ? clearableVisible((_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.value) : clearable && stateValue;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClearableClick = useCallback(onClearableClick || (e => {
    setStateValue('');
    onChange && onChange(e, null);
  }), [onClearableClick, onChange, setStateValue]);
  function handleChange(e) {
    const newValue = e.target.value;
    setStateValue(newValue);
    onChange && onChange(e, newValue);
  }
  return jsx(TextField$2, Object.assign({
    id: controlID,
    ref: ref,
    className: cx(classes.root, variant && classes[`root_${variant}`], !label && classes.emptyLabel, className)
  }, rest, {
    style: style,
    variant: variant === 'pill' ? 'outlined' : variant,
    autoComplete: autoComplete,
    fullWidth: fullWidth,
    error: hasErrors,
    helperText: translatedHelperText,
    placeholder: placeholderText,
    label: labelText,
    "aria-label": labelText,
    inputRef: inputRef,
    size: size,
    value: stateValue,
    // NOTE: instead of onChange, we use onInput in the componentsProps because of chrome autofill
    // onChange={handleChange}
    InputLabelProps: {
      shrink: shrink
    },
    FormHelperTextProps: {
      'aria-live': hasErrors ? 'assertive' : 'polite'
    },
    InputProps: {
      size: size,
      inputComponent: InputComponent ? 'div' : 'input',
      components: InputComponent ? {
        Input: InputComponent
      } : {},
      componentsProps: {
        input: Object.assign(Object.assign({}, InputProps), {
          // This is to support autofill fields
          onInput: handleChange
        })
      },
      startAdornment: icon && jsx(InputAdornment, Object.assign({
        position: "start"
      }, {
        children: jsx(Icon, Object.assign({
          size: iconSize,
          color: hasErrors ? 'error' : iconColor
        }, {
          children: icon
        }))
      })),
      endAdornment: isClearableVisible && jsx(InputAdornment, Object.assign({
        position: "end"
      }, {
        children: jsx(IconButton, {
          size: "small",
          icon: clearableIcon,
          color: clearableIconColor,
          title: clearableIconLabel,
          disabled: isClearableDisabled,
          onClick: handleClearableClick
        })
      }))
    }
  }));
});

const useStyles$12 = makeStyles()((theme, params, classes) => {
  const pillPadding = 2;
  return {
    root: {},
    root_standard: {},
    root_pill: {
      '& .MuiInputBase-root': {
        borderRadius: '500px',
        paddingLeft: theme.spacing(pillPadding),
        paddingRight: theme.spacing(pillPadding)
      },
      '& .MuiInputLabel-root': {
        paddingLeft: theme.spacing(pillPadding)
      },
      '& .Mui-focused .MuiOutlinedInput-notchedOutline legend span': {
        marginLeft: theme.spacing(pillPadding * 0.75)
      }
    },
    root_outlined: {
      boxSizing: 'border-box',
      [`& .${classes.inputField}`]: {
        padding: theme.spacing(1.75),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderRadius: theme.shape.borderRadius
      }
    },
    root_filled: {
      '& .MuiChip-root': {
        marginTop: theme.spacing(1)
      },
      [`& .${classes.inputField}`]: {
        paddingTop: theme.spacing(3),
        paddingRight: theme.spacing(1.5),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(1.5)
      }
    },
    root_size_small: {
      [`& .${classes.inputField}`]: {
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(1.75),
        paddingRight: theme.spacing(1.75)
      }
    },
    root_size_medium: {
      [`& .${classes.inputField}`]: {
        minHeight: theme.spacing(7.5)
      }
    },
    root_disabled: {
      [`& .${classes.inputField}`]: {
        color: theme.palette.text.disabled,
        cursor: 'default',
        opacity: 1
      }
    },
    popperContainer: {
      zIndex: theme.zIndex.modal,
      backgroundColor: theme.palette.background.paper,
      padding: 0,
      display: 'flex',
      flexDirection: 'row'
    },
    inputWrapper: {},
    inputField: createInputStyle(theme, classes.root),
    optionList: {
      listStyle: 'none',
      margin: 0,
      padding: '8px 0',
      maxHeight: '40vh',
      overflow: 'auto',
      flexGrow: 1
    },
    focused: {
      background: 'green'
    },
    focusedVisible: {
      background: 'purple'
    },
    optionListItem: {
      minHeight: theme.spacing(6),
      display: 'flex',
      overflow: 'hidden',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: theme.spacing(0.75),
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: theme.spacing(0.75),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        minHeight: 'auto'
      },
      [`&.${classes.focused}`]: {
        backgroundColor: theme.palette.action.focus,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      [`&:hover`]: {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&[aria-disabled="true"]': {
        opacity: theme.palette.action.disabledOpacity,
        pointerEvents: 'none'
      },
      [`&.${classes.focusVisible}`]: {
        backgroundColor: theme.palette.action.focus
      },
      '&[aria-selected="true"]': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        [`&.${classes.focused}`]: {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.action.selected
          }
        },
        [`&.${classes.focusVisible}`]: {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        }
      }
    }
  };
});
const AutocompleteInput = forwardRef((_a, ref) => {
  var {
      className,
      style,
      classes: classesProp,
      rootProps,
      inputProps,
      focused,
      onBlur,
      onChange,
      onFocus,
      id
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "rootProps", "inputProps", "focused", "onBlur", "onChange", "onFocus", "id"]);
  // @ts-expect-error ownerState is being added even though it is not part of the type
  const inputRest = __rest(rest, ["ownerState"]);
  const {
    classes,
    cx
  } = useStyles$12(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
      onBlur: onInputBlur,
      onChange: onInputChange,
      onFocus: onInputFocus,
      onMouseDown: onInputMouseDown,
      className: inputPropsClassName
    } = inputProps,
    inputPropsRest = __rest(inputProps, ["onBlur", "onChange", "onFocus", "onMouseDown", "className"]);
  return jsx("input", Object.assign({
    className: cx(classes.inputField, className)
  }, inputRest, inputPropsRest, {
    onFocus: e => {
      onFocus && onFocus(e);
      onInputFocus && onInputFocus(e);
    },
    onBlur: e => {
      onBlur && onBlur(e);
      onInputBlur && onInputBlur(e);
    },
    onChange: e => {
      onChange && onChange(e);
      onInputChange && onInputChange(e);
    }
  }), inputPropsRest.id);
});
function SelectField(_a) {
  var _b;
  var {
      className,
      style,
      classes: classesProp,
      variant = 'outlined',
      disabled = false,
      readOnly = false,
      size = 'medium',
      options = [],
      id,
      multiple = false,
      freeSolo = false,
      renderOption,
      value,
      autoComplete = 'on',
      shrink,
      clearable = false,
      getOptionLabel,
      noOptionsText = ['No options'],
      isOptionEqualToValue,
      onChange
    } = _a,
    // autoHighlight = true,
    // autoSelect = true,
    // filterSelectedOptions = true,
    // renderTags,
    // chipVariant = 'filled',
    // chipColor = 'primary',
    // getChipColor,
    // defaultValue,
    rest = __rest(_a, ["className", "style", "classes", "variant", "disabled", "readOnly", "size", "options", "id", "multiple", "freeSolo", "renderOption", "value", "autoComplete", "shrink", "clearable", "getOptionLabel", "noOptionsText", "isOptionEqualToValue", "onChange"]);
  const {
    classes,
    cx
  } = useStyles$12(undefined, {
    props: {
      classes: classesProp
    }
  });
  const theme = useTheme();
  function defaultGetOptionLabel(option) {
    if (!option) {
      return '';
    }
    return typeof option === 'string' ? option : option.title;
  }
  // ((option: string | TagType) => string) | undefined
  const noOptionsTranslatedText = useLocalization(noOptionsText);
  const {
    getRootProps,
    getInputProps,
    getInputLabelProps,
    getPopupIndicatorProps,
    getClearProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    value: selectevaluedValue,
    dirty,
    id: controlID,
    popupOpen,
    focused,
    focusedTag,
    // anchorEl,
    // setAnchorEl,
    groupedOptions,
    inputValue
  } = useAutocomplete({
    id: id,
    options: options,
    multiple: multiple,
    freeSolo: freeSolo,
    disableClearable: !clearable,
    getOptionLabel: getOptionLabel || defaultGetOptionLabel,
    value: value,
    clearOnBlur: !freeSolo,
    handleHomeEndKeys: !freeSolo,
    selectOnFocus: !freeSolo,
    autoComplete: autoComplete === 'on',
    autoHighlight: false,
    autoSelect: false,
    blurOnSelect: true,
    clearOnEscape: false,
    disabled: disabled,
    includeInputInList: false,
    readOnly: readOnly,
    onChange: onChange && ((e, value, reason) => {
      if (reason === 'selectOption') {
        onChange(e, value);
      }
    }),
    openOnFocus: !freeSolo
    // includeInputInList = false,
    // limitTags = -1,
    // ListboxComponent = 'ul',
    // ListboxProps,
    // loading = false,
    // loadingText = 'Loading…',
    // multiple = false,
    // openOnFocus = false,
    // openText = 'Open',
    // PaperComponent = Paper,
    // PopperComponent = Popper,
    
    // renderGroup: renderGroupProp,
    // renderInput,
    // renderOption: renderOptionProp,
    // renderTags,
    // size = 'medium'
    // ChipProps,
    
    //   fontSize: "small"
    // })),
    // clearText = 'Clear',
    // closeText = 'Close',
    // componentsProps = {},
    // defaultValue = props.multiple ? [] : null,
    // disableClearable = false,
    // disableCloseOnSelect = false,
    // disabledItemsFocusable = false,
    // disableListWrap = false,
    // disablePortal = false,
    // filterSelectedOptions = false,
    // forcePopupIcon = 'auto',
    // getLimitTagsText = more => `+${more}`,
    // getOptionLabel = option => {
    //   var _option$label;
    //   return (_option$label = option.label) != null ? _option$label : option;
    // },
    // groupBy,
  });

  const inputProps = getInputProps();
  const rootProps = getRootProps();
  const inputRef = inputProps === null || inputProps === void 0 ? void 0 : inputProps.ref;
  const anchorRef = useRef(null);
  const renderOptionFunction = renderOption || ((option, props, index, options) => {
    if (!option) {
      return null;
    }
    const title = typeof option === 'string' ? option : option.title;
    const subtitle = typeof option === 'string' ? null : option.subtitle;
    return jsx(ListItem, Object.assign({
      className: cx(classes.optionListItem)
    }, props, {
      children: jsx(ListItemText, {
        primary: title,
        secondary: subtitle
      })
    }));
  });
  return jsxs(Fragment, {
    children: [jsx(InputBase, Object.assign({
      className: cx(classes.root, classes[`root_${variant}`], classes[`root_size_${size}`], disabled && classes.root_disabled, className),
      ref: anchorRef,
      shrink: undefined,
      style: style,
      variant: variant,
      readOnly: readOnly,
      disabled: disabled,
      size: size,
      autoComplete: "off",
      value: inputValue
    }, rest, {
      InputLabelProps: getInputLabelProps(),
      InputComponent: AutocompleteInput,
      clearableIcon: focused ? 'arrow_drop_up' : 'arrow_drop_down',
      clearableVisible: () => !freeSolo,
      clearableDisabled: () => freeSolo || popupOpen,
      onClearableClick: e => {
        console.log(popupOpen);
        if (!popupOpen) {
          inputRef.current.focus();
        }
      },
      InputProps: {
        rootProps,
        inputProps,
        focused
      }
    })), jsx(Popper, Object.assign({
      role: "menu",
      anchorEl: anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current,
      open: popupOpen,
      disablePortal: false,
      style: {
        width: `calc(${(_b = anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth}px - ${theme.spacing ? theme.spacing(1) : 8})`
      },
      transition: true,
      modifiers: [{
        name: 'flip',
        enabled: true,
        options: {
          altBoundary: true,
          rootBoundary: 'document',
          padding: theme.spacing ? theme.spacing(1) : 8
        }
      }, {
        name: 'preventOverflow',
        enabled: true,
        options: {
          altAxis: true,
          altBoundary: true,
          tether: true,
          rootBoundary: 'document',
          padding: theme.spacing ? theme.spacing(1) : 8
        }
      }],
      placement: "bottom"
    }, {
      children: ({
        TransitionProps
      }) => {
        return jsx(Fade, Object.assign({}, TransitionProps, {
          children: jsx(Container, Object.assign({
            elevation: 1,
            className: cx(classes.popperContainer)
          }, {
            children: jsxs(List, Object.assign({
              className: cx(classes.optionList)
            }, getListboxProps(), {
              children: [groupedOptions.map((option, index, options) => {
                return renderOptionFunction(option, getOptionProps({
                  option: option,
                  index
                }), index, options);
              }), groupedOptions.length === 0 && renderOptionFunction(noOptionsTranslatedText, getOptionProps({
                option: noOptionsTranslatedText,
                index: -1
              }), -1, options)]
            }))
          }))
        }));
      }
    }))]
  });
}

const useStyles$11 = makeStyles()(theme => {
  return {
    root: {
      flexGrow: 1,
      overflow: 'auto',
      background: theme.palette.background.default
    }
  };
});
function ThemePaletteExplorer({
  className,
  style,
  classes: classesProp,
  title,
  theme
}) {
  const {
    classes,
    cx
  } = useStyles$11(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    palette
  } = theme;
  const baseKeys = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
  const additionalKeys = [];
  // Extract all of the colour keys
  const colorSwatches = Object.entries(palette).reduce((acc, [key, value]) => {
    if (value.main) {
      acc[key] = value;
      if (!baseKeys.includes(key) && !additionalKeys.includes(key)) {
        additionalKeys.push(key);
      }
    }
    return acc;
  }, {});
  const background = palette.background;
  const greys = palette.grey;
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(Container, Object.assign({
      className: cx(classes.root, className),
      style: Object.assign(Object.assign({}, style), {
        color: theme.palette.text.primary
      })
    }, {
      children: [jsx(Typography, Object.assign({
        variant: "h6"
      }, {
        children: title
      })), [...baseKeys, ...additionalKeys.sort()].map(key => jsx(ColorChart, {
        title: key,
        colors: colorSwatches[key]
      }, key)), jsx(ColorChart, {
        title: "backgrounds",
        colors: background
      }), jsx(ColorChart, {
        title: "greys",
        colors: greys
      })]
    }))
  }));
}

const useStyles$10 = makeStyles()(theme => {
  return {
    root: {
      overflow: 'hidden',
      padding: theme.spacing(3),
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    select: {},
    explorer: {}
  };
});
function ThemeVariantExplorer({
  className,
  style,
  classes: classesProp,
  themes = {}
}) {
  const {
    classes,
    cx
  } = useStyles$10(undefined, {
    props: {
      classes: classesProp
    }
  });
  const [selectedThemeName, setSelectedThemeName] = useState('default');
  useTheme();
  const availableThemes = Object.keys(themes);
  // It is possible that we are rendering outside a theme provider so
  // provide one just in case
  const selectedTheme = useMemo(() => {
    return themes && themes[selectedThemeName] || createTheme({
      palette: {
        mode: 'light'
      }
    });
  }, [selectedThemeName, themes]);
  return jsx(ThemeProvider, Object.assign({
    theme: selectedTheme
  }, {
    children: jsxs("div", Object.assign({
      className: cx(classes.root, className),
      style: Object.assign(Object.assign({}, style), {
        backgroundColor: selectedTheme.palette.background.default
      })
    }, {
      children: [jsx(SelectField, {
        className: cx(classes.select),
        label: "Select Theme",
        placeholder: "Choose a theme to display...",
        icon: "palette",
        options: availableThemes,
        value: selectedThemeName,
        onChange: (e, value) => {
          setSelectedThemeName(value || 'default');
        }
      }), jsx(ThemePaletteExplorer, {
        className: cx(classes.explorer),
        title: selectedThemeName || 'base',
        theme: selectedTheme
      })]
    }))
  }));
}

function createApp(props) {
  const {
      createRepositories,
      configureAxios
    } = props,
    appWrapperProps = __rest(props, ["createRepositories", "configureAxios"]);
  let repositories = undefined;
  if (createRepositories) {
    repositories = createRepositories(props.config, props.custom || {}, globalAxios);
  }
  const AppContainer = _a => {
    var {
        DefaultComponent = props.DefaultComponent,
        defaultComponentProps = props.defaultComponentProps
      } = _a,
      rest = __rest(_a, ["DefaultComponent", "defaultComponentProps"]);
    useEffect(() => {
      if (configureAxios) {
        return configureAxios(globalAxios, props.config, props.custom || {});
      }
      return () => {
        // Nothing to do here
      };
    }, []);
    return jsx(App, Object.assign({}, appWrapperProps, {
      DefaultComponent: DefaultComponent,
      defaultComponentProps: defaultComponentProps
    }, rest, {
      repositories: repositories
    }));
  };
  return AppContainer;
}

/**
 * Creates a Date Range constraint that ensures that
 * the start date is before the end date
 * @param  {[type]}  startFieldID                                 The id of the start field in the model
 * @param  {Boolean} [requireStart=false]                         True to state that a value is required for the start field
 * @param  {[type]}  endFieldID                                   The id of the end field in the model
 * @param  {[type]}  [requireEnd=false]                           True to state that a value is required for the end field
 * @return {[type]}                                               A string containing an error, or null if there are no errors
 */
const createDateRangeConstraint = ({
  startFieldID,
  requireStart = false,
  endFieldID,
  requireEnd = false
}) => {
  if (!startFieldID || !endFieldID) {
    throw new Error('startFieldID and endFieldID must be specified');
  }
  return (data, field, value, definition) => {
    let error = null;
    const {
      id,
      label = id
    } = field;
    const {
      [startFieldID]: startValue,
      [endFieldID]: endValue
    } = data;
    const startFieldLabel = definition.fields[startFieldID].label || startFieldID;
    const endFieldLabel = definition.fields[endFieldID].label || endFieldID;
    const isStartField = id === startFieldID;
    const isEndField = !isStartField;
    if (!value && isStartField && requireStart) {
      error = ['{0} is required', startFieldLabel];
    }
    if (!value && isEndField && requireEnd) {
      error = ['{0} is required', endFieldLabel];
    }
    if (value && isStartField && value >= endValue) {
      error = ['{0} must be before {1}', label, endFieldLabel];
    }
    if (value && isEndField && value <= startValue) {
      error = ['{0} must be after {1}', label, startFieldLabel];
    }
    return error;
  };
};

function createEmailConstraint() {
  return (data, field, value) => {
    value = value || '';
    const error = value && !isEmail(value) ? ['{0} must be a valid email address', field.label] : null;
    return error;
  };
}

/**
 * Helper function to check if a value has been set.
 * This should primarily be used where a value is numeric
 * and can be zero or where a value is a string and the
 * string can be empty
 * @param  {any}  value    The value to compare
 * @return {Boolean}       true if not set, otherwise false
 */
const isNotSet = value => {
  return value === undefined || value === null;
};
/**
 * Creates a value length constraint that can be used with
 * models.
 * Checks that the value is between min and max characters in length.
 * If min is not provided, checks that the value is no more than max.
 * If max is not provided, checks that the value is greater than or equal to min.
 * @param  {[type]} min               [description]
 * @param  {[type]} max               [description]
 * @return {[type]}     [description]
 */
const createLengthConstraint = (min, max) => {
  return (data, field, value) => {
    // If no value is provided then pass
    if (isNotSet(value)) {
      return null;
    }
    const {
      label
    } = field;
    const stringValue = value;
    if (!isNotSet(min) && !isNotSet(max)) {
      // Between constraint
      if (stringValue.length < min || stringValue.length > max) {
        return ['{0} should be {1} to {2} characters. [{3}]', label, min, max, stringValue.length];
      }
    } else if (!isNotSet(min)) {
      if (stringValue.length < min) {
        return ['{0} should be at least {1} characters.  [{2}]', label, min, stringValue.length];
      }
      // Min constraint
    } else if (!isNotSet(max)) {
      // Max constraint
      if (stringValue.length > max) {
        return ['{0} should be at most {1} characters.  [{2}]', label, max, stringValue.length];
      }
    }
    // Got here so pass
    return null;
  };
};

const createMatchConstraint = ({
  matchFieldID
}) => {
  if (!matchFieldID) {
    throw new Error('matchFieldID must be specified');
  }
  return (data, field, value, definition) => {
    const {
      id,
      label = id
    } = field;
    const {
      [matchFieldID]: matchValue
    } = data;
    const matchFieldLabel = definition.fields[matchFieldID].label || matchFieldID;
    const error = !_.isEqual(value, matchValue) ? ['{0} must match {1}', label, matchFieldLabel] : null;
    return error;
  };
};

const NAME_FORMAT = /^[\p{L}|\p{N}]+.*[\p{L}|\p{N}]+$/u;
const NAME_REGEX = new RegExp(NAME_FORMAT);
const MIN_LENGTH = 4;
/**
 * Validation function used for models.
 * Checks that the value is a valid name and is at least 4 or more characters
 * @param  {Object}  model The full object being validated
 * @param  {Object}  field The description of the field being validated
 * @param  {Object}  value The value that is being validated
 * @return {String}       The validation error, or null if the value was okay
 */
function createNameConstraint() {
  return (data, field, value) => {
    let error = null;
    value = value || '';
    if (value.length >= MIN_LENGTH && !isName(value)) {
      // For a better user experience, give a specific error
      error = NAME_REGEX.test(value) ? ['{0} can contain only letters, numbers, hyphens, underscores and spaces', field.label] : ['{0} must start and end with letters or numbers', field.label];
    } else if (value.length < MIN_LENGTH) {
      error = ['{0} must be at least {1} characters', field.label, MIN_LENGTH];
    } else if (typeof value !== 'string') {
      error = ['{0} must be a text value', field.label];
    }
    return error;
  };
}

/**
 * Validation function used for models.
 * Checks that the value is a valid name and is at least 4 or more characters
 * @param  {Object}  model The full object being validated
 * @param  {Object}  field The description of the field being validated
 * @param  {Object}  value The value that is being validated
 * @return {String}       The validation error, or null if the value was okay
 */
function createPasswordConstraint() {
  return (data, field, value) => {
    value = value || '';
    const error = !isValidPassword(value) ? ['{0} requires at least one uppercase letter, one lowercase letter, one number', field.label] : null;
    return error;
  };
}

/**
 * Validation function used for models.
 * Checks that the value is a valid url.
 *
 * If the value is empty or null then this will validate as true under the
 * assumption that it is not a required field.  If the field is required then
 * an additional validation would be executed to disallow nulls
 *
 * @param  {Boolean}  requireHTTPS true to require a https validation, false otherwise
 * @return {Function}   the validation function
 */
const createURLConstraint = (requireHTTPS = true) => {
  return (data, field, value) => {
    value = value || '';
    let error = value && !isURL(value) ? ['{0} must be a valid url', field.label] : null;
    if (value && requireHTTPS && !value.toLowerCase().startsWith('https:')) {
      error = ['{0} must be a secured url (https)', field.label];
    }
    return error;
  };
};

var ModelPermission;
(function (ModelPermission) {
  ModelPermission[ModelPermission["None"] = 0] = "None";
  ModelPermission[ModelPermission["Read"] = 1] = "Read";
  ModelPermission[ModelPermission["Create"] = 2] = "Create";
  ModelPermission[ModelPermission["Update"] = 4] = "Update";
  ModelPermission[ModelPermission["Delete"] = 8] = "Delete";
  ModelPermission[ModelPermission["All"] = 15] = "All";
})(ModelPermission || (ModelPermission = {}));
function isComponentFieldDefinition(field) {
  return field.render !== undefined;
}
function isComponentField(field) {
  return field.render !== undefined;
}
function normaliseValidations(field, validations) {
  const normalisedValidations = [...(validations || [])];
  // Add min and max validations
  if (field.minLength !== null && field.minLength !== undefined || field.maxLength !== null && field.maxLength !== undefined) {
    normalisedValidations.unshift(createLengthConstraint(field.minLength, field.maxLength));
  }
  // Ensure required fields validate correctly
  if (field.required) {
    normalisedValidations.unshift((data, field, value, model) => {
      const {
        label
      } = field;
      return !value || value.trim && value.trim() === '' ? ['{0} is required', label] : null;
    });
  }
  return normalisedValidations.filter(i => i);
}
function normaliseField(key, field) {
  if (isComponentFieldDefinition(field)) {
    return {
      id: key,
      label: field.label || _$1.startCase(key),
      render: field.render,
      getValue: field.getValue
    };
  } else {
    const normalisedField = {
      type: field.type,
      id: key,
      label: field.label || _$1.startCase(key),
      description: field.description,
      placeholder: field.placeholder,
      required: field.required || false,
      readonly: field.readonly || false,
      format: field.format,
      getValue: field.getValue,
      excludeFromModel: field.excludeFromModel || false,
      default: field.default === undefined || field.default === null ? null : field.default,
      validations: [],
      componentProps: field.componentProps,
      minLength: field.minLength,
      maxLength: field.maxLength
    };
    normalisedField.validations = normaliseValidations(normalisedField, field.validations);
    return normalisedField;
  }
}
function createModel(modelDefinition) {
  // Extract the layout
  const layout = modelDefinition.layout || Object.keys(modelDefinition.fields).map(f => [f]);
  const modelTitle = modelDefinition.title || _$1.startCase(modelDefinition.name);
  const fieldNames = Object.keys(modelDefinition.fields);
  const fields = Object.entries(modelDefinition.fields).reduce((acc, [key, fieldDefinition]) => {
    acc[key] = normaliseField(key, fieldDefinition);
    return acc;
  }, {});
  const modelPermissions = modelDefinition.permissions || ModelPermission.All;
  const model = {
    name: modelDefinition.name,
    identityField: modelDefinition.identityField || 'id',
    primaryTextField: modelDefinition.primaryTextField || Object.keys(fields).find(field => fields[field].type === 'string') || '',
    secondaryTextField: modelDefinition.secondaryTextField,
    featureImageField: modelDefinition.featureImageField,
    icon: modelDefinition.icon,
    title: modelTitle,
    singularTitle: modelDefinition.singularTitle || pluralize.singular(modelTitle),
    pluralTitle: modelDefinition.pluralTitle || pluralize(modelTitle),
    fields: fields,
    layout: layout,
    component: modelDefinition.component,
    detailComponent: modelDefinition.detailComponent,
    listLayout: modelDefinition.listLayout || layout.flatMap(l => {
      return Array.isArray(l) ? l : [l];
    }),
    transformFromDto: modelDefinition.transformFromDto,
    transformToDto: modelDefinition.transformToDto,
    generateModel: modelDefinition.generateModel || (overrides => {
      return Object.keys(fields).map(fieldName => fields[fieldName]).filter(field => !isComponentField(field))
      // Typescript doesn't pick up the guard in a filter
      .map(field => field).filter(field => !field.excludeFromModel).reduce((acc, field) => {
        acc[field.id] = field.default === undefined || field.default === null ?
        // There was not default value, so use the overrides or null
        overrides && overrides[field.id] || null :
        // Use the default, if a function call with overrides
        typeof field.default === 'function' ? field.default(overrides) : field.default;
        return acc;
      }, {});
    }),
    permissions: modelPermissions,
    getPermissions: modelDefinition.getPermissions || (data => {
      return modelPermissions;
    }),
    hasPermission: () => {
      return false;
    },
    canNavigateToDetails: modelDefinition.canNavigateToDetails === false ? false : true,
    canSelect: modelDefinition.canSelect === false ? false : true
  };
  // Update the model permissions to be self referencing
  model.hasPermission = (permission, entity) => {
    const permissionCheck = entity ? model.getPermissions(entity) : model.permissions;
    return (permissionCheck & permission) !== 0;
  };
  // Update the model identity helper
  model.getIdentity = modelDefinition.getIdentity || (d => d[model.identityField]);
  // Update the primary and secondary text helpers
  model.getPrimaryText = modelDefinition.getPrimaryText || (d => d[model.primaryTextField]);
  if (model.secondaryTextField) {
    model.getSecondaryText = modelDefinition.getSecondaryText || (d => d[model.secondaryTextField]);
  }
  model.validate = modelDefinition.validate || ((data, field = fieldNames, errors = {}) => {
    // If the field is not an array, make it one so that we can treat everything the same
    field = Array.isArray(field) ? field : [field];
    return field.reduce((acc, fieldName) => {
      const fieldDef = fields[fieldName];
      if (!fieldDef) {
        console.error(`The field ${fieldName} does not exist in the definition`, fields);
      }
      if (!isComponentField(fieldDef)) {
        acc[fieldName] = (fieldDef.validations || []).map(validate => {
          return validate(data, fieldDef, data[fieldDef.id], model);
        }).filter(error => error);
      }
      return acc;
    }, errors);
  });
  return model;
}

const greys = {
  '50': '#fafafa',
  '100': '#f5f5f5',
  '200': '#eeeeee',
  '300': '#e0e0e0',
  '400': '#bdbdbd',
  '500': '#9e9e9e',
  '600': '#757575',
  '700': '#616161',
  '800': '#424242',
  '900': '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
function createThemeVariants(theme, overrides = {}) {
  var _a, _b, _c, _d;
  const {
      name,
      palette: basePalette,
      mode = 'light'
    } = theme,
    themeRest = __rest(theme, ["name", "palette", "mode"]);
  const mainPalette = createColorPalette(basePalette);
  const tint = basePalette.tint || 0;
  const severityTint = Math.min(10, 100 - tint);
  const backgrounds = {
    light: mode === 'light' ? {
      paper: ((_a = basePalette.background) === null || _a === void 0 ? void 0 : _a.paper) || '#ffffff',
      default: ((_b = basePalette.background) === null || _b === void 0 ? void 0 : _b.default) || '#fafafa'
    } : {
      paper: '#ffffff',
      default: '#fafafa'
    },
    dark: mode === 'dark' ? {
      paper: ((_c = basePalette.background) === null || _c === void 0 ? void 0 : _c.paper) || '#424242',
      default: ((_d = basePalette.background) === null || _d === void 0 ? void 0 : _d.default) || '#303030'
    } : {
      paper: '#424242',
      default: '#303030'
    }
  };
  return {
    [name]: createTheme(_.merge({}, defaultThemeOptions, {
      palette: mainPalette
    }, Object.assign({}, requiredThemeOptions), Object.assign(Object.assign(Object.assign({}, themeRest), overrides), {
      palette: {
        mode: mode,
        background: {
          paper: tinycolor(backgrounds[mode].paper).mix(mainPalette.secondary[mode], severityTint).toHex8String(),
          default: tinycolor(backgrounds[mode].default).mix(mainPalette.secondary[mode], severityTint).toHex8String()
        },
        grey: Object.entries(greys).reduce((acc, [key, color]) => {
          acc[key] = tinycolor(color).mix(mainPalette.secondary[mode], severityTint).toHex8String();
          return acc;
        }, {})
      }
    }), {
      mixins: extendThemeWithMixins(mainPalette)
    })),
    [`${name}Dark`]: createTheme(_.merge({}, defaultThemeOptions, {
      palette: Object.entries(mainPalette).reduce((acc, [key, swatch]) => {
        acc[key] = {
          main: swatch === null || swatch === void 0 ? void 0 : swatch.light
        };
        return acc;
      }, {})
    }, Object.assign({}, requiredThemeOptions), Object.assign(Object.assign(Object.assign({}, themeRest), overrides), {
      palette: {
        mode: 'dark',
        background: {
          paper: tinycolor(backgrounds.dark.paper).mix(mainPalette.secondary.dark, severityTint).toHex8String(),
          default: tinycolor(backgrounds.dark.default).mix(mainPalette.secondary.dark, severityTint).toHex8String()
        },
        grey: Object.entries(greys).reduce((acc, [key, color]) => {
          acc[key] = tinycolor(color).mix(mainPalette.secondary.dark, severityTint).toHex8String();
          return acc;
        }, {})
      }
    }), {
      mixins: extendThemeWithMixins(mainPalette)
    })),
    [`${name}Light`]: createTheme(_.merge({}, defaultThemeOptions, {
      palette: Object.entries(mainPalette).reduce((acc, [key, swatch]) => {
        acc[key] = {
          main: swatch === null || swatch === void 0 ? void 0 : swatch.dark
        };
        return acc;
      }, {})
    }, Object.assign({}, requiredThemeOptions), Object.assign(Object.assign(Object.assign({}, themeRest), overrides), {
      palette: {
        mode: 'light',
        background: {
          paper: tinycolor(backgrounds.light.paper).mix(mainPalette.secondary.light, severityTint).toHex8String(),
          default: tinycolor(backgrounds.light.default).mix(mainPalette.secondary.light, severityTint).toHex8String()
        },
        grey: Object.entries(greys).reduce((acc, [key, color]) => {
          acc[key] = tinycolor(color).mix(mainPalette.secondary.light, severityTint).toHex8String();
          return acc;
        }, {})
      }
    }), {
      mixins: extendThemeWithMixins(mainPalette)
    }))
  };
}
/**
 * THEME DEFAULTS
 */
const defaultThemeOptions = {
  typography: {
    fontFamily: ['Muli', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600
  }
};
const requiredThemeOptions = {
  typography: {
    htmlFontSize: 10,
    fontSize: 10
    // body1       : {
    //   fontSize: '1.4rem',
    // },
    // body2       : {
    //   fontSize: '1.4rem',
    // }
  }
};

function extendThemeWithMixins(palette) {
  return {
    border: (width = 1) => ({
      borderWidth: width,
      borderStyle: 'solid',
      borderColor: palette['divider']
    }),
    borderLeft: (width = 1) => ({
      borderLeftWidth: width,
      borderStyle: 'solid',
      borderColor: palette['divider']
    }),
    borderRight: (width = 1) => ({
      borderRightWidth: width,
      borderStyle: 'solid',
      borderColor: palette['divider']
    }),
    borderTop: (width = 1) => ({
      borderTopWidth: width,
      borderStyle: 'solid',
      borderColor: palette['divider']
    }),
    borderBottom: (width = 1) => ({
      borderBottomWidth: width,
      borderStyle: 'solid',
      borderColor: palette['divider']
    })
  };
}

/**
 * Extracts the routes that can be used with react router from
 * the modules that have been specified
 * @param modules The modules to extract the routes for
 * @returns the route definitions from the modules
 */
function extractRoutesFromModules(modules) {
  const accumulator = [];
  // Top level modules must provide a layout
  const errors = modules.filter(m => m.enabled).map(m => {
    if (!m.layout) {
      return `${m.name} is a top level module so must provide a layout`;
    }
    return null;
  }).filter(i => i);
  if (errors.length > 0) {
    throw new Error(errors.join('/n'));
  }
  extractRoutesRecursive(accumulator, modules);
  return accumulator;
}
function extractRoutesRecursive(accumulator, module) {
  if (Array.isArray(module)) {
    // This is an array of modules, so iterate through each
    module.filter(m => m.enabled).forEach(m => extractRoutesRecursive(accumulator, m));
  } else {
    extractRoutesFromModule(accumulator, module);
  }
}
function extractRoutesFromModule(accumulator, module, currentRoute, currentPath = '') {
  let route;
  const parentPath = currentPath === '' || currentPath === '/' ? '' : `${currentPath}/`;
  const moduleTitle = module.title || module.name;
  const modulePath = `${module.path || _.camelCase(moduleTitle)}`;
  const absolutePath = `${parentPath}${modulePath}`;
  if (module.layout && !module.isChildLayout) {
    // This route contains a layout so will be a top level route
    route = {
      title: moduleTitle,
      icon: module.icon || undefined,
      navigation: module.navigation || false,
      component: module.layout || null,
      componentProps: module.layoutComponentProps || undefined,
      auth: module.auth || undefined,
      routes: module.component ? [{
        title: moduleTitle,
        icon: module.icon || undefined,
        navigation: module.navigation || false,
        component: module.component || undefined,
        componentProps: module.componentProps || undefined,
        auth: module.auth || undefined,
        routes: undefined,
        index: true
      }] :
      // If the module has routes we will need to include them
      module.routes ? [] : undefined,
      path: modulePath,
      absolutePath: absolutePath,
      index: false
    };
    accumulator.push(route);
  } else if (module.layout && module.isChildLayout) {
    // This route contains a layout but is intended to be a child layout
    route = {
      title: moduleTitle,
      icon: module.icon || undefined,
      navigation: module.navigation || false,
      component: module.layout || null,
      componentProps: module.layoutComponentProps || undefined,
      auth: module.auth || undefined,
      routes: module.component ? [{
        title: moduleTitle,
        icon: module.icon || undefined,
        navigation: module.navigation || false,
        component: module.component || undefined,
        componentProps: module.componentProps || undefined,
        auth: module.auth || undefined,
        routes: undefined,
        index: true
      }] :
      // If the module has routes we will need to include them
      module.routes ? [] : undefined,
      path: modulePath,
      absolutePath: absolutePath,
      index: false
    };
    if (currentRoute) {
      if (!currentRoute.routes) {
        currentRoute.routes = [];
      }
      currentRoute.routes.push(route);
    } else {
      accumulator.push(route);
    }
  } else {
    // The route is added in to the hierarchy
    route = {
      title: moduleTitle,
      icon: module.icon || undefined,
      navigation: module.navigation || false,
      component: module.component,
      componentProps: module.componentProps || undefined,
      auth: module.auth || undefined,
      routes: undefined,
      path: modulePath,
      absolutePath: absolutePath,
      index: false
    };
    if (currentRoute) {
      if (!currentRoute.routes) {
        currentRoute.routes = [];
      }
      currentRoute.routes.push(route);
    } else {
      accumulator.push(route);
    }
  }
  // Add the explicit routes
  if (module.routes) {
    if (!route.routes) {
      route.routes = [];
    }
    route.routes.push(...cloneRoutes(module.routes));
  }
  // Add the submodule routes
  if (module.modules) {
    module.modules.forEach(m => {
      extractRoutesFromModule(accumulator, m, route, absolutePath);
    });
  }
}
function cloneRoutes(routes) {
  return routes.map(r => {
    return {
      title: r === null || r === void 0 ? void 0 : r.title,
      icon: r === null || r === void 0 ? void 0 : r.icon,
      navigation: (r === null || r === void 0 ? void 0 : r.navigation) || false,
      path: r.path,
      component: r.component,
      componentProps: r.componentProps,
      routes: r.routes ? cloneRoutes(r.routes) : undefined,
      auth: r.auth,
      index: r.index,
      caseSensitive: r.caseSensitive
    };
  });
}

function localStore(key, value) {
  if (value !== undefined) {
    // Set the local storage
    localStorage.setItem(key, JSON.stringify(value));
  }
  return JSON.parse(localStorage.getItem(key) || 'null');
}

function redirectTo(url, params, hashParams) {
  const redirect = url + (params ? (url.indexOf('?') ? '?' : '&') + Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&') : '') + (hashParams ? (url.indexOf('#') ? '#' : '&') + Object.keys(hashParams).map(key => `${key}=${encodeURIComponent(hashParams[key])}`).join('&') : '');
  window.location.href = redirect;
}

function normaliseModel(path, modelDefinition) {
  const derivedName = path.split('/').pop() || path;
  return createModel(_.merge({}, {
    name: derivedName,
    fields: {}
  }, modelDefinition || {}));
}
// TODO: We want to allow specification of the id field
function createModelFields(fields, idField = 'id') {
  return Object.keys(fields).reduce((acc, fieldKey) => {
    const coercedKey = fieldKey;
    const definition = fields[coercedKey];
    acc[coercedKey] = Object.assign(Object.assign({}, definition), {
      id: fieldKey
    });
    return acc;
  }, {
    [idField]: {
      id: idField,
      type: 'string',
      readonly: true
    }
  });
}
function createModelRepository(props) {
  // TODO: Need to resolve the differences between Model and ModelDefinition
  const descriptor = normaliseModel(props.dtoPath, props.model);
  // If the model has an identityField then add a transform to convert to id
  const {
    transforms = {},
    model
  } = props;
  if (model === null || model === void 0 ? void 0 : model.identityField) {
    // Redeclaring because of TS
    const identityField = model.identityField;
    if (!transforms.dtoTransforms) {
      transforms.dtoTransforms = [];
    }
    transforms.dtoTransforms.unshift(d => {
      d.id = d[identityField];
      // We don't actually know if d is of type T at this point
      // as there could be other transforms
      return d;
    });
  }
  return {
    getDescriptor() {
      return descriptor;
    },
    useRepository: deps => {
      var _a;
      return useObservableRepository({
        dtoPath: props.dtoPath,
        baseURL: props.baseURL,
        global: false,
        axios: props.axios,
        idField: (_a = props.model) === null || _a === void 0 ? void 0 : _a.identityField,
        transforms: transforms
      }, deps || []);
    },
    createRepository: (args, deps) => {
      var _a;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useObservableRepository(_.merge({}, {
        dtoPath: props.dtoPath,
        baseURL: props.baseURL,
        global: false,
        axios: props.axios,
        idField: (_a = props.model) === null || _a === void 0 ? void 0 : _a.identityField,
        transforms: transforms
      }, args), deps || []);
    }
  };
}

function createModuleFromRepository(repositoryName, repositoryDefinition, layout, layoutComponentProps, overrides) {
  return (repositories, config) => {
    const repository = repositories[repositoryName];
    if (!repository) {
      throw new Error(`The application repository '${repositoryName}' does not exist in this application`);
    }
    const dataDefinition = repository.getDefinition(repositoryDefinition);
    if (!dataDefinition) {
      console.error('use one of ', Object.keys(repository.getDefinitions()));
      throw new Error(`The data definition for '${repositoryDefinition}' does not exist in the repository '${repositoryName}'`);
    }
    const dataDescriptor = dataDefinition.getDescriptor();
    const {
      icon,
      name,
      pluralTitle
    } = dataDescriptor;
    const repositoryDefaultProps = {
      name: name,
      title: pluralTitle,
      icon: icon,
      enabled: true,
      path: `${name}/*`,
      navigation: true,
      index: true,
      layout: layout,
      layoutComponentProps: layoutComponentProps,
      isChildLayout: true,
      routes: [{
        index: true,
        component: 'div'
      }, {
        path: 'new',
        component: 'div'
      }, {
        path: ':recordID',
        component: 'div'
      }]
    };
    return _.merge({}, repositoryDefaultProps, overrides);
  };
}

function isModuleConfig(module) {
  return typeof module !== 'function';
}
function isModuleConfigFunction(module) {
  return typeof module === 'function';
}
function findModule(moduleName, modules) {
  if (!modules) {
    return null;
  }
  for (let i = 0; i < modules.length; i++) {
    const module = modules[i];
    if (module.name === moduleName) {
      return modules[i];
    } else {
      let retVal = null;
      if (isModuleConfig(module)) {
        retVal = module.modules ? findModule(moduleName, module.modules) : null;
      }
      if (retVal) {
        return retVal;
      }
    }
  }
  return null;
}

function resolveRecursive(module, parentModule, repositories, config) {
  // Resolve functional modules
  const resolvedModule = isModuleConfigFunction(module) ? module(repositories || {}, config) : module;
  const resolvedPath = resolvedModule.path === undefined ? _.camelCase(module.name) : resolvedModule.path;
  const parentPath = (parentModule === null || parentModule === void 0 ? void 0 : parentModule.path) ? parentModule.path === '/' ? parentModule.path : parentModule.path + '/' : '';
  const normalisedModule = {
    name: resolvedModule.name,
    icon: resolvedModule.icon,
    navigation: resolvedModule.navigation || false,
    component: resolvedModule.component,
    componentProps: resolvedModule.componentProps,
    title: resolvedModule.title || pluralize(_.startCase(module.name)),
    path: resolvedPath,
    fullPath: `${parentPath}${resolvedPath}`,
    // The AUTH is propagated to make it easier to check if the user is in ALL roles allowed for a route
    auth: resolvedModule.auth || (parentModule === null || parentModule === void 0 ? void 0 : parentModule.auth) ? [...Array.from(new Set([...(resolvedModule.auth || []), ...((parentModule === null || parentModule === void 0 ? void 0 : parentModule.auth) || [])]))] : undefined,
    enabled: resolvedModule.enabled,
    layout: resolvedModule.layout,
    layoutComponentProps: resolvedModule.layoutComponentProps,
    isChildLayout: Boolean(resolvedModule.isChildLayout),
    routes: resolvedModule.routes ? cloneRoutes(resolvedModule.routes) : undefined,
    // Modules are resolved after as the auth needs to be propagated
    modules: undefined
  };
  const childModules = resolvedModule.modules || [];
  // Resolve modules and routes
  if (childModules.length > 0) {
    normalisedModule.modules = childModules.map(m => resolveRecursive(m, normalisedModule, repositories, config)).filter(m => m.enabled);
  }
  return normalisedModule;
}
/**
 * Ensures that all paths, layouts, auth, and enabled properties are
 * propagated through the hierarchy
 * to make it easier to deal with in the routing logic
 */
function resolveModules(modules, repositories, config) {
  if (!modules || modules.length === 0) {
    return [];
  }
  return modules.map(m => resolveRecursive(m, undefined, repositories, config)).filter(m => m.enabled);
}

const AppContext = React.createContext({});
function AppContextComponent({
  children,
  modules = [],
  themes,
  config,
  custom,
  getAuthContext,
  repositories
}) {
  // In order to allow apps to render inside apps, we check that the context has not
  // already been set
  const application = useApplication();
  // If the context has been set already then we are the child app
  const isChildApp = Object.keys(application).length > 0;
  // Resolved modules are all of the modules that have been loaded
  const [resolvedModules, setResolvedModules] = useState([]);
  const [routes, setRoutes] = useState([]);
  const themeMap = useMemoDeepCompare(() => {
    if (!themes) {
      throw new Error('Themes not set for the application');
    }
    return themes.reduce((acc, theme) => {
      acc = Object.assign(Object.assign({}, acc), createThemeVariants(theme));
      return acc;
    }, {});
  }, [themes]);
  useDeepCompareEffect(() => {
    const resolvedModules = resolveModules(modules, repositories, {
      application: application.config,
      custom: application.custom
    });
    setResolvedModules(resolvedModules);
    // Also update the routes by extracting from the modules
    setRoutes(extractRoutesFromModules(resolvedModules));
  }, [modules]);
  return jsx(AppContext.Provider, Object.assign({
    value: {
      config: deepFreeze(config),
      // MUI ThemeProvider needs to be able to mutate themes
      themes: themeMap,
      modules: resolvedModules,
      routes: routes,
      custom: custom,
      getAuthContext: getAuthContext,
      repositories,
      isChildApp
    }
  }, {
    children: children
  }));
}

const useStyles$$ = makeStyles()(theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      margin: theme.spacing(4),
      height: '100%'
    },
    title: {
      marginBottom: theme.spacing(2)
    },
    icon: {
      width: `${theme.spacing(12)}!important`,
      height: `${theme.spacing(12)}!important`,
      fontSize: `${theme.spacing(12)}!important`,
      [theme.breakpoints.up('md')]: {
        width: `${theme.spacing(16)}!important`,
        height: `${theme.spacing(16)}!important`,
        fontSize: `${theme.spacing(16)}!important`
      },
      marginBottom: theme.spacing(4)
    },
    excerpt: {
      marginBottom: theme.spacing(4)
    },
    content: {
      marginBottom: theme.spacing(2)
    }
  };
});
function NotFound({
  className,
  style,
  classes: classesProp,
  icon = 'error',
  title,
  excerpt,
  content
}) {
  const {
    classes,
    cx
  } = useStyles$$(undefined, {
    props: {
      classes: classesProp
    }
  });
  const excerptText = typeof excerpt === 'string' ? excerpt : null;
  const contentText = typeof content === 'string' ? content : null;
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [jsx(Icon, Object.assign({
      className: cx(classes.icon),
      color: "error"
    }, {
      children: icon
    })), jsx(Typography, Object.assign({
      variant: "h4",
      component: "h1",
      className: cx(classes.title)
    }, {
      children: title
    })),
    // Render the excerpt text or the specified info Component
    excerptText ? jsx(Typography, Object.assign({
      variant: "subtitle1",
      component: "div",
      className: cx(classes.excerpt)
    }, {
      children: excerpt
    })) : excerpt,
    // Render the content text or the specified info Component
    contentText ? jsx(Typography, Object.assign({
      variant: "caption",
      component: "div",
      className: cx(classes.content)
    }, {
      children: content
    })) : content]
  }));
}

function NotFoundWrapper() {
  return jsx(NotFound, {
    title: `Sorry, there is nothing here.`,
    excerpt: `'${window.location.pathname}' seems to be an invalid path`,
    content: jsx(Button, Object.assign({
      icon: "refresh",
      color: "error",
      onClick: () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }
    }, {
      children: "Go back home"
    }))
  });
}
const DefaultWrapper = ({
  DefaultComponent,
  defaultComponentProps
}) => {
  return useMemoDeepCompare(() => {
    return DefaultComponent ? jsx(DefaultComponent, Object.assign({}, defaultComponentProps)) : null;
  }, [DefaultComponent, defaultComponentProps]);
};
function renderRouteHooksRecursive(routes, GuardComponent, DefaultComponent, defaultComponentProps, debug) {
  if (!routes || routes.length === 0) {
    return null;
  }
  // TODO: This could be optimised by looking at component reuse.
  // Currently when the path changes all components after the tree change rerender.
  // This may be desired behaviour but need to think on it.
  // Reasoning, in some cases you may have a parent route change but the outlet
  // at a child route should remain the same
  //  - KM
  const indexRoute = routes.find(r => r.index || !r.path);
  const defaultRoute = routes.find(r => r.path === '*');
  // If there is no index route then we add one
  if (!indexRoute) {
    routes = [...routes, {
      title: 'index',
      component: DefaultWrapper,
      componentProps: {
        DefaultComponent: DefaultComponent,
        defaultComponentProps: defaultComponentProps
      },
      index: true
    }];
  }
  // If there is no default route, add one
  if (!defaultRoute) {
    routes = [...routes, {
      title: '*',
      component: NotFoundWrapper,
      index: false,
      path: '*'
    }];
  }
  return routes.map(r => {
    const path = r.path;
    // Determine what to render at this route
    const RouteElement = debug ?
    // Debug so wrap the component
    r.component ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props) => {
      const Comp = r.component;
      return jsxs("div", Object.assign({
        style: {
          height: '100%'
        }
      }, {
        children: [jsxs("div", {
          children: ["Component: ", Comp && Comp.name]
        }), jsxs("div", {
          children: ["Path: ", r.path]
        }), jsxs("pre", {
          children: ["Routes:", ' ', JSON.stringify(routes.map(r => {
            return {
              title: r.title,
              path: r.path,
              component: r.component && r.component.name
            };
          }), null, 2)]
        }), Comp && jsx(Comp, Object.assign({}, props))]
      }));
    } : undefined :
    // No debug so just show the component
    r.component;
    let route = {
      // 'as true' is just to get around the typescript guards
      index: Boolean(r.index || !r.path),
      path: path,
      element: RouteElement && jsx(SuspenseLoader, {
        children: jsx(RouteElement, Object.assign({}, r.componentProps))
      }),
      children: r.routes && r.routes.length > 0 && renderRouteHooksRecursive(r.routes, GuardComponent, DefaultComponent, defaultComponentProps, debug) || undefined
    };
    // If the route has auth specified then wrap in the auth guard
    if (r.auth && r.auth.length > 0) {
      // TODO: This could probably be optimised by keeping track of a parent guard and if the
      // roles are not different, then not placing a guard
      route = {
        element: jsx(GuardComponent, {
          roles: r.auth
        }),
        children: [route]
      };
    }
    return route;
  });
}
function AppRouter({
  DefaultComponent,
  defaultComponentProps,
  debug = false
}) {
  // Note that we don't use useApplication() here as it creates a circular dependency
  const {
    routes,
    getAuthContext
  } = useContext(AppContext);
  const {
    GuardComponent
  } = getAuthContext();
  const resolvedRoutes = useMemoDeepCompare(() => {
    return renderRouteHooksRecursive(routes || [], GuardComponent, DefaultComponent, defaultComponentProps, debug);
  }, [routes, DefaultComponent, defaultComponentProps, debug]);
  const routeHooks = useRoutes(resolvedRoutes || []);
  if (debug) {
    console.debug('Resolved Routes:', resolvedRoutes);
  }
  return jsx(SuspenseLoader, {
    children: routeHooks
  });
}

const muiCache = createCache({
  key: 'mui',
  prepend: true
});
function App({
  store,
  config,
  themes = [],
  modules = [],
  custom,
  DefaultComponent,
  defaultComponentProps,
  AuthProvider,
  authProviderProps,
  getAuthContext,
  repositories = {},
  Router = BrowserRouter,
  debugRouter = false
}) {
  if (!store) {
    console.error('No store provided to Application');
  }
  const ResolvedAuthProvider = useMemo(() => {
    return AuthProvider || DefaultAuthProvider;
  }, [AuthProvider]);
  // If no auth provider is specified then use the default
  const getAuthContextFn = useMemoDeepCompare(() => {
    let authContextFn = null;
    if (!AuthProvider) {
      authContextFn = useDefaultAuthorisation;
    } else {
      authContextFn = getAuthContext;
    }
    if (!authContextFn) {
      throw new Error('An AuthProvider was specified without specifying getAuthContext, you probably specified an AuthProvider but forgot to specify the getAuthContext function');
    }
    return authContextFn;
  }, [ResolvedAuthProvider]);
  // Allow rendering apps inside apps
  const application = useApplication();
  const useRouter = Boolean(!application.routes);
  const storeRef = useRef(createStore(store));
  const content = useMemo(() => jsx(CssBaseline, {
    children: jsx(AppContextComponent, Object.assign({
      modules: modules,
      themes: themes,
      config: config,
      custom: custom,
      getAuthContext: getAuthContextFn,
      repositories: repositories
    }, {
      children: jsx(Provider, Object.assign({
        store: storeRef.current
      }, {
        children: jsx(CacheProvider, Object.assign({
          value: muiCache
        }, {
          children: jsx(Theme, {
            children: jsx(ErrorBoundary, {
              children: jsxs(LocalizationProvider, {
                children: [jsx(UpdateAvailable, {}), jsx(ResolvedAuthProvider, Object.assign({}, authProviderProps, {
                  children: Router ? jsx(AppRouter, {
                    DefaultComponent: DefaultComponent,
                    defaultComponentProps: defaultComponentProps,
                    debug: debugRouter
                  }) : DefaultComponent && jsx(DefaultComponent, Object.assign({}, defaultComponentProps))
                }))]
              })
            })
          })
        }))
      }))
    }))
  }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return Router && useRouter ? jsx(Router, {
    children: content
  }) : content;
}

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3csvg xmlns='http://www.w3.org/2000/svg' width='149' height='132'%3e%3cpath fill='white' d='M143.209%2c105.968c0%2c6.25-5.113%2c11.364-11.363%2c11.364H18.203c-6.250-11.363-5.113-11.363-11.364v-86.37c0-6.25%2c5.113-11.36311.363-11.363h113.643c6.25%2c0%2c11.363%2c5.113%2c11.363%2c11.363V105.968zM18.203%2c17.326c-1.207%2c0-2.271%2c1.068-2.271%2c2.271v86.37c0%2c1.207%2c1.0652.271%2c2.271%2c2.271h113.643c1.203%2c0%2c2.274-1.0642.274-2.271v-86.37c0-1.203-1.071-2.271-2.274-2.271H18.203zM38.661%2c53.691c-7.529%2c0-13.641-6.108-13.641-13.635s6.112-13.638%2c13.641-13.638c7.526%2c0%2c13.632%2c6.111%2c13.632%2c13.638S46.188%2c53.691%2c38.661%2c53.691zM125.025%2c99.15H25.02V85.51l22.73-22.724l11.363%2c11.36l36.365-36.361l29.547%2c29.547V99.15z'/%3e%3c/svg%3e";
  var defaultDarkBackground = img$1;

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3csvg xmlns='http://www.w3.org/2000/svg' width='149' height='132'%3e%3cpath d='M143.209%2c105.968c0%2c6.25-5.113%2c11.364-11.363%2c11.364H18.203c-6.250-11.363-5.113-11.363-11.364v-86.37c0-6.25%2c5.113-11.36311.363-11.363h113.643c6.25%2c0%2c11.363%2c5.113%2c11.363%2c11.363V105.968zM18.203%2c17.326c-1.207%2c0-2.271%2c1.068-2.271%2c2.271v86.37c0%2c1.207%2c1.0652.271%2c2.271%2c2.271h113.643c1.203%2c0%2c2.274-1.0642.274-2.271v-86.37c0-1.203-1.071-2.271-2.274-2.271H18.203zM38.661%2c53.691c-7.529%2c0-13.641-6.108-13.641-13.635s6.112-13.638%2c13.641-13.638c7.526%2c0%2c13.632%2c6.111%2c13.632%2c13.638S46.188%2c53.691%2c38.661%2c53.691zM125.025%2c99.15H25.02V85.51l22.73-22.724l11.363%2c11.36l36.365-36.361l29.547%2c29.547V99.15z'/%3e%3c/svg%3e";
  var defaultLightBackground = img;

const useStyles$_ = makeStyles()((theme, {
  spinnerSize,
  spinnerColor,
  backgroundColor
}) => {
  const sizes = {
    small: theme.spacing(2.5),
    medium: theme.spacing(3),
    large: theme.spacing(4.5)
  };
  const offset = {
    small: theme.spacing(1.25),
    medium: theme.spacing(1.5),
    large: theme.spacing(2.25)
  };
  const calcSize = sizes[spinnerSize] || theme.spacing(2);
  const offsetSize = offset[spinnerSize] || theme.spacing(1);
  return {
    '@keyframes rotating': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    },
    root: {
      position: 'relative',
      display: 'inline-block',
      overflow: 'hidden'
    },
    image: {
      opacity: 0,
      transition: `opacity ${theme.transitions.duration.shortest}ms linear`,
      height: '100%',
      width: '100%',
      verticalAlign: 'center',
      display: 'block'
    },
    imageOverride: {},
    image_loaded: {
      opacity: 1
    },
    spinner: {
      position: 'absolute',
      animation: `$rotating ${theme.transitions.duration.shorter * 10}ms linear infinite`,
      opacity: 1,
      transition: `opacity ${theme.transitions.duration.shortest}ms linear`
    },
    spinner_loaded: {
      opacity: 0
    },
    spinnerFn: {
      width: calcSize,
      height: calcSize,
      top: `calc(50% - ${offsetSize})`,
      left: `calc(50% - ${offsetSize})`,
      color: spinnerColor || 'initial'
    },
    backgroundFn: {
      backgroundColor: backgroundColor
    }
  };
});
function Image({
  className,
  style,
  classes: classesProp,
  src,
  defaultSrc,
  spinnerSize = 'medium',
  spinnerColor,
  alt,
  imageStyle,
  backgroundColor,
  crossOrigin,
  onError
}) {
  const theme = useTheme();
  const [source, setSource] = useState(src || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(!src);
  const [derivedBackground, setDerivedBackground] = useState(backgroundColor);
  const derivedSpinnerColor = useMemo(() => {
    var _a;
    return spinnerColor || ((_a = mostReadable(derivedBackground || theme.palette.background.default, ['#fff', '#000'], {})) === null || _a === void 0 ? void 0 : _a.toHexString());
  }, [spinnerColor, derivedBackground, theme]);
  const {
    classes,
    cx
  } = useStyles$_({
    spinnerSize,
    spinnerColor: derivedSpinnerColor,
    backgroundColor: derivedBackground
  }, {
    props: {
      classes: classesProp
    }
  });
  if (!defaultSrc) {
    defaultSrc = derivedSpinnerColor === '#000000' ? defaultLightBackground : defaultDarkBackground;
  }
  useEffect(() => {
    if (src !== source) {
      setError(null);
      setLoading(true);
      setSource(src || null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);
  useEffect(() => {
    setDerivedBackground(backgroundColor);
  }, [backgroundColor]);
  const [backgroundRef] = useHookWithRefCallback(ref => {
    if (ref && !derivedBackground) {
      const color = tinycolor(getComputedStyle(ref).backgroundColor);
      if (color.getAlpha() > 0) {
        setDerivedBackground(color.toHex8String());
      }
    }
  }, []);
  return jsxs("span", Object.assign({
    className: cx(classes.root, className),
    ref: backgroundRef,
    style: style
  }, {
    children: [jsx("img", {
      alt: alt,
      className: cx(classes.image, !loading && classes.image_loaded, classes.imageOverride),
      crossOrigin: crossOrigin,
      style: imageStyle,
      src: error ? defaultSrc : source || defaultSrc,
      onLoad: () => {
        // Set timeout here to ensure the state of loading has time to change
        setTimeout(() => {
          setLoading(false);
        }, 100);
      },
      onError: e => {
        setLoading(false);
        if (!error) {
          setError(e);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError && onError(e);
      }
    }), jsx(Icon, Object.assign({
      className: cx(classes.spinner, !loading && classes.spinner_loaded, classes.spinnerFn)
    }, {
      children: "fa spinner"
    }))]
  }));
}

const useStyles$Z = makeStyles()((theme, {
  size,
  backgroundColor,
  imageOffsetSize = 0
}) => {
  var _a;
  const defaultBackground = theme.palette.background.paper;
  const sizes = {
    inherit: 'inherit',
    small: theme.typography.pxToRem(24),
    medium: theme.typography.pxToRem(40),
    large: theme.typography.pxToRem(56)
  };
  const dimensions = sizes[size];
  const fontSizes = {
    inherit: 'inherit',
    small: theme.typography.pxToRem(16),
    medium: theme.typography.pxToRem(32),
    large: theme.typography.pxToRem(48)
  };
  const fontDimensions = fontSizes[size];
  return {
    root: {
      backgroundColor: defaultBackground,
      overflow: 'hidden',
      position: 'relative',
      boxSizing: 'border-box'
    },
    backgroundFn: {
      backgroundColor: alpha(backgroundColor || defaultBackground, 1)
    },
    colorFn: {
      color: (_a = mostReadable(backgroundColor || defaultBackground, ['#fff', '#000'], {})) === null || _a === void 0 ? void 0 : _a.toHexString()
    },
    sizeFn: {
      width: dimensions,
      height: dimensions
    },
    imageSizeFn: {
      width: `calc(${dimensions} - ${imageOffsetSize}px)`,
      height: `calc(${dimensions} - ${imageOffsetSize}px)`
    },
    fontSizeFn: {
      fontSize: fontDimensions
    },
    imageContainer: {
      backgroundColor: backgroundColor || defaultBackground,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      objectFit: 'contain',
      backgroundSize: 'contain'
    },
    circular: {
      borderRadius: '50%',
      '& img': {
        borderRadius: '50%'
      }
    },
    square: {},
    letter: {
      position: 'absolute',
      top: '50%',
      msTransform: 'translateY(-50%)',
      transform: 'translateY(-50%)',
      left: 0,
      textAlign: 'center',
      width: '100%'
    }
  };
});
function Avatar({
  className,
  style,
  classes: classesProp,
  title,
  src = '',
  variant = 'circular',
  size = 'medium',
  backgroundColor,
  imageOffsetSize = 0
}) {
  const {
    classes,
    cx
  } = useStyles$Z({
    size,
    backgroundColor,
    imageOffsetSize
  }, {
    props: {
      classes: classesProp
    }
  });
  const [imageError, setImageError] = useState(!src);
  const letter = title ? title.substring(0, 1).toUpperCase() : '';
  useEffect(() => {
    setImageError(!src);
  }, [src]);
  return jsxs("div", Object.assign({
    className: cx(classes.root, classes.sizeFn, classes[variant], classes.backgroundFn, className),
    style: style
  }, {
    children: [!imageError && jsx(Image, {
      backgroundColor: backgroundColor,
      className: cx(classes.sizeFn, classes.backgroundFn, classes.imageContainer),
      classes: {
        imageOverride: cx(classes.image, classes.imageSizeFn)
      },
      alt: title,
      src: src,
      onError: e => {
        setImageError(true);
      }
    }), imageError && jsx(Typography, Object.assign({
      variant: "h4",
      component: "span",
      className: cx(classes.letter, classes.colorFn, classes.fontSizeFn)
    }, {
      children: letter
    }))]
  }));
}

const validMimeTypes = ['audio', 'video', 'image'];
const useStyles$Y = makeStyles()(theme => {
  return {
    root: {
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      borderRadius: theme.shape.borderRadius
    },
    image: {
      borderRadius: theme.shape.borderRadius
    },
    video: {
      maxWidth: '100%',
      maxHeight: '100%'
    },
    audio: {}
  };
});
function Media({
  className,
  style,
  classes: classesProp,
  backgroundColor = 'transparent',
  defaultSrc,
  src,
  mimeType,
  alt,
  crossOrigin,
  autoPlay = false,
  controls = true,
  onLoad,
  onError
}) {
  var _a;
  const {
    classes,
    cx
  } = useStyles$Y(undefined, {
    props: {
      classes: classesProp
    }
  });
  const [source, setSource] = useState(src);
  const [mediaType, setMediaType] = useState(mimeType || getMimeType(src).split('/')[0]);
  const defaultSource = defaultSrc ? defaultSrc : ((_a = mostReadable(tinycolor(backgroundColor || 'transparent'), ['#fff', '#000'])) === null || _a === void 0 ? void 0 : _a.toHexString()) === '#000000' ? 'assets/images/placeholders/image-dark.svg' : 'assets/images/placeholders/image-light.svg';
  useEffect(() => {
    setSource(src ? src : defaultSource);
  }, [src, defaultSource]);
  useEffect(() => {
    if (!mimeType) {
      const mime = getMimeType(source);
      setMediaType(mime && mime.split('/')[0].toLowerCase());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [source && mediaType && mediaType === 'audio' && jsx("audio", Object.assign({
      className: cx(classes.audio),
      crossOrigin: crossOrigin,
      controls: controls,
      autoPlay: autoPlay,
      onCanPlay: e => {
        if (source !== defaultSource) {
          onLoad && onLoad(e, source);
        }
      },
      onError: e => {
        if (source !== defaultSource) {
          setSource(defaultSource);
          setMediaType(getMimeType(defaultSource).split('/')[0]);
        }
        onError && onError(e, source);
      }
    }, {
      children: jsx("source", {
        src: source,
        type: getMimeType(source)
      })
    })), source && mediaType && mediaType === 'video' && jsx("video", Object.assign({
      className: cx(classes.video),
      controls: controls,
      crossOrigin: crossOrigin,
      autoPlay: autoPlay,
      onCanPlay: e => {
        if (source !== defaultSource) {
          onLoad && onLoad(e, source);
        }
      },
      onError: e => {
        if (source !== defaultSource) {
          setSource(defaultSource);
          setMediaType(getMimeType(defaultSource).split('/')[0]);
        }
        onError && onError(e, source);
      }
    }, {
      children: jsx("source", {
        src: source,
        type: getMimeType(source)
      })
    })), source && mediaType && mediaType === 'image' && jsx(Image, {
      className: cx(classes.image),
      src: source,
      alt: alt,
      crossOrigin: crossOrigin
    }), (!source || !mediaType || validMimeTypes.indexOf(mediaType) < 0) && jsx(Image, {
      className: cx(classes.image),
      src: defaultSource,
      alt: alt
    })]
  }));
}

const useStyles$X = makeStyles()(theme => {
  return {
    root: {
      '& .MuiCardHeader-content': {
        overflow: 'hidden'
      }
    },
    titleWrapper: {
      overflow: 'hidden',
      marginRight: theme.spacing(2)
    },
    emphasisText: {
      color: theme.palette.primary.main,
      textTransform: 'uppercase'
    }
  };
});
function CardHeader({
  className,
  style,
  classes: classesProp,
  title,
  subtitle,
  emphasisText,
  thumbnailImage,
  actions
}) {
  const theme = useTheme();
  const {
    classes,
    cx
  } = useStyles$X(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx(CardHeader$1, {
    className: cx(classes.root, className),
    style: style,
    avatar: thumbnailImage ? jsx(Avatar, {
      title: typeof title === 'string' ? title : '',
      src: thumbnailImage,
      backgroundColor: theme.palette.background.default
    }) : null,
    title: typeof title === 'string' ? jsxs("div", Object.assign({
      className: cx(classes.titleWrapper)
    }, {
      children: [jsx(Typography, Object.assign({
        className: cx(classes.emphasisText),
        gutterBottom: false,
        noWrap: true,
        display: "block",
        variant: "subtitle1",
        component: "h3"
      }, {
        children: emphasisText
      })), jsx(Typography, Object.assign({
        noWrap: true,
        display: "block",
        variant: "h6",
        component: "h3"
      }, {
        children: title
      }))]
    })) : title,
    subheader: jsx(Typography, Object.assign({
      variant: "caption",
      component: "p"
    }, {
      children: subtitle
    })),
    action: actions ? jsx(Actions, {
      actions: actions
    }) : null
  });
}

const useStyles$W = makeStyles()(theme => {
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    contentWrapper: {
      flexGrow: 1,
      flexShrink: 1,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden',
      padding: 0
    },
    cardContent: {
      flexShrink: 1,
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      }
    },
    description: {
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: '3',
      WebkitBoxOrient: 'vertical'
    },
    cardActions: {
      marginLeft: theme.spacing(1)
    },
    actionWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    actions: {
      [theme.breakpoints.down('sm')]: {
        alignItems: 'end'
      }
    },
    primaryActions: {},
    secondaryActions: {}
  };
});
function Card({
  className,
  style,
  classes: classesProp,
  square = false,
  elevation = 1,
  title,
  subtitle,
  emphasisText,
  thumbnailImage,
  headerActions,
  primaryActions,
  secondaryActions,
  showTitle = true,
  children,
  onClick
}) {
  const {
    classes,
    cx
  } = useStyles$W(undefined, {
    props: {
      classes: classesProp
    }
  });
  const hasActions = Boolean(primaryActions || secondaryActions);
  const content = children && typeof children === 'string' ? jsx(CardContent, Object.assign({
    className: cx(classes.cardContent)
  }, {
    children: jsx(Typography, Object.assign({
      className: cx(classes.description),
      variant: "body2",
      color: "textSecondary",
      component: "p"
    }, {
      children: children
    }))
  })) : children;
  return jsxs(Card$1, Object.assign({
    className: cx(classes.root, className),
    style: style,
    square: square,
    elevation: elevation,
    onClick: onClick
  }, {
    children: [showTitle && jsx(CardHeader, {
      title: title,
      subtitle: subtitle,
      emphasisText: emphasisText,
      thumbnailImage: thumbnailImage,
      actions: headerActions
    }), jsx("div", Object.assign({
      className: cx(classes.contentWrapper)
    }, {
      children: content
    })), hasActions && jsx(CardActions, Object.assign({
      className: cx(classes.cardActions),
      disableSpacing: true
    }, {
      children: jsxs("div", Object.assign({
        className: cx(classes.actionWrapper)
      }, {
        children: [primaryActions ? jsx(Actions, {
          className: cx(classes.actions, classes.primaryActions),
          actions: primaryActions,
          variant: "button"
        }) : jsx("div", {}), secondaryActions && jsx(Actions, {
          className: cx(classes.actions, classes.secondaryActions),
          actions: secondaryActions
        })]
      }))
    }))]
  }));
}

const useStyles$V = makeStyles()(theme => {
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardHeader: {
      overflow: 'hidden',
      '& .MuiCardHeader-content': {
        overflow: 'hidden'
      }
    },
    title: {
      fontWeight: 'bold'
    },
    cardActions: {},
    cardMedia: {
      width: '100%',
      aspectRatio: '16 / 9'
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      overflow: 'hidden'
    },
    cardContent: {
      flexGrow: 1,
      flexShrink: 1
    },
    description: {
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: '3',
      WebkitBoxOrient: 'vertical'
    }
  };
});
function FeatureCard(_a) {
  var {
      className,
      style,
      classes: classesProp,
      imageSrc,
      imageAltText,
      variant = 'imageProminent',
      children,
      title,
      subtitle,
      emphasisText,
      thumbnailImage,
      headerActions
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "imageSrc", "imageAltText", "variant", "children", "title", "subtitle", "emphasisText", "thumbnailImage", "headerActions"]);
  const {
    classes,
    cx
  } = useStyles$V(undefined, {
    props: {
      classes: classesProp
    }
  });
  const content = children && typeof children === 'string' ? jsx(Typography, Object.assign({
    className: cx(classes.description),
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, {
    children: children
  })) : children;
  return jsxs(Card, Object.assign({
    className: cx(classes.root, className),
    style: style,
    showTitle: variant === 'titleProminent',
    title: title,
    subtitle: subtitle,
    emphasisText: emphasisText,
    thumbnailImage: thumbnailImage,
    headerActions: headerActions
  }, rest, {
    children: [imageSrc && jsx(CardMedia, {
      className: cx(classes.cardMedia),
      image: imageSrc || 'assets/images/placeholders/image-light.svg',
      title: imageAltText
    }), variant === 'imageProminent' && jsx(CardHeader, {
      title: title,
      subtitle: subtitle,
      emphasisText: emphasisText,
      thumbnailImage: thumbnailImage,
      actions: headerActions
    }), jsx(CardContent, Object.assign({
      className: cx(classes.cardContent)
    }, {
      children: jsx("div", Object.assign({
        className: cx(classes.contentWrapper)
      }, {
        children: content
      }))
    }))]
  }));
}

const useStyles$U = makeStyles()((theme, {
  appBarColor
}) => {
  const palette = appBarColor && appBarColor !== 'inherit' ? theme.palette[appBarColor] : {
    contrastText: undefined
  };
  return {
    root: {
      overflow: 'hidden'
    },
    titleBar: {
      borderRadius: 0,
      overflow: 'hidden',
      width: '100%'
    },
    titleBarColor: {
      color: palette.contrastText
    },
    titleBarContent: {
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      width: '100%',
      overflow: 'hidden'
    },
    titleBarTitleWrapper: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      flexShrink: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginRight: theme.spacing(2),
      overflow: 'hidden'
    },
    titleBarTitle: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '100%'
    },
    titleBarDescription: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '100%'
    },
    titleBarButton: {
      marginLeft: theme.spacing(2),
      color: 'inherit'
    },
    contentWrapper: {
      overflow: 'hidden',
      width: '100%',
      display: 'flex',
      flexGrow: 1,
      flexShrink: 1,
      minWidth: theme.breakpoints.values['sm'],
      [theme.breakpoints.down('sm')]: {
        minWidth: '100%'
      }
    }
  };
});
const TransitionFull = forwardRef(function Transition(_a, ref) {
  var {
      children
    } = _a,
    rest = __rest(_a, ["children"]);
  return jsx(Slide, Object.assign({
    direction: "left",
    ref: ref
  }, rest, {
    children: children
  }));
});
const TransitionDialog = forwardRef(function Transition(_a, ref) {
  var {
      children
    } = _a,
    rest = __rest(_a, ["children"]);
  return jsx(Slide, Object.assign({
    direction: "up",
    ref: ref
  }, rest, {
    children: children
  }));
});
function Dialog(_a) {
  var {
      className,
      style,
      children,
      classes: classesProp,
      open,
      fullWidth,
      fullScreen,
      onClose,
      id,
      keepMounted = true,
      TransitionComponent,
      TransitionProps,
      showTitle = true,
      title,
      description,
      allowClose = true,
      closeButtonText = 'Close',
      closeButtonIcon = 'close',
      variant = 'default',
      appBarColor
    } = _a,
    rest = __rest(_a, ["className", "style", "children", "classes", "open", "fullWidth", "fullScreen", "onClose", "id", "keepMounted", "TransitionComponent", "TransitionProps", "showTitle", "title", "description", "allowClose", "closeButtonText", "closeButtonIcon", "variant", "appBarColor"]);
  const {
    classes,
    cx
  } = useStyles$U({
    appBarColor
  }, {
    props: {
      classes: classesProp
    }
  });
  const titleID = `${id}_dialog_title`;
  const descriptionID = `${id}_dialog_description`;
  TransitionComponent = TransitionComponent || (fullScreen ? TransitionFull : TransitionDialog);
  TransitionProps = TransitionProps || {
    role: 'presentation'
  };
  const variantProps = variant === 'default' ? {
    elevation: 1,
    appBarColor: appBarColor
  } : {
    elevation: 0,
    appBarColor: appBarColor || 'transparent'
  };
  /*
        Workaround for accessibility issues with modal dialogs
        https://github.com/mui-org/material-ui/issues/19450
    */
  useEffect(() => {
    var _a;
    if (open) {
      (_a = document.getElementById('root')) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-hidden', 'false');
    }
  }, [open]);
  return jsxs(Dialog$1, Object.assign({
    className: cx(classes.root, className),
    style: style,
    open: open,
    fullScreen: fullScreen,
    fullWidth: fullWidth,
    onClose: onClose,
    "aria-labelledby": showTitle ? titleID : rest['aria-labelledby'],
    "aria-describedby": showTitle ? descriptionID : rest['aria-describedby'],
    keepMounted: keepMounted,
    onClick: e => {
      e.stopPropagation();
    },
    role: "dialog",
    TransitionComponent: TransitionComponent,
    TransitionProps: TransitionProps
  }, rest, {
    children: [showTitle && jsx(AppBar, Object.assign({
      position: "static",
      className: cx(classes.titleBar, classes.titleBarColor),
      elevation: variantProps.elevation,
      color: variantProps.appBarColor
    }, {
      children: jsxs("div", Object.assign({
        className: cx(classes.titleBarContent)
      }, {
        children: [jsxs("div", Object.assign({
          className: cx(classes.titleBarTitleWrapper)
        }, {
          children: [jsx(Typography, Object.assign({
            id: titleID,
            className: cx(classes.titleBarTitle),
            noWrap: true,
            component: "h1",
            variant: "h5"
          }, {
            children: title
          })), description && jsx(Typography, Object.assign({
            id: descriptionID,
            className: cx(classes.titleBarDescription),
            noWrap: true,
            variant: "caption"
          }, {
            children: description
          }))]
        })), allowClose && jsx(IconButton, {
          className: cx(classes.titleBarButton),
          size: "small",
          title: closeButtonText,
          icon: closeButtonIcon,
          color: "inherit",
          onClick: e => {
            onClose && onClose(e, 'closeButtonClick');
          }
        })]
      }))
    })), jsx("div", Object.assign({
      className: cx(classes.contentWrapper)
    }, {
      children: children
    }))]
  }));
}

function StateDialog() {
  const dispatch = useDispatch();
  const dialogProps = useDialogSelector();
  return jsx(Dialog, Object.assign({}, dialogProps, {
    onClose: (e, reason) => {
      dispatch(actions.dialog.closeDialog());
      dialogProps.onClose && dialogProps.onClose(e, reason);
    }
  }));
}

const useStyles$T = makeStyles()(theme => {
  return {
    root: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    contentWrapper: {
      width: '100%'
    },
    actionWrapper: {},
    actionButton: {},
    actionButtonClose: {},
    actionSpacer: {
      minWidth: theme.spacing(2),
      background: 'green',
      flexGrow: 1
    }
  };
});
function DialogContent({
  className,
  style,
  children,
  classes: classesProp,
  closeText = 'Close',
  closeIcon = 'close',
  hideCloseButton = false,
  disableActions = false,
  onClose,
  actions: actions$1 = []
}) {
  const {
    classes,
    cx
  } = useStyles$T(undefined, {
    props: {
      classes: classesProp
    }
  });
  const dispatch = useDispatch();
  const onContentClose = e => {
    dispatch(actions.dialog.closeDialog());
    onClose && onClose(e);
  };
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [jsx(DialogContent$1, Object.assign({
      className: cx(classes.contentWrapper),
      dividers: false
    }, {
      children: children
    })), (actions$1 && actions$1.length > 0 || !hideCloseButton) && jsxs(Fragment, {
      children: [jsx(Divider, {
        variant: "middle"
      }), jsxs(DialogActions, Object.assign({
        className: cx(classes.actionWrapper)
      }, {
        children: [actions$1 && actions$1.map(action => {
          if (action === 'spacer') {
            return jsx("div", {
              className: cx(classes.actionSpacer)
            });
          }
          return jsx(Button, Object.assign({
            className: cx(classes.actionButton, action.className),
            color: action.color || 'primary',
            variant: action.variant,
            disabled: disableActions || (typeof action.disabled === 'function' ? action.disabled() : action.disabled),
            onClick: action.onClick
          }, {
            children: action.title
          }), action.title);
        }), !hideCloseButton && jsx(Button, Object.assign({
          className: cx(classes.actionButton, classes.actionButtonClose),
          color: "secondary",
          icon: closeIcon,
          disabled: disableActions,
          size: "medium",
          onClick: onContentClose
        }, {
          children: closeText
        }))]
      }))]
    })]
  }));
}

const useStyles$S = makeStyles()(theme => {
  return {
    root: {
      zIndex: 10,
      flexShrink: 0,
      flexGrow: 0,
      fontSize: theme.typography.pxToRem(10),
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(12)
      },
      '& .MuiTypography-root': {
        fontSize: theme.typography.pxToRem(10),
        [theme.breakpoints.up('md')]: {
          fontSize: theme.typography.pxToRem(12)
        }
      }
    },
    toolbar: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      minHeight: theme.spacing(4)
    },
    titleContent: {
      flexGrow: 1
    },
    actionContent: {}
  };
});
const Footer = forwardRef((_a, ref) => {
  var {
      className,
      style,
      classes: classesProp,
      titleContent,
      actionContent,
      ToolbarProps
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "titleContent", "actionContent", "ToolbarProps"]);
  const {
    classes,
    cx
  } = useStyles$S(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx(AppBar, Object.assign({
    ref: ref,
    className: cx(classes.root, className),
    style: style,
    position: "relative",
    role: "contentinfo"
  }, rest, {
    children: jsxs(Toolbar, Object.assign({}, ToolbarProps, {
      className: cx(classes.toolbar)
    }, {
      children: [jsx("div", Object.assign({
        className: cx(classes.titleContent)
      }, {
        children: titleContent
      })), jsx("div", Object.assign({
        className: cx(classes.actionContent)
      }, {
        children: actionContent
      }))]
    }))
  }));
});

const useStyles$R = makeStyles()(theme => {
  return {
    root: {
      '&:focus-within label': {
        '.MuiCheckbox-root': {
          color: theme.palette.primary.main
        }
      },
      '&:hover': {
        svg: {
          color: theme.palette.action.active
        }
      }
    },
    checkbox: {}
  };
});
function CheckboxField({
  className,
  style,
  classes: classesProp,
  variant = 'outlined',
  required = false,
  errors = [],
  labelPlacement = 'end',
  disabled = false,
  readonly = false,
  label,
  id,
  autoFocus,
  value,
  helperText,
  onChange,
  color = 'primary',
  fullWidth = true,
  disableRipple = false,
  size = 'medium'
}) {
  const {
    classes,
    cx
  } = useStyles$R(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const hasErrors = errors && errors.length > 0;
  const displayHelperText = hasErrors ? t(...errors[0]) : helperText;
  return jsxs(FormControl, Object.assign({
    className: cx(classes.root, className),
    style: style,
    variant: variant === 'pill' ? 'outlined' : variant,
    required: required,
    error: hasErrors,
    fullWidth: fullWidth,
    size: size
  }, {
    children: [jsx(FormControlLabel, {
      labelPlacement: labelPlacement,
      disabled: disabled,
      label: label,
      control: jsx(Checkbox, {
        className: cx(classes.checkbox),
        required: required,
        name: id,
        id: id,
        autoFocus: autoFocus,
        checked: value || false,
        onChange: (e, checked) => {
          /** MUI does not stop updates when readonly */
          !readonly && onChange && onChange(e, checked);
        },
        disableRipple: disableRipple,
        color: color,
        size: size,
        readOnly: readonly,
        inputProps: {
          readOnly: readonly || disabled
        }
      })
    }), jsx(FormHelperText, Object.assign({
      error: hasErrors
    }, {
      children: displayHelperText
    }))]
  }));
}

const useStyles$Q = makeStyles()(theme => {
  return {
    root: {},
    inputLabel: {}
  };
});
function InputFieldBase(_a) {
  var {
      className,
      style,
      classes: classesProp
    } = _a,
    props = __rest(_a, ["className", "style", "classes"]);
  const {
      id,
      hasFormControl = false,
      variant,
      errors,
      helperText,
      label,
      fullWidth = true,
      showLabel = true,
      showHelperText = true,
      shrinkLabel,
      InputComponent,
      InputComponentProps
    } = props,
    rest = __rest(props, ["id", "hasFormControl", "variant", "errors", "helperText", "label", "fullWidth", "showLabel", "showHelperText", "shrinkLabel", "InputComponent", "InputComponentProps"]);
  const {
    classes,
    cx
  } = useStyles$Q(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const hasErrors = errors && errors.length > 0;
  const displayHelperText = hasErrors ? t(...errors[0]) : helperText;
  const labelID = `${id}-label`;
  const isFormWrapped = hasFormControl;
  const componentProps = Object.assign({}, InputComponentProps);
  return isFormWrapped ? jsx(InputComponent, Object.assign({
    className: cx(classes.root, className),
    style: style
  }, rest, {
    variant: variant === 'pill' ? 'outlined' : variant,
    errors: errors,
    label: label,
    id: id
  }, componentProps, {
    fullWidth: fullWidth,
    error: hasErrors,
    helperText: displayHelperText
  })) : jsxs(FormControl, Object.assign({
    className: cx(classes.root, className),
    style: style,
    variant: variant === 'pill' ? 'outlined' : variant,
    error: hasErrors,
    fullWidth: fullWidth
  }, {
    children: [showLabel && jsx(InputLabel, Object.assign({
      shrink: shrinkLabel,
      id: labelID,
      className: cx(classes.inputLabel)
    }, {
      children: label
    })), jsx(InputComponent, Object.assign({}, rest, {
      fullWidth: fullWidth,
      id: id,
      variant: variant
    }, componentProps)), showHelperText && jsx(FormHelperText, Object.assign({
      error: hasErrors
    }, {
      children: displayHelperText
    }))]
  }));
}

const useStyles$P = makeStyles()(( /*theme*/
) => {
  return {
    root: {}
  };
});
function DatePickerFieldAdapter(props) {
  const {
    error,
    helperText,
    clearable = true
  } = props;
  return jsx(DatePicker, Object.assign({}, props, {
    slotProps: {
      actionBar: {
        actions: [clearable && 'clear']
      },
      textField: {
        error: error,
        helperText: helperText
      }
    }
  }));
}
const NEVER = 9223372036854776000;
function DateInputField(_a) {
  var {
      className,
      style,
      classes: classesProp,
      onChange,
      id,
      value
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "onChange", "id", "value"]);
  const {
    classes,
    cx
  } = useStyles$P(undefined, {
    props: {
      classes: classesProp
    }
  });
  const momentValue = useMemo(() => {
    if (!value) {
      return null;
    }
    if (value >= NEVER) {
      return null;
    }
    return moment(value);
  }, [value]);
  return jsx(InputFieldBase, Object.assign({
    className: cx(classes.root, className),
    style: style,
    classes: classesProp,
    id: id
  }, rest, {
    value: momentValue,
    onChange: (moment, validation) => {
      const coercedMoment = moment;
      const newValue = coercedMoment.isValid() ? coercedMoment.startOf('day').valueOf() : null;
      onChange && onChange(null, newValue);
    },
    hasFormControl: true,
    InputComponent: DatePickerFieldAdapter
  }));
}

const useStyles$O = makeStyles()(theme => {
  return {
    root: {},
    adornmentImage: {
      height: theme.spacing(6),
      maxWidth: theme.spacing(6),
      '& img': {
        objectFit: 'contain'
      }
    }
  };
});
function ImageUrlInputField(_a) {
  var {
      className,
      style,
      classes: classesProp,
      onChange,
      id,
      name,
      value,
      variant = 'outlined',
      debounce = 500,
      InputComponentProps
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "onChange", "id", "name", "value", "variant", "debounce", "InputComponentProps"]);
  const {
    classes,
    cx
  } = useStyles$O(undefined, {
    props: {
      classes: classesProp
    }
  });
  const [stateValue, setStateValue] = useState(value || null);
  const [textValue, setTextValue] = useState(stateValue);
  const inputRef = useRef(null);
  useEffect(() => {
    setStateValue(value || null);
    if (value) {
      setTextValue(value);
    }
  }, [value]);
  const updateValue = useCallback((e, v) => {
    if (e) {
      e.target.name = name || id;
      e.target.id = id;
      e.target.value = v;
    }
    setStateValue(v);
    onChange && onChange(e, v);
  }, [id, name, onChange]);
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    const input$ = fromEvent(inputRef.current, 'input').pipe(debounceTime(500)).subscribe(event => {
      updateValue(event, event.target.value);
    });
    return () => {
      input$.unsubscribe();
    };
  }, [inputRef]);
  return jsx(InputFieldBase, Object.assign({
    className: cx(classes.root, className),
    style: style,
    classes: classesProp,
    id: id,
    name: name,
    variant: variant
  }, rest, {
    value: textValue || '',
    onChange: event => {
      // We are only going to fire the onchange if we have changed from
      // having an image to not having an image
      // so just update the text value here
      setTextValue(event.target.value);
    },
    hasFormControl: true,
    InputComponent: TextField$2,
    InputComponentProps: Object.assign(Object.assign({}, InputComponentProps), {
      InputProps: {
        inputRef: inputRef,
        endAdornment: jsx(InputAdornment, Object.assign({
          position: "end"
        }, {
          children: jsx(Image, {
            src: stateValue,
            className: cx(classes.adornmentImage),
            alt: "selected image",
            onError: event => {
              updateValue(event, null);
            },
            onLoad: event => {
              updateValue(event, textValue);
            }
          })
        }))
      }
    })
  }));
}

const useStyles$N = makeStyles()(theme => {
  return {
    root: {
      '& .ck.ck-toolbar': {
        background: 'transparent'
      },
      '& .ck.ck-content': {
        background: 'transparent'
      }
    }
  };
});
function RichTextFieldAdapter(props) {
  const _a = props,
    {
      onChange,
      InputComponent,
      InputComponentProps,
      hasFormControl,
      shrinkLabel,
      editorVariant = 'inline'
    } = _a,
    rest = __rest(_a, ["onChange", "InputComponent", "InputComponentProps", "hasFormControl", "shrinkLabel", "editorVariant"]);
  return jsx(TextField$2, Object.assign({}, rest, {
    InputProps: {
      inputComponent: RichTextEditor,
      inputProps: {
        variant: editorVariant,
        onChange: onChange
      }
    }
  }));
}
function RichTextInputField(_a) {
  var {
      className,
      style,
      classes: classesProp,
      onChange,
      id,
      value,
      variant,
      editorVariant = 'inline'
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "onChange", "id", "value", "variant", "editorVariant"]);
  const {
    classes,
    cx
  } = useStyles$N(undefined, {
    props: {
      classes: classesProp
    }
  });
  const [text, setText] = useState(value || '');
  useEffect(() => {
    const textValue = value || '';
    if (text !== textValue) {
      setText(textValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return jsx(InputFieldBase, Object.assign({
    className: cx(classes.root, className),
    style: style,
    classes: classesProp,
    variant: variant,
    id: id
  }, rest, {
    value: value,
    onChange: (event, newValue) => {
      onChange && onChange(event, newValue);
    },
    InputComponent: RichTextFieldAdapter,
    InputComponentProps: {
      editorVariant: editorVariant
    },
    shrinkLabel: true,
    hasFormControl: true
  }));
}

const useStyles$M = makeStyles()((theme, {
  variant
}) => {
  return {
    root: {}
  };
});
function RepositoryLookupInputField(_a) {
  var {
      className,
      style,
      classes: classesProp,
      onChange,
      id,
      value,
      variant = 'outlined',
      InputComponentProps,
      dataDefinition,
      repositoryName,
      filter
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "onChange", "id", "value", "variant", "InputComponentProps", "dataDefinition", "repositoryName", "filter"]);
  const {
    classes,
    cx
  } = useStyles$M({
    variant
  }, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const {
    repository: appRepository,
    repositoryDescriptor
  } = useApplicationRepository(repositoryName, dataDefinition);
  const [dataState, setDataState] = useState(appRepository.getState());
  useObservable(appRepository.getObservable(), setDataState);
  const loaded = dataState && !dataState.listing && dataState.page.data.length > 0;
  useEffect(() => {
    if (!loaded) {
      const subscription = appRepository.findAll(undefined, filter).subscribe();
      return () => {
        subscription.unsubscribe();
      };
    }
    return () => {
      // Nothing to do here
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, loaded]);
  const availableOptions = useMemo(() => {
    return dataState.page.data.map(dataItem => {
      const id = repositoryDescriptor.getIdentity && repositoryDescriptor.getIdentity(dataItem);
      const primaryText = repositoryDescriptor.getPrimaryText && repositoryDescriptor.getPrimaryText(dataItem);
      const secondaryText = repositoryDescriptor.getSecondaryText && repositoryDescriptor.getSecondaryText(dataItem);
      return {
        id,
        primaryText,
        secondaryText
      };
    }, []);
  }, [dataState.page.data, repositoryDescriptor]);
  const {
      required,
      autoFocus,
      helperText
    } = rest;
    __rest(rest, ["required", "autoFocus", "helperText"]);
  const renderOptions = useCallback(() => {
    const renderedOptions = availableOptions.map(option => {
      return jsx(MenuItem, Object.assign({
        dense: true,
        value: option.id
      }, {
        children: jsx(ListItemText, {
          primary: jsx(Typography, Object.assign({
            variant: "subtitle1"
          }, {
            children: option.primaryText
          })),
          secondary: jsx(Typography, Object.assign({
            variant: "caption"
          }, {
            children: option.secondaryText
          }))
        }, option.id)
      }), option.id);
    });
    return renderedOptions;
  }, [availableOptions]);
  // Force a selection if required and only one available Option
  useEffect(() => {
    if (required && availableOptions.length === 1 && !value) {
      const forcedSelection = availableOptions[0].id;
      onChange && onChange(null, forcedSelection);
    }
  }, [availableOptions, onChange, required, value]);
  return availableOptions && availableOptions.length > 0 ? jsx(InputFieldBase, Object.assign({
    className: cx(classes.root, className),
    style: style,
    classes: classesProp,
    id: id
  }, rest, {
    value: value || '',
    onChange: (event, newValue) => {
      var _a;
      const extractedValue = ((_a = newValue === null || newValue === void 0 ? void 0 : newValue.props) === null || _a === void 0 ? void 0 : _a.value) || null;
      onChange && onChange(event, extractedValue);
    },
    required: required,
    shrinkLabel: true,
    hasFormControl: false,
    InputComponent: Select,
    InputComponentProps: Object.assign(Object.assign({}, InputComponentProps || {}), {
      children: renderOptions(),
      variant: variant === 'pill' ? 'outlined' : variant
    })
  })) : jsx(Loader, {
    title: t('Loading {0}...', repositoryDescriptor.title)
  });
}

const useStyles$L = makeStyles()((theme, {
  variant
}) => {
  return {
    root: {}
  };
});
function TagFieldAdapter(props) {
  // Need to do this to extract properties that are set by the InputFieldBase
  const _a = props,
    {
      onChange,
      InputComponent,
      InputComponentProps,
      hasFormControl,
      shrinkLabel,
      error,
      helperText,
      placeholder,
      label,
      defaultValue,
      renderTags,
      value,
      options,
      variant
    } = _a,
    rest = __rest(_a, ["onChange", "InputComponent", "InputComponentProps", "hasFormControl", "shrinkLabel", "error", "helperText", "placeholder", "label", "defaultValue", "renderTags", "value", "options", "variant"]);
  const coercedProps = rest;
  return jsx(Autocomplete, Object.assign({
    multiple: true,
    freeSolo: true,
    clearOnBlur: true,
    filterSelectedOptions: true,
    defaultValue: defaultValue && (Array.isArray(defaultValue) ? defaultValue : [defaultValue]),
    value: value,
    onChange: onChange,
    options: options || [],
    renderTags: renderTags
  }, rest, {
    renderInput: _a => {
      var {
          inputProps
        } = _a,
        textFieldProps = __rest(_a, ["inputProps"]);
      return jsx(TextField$2, Object.assign({
        label: label,
        helperText: helperText,
        placeholder: placeholder,
        error: error
      }, coercedProps, textFieldProps, {
        inputProps: Object.assign({}, inputProps),
        variant: variant !== 'pill' ? variant : 'outlined',
        onBlur: e => {
          const currentInputValue = e.target.value.trim();
          if (!currentInputValue || !value || value.indexOf(currentInputValue) !== -1) {
            return;
          }
          onChange && onChange(e, [...value, currentInputValue], 'blur');
        }
      }));
    }
  }));
}
function TagInputField(_a) {
  var {
      className,
      style,
      classes: classesProp,
      onChange,
      id,
      value,
      variant = 'outlined',
      options,
      InputComponentProps,
      renderTags,
      chipVariant = 'filled',
      getOptionLabel,
      chipColor = 'primary',
      getChipColor
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "onChange", "id", "value", "variant", "options", "InputComponentProps", "renderTags", "chipVariant", "getOptionLabel", "chipColor", "getChipColor"]);
  const {
    classes,
    cx
  } = useStyles$L({
    variant
  }, {
    props: {
      classes: classesProp
    }
  });
  const optionLabelFn = getOptionLabel || (option => {
    return option;
  });
  const chipColorFn = useCallback(option => {
    if (getChipColor) {
      return getChipColor(option);
    } else {
      return chipColor;
    }
  }, [getChipColor, chipColor]);
  const renderTagsFn = useCallback((value, getTagProps, ownerState) => {
    if (renderTags) {
      return renderTags(value, getTagProps, ownerState);
    } else {
      value = Array.isArray(value) ? value : [value];
      return value.map((option, index) => {
        return jsx(Chip, Object.assign({
          variant: chipVariant,
          label: optionLabelFn(option),
          color: chipColorFn(option)
        }, getTagProps({
          index
        })));
      });
    }
  }, []);
  return jsx(InputFieldBase, Object.assign({
    className: cx(classes.root, className),
    style: style,
    classes: classesProp,
    id: id
  }, rest, {
    value: value,
    onChange: (event, newValue) => {
      onChange && onChange(event, newValue);
    },
    shrinkLabel: true,
    hasFormControl: true,
    renderTags: renderTagsFn,
    InputComponent: TagFieldAdapter,
    InputComponentProps: Object.assign(Object.assign({}, InputComponentProps || {}), {
      options: options || [],
      variant
    })
  }));
}

function TextField$1(props) {
  return jsx(InputBase, Object.assign({}, props));
}

const useStyles$K = makeStyles()((theme, {
  dense
}) => {
  return {
    root: {
      marginTop: theme.spacing(dense ? 0 : 1),
      marginBottom: theme.spacing(dense ? 1 : 2)
    }
  };
});
function BooleanField({
  className,
  style,
  classes: classesProp,
  field,
  editorProps,
  dense = false,
  variant = 'filled',
  autoFocus = false,
  errors = [],
  onChange,
  value,
  label,
  readonly = false
}) {
  const {
    classes,
    cx
  } = useStyles$K({
    dense
  }, {
    props: {
      classes: classesProp
    }
  });
  const {
    label: fieldLabel,
    id
  } = field;
  const displayValue = useMemo(() => {
    return Boolean(value);
  }, [value]);
  return jsx(CheckboxField, Object.assign({
    className: cx(classes.root, className),
    style: style
  }, editorProps, {
    fullWidth: true,
    id: id,
    helperText: field.description,
    label: label || fieldLabel,
    variant: variant,
    placeholder: field.placeholder,
    required: field.required,
    autoFocus: autoFocus,
    readonly: readonly,
    inputProps: {
      readOnly: readonly
    },
    value: displayValue,
    onChange: onChange,
    errors: errors,
    disableRipple: true,
    size: dense ? 'small' : 'medium'
  }));
}
const fieldBuilder$4 = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'boolean';
  },
  getComponent: () => {
    return BooleanField;
  }
};

const useStyles$J = makeStyles()((theme, {
  dense
}) => {
  return {
    root: {
      marginTop: theme.spacing(dense ? 0 : 1),
      marginBottom: theme.spacing(dense ? 1 : 2)
    }
  };
});
function DateField({
  className,
  style,
  classes: classesProp,
  field,
  editorProps,
  dense = false,
  variant = 'outlined',
  autoFocus = false,
  errors = [],
  onChange,
  value,
  label,
  readonly = false
}) {
  const {
    classes,
    cx
  } = useStyles$J({
    dense
  }, {
    props: {
      classes: classesProp
    }
  });
  const {
    label: fieldLabel,
    id
  } = field;
  const displayValue = useMemo(() => {
    return value || null;
  }, [value]);
  return jsx(DateInputField, Object.assign({
    className: cx(classes.root, className),
    style: style,
    fullWidth: true
  }, editorProps, {
    id: id,
    name: id,
    label: label || fieldLabel,
    size: dense ? 'small' : 'medium',
    variant: variant,
    placeholder: field.placeholder,
    helperText: field.description,
    required: field.required,
    autoFocus: autoFocus,
    readOnly: readonly,
    InputComponentProps: field.componentProps,
    value: displayValue,
    onChange: (event, value) => {
      // The Date Editor does not provide an event so manipulate the value
      onChange(null, {
        [id]: value
      });
    },
    errors: errors
  }));
}
const fieldBuilder$3 = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'date';
  },
  getComponent: () => {
    return DateField;
  }
};

const useStyles$I = makeStyles()((theme, {
  dense
}) => {
  return {
    root: {
      marginTop: theme.spacing(dense ? 0 : 1),
      marginBottom: theme.spacing(dense ? 1 : 2)
    }
  };
});
function TagField({
  className,
  style,
  classes: classesProp,
  field,
  editorProps,
  dense = false,
  variant = 'filled',
  autoFocus = false,
  errors = [],
  value,
  label,
  onChange,
  readonly = false
}) {
  var _a, _b;
  const {
    classes,
    cx
  } = useStyles$I({
    dense
  }, {
    props: {
      classes: classesProp
    }
  });
  const {
    label: fieldLabel,
    id
  } = field;
  const displayValue = useMemo(() => {
    return (field.format ? field.format(value) : value) || [];
  }, [value, field]);
  const resolvedVariant = ((_a = field.componentProps) === null || _a === void 0 ? void 0 : _a.variant) || variant;
  const options = (_b = field.componentProps) === null || _b === void 0 ? void 0 : _b.options;
  return jsx(TagInputField, Object.assign({
    className: cx(classes.root, className),
    style: style,
    fullWidth: true
  }, editorProps, {
    id: id,
    name: id,
    variant: resolvedVariant,
    label: label || fieldLabel,
    size: dense ? 'small' : 'medium',
    placeholder: field.placeholder,
    helperText: field.description,
    required: field.required,
    autoFocus: autoFocus,
    readOnly: readonly,
    InputComponentProps: Object.assign({}, field.componentProps),
    value: displayValue,
    onChange: (event, value) => {
      onChange(null, {
        [id]: value
      });
    },
    errors: errors,
    chipColor: "primary",
    options: options
  }));
}
const fieldBuilder$2 = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'tags';
  },
  getComponent: () => {
    return TagField;
  }
};

const useStyles$H = makeStyles()((theme, {
  dense
}) => {
  return {
    root: {
      marginTop: theme.spacing(dense ? 0 : 1),
      marginBottom: theme.spacing(dense ? 1 : 2)
    }
  };
});
function RichtextField(_a) {
  var _b;
  var {
      className,
      style,
      classes: classesProp,
      field,
      editorProps,
      dense = false,
      variant = 'outlined',
      autoFocus = false,
      errors = [],
      onChange,
      value,
      label,
      readonly = false
    } = _a;
    __rest(_a, ["className", "style", "classes", "field", "editorProps", "dense", "variant", "autoFocus", "errors", "onChange", "value", "label", "readonly"]);
  const {
    classes,
    cx
  } = useStyles$H({
    dense
  }, {
    props: {
      classes: classesProp
    }
  });
  const {
    label: fieldLabel,
    id,
    maxLength = ((_b = field.componentProps) === null || _b === void 0 ? void 0 : _b.maxLength) || 255
  } = field;
  const displayValue = useMemo(() => {
    return (field.format ? field.format(value) : value) || '';
  }, [value, field]);
  const multiline = maxLength > 256;
  const rows = Math.min(maxLength / 256, 20) || 1;
  return jsx(RichTextInputField, Object.assign({
    className: cx(classes.root, className),
    style: style,
    fullWidth: true
  }, editorProps, {
    id: id,
    name: id,
    label: label || fieldLabel,
    size: dense ? 'small' : 'medium',
    variant: variant,
    maxLength: maxLength,
    placeholder: field.placeholder,
    helperText: field.description,
    required: field.required,
    autoFocus: autoFocus,
    readOnly: readonly
  }, field.componentProps, {
    multiline: multiline,
    rows: rows,
    value: displayValue,
    onChange: (event, value) => {
      // The RTE does not provide an event so manipulate the value
      onChange(null, {
        [id]: value
      });
    },
    errors: errors
  }));
}
const fieldBuilder$1 = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'richtext';
  },
  getComponent: () => {
    return RichtextField;
  }
};

const useStyles$G = makeStyles()((theme, {
  dense
}) => {
  return {
    root: {
      marginTop: theme.spacing(dense ? 0 : 1),
      marginBottom: theme.spacing(dense ? 1 : 2)
    }
  };
});
function ImageURLField({
  className,
  style,
  classes: classesProp,
  field,
  editorProps,
  dense = false,
  variant = 'filled',
  autoFocus = false,
  errors = [],
  value,
  label,
  onChange,
  readonly = false
}) {
  var _a;
  const {
    classes,
    cx
  } = useStyles$G({
    dense
  }, {
    props: {
      classes: classesProp
    }
  });
  const {
    label: fieldLabel,
    id
  } = field;
  const displayValue = useMemo(() => {
    return (field.format ? field.format(value) : value) || null;
  }, [value, field]);
  const resolvedVariant = ((_a = field.componentProps) === null || _a === void 0 ? void 0 : _a.variant) || variant;
  return jsx(ImageUrlInputField, Object.assign({
    className: cx(classes.root, className),
    style: style,
    fullWidth: true
  }, editorProps, {
    id: id,
    name: id,
    variant: resolvedVariant,
    label: label || fieldLabel,
    size: dense ? 'small' : 'medium',
    placeholder: field.placeholder,
    helperText: field.description,
    required: field.required,
    autoFocus: autoFocus,
    readOnly: readonly,
    InputComponentProps: field.componentProps,
    value: displayValue,
    onChange: onChange,
    errors: errors
  }));
}
const imageURLFieldBuilder = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'imageURL';
  },
  getComponent: () => {
    return ImageURLField;
  }
};

const useStyles$F = makeStyles()((theme, {
  dense
}) => {
  return {
    root: {
      marginTop: theme.spacing(dense ? 0 : 1),
      marginBottom: theme.spacing(dense ? 1 : 2)
    }
  };
});
function RepositoryLookupField({
  className,
  style,
  classes: classesProp,
  field,
  editorProps,
  dense = false,
  variant = 'filled',
  autoFocus = false,
  errors = [],
  value,
  label,
  onChange,
  readonly = false,
  fullWidth
}) {
  var _a;
  const {
    classes,
    cx
  } = useStyles$F({
    dense
  }, {
    props: {
      classes: classesProp
    }
  });
  const {
    label: fieldLabel,
    id
  } = field;
  const displayValue = useMemo(() => {
    return (field.format ? field.format(value) : value) || null;
  }, [value, field]);
  const resolvedVariant = ((_a = field.componentProps) === null || _a === void 0 ? void 0 : _a.variant) || variant;
  const _b = field.componentProps || {},
    {
      dataDefinition,
      repositoryName,
      filter
    } = _b,
    inputProps = __rest(_b, ["dataDefinition", "repositoryName", "filter"]);
  return jsx(RepositoryLookupInputField, Object.assign({
    className: cx(classes.root, className),
    style: style,
    fullWidth: fullWidth
  }, editorProps, {
    id: id,
    name: id,
    variant: resolvedVariant,
    label: label || fieldLabel,
    size: dense ? 'small' : 'medium',
    placeholder: field.placeholder,
    helperText: field.description,
    required: field.required,
    autoFocus: autoFocus,
    readOnly: readonly,
    InputComponentProps: Object.assign({}, inputProps),
    value: displayValue,
    onChange: (event, value) => {
      onChange(null, {
        [id]: value
      });
    },
    errors: errors,
    dataDefinition: dataDefinition,
    repositoryName: repositoryName,
    filter: filter
  }));
}
const repositoryLookupFieldBuilder = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'repositoryLookup';
  },
  getComponent: () => {
    return RepositoryLookupField;
  }
};

const useStyles$E = makeStyles()((theme, {
  dense
}) => {
  return {
    root: {
      marginTop: theme.spacing(dense ? 0 : 1),
      marginBottom: theme.spacing(dense ? 1 : 2)
    }
  };
});
// The text field is a special case as it is used as the default if a match cannot be found
// So we export it also
function TextField({
  className,
  style,
  classes: classesProp,
  field,
  editorProps,
  dense = false,
  variant = 'filled',
  autoFocus = false,
  errors = [],
  onChange,
  value,
  readonly = false
}) {
  const {
    classes,
    cx
  } = useStyles$E({
    dense
  }, {
    props: {
      classes: classesProp
    }
  });
  const {
    label,
    id,
    maxLength = 255
  } = field;
  const displayValue = useMemo(() => {
    return (field.format ? field.format(value) : value) || '';
  }, [value, field]);
  let inputType = 'text';
  switch (field.type) {
    case 'email':
      inputType = 'email';
      break;
    case 'url':
      inputType = 'url';
      break;
    case 'number':
      inputType = 'number';
      break;
    case 'password':
      inputType = 'password';
      break;
    default:
      inputType = 'text';
  }
  return jsx(TextField$1, Object.assign({
    className: cx(classes.root, className),
    style: style
  }, editorProps, {
    fullWidth: true,
    id: id,
    name: id,
    label: label,
    autoComplete: inputType === 'password' ? 'on' : 'off',
    size: dense ? 'small' : 'medium',
    variant: variant,
    type: inputType,
    placeholder: field.placeholder,
    helperText: field.description,
    required: field.required,
    autoFocus: autoFocus,
    InputProps: {
      readOnly: readonly
    },
    inputProps: {
      maxLength: maxLength,
      autoComplete: inputType === 'password' ? 'new-password' : undefined
    },
    multiline: maxLength > 256,
    rows: Math.min(maxLength / 256, 20) || 1,
    value: displayValue,
    onChange: onChange,
    errors: errors
  }));
}
const fieldBuilder = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'string' || fieldDefinition.type === 'email' || fieldDefinition.type === 'url' || fieldDefinition.type === 'number' || fieldDefinition.type === 'password';
  },
  getComponent: () => {
    return TextField;
  }
};

const fieldMap = [fieldBuilder$4, fieldBuilder$3, fieldBuilder$2, fieldBuilder$1, imageURLFieldBuilder, repositoryLookupFieldBuilder, fieldBuilder, {
  isCompatible: () => true,
  getComponent: () => TextField
}];
function getComponent(fieldDefinition) {
  const builder = fieldMap.find(builder => builder.isCompatible(fieldDefinition));
  return (builder === null || builder === void 0 ? void 0 : builder.getComponent()) || TextField;
}

const useStyles$D = makeStyles()((theme, {
  dense,
  gridTemplateAreas
}) => {
  return {
    root: {
      display: 'grid',
      width: '100%',
      minHeight: dense ? 'auto' : '100%',
      gap: theme.spacing(1),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      gridTemplateAreas: gridTemplateAreas,
      [theme.breakpoints.down('sm')]: {
        gridTemplateAreas: 'unset',
        gridTemplateColumns: '100%'
      }
    },
    componentFieldWrapper: {
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        gridArea: 'unset !important'
      }
    }
  };
});
const EntityView = forwardRef((_a, ref) => {
  var {
      className,
      style,
      classes: classesProp,
      model,
      dense = false,
      variant = 'outlined',
      readonly = false,
      value,
      initialValue = value,
      onChange
    } = _a;
    __rest(_a, ["className", "style", "classes", "model", "dense", "variant", "readonly", "value", "initialValue", "onChange"]);
  const initialModel = useMemo(() => {
    return value || model.generateModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model, value]);
  const {
    form,
    handleChange,
    errors: validationErrors,
    validate,
    isValid,
    handleSubmit,
    resetForm,
    setForm,
    modified
  } = useForm(initialModel, model.validate);
  useEffect(() => {
    if (initialValue) {
      setForm(initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onHandleSubmit = useCallback((e, onSubmit, callback) => {
    if (isValid()) {
      handleSubmit(e, onSubmit, callback);
    }
  }, [handleSubmit, isValid]);
  const handle = useCallback(() => {
    return {
      validate: validate,
      isValid: isValid,
      handleSubmit: onHandleSubmit,
      resetForm: resetForm,
      modified: !_.isEqual(form, value),
      getFeatureImage: () => {
        return model.featureImageField ? form[model.featureImageField] : null;
      },
      getPrimaryText: () => {
        return model.getPrimaryText ? model.getPrimaryText(form) : null;
      },
      getSecondaryText: () => {
        return model.getSecondaryText ? model.getSecondaryText(form) : null;
      },
      getID: () => {
        return model.identityField ? form[model.identityField] : null;
      },
      setForm: setForm
    };
  }, [form, isValid, model, onHandleSubmit, resetForm, setForm, validate, value]);
  useImperativeHandle(ref, () => ({
    getEntityView: handle
  }));
  useEffect(() => {
    onChange && onChange(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);
  const gridLayout = useMemo(() => {
    // Extract columns/rows and fields
    const layout = model.layout.reduce((acc, row) => {
      if (row.length > acc.columns) {
        acc.columns = row.length;
      }
      // Extract the ID of the field
      // acc.layout.push(row.map((r) => r));
      acc.layout.push(row.map(r => {
        if (!r) {
          return r;
        } else if (typeof r === 'string') {
          return r;
        } else {
          return r.id;
        }
      }));
      row.forEach(f => {
        let fieldName = '';
        if (f && f.id) {
          fieldName = f.id;
        } else {
          fieldName = f;
        }
        acc.gridAreas.push(fieldName);
      });
      return acc;
    }, {
      rows: model.layout.length,
      columns: 0,
      layout: [],
      gridTemplateAreas: '',
      gridAreas: []
    });
    // Define the grid template areas
    layout.gridTemplateAreas = layout.layout.map(l => {
      return `'${Array.from(Object.assign(Object.assign({}, l), {
        length: layout.columns
      })).map(c => c || '.').join(' ')}'`;
    }).join(' ');
    // Make sure the grid areas are unique
    layout.gridAreas = layout.gridAreas.filter((v, i) => !layout.gridAreas.includes(v, i + 1));
    return layout;
  }, [model]);
  const {
    classes,
    cx
  } = useStyles$D({
    dense,
    gridTemplateAreas: gridLayout.gridTemplateAreas
  }, {
    props: {
      classes: classesProp
    }
  });
  // Generate the controls separately as they may change based on the values
  const fields = useMemo(() => {
    return gridLayout.gridAreas.map(fieldName => {
      var _a;
      const field = model.fields[fieldName];
      if (isComponentField(field)) {
        return jsx("div", Object.assign({
          className: cx(classes.componentFieldWrapper),
          style: {
            gridArea: fieldName
          }
        }, {
          children: field.render(undefined)
        }), field.id);
      } else {
        const Component = getComponent(field);
        return jsx(Component, Object.assign({
          className: cx(classes.componentFieldWrapper),
          field: field,
          dense: dense,
          variant: variant,
          value: form[field.id],
          onChange: handleChange,
          readonly: readonly || field.readonly,
          errors: validationErrors[field.id]
        }, field.componentProps, {
          style: Object.assign(Object.assign({}, (_a = field.componentProps) === null || _a === void 0 ? void 0 : _a.style), {
            gridArea: fieldName
          })
        }), `${field.type}|${field.label}`);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridLayout.gridAreas, model.fields, form, handleChange, validationErrors]);
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: fields
  }));
});

const useStyles$C = makeStyles()(( /*theme*/
) => {
  return {
    root: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%'
    }
  };
});
function Form({
  className,
  style,
  classes: classesProp,
  children,
  onSubmit
}) {
  const {
    classes,
    cx
  } = useStyles$C(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx("form", Object.assign({
    className: cx(classes.root, className),
    style: style,
    onSubmit: onSubmit
  }, {
    children: children
  }));
}

const useStyles$B = makeStyles()((theme, {
  alignTitle
}) => {
  const headerAlignment = alignTitle === 'center' ? alignTitle : alignTitle === 'left' ? 'flex-start' : 'flex-end';
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      overflow: 'hidden'
    },
    header: {
      flexShrink: 0,
      flexGrow: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: headerAlignment,
      textAlign: alignTitle
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 1,
      flexGrow: 1,
      maxHeight: '100%',
      overflow: 'hidden'
    },
    actions: {},
    actions_flex: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      '& > *': {
        marginLeft: `${theme.spacing(1)} !important`
      }
    },
    actions_fullwidth: {
      '& > *': {
        marginTop: `${theme.spacing(1)} !important`
      }
    },
    form_dense: {
      flexGrow: 0
    },
    entityView: {
      flexShrink: 0,
      overflow: 'auto'
    },
    entityView_shrink: {
      flexShrink: 1,
      overflow: 'auto',
      height: '100%',
      boxSizing: 'border-box'
    },
    title: Object.assign(Object.assign({}, theme.typography.h6), {
      textTransform: 'uppercase',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4)
      }
    }),
    spacer: {
      minHeight: theme.spacing(1),
      flexGrow: 1
    },
    spacer_dense: {
      flexGrow: 0,
      flexShrink: 1
    },
    actionWrapper: {
      flexShrink: 1,
      flexGrow: 0,
      marginTop: theme.spacing(1)
    },
    footer: {
      paddingTop: theme.spacing(1),
      flexGrow: 0,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column'
    },
    error: {
      width: '100%',
      borderRadius: theme.shape.borderRadius,
      borderColor: theme.palette.error.main,
      borderStyle: 'solid',
      borderWidth: 'thin',
      marginBottom: theme.spacing(0.5),
      padding: theme.spacing(0.5),
      boxSizing: 'border-box'
    },
    flexHelper: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 1,
      flexGrow: 1,
      overflow: 'hidden'
    },
    flexHelper_scroll: {
      overflow: 'auto'
    },
    gridHelper: {
      overflow: 'hidden',
      flexShrink: 0
    },
    gridHelper_shrink: {
      flexShrink: 1
    }
  };
});
function EntityViewForm({
  className,
  style,
  classes: classesProp,
  onSubmit,
  model,
  variant = 'standard',
  dense = true,
  title = '',
  header,
  footer,
  submit = 'submit',
  cancel = null,
  alignTitle = 'left',
  errors,
  onChange,
  value,
  initialValue = value,
  processing = false,
  readonly = false,
  actionVariant = 'fullwidth',
  onCancel,
  entityViewShrink = false
}) {
  var _a;
  const {
    classes,
    cx
  } = useStyles$B({
    alignTitle
  }, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const entityViewRef = useRef(null);
  const [canSubmit, setCanSubmit] = useState(false);
  const [isProcessing, setIsProcessing] = useState(processing);
  const [entityViewState, setEntityViewState] = useState((_a = entityViewRef === null || entityViewRef === void 0 ? void 0 : entityViewRef.current) === null || _a === void 0 ? void 0 : _a.getEntityView());
  const errorRef = useRef(null);
  const resolvedProcessing = isProcessing || processing;
  useEffect(() => {
    var _a;
    if (errors && errors.length > 0) {
      // Set focus to the error div for screen readers
      (_a = errorRef === null || errorRef === void 0 ? void 0 : errorRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [errors]);
  const handleChange = useCallback(data => {
    var _a;
    const state = (_a = entityViewRef === null || entityViewRef === void 0 ? void 0 : entityViewRef.current) === null || _a === void 0 ? void 0 : _a.getEntityView();
    setEntityViewState(state);
    setCanSubmit((state === null || state === void 0 ? void 0 : state.isValid()) || false);
    onChange && onChange(data);
  }, [onChange]);
  const handleCancelClick = () => {
    entityViewState === null || entityViewState === void 0 ? void 0 : entityViewState.resetForm();
    onCancel && onCancel();
  };
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [header, jsxs("div", Object.assign({
      className: cx(classes.header)
    }, {
      children: [title && jsx(Typography, Object.assign({
        variant: "h2",
        component: "h1",
        className: cx(classes.title)
      }, {
        children: t(title)
      })), errors && errors.length > 0 && jsx("div", Object.assign({
        ref: errorRef,
        className: cx(classes.error)
      }, {
        children: jsx(Error$1, Object.assign({
          size: "small"
        }, {
          children: t(...errors[0])
        }))
      }))]
    })), jsx(Form, Object.assign({
      className: cx(classes.form, dense && classes.form_dense),
      onSubmit: e => {
        e.preventDefault();
        setIsProcessing(true);
        entityViewState === null || entityViewState === void 0 ? void 0 : entityViewState.handleSubmit(e, onSubmit, err => {
          setIsProcessing(false);
          if (!err) {
            entityViewState === null || entityViewState === void 0 ? void 0 : entityViewState.resetForm();
          }
        });
      }
    }, {
      children: jsxs("div", Object.assign({
        className: cx(classes.flexHelper, !entityViewShrink && classes.flexHelper_scroll)
      }, {
        children: [jsx("div", Object.assign({
          className: cx(classes.gridHelper, entityViewShrink && classes.gridHelper_shrink)
        }, {
          children: jsx(EntityView, {
            value: value,
            initialValue: initialValue,
            className: cx(classes.entityView, entityViewShrink && classes.entityView_shrink),
            onChange: handleChange,
            readonly: readonly,
            ref: entityViewRef,
            model: model,
            dense: dense,
            variant: variant
          })
        })), jsx("div", {
          className: cx(classes.spacer, dense && classes.spacer_dense)
        }), jsx("div", Object.assign({
          className: cx(classes.actionWrapper)
        }, {
          children: !resolvedProcessing ? jsxs("div", Object.assign({
            className: cx(classes.actions, classes[`actions_${actionVariant}`])
          }, {
            children: [typeof submit === 'string' ? jsx(Button, Object.assign({
              type: "submit",
              fullWidth: actionVariant === 'fullwidth',
              disabled: !canSubmit || !(entityViewState === null || entityViewState === void 0 ? void 0 : entityViewState.modified) || readonly
            }, {
              children: t(submit)
            })) : submit, cancel && typeof cancel === 'string' && jsx(Button, Object.assign({
              fullWidth: actionVariant === 'fullwidth',
              disabled: readonly || !(entityViewState === null || entityViewState === void 0 ? void 0 : entityViewState.modified),
              onClick: handleCancelClick,
              color: "secondary"
            }, {
              children: t(cancel)
            })), cancel && typeof cancel !== 'string' && cancel]
          })) : jsx(Loader, {
            variant: "circular"
          })
        }))]
      }))
    })), jsx("div", Object.assign({
      className: cx(classes.footer)
    }, {
      children: footer
    }))]
  }));
}

const useStyles$A = makeStyles()(theme => {
  return {
    root: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    iconWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2)
    },
    icon: {
      width: `${theme.spacing(12)}!important`,
      height: `${theme.spacing(12)}!important`,
      fontSize: `${theme.spacing(12)}!important`,
      color: theme.palette.action.disabled,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        width: `${theme.spacing(16)}!important`,
        height: `${theme.spacing(16)}!important`,
        fontSize: `${theme.spacing(16)}!important`
      }
    },
    title: {
      textAlign: 'center',
      margin: theme.spacing(2),
      marginTop: theme.spacing(1)
    }
  };
});
function EmptyGridView({
  className,
  style,
  classes: classesProp,
  getStateParams
}) {
  const {
    classes,
    cx
  } = useStyles$A(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const stateParams = getStateParams();
  // Only update if it actually changed
  const memoisedStateParams = useMemoDeepCompare(() => {
    return stateParams;
  }, [stateParams]);
  const {
    updating,
    entityName,
    entityIcon
  } = memoisedStateParams;
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [updating && jsx(Loader, {
      title: t('loading {0}...', entityName)
    }), !updating && jsxs("div", Object.assign({
      className: cx(classes.iconWrapper)
    }, {
      children: [jsx(Icon, Object.assign({
        className: cx(classes.icon),
        size: "inherit",
        color: "inherit"
      }, {
        children: entityIcon || 'fa database'
      })), jsx(Typography, Object.assign({
        variant: "h4",
        component: "h2",
        className: cx(classes.title)
      }, {
        children: t('no {0} found', entityName)
      }))]
    }))]
  }));
}

const useStyles$z = makeStyles()((theme, {
  columns,
  gap = 1
}) => {
  const columnTemplate = Array(columns).fill('minmax(0, 1fr)').join(' ');
  const mdColumnTemplate = Array(columns).fill('minmax(0, 1fr)').join(' ');
  return {
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    errorWrapper: {
      flexGrow: 0
    },
    divSpacer: {
      flexGrow: 1,
      flexShrink: 0
    },
    gridWrapper: {
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: columnTemplate,
      gridTemplateRows: 'auto auto auto',
      gap: theme.spacing(gap),
      padding: theme.spacing(0.25),
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: mdColumnTemplate
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'minmax(0, 1fr)'
      }
    }
  };
});
function DataGrid({
  className,
  style,
  classes: classesProp,
  errors = [],
  data = [],
  columns = 3,
  gap = 1,
  itemComponent,
  loading = false,
  entityName,
  entityIcon
}) {
  const {
    classes,
    cx
  } = useStyles$z({
    columns,
    gap
  }, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  entityName = entityName || t('items');
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [errors && errors.length > 0 && jsx(ErrorWrapper, {
      className: cx(classes.errorWrapper),
      errors: errors,
      variant: "condensed"
    }), jsxs("div", Object.assign({
      className: cx(classes.divSpacer)
    }, {
      children: [loading && jsx(Loader, {
        variant: "circular"
      }), !loading && data.length === 0 && jsx(EmptyGridView, {
        getStateParams: () => ({
          updating: loading,
          entityIcon: entityIcon,
          entityName: entityName || ''
        })
      }), !loading && data.length > 0 && jsx("div", Object.assign({
        className: cx(classes.gridWrapper)
      }, {
        children: data.map(itemComponent)
      }))]
    }))]
  }));
}

const useStyles$y = makeStyles()(( /*theme*/
) => {
  return {
    root: {}
  };
});
function RepositoryGrid(_a) {
  var {
      className,
      style,
      classes: classesProp,
      repository,
      model,
      itemComponent
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "repository", "model", "itemComponent"]);
  const {
    classes,
    cx
  } = useStyles$y(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const [dataState, setDataState] = useState(repository.getState());
  useObservable(repository.getObservable(), setDataState, []);
  const refreshData = useCallback(() => {
    return repository.findAll().subscribe();
  }, [repository]);
  useIsomorphicLayoutEffect(() => {
    const subscription = refreshData();
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);
  return jsx(DataGrid, Object.assign({
    className: cx(classes.root, className),
    style: style,
    errors: dataState.errors.map(e => ({
      message: t(...e)
    })),
    data: dataState.page.data,
    itemComponent: itemComponent,
    loading: dataState.listing,
    entityName: model.pluralTitle,
    entityIcon: model.icon
  }, rest));
}

const useStyles$x = makeStyles()(theme => {
  var _a, _b, _c, _d, _e, _f;
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      boxSizing: 'border-box',
      marginBottom: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    root_inherit: {},
    root_small: {},
    root_large: {},
    root_medium: {},
    root_condensed: {},
    root_prominent: {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
      }
    },
    titleWrapper: {
      flexGrow: 1,
      flexShrink: 1
    },
    icon: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    titleText: {
      display: '-webkit-box',
      WebkitLineClamp: 2,
      lineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: theme.spacing(1),
      minHeight: theme.spacing(6)
    },
    contentWrapper: {
      marginTop: theme.spacing(1)
    },
    actionWrapper: {
      flexGrow: 0,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        paddingLeft: 0,
        '& > *': {
          marginRight: 0,
          marginBottom: theme.spacing(1)
        },
        '& > *:last-child': {
          marginRight: 0,
          marginBottom: 0
        }
      }
    },
    actionWrapper_condensed: {
      justifyContent: 'center'
    },
    actionWrapper_prominent: {
      '& > *': {
        marginRight: theme.spacing(2)
      },
      '& > *:last-child': {
        marginRight: 0
      },
      [theme.breakpoints.down('md')]: {
        paddingTop: theme.spacing(2),
        '& > *': {
          marginRight: 0,
          marginBottom: theme.spacing(1)
        },
        '& > *:last-child': {
          marginRight: 0,
          marginBottom: 0
        }
      }
    },
    actionButton: {
      flexShrink: 0,
      [theme.breakpoints.down('md')]: {
        width: '100%'
      }
    },
    actionButton_inherit: {},
    actionButton_default: {},
    actionButton_primary: {
      color: `${(_a = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.primary.light, theme.palette.primary.main, theme.palette.primary.dark], {})) === null || _a === void 0 ? void 0 : _a.toHex8String()}`
    },
    actionButton_secondary: {
      color: `${(_b = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.secondary.light, theme.palette.secondary.main, theme.palette.secondary.dark], {})) === null || _b === void 0 ? void 0 : _b.toHex8String()}`
    },
    actionButton_error: {
      color: `${(_c = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.error.light, theme.palette.error.main, theme.palette.error.dark], {})) === null || _c === void 0 ? void 0 : _c.toHex8String()}`
    },
    actionButton_info: {
      color: `${(_d = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.info.light, theme.palette.info.main, theme.palette.info.dark], {})) === null || _d === void 0 ? void 0 : _d.toHex8String()}`
    },
    actionButton_success: {
      color: `${(_e = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.success.light, theme.palette.success.main, theme.palette.success.dark], {})) === null || _e === void 0 ? void 0 : _e.toHex8String()}`
    },
    actionButton_warning: {
      color: `${(_f = mostReadable(tinycolor(theme.palette.background.paper), [theme.palette.warning.light, theme.palette.warning.main, theme.palette.warning.dark], {})) === null || _f === void 0 ? void 0 : _f.toHex8String()}`
    }
  };
});
function isButtonProps(action) {
  return Boolean(action.title);
}
function isIconButtonProps(action) {
  return Boolean(action.title);
}
function SectionHeader({
  className,
  style,
  classes: classesProp,
  title,
  size = 'medium',
  variant = 'prominent',
  subtitle,
  actions,
  icon,
  iconColor = 'inherit',
  iconTitle,
  onIconClick,
  children,
  titleAction
}) {
  const {
    classes,
    cx
  } = useStyles$x(undefined, {
    props: {
      classes: classesProp
    }
  });
  const typographyVariants = {
    inherit: 'inherit',
    small: 'h5',
    medium: 'h4',
    large: 'h2'
  };
  return jsxs("div", Object.assign({
    className: cx(classes.root, className, classes[`root_${size}`], classes[`root_${variant}`]),
    style: style
  }, {
    children: [jsxs("div", Object.assign({
      className: cx(classes.titleWrapper)
    }, {
      children: [titleAction, jsxs("div", Object.assign({
        className: cx(classes.title)
      }, {
        children: [icon && onIconClick && jsx(IconButton, {
          className: cx(classes.icon),
          size: size,
          icon: icon,
          title: iconTitle,
          color: iconColor,
          onClick: () => {
            onIconClick();
          }
        }), icon && !onIconClick && jsx(Icon, Object.assign({
          className: cx(classes.icon),
          size: size,
          title: iconTitle,
          color: iconColor
        }, {
          children: icon
        })), jsx(Typography, Object.assign({
          className: cx(classes.titleText),
          variant: typographyVariants[size],
          component: "h2"
        }, {
          children: title
        }))]
      })), subtitle && jsx(Typography, Object.assign({
        variant: "caption"
      }, {
        children: subtitle
      })), children && jsx("div", Object.assign({
        className: cx(classes.contentWrapper)
      }, {
        children: children
      }))]
    })), actions && jsx("div", Object.assign({
      className: cx(classes.actionWrapper, classes[`actionWrapper_${variant}`])
    }, {
      children: actions.map(action => {
        if (isButtonProps(action) || isIconButtonProps(action)) {
          if (variant === 'prominent') {
            const componentProps = action;
            return jsx(Button, Object.assign({}, componentProps, {
              className: cx(classes.actionButton, componentProps.className),
              color: componentProps.color || 'secondary',
              variant: componentProps.variant || 'pill'
            }, {
              children: action.title
            }), componentProps.title);
          } else {
            const componentProps = action;
            return jsx(IconButton, Object.assign({}, action, {
              variant: "text",
              color: "inherit",
              className: cx(classes.actionButton, classes[`actionButton_${componentProps.color || 'secondary'}`], componentProps.className),
              title: componentProps.title
            }), componentProps.title);
          }
        } else {
          return action();
        }
      })
    }))]
  }));
}

const useStyles$w = makeStyles()(theme => {
  return {
    root: {
      zIndex: 10,
      color: theme.palette.secondary.contrastText,
      background: theme.palette.secondary.main
    },
    toolbar: {
      minWidth: '100%'
    },
    titleContent: {
      flexGrow: 1,
      flexShrink: 1,
      overflow: 'hidden'
    },
    actionContent: {
      flexShrink: 0,
      flexGrow: 0
    }
  };
});
const TitleBar = forwardRef((_a, ref) => {
  var {
      className,
      style,
      classes: classesProp,
      titleContent,
      actionContent,
      ToolbarProps
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "titleContent", "actionContent", "ToolbarProps"]);
  const {
    classes,
    cx
  } = useStyles$w(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx(AppBar, Object.assign({
    ref: ref,
    className: cx(classes.root, className),
    style: style,
    position: "relative"
  }, rest, {
    children: jsxs(Toolbar, Object.assign({}, ToolbarProps, {
      className: cx(classes.toolbar)
    }, {
      children: [jsx("div", Object.assign({
        className: cx(classes.titleContent)
      }, {
        children: titleContent
      })), jsx("div", Object.assign({
        className: cx(classes.actionContent)
      }, {
        children: actionContent
      }))]
    }))
  }));
});

const useStyles$v = makeStyles()((theme, {
  color
}) => {
  let palette = null;
  if (color === 'disabled') {
    palette = {
      main: theme.palette.action.disabled,
      light: theme.palette.action.disabled,
      dark: theme.palette.action.disabled,
      contrastText: theme.palette.getContrastText(theme.palette.action.active)
    };
  } else if (color === 'action') {
    palette = {
      main: theme.palette.action.active,
      light: theme.palette.action.active,
      dark: theme.palette.action.active,
      contrastText: theme.palette.getContrastText(theme.palette.action.active)
    };
  } else if (color !== 'inherit') {
    palette = theme.palette[color];
  }
  return {
    root: {
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: palette ? theme.palette.mode === 'dark' && tinycolor(palette.main).isDark() ? palette.light : palette.main : undefined
    },
    icon: {
      fontSize: theme.spacing(2),
      marginLeft: theme.spacing(0.5)
    }
  };
});
function Link(_a) {
  var {
      className,
      style,
      classes: classesProp,
      target = '_blank',
      children,
      icon,
      underline = 'hover',
      color = 'inherit'
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "target", "children", "icon", "underline", "color"]);
  const {
    classes,
    cx
  } = useStyles$v({
    color
  }, {
    props: {
      classes: classesProp
    }
  });
  if (icon === 'none') {
    icon = undefined;
  } else if (!icon) {
    icon = target === '_blank' ? 'open_in_new' : 'link';
  }
  return jsxs(Link$1, Object.assign({
    className: cx(classes.root, className),
    underline: underline,
    color: "inherit",
    target: target
  }, rest, {
    children: [children, icon && jsx(Icon, Object.assign({
      className: cx(classes.icon),
      size: "small"
    }, {
      children: icon
    }))]
  }));
}

const useStyles$u = makeStyles()(( /*theme*/
) => {
  return {
    root: {
      alignItems: 'center'
    }
  };
});
function RouteLink(props) {
  const {
    className,
    style,
    classes: classesProp,
    variant = 'link',
    LinkProps,
    IconButtonProps,
    ButtonProps,
    to,
    navigationOptions,
    title,
    color,
    icon = 'link'
  } = props;
  const {
    classes,
    cx
  } = useStyles$u(undefined, {
    props: {
      classes: classesProp
    }
  });
  const path = useResolvedPath(to);
  const navigate = useNavigate();
  const navigateTo = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    navigate(path, navigationOptions);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [path, navigationOptions]);
  const Component = useMemo(() => {
    switch (variant) {
      case 'button':
        return jsx(Button, Object.assign({
          className: cx(classes.root, className),
          style: style,
          icon: icon,
          color: color
        }, ButtonProps, {
          onClick: navigateTo
        }, {
          children: title
        }));
      case 'iconButton':
        return jsx(IconButton, Object.assign({
          className: cx(classes.root, className),
          style: style,
          icon: icon,
          color: color
        }, IconButtonProps, {
          title: title,
          onClick: navigateTo
        }));
      default:
        return jsx(Link, Object.assign({
          className: cx(classes.root, className),
          style: style,
          icon: icon,
          color: color
        }, LinkProps, {
          href: path.pathname,
          onClick: navigateTo,
          target: "_self"
        }, {
          children: title
        }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  return Component;
}

const useStyles$t = makeStyles()(theme => {
  return {
    root: {
      cursor: 'default',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    menuLabel: {
      marginRight: theme.spacing(1),
      flexGrow: 1,
      cursor: 'pointer'
    },
    dropdown: {
      cursor: 'pointer'
    },
    listItem: {
      padding: 0,
      paddingRight: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    listItemText: {},
    subListItem: {
      paddingRight: 0
    },
    subListItemText: {},
    menuItem: {},
    menuItemElement: {
      minHeight: 0,
      cursor: 'default',
      '&:hover': {
        background: 'transparent'
      }
    }
  };
});
const DropdownMenu = forwardRef(({
  className,
  style,
  classes: classesProp,
  label,
  secondaryLabel,
  title,
  icon,
  iconColor = 'inherit',
  prefixIcon,
  prefixIconColor = 'inherit',
  size = 'medium',
  id,
  onClose,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right'
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'right'
  },
  TransitionComponent = Fade,
  menu,
  // @ts-expect-error 'open' is a hidden prop for use in sub menues
  open = false,
  anchorElement,
  hideIconButton = false
}, ref) => {
  const {
    classes,
    cx
  } = useStyles$t(undefined, {
    props: {
      classes: classesProp
    }
  });
  const menuWrapperRef = useRef(null);
  const menuID = `${id}_menu`;
  const [anchorEl, setAnchorEl] = useState(anchorElement || null);
  useEffect(() => {
    setAnchorEl(anchorElement || null);
  }, [anchorElement]);
  const openMenu = e => {
    if (e) {
      e.stopPropagation();
    }
    setAnchorEl(menuWrapperRef.current);
  };
  const closeMenu = e => {
    if (e) {
      e.stopPropagation();
    }
    setAnchorEl(null);
    onClose && onClose(e);
  };
  useEffect(() => {
    if (!open && anchorEl) {
      // @ts-expect-error we are protecting against undefined in the method so this is okay
      closeMenu(undefined);
    }
  }, [open]);
  useImperativeHandle(ref, () => {
    return {
      openMenu,
      closeMenu
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  icon = icon || (label ? 'arrow_drop_down' : 'more_vertical');
  const renderMenuItem = item => {
    let menuContent;
    let key = null;
    let isElement = false;
    if (isValidElement(item)) {
      key = item.key;
      menuContent = item;
      isElement = true;
    } else {
      key = `${item.icon}-${item.title}`;
      const showLabel = item.showLabel === undefined || item.showLabel;
      const iconColor = item.iconColor || 'inherit';
      const hasSubMenu = !!item.menu;
      menuContent = jsxs(ListItem, Object.assign({
        className: cx(classes.listItem, hasSubMenu && classes.subListItem),
        "aria-label": item.title,
        onClick: e => {
          closeMenu(e);
          item.onClick && item.onClick(e);
        },
        components: {
          Root: 'div'
        }
      }, {
        children: [!hasSubMenu && item.icon && jsx(ListItemIcon, {
          children: jsx(Icon, Object.assign({
            color: iconColor
          }, {
            children: item.icon
          }))
        }), !hasSubMenu && showLabel && jsx(ListItemText, {
          className: cx(classes.listItemText, hasSubMenu && classes.subListItemText),
          primary: item.title,
          secondary: item.subtitle
        }), hasSubMenu && jsx(DropdownMenu, {
          className: cx(classes.dropdown),
          icon: "chevron_right",
          prefixIcon: item.icon,
          prefixIconColor: item.iconColor,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          menu: item.menu,
          label: item.title,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
          },
          // @ts-expect-error 'open' is a hidden prop
          open: !!anchorEl,
          onClose: closeMenu
        })]
      }));
    }
    return jsx(MenuItem, Object.assign({
      className: cx(classes.menuItem, isElement && classes.menuItemElement),
      disableTouchRipple: isElement,
      disableRipple: isElement
    }, {
      children: menuContent
    }), key);
  };
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style,
    ref: menuWrapperRef
  }, {
    children: [prefixIcon && jsx(ListItemIcon, {
      children: jsx(Icon, Object.assign({
        color: prefixIconColor,
        onClick: openMenu
      }, {
        children: prefixIcon
      }))
    }), label && typeof label === 'string' && jsx(ListItemText, {
      className: cx(classes.menuLabel),
      primary: label,
      secondary: secondaryLabel,
      onClick: openMenu
    }), label && typeof label !== 'string' && jsx("div", Object.assign({
      onClick: openMenu
    }, {
      children: label
    })), !hideIconButton && jsx(IconButton, {
      icon: icon,
      color: iconColor,
      size: size,
      title: title,
      "aria-haspopup": "menu",
      "aria-controls": anchorEl ? menuID : undefined,
      onClick: openMenu
    }), jsx(Menu, Object.assign({
      id: menuID,
      anchorEl: anchorEl,
      open: !!anchorEl,
      onClose: closeMenu,
      keepMounted: true,
      anchorOrigin: anchorOrigin,
      transformOrigin: transformOrigin,
      TransitionComponent: TransitionComponent
    }, {
      children: menu && menu.filter(i => i).map(renderMenuItem)
    }))]
  }));
});

const useStyles$s = makeStyles()(theme => {
  return {
    root: {
      height: 'auto',
      flexShrink: 0
    },
    module: {},
    disabledModule: {
      backgroundColor: `${theme.palette.action.disabled} !important`
    },
    subModule: {
      paddingLeft: `${theme.spacing(2)} !important`,
      borderTop: `thin solid ${theme.palette.divider}`
    },
    moduleHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    icon: {
      marginRight: theme.spacing(2)
    },
    roleAccess: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    subtitle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    path: {
      marginLeft: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  };
});
function Module({
  className,
  style,
  classes: classesProp,
  module,
  subModule,
  path = '',
  filter
}) {
  const {
    classes,
    cx
  } = useStyles$s(undefined, {
    props: {
      classes: classesProp
    }
  });
  const roles = !module.auth ? '*' : typeof module.auth === 'string' ? module.auth : module.auth.join(',');
  return jsx(List, Object.assign({
    className: cx(classes.module, subModule && classes.subModule),
    subheader: jsxs(ListSubheader, Object.assign({
      className: cx(classes.moduleHeader, !module.enabled && classes.disabledModule)
    }, {
      children: [subModule && jsx(Icon, Object.assign({
        className: cx(classes.icon)
      }, {
        children: "subdirectory_arrow_right"
      })), module.icon && jsx(Icon, Object.assign({
        className: cx(classes.icon)
      }, {
        children: module.icon
      })), jsx(ListItemText, {
        primary: module.name,
        primaryTypographyProps: {
          component: 'div'
        },
        secondaryTypographyProps: {
          component: 'div'
        },
        secondary: jsxs("div", Object.assign({
          className: cx(classes.subtitle)
        }, {
          children: [jsx(Typography, Object.assign({
            component: "div",
            style: {
              minWidth: 200
            }
          }, {
            children: module.title
          })), jsxs("div", Object.assign({
            className: cx(classes.path)
          }, {
            children: [jsx(Icon, Object.assign({
              className: cx(classes.icon)
            }, {
              children: "route"
            })), `${path}${module.path}`]
          }))]
        }))
      }), jsxs("div", Object.assign({
        className: cx(classes.roleAccess)
      }, {
        children: [jsx(Icon, Object.assign({
          className: cx(classes.icon)
        }, {
          children: "groups"
        })), roles]
      }))]
    }))
  }, {
    children: module.modules && Object.values(module.modules).filter(m => {
      if (isModuleConfig(m)) {
        if (!filter) {
          return true;
        } else if (typeof m.auth === 'string') {
          return m.auth === filter;
        } else if (Array.isArray(m.auth)) {
          return m.auth.includes(filter);
        } else {
          return true;
        }
      } else {
        return false;
      }
    }).map(submoduleConfig => jsx(Module, {
      module: submoduleConfig,
      subModule: true,
      filter: filter,
      path: `${path}${module.path}${module.path === '/' ? '' : '/'}`
    }, submoduleConfig.name))
  }));
}

const useStyles$r = makeStyles()(theme => {
  return {
    root: {
      padding: theme.spacing(3),
      paddingTop: theme.spacing(4),
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    },
    moduleList: {
      overflow: 'auto',
      flexShrink: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  };
});
function ModuleExplorer({
  className,
  style,
  classes: classesProp,
  modules = []
}) {
  const {
    classes,
    cx
  } = useStyles$r(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const [filter, setFilter] = useState();
  const [resolvedModules, setResolvedModules] = useState([]);
  useDeepCompareEffect(() => {
    const resolvedModules = resolveModules(modules);
    setResolvedModules(resolvedModules);
  }, [modules]);
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [jsx(TextField$1, {
      icon: "groups",
      placeholder: t('enter role to filter...'),
      clearable: true,
      value: filter || '',
      onChange: (e, value) => {
        setFilter(value);
      }
    }), jsx("div", Object.assign({
      className: cx(classes.moduleList)
    }, {
      children: resolvedModules.filter(m => {
        if (isModuleConfig(m)) {
          if (!filter) {
            return true;
          } else if (typeof m.auth === 'string') {
            return m.auth === filter;
          } else if (Array.isArray(m.auth)) {
            return m.auth.includes(filter);
          } else {
            return true;
          }
        } else {
          return false;
        }
      }).map(m => jsx(Module, {
        module: m,
        filter: filter
      }, m.name))
    }))]
  }));
}

const useStyles$q = makeStyles()(theme => {
  return {
    root: {
      height: 'auto',
      flexShrink: 0
    },
    route: {},
    disabledRoute: {
      backgroundColor: `${theme.palette.action.disabled} !important`
    },
    subRoute: {
      paddingLeft: `${theme.spacing(2)} !important`,
      borderTop: `thin solid ${theme.palette.divider}`
    },
    routeHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    icon: {
      marginRight: theme.spacing(2)
    },
    roleAccess: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    subtitle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    path: {
      marginLeft: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  };
});
function Route({
  className,
  style,
  classes: classesProp,
  route,
  subRoute,
  filter,
  path = ''
}) {
  const {
    classes,
    cx
  } = useStyles$q(undefined, {
    props: {
      classes: classesProp
    }
  });
  const roles = !route.auth ? '*' : typeof route.auth === 'string' ? route.auth : route.auth.join(',');
  return jsx(List, Object.assign({
    className: cx(classes.route, subRoute && classes.subRoute),
    subheader: jsxs(ListSubheader, Object.assign({
      className: cx(classes.routeHeader)
    }, {
      children: [subRoute && jsx(Icon, Object.assign({
        className: cx(classes.icon)
      }, {
        children: "subdirectory_arrow_right"
      })), route.icon && jsx(Icon, Object.assign({
        className: cx(classes.icon)
      }, {
        children: route.icon
      })), jsx(ListItemText, {
        primaryTypographyProps: {
          component: 'div'
        },
        secondaryTypographyProps: {
          component: 'div'
        },
        primary: route.title,
        secondary: jsx("div", Object.assign({
          className: cx(classes.subtitle)
        }, {
          children: jsx(Typography, Object.assign({
            component: "div",
            style: {
              minWidth: 200
            }
          }, {
            children: `${path}${route.path}`
          }))
        }))
      }), jsxs("div", Object.assign({
        className: cx(classes.roleAccess)
      }, {
        children: [jsx(Icon, Object.assign({
          className: cx(classes.icon)
        }, {
          children: "groups"
        })), roles]
      }))]
    }))
  }, {
    children: route.routes && Object.values(route.routes).filter(m => {
      if (!filter) {
        return true;
      } else if (typeof m.auth === 'string') {
        return m.auth === filter;
      } else if (Array.isArray(m.auth)) {
        return m.auth.includes(filter);
      } else {
        return true;
      }
    }).map(subrouteConfig => jsx(Route, {
      route: subrouteConfig,
      subRoute: true,
      filter: filter,
      path: `${path}${route.path}${route.path === '/' ? '' : '/'}`
    }, subrouteConfig.title))
  }));
}

const useStyles$p = makeStyles()(theme => {
  return {
    root: {
      padding: theme.spacing(3),
      paddingTop: theme.spacing(4),
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    },
    routeList: {
      overflow: 'auto',
      flexShrink: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  };
});
function RouteExplorer({
  className,
  style,
  classes: classesProp,
  modules = []
}) {
  const {
    classes,
    cx
  } = useStyles$p(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const [filter, setFilter] = useState();
  const [resolvedModules, setResolvedModules] = useState([]);
  const [routes, setRoutes] = useState([]);
  useDeepCompareEffect(() => {
    const resolvedModules = resolveModules(modules);
    setResolvedModules(resolvedModules);
    // // Also update the routes by extracting from the modules
    setRoutes(extractRoutesFromModules(resolvedModules));
  }, [modules]);
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [jsx(TextField$1, {
      icon: "groups",
      placeholder: t('enter role to filter...'),
      clearable: true,
      value: filter || '',
      onChange: (e, value) => {
        setFilter(value);
      }
    }), jsx("div", Object.assign({
      className: cx(classes.routeList)
    }, {
      children: routes.filter(r => {
        if (!filter) {
          return true;
        } else if (typeof r.auth === 'string') {
          return r.auth === filter;
        } else if (Array.isArray(r.auth)) {
          return r.auth.includes(filter);
        } else {
          return true;
        }
      }).map(r => jsx(Route, {
        route: r,
        filter: filter
      }, r.title))
    }))]
  }));
}

const useStyles$o = makeStyles()(theme => {
  return {
    root: {
      display: 'block'
    },
    active: {}
  };
});
const NavLinkAdapter = forwardRef((_a, ref) => {
  var {
      children,
      className,
      classes: classesProp,
      ownerState
    } = _a,
    rest = __rest(_a, ["children", "className", "classes", "ownerState"]);
  const {
    classes,
    cx
  } = useStyles$o(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx("li", {
    children: jsx(NavLink$1, Object.assign({
      className: ({
        isActive
      }) => {
        return cx(classes.root, className, isActive && classes.active, isActive && 'active');
      },
      end: true
    }, rest, {
      children: children
    }))
  });
});

const useStyles$n = makeStyles()((theme, {
  variant,
  depth,
  showLabel,
  activeEmbelish,
  orientation
}) => {
  const inactiveColor = theme.palette.action.active;
  const activeColor = theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light;
  const isVerticalOrientation = orientation === 'vertical';
  const fullPadding = isVerticalOrientation ? 3 : 1.5;
  const activePadding = isVerticalOrientation ? 2.5 : 1.5;
  return {
    root: {
      textDecoration: 'none!important',
      textTransform: 'capitalize',
      color: inactiveColor,
      cursor: 'pointer',
      borderWidth: 0,
      backgroundColor: 'transparent',
      marginRight: variant === 'rounded' ? theme.spacing(1) : 0,
      transition: theme.transitions.create(['border-width', 'background-color', 'border-bottom-right-radius', 'border-top-right-radius'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      }),
      borderBottomRightRadius: variant === 'rounded' ? theme.spacing(4) : 0,
      borderTopRightRadius: variant === 'rounded' ? theme.spacing(4) : 0,
      '&.active': {
        color: activeColor
      }
    },
    itemWrapper: variant === 'rounded' ? {
      borderBottomRightRadius: theme.spacing(4),
      borderTopRightRadius: theme.spacing(4),
      justifyContent: showLabel ? 'flex-start' : 'center',
      paddingLeft: theme.spacing(fullPadding),
      '.active &': {
        paddingLeft: theme.spacing(activePadding)
      }
    } : {
      paddingLeft: theme.spacing(fullPadding),
      '.active &': {
        paddingLeft: theme.spacing(activePadding)
      }
    },
    iconWrapper: {
      transition: theme.transitions.create(['padding-right'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      }),
      paddingLeft: showLabel ? theme.spacing(2 * Math.min(depth, 4)) : 0,
      minWidth: 0,
      paddingRight: showLabel ? isVerticalOrientation ? theme.spacing(2) : theme.spacing(1) : 0,
      color: inactiveColor,
      '.active &': {
        color: activeColor
      }
    },
    icon: {
      transition: theme.transitions.create(['font-size'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      }),
      fontSize: theme.typography.pxToRem(14)
    },
    iconLarger: {
      fontSize: theme.typography.pxToRem(18),
      marginLeft: theme.spacing(-0.5)
    },
    label: {
      overflow: 'hidden',
      flexShrink: 1
    },
    labelText: {
      maxWidth: theme.spacing(1000),
      transition: theme.transitions.create(['max-width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      }),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontWeight: 'thin',
      fontSize: theme.typography.pxToRem(12)
    },
    labelTextHidden: {
      maxWidth: 0
    },
    iconButton: {
      width: isVerticalOrientation ? theme.spacing(3) : undefined,
      height: isVerticalOrientation ? theme.spacing(4) : undefined,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: theme.typography.pxToRem(10),
      transition: theme.transitions.create(['max-width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      }),
      overflow: 'hidden',
      flexShrink: 0
    },
    iconButtonHidden: {
      maxWidth: 0
    },
    badge: {
      flexGrow: 1,
      overflow: 'hidden',
      flexShrink: 1,
      marginRight: showLabel ? variant !== 'rounded' ? isVerticalOrientation ? theme.spacing(1) : 0 : 0 : 0
    },
    active: {
      backgroundColor: activeEmbelish ? theme.palette.action.focus : undefined,
      fontWeight: 'bold',
      borderLeftWidth: activeEmbelish ? theme.spacing(0.5) : 0,
      borderColor: theme.palette.primary.main,
      borderStyle: 'solid'
    }
  };
});
function NavLink({
  className,
  style,
  classes: classesProp,
  route,
  variant = 'rounded',
  depth = 0,
  onClick,
  iconButton,
  showLabel = true,
  showIconButton = true,
  activeEmbelish = true,
  orientation
}) {
  const {
    classes,
    cx
  } = useStyles$n({
    variant,
    depth,
    showIconButton,
    showLabel,
    activeEmbelish,
    orientation
  }, {
    props: {
      classes: classesProp
    }
  });
  const derivedPath = route.absolutePath || route.path;
  const navPath = derivedPath && derivedPath.endsWith('*') ? derivedPath.slice(0, -1) : derivedPath;
  return jsx(ListItem, Object.assign({
    className: cx(classes.root, className),
    style: style,
    disablePadding: true,
    disableGutters: true,
    components: {
      Root: route.path ? NavLinkAdapter : undefined
    },
    onClick: onClick,
    componentsProps: {
      root: {
        to: navPath,
        classes: {
          active: cx(classes.active)
        }
      }
    }
  }, {
    children: jsxs(ListItemButton, Object.assign({
      className: cx(classes.itemWrapper)
    }, {
      children: [jsx(ListItemIcon, Object.assign({
        className: cx(classes.iconWrapper)
      }, {
        children: route.icon && jsx(Icon, Object.assign({
          size: "inherit",
          className: cx(classes.icon, !showLabel && classes.iconLarger),
          style: {
            fontSize: !showLabel ? '1.4rem' : '1rem'
          }
        }, {
          children: route.icon
        }))
      })), jsxs(Badge, Object.assign({
        className: cx(classes.badge)
      }, {
        children: [jsx(ListItemText, {
          className: cx(classes.label),
          primaryTypographyProps: {
            variant: 'subtitle1',
            className: cx(classes.labelText, !showLabel && classes.labelTextHidden)
          },
          primary: route.title
        }), jsx("div", Object.assign({
          className: cx(classes.iconButton, !showIconButton && classes.iconButtonHidden)
        }, {
          children: iconButton
        }))]
      }))]
    }))
  }));
}

const useStyles$m = makeStyles()((theme, {
  variant
}) => {
  return {
    root: {
      padding: 0
    },
    groupWrapper: {
      maxHeight: 0,
      opacity: 0,
      transition: theme.transitions.create(['max-height', 'opacity'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      })
    },
    groupWrapperOpen: {
      opacity: 1,
      maxHeight: 1000
    }
  };
});
function NavGroup({
  className,
  style,
  classes: classesProp,
  route,
  variant = 'rounded',
  depth = 0,
  showLabel = true,
  showIconButton = true,
  activeEmbelish = true,
  maxDepth,
  orientation
}) {
  var _a;
  const match = useMatch({
    path: route.path || '',
    caseSensitive: false,
    end: false
  });
  const isActive = Boolean(match);
  const [open, setOpen] = useState(isActive);
  const {
    classes,
    cx
  } = useStyles$m({
    variant,
    depth
  }, {
    props: {
      classes: classesProp
    }
  });
  return jsxs(List, Object.assign({
    className: cx(classes.root, className),
    style: style,
    dense: true
  }, {
    children: [jsx(NavLink, {
      onClick: () => {
        setOpen(open => !open);
      },
      depth: depth,
      showIconButton: showIconButton,
      showLabel: showLabel,
      variant: variant,
      route: route,
      iconButton: jsx(IconButton, {
        color: "action",
        "aria-label": open ? 'collapse' : 'expand',
        disableRipple: true,
        className: "w-16 h-16 p-0",
        icon: open ? 'expand_less' : 'expand_more'
      }),
      activeEmbelish: activeEmbelish,
      orientation: orientation
    }), jsx("div", Object.assign({
      className: cx(classes.groupWrapper, open && classes.groupWrapperOpen)
    }, {
      children: (_a = route.routes) === null || _a === void 0 ? void 0 : _a.map(r => jsx(NavItem, {
        depth: depth + 1,
        showIconButton: showIconButton,
        showLabel: showLabel,
        route: r,
        variant: variant,
        activeEmbelish: activeEmbelish,
        maxDepth: maxDepth,
        orientation: orientation
      }, `${r.title}:${r.path}`))
    }))]
  }));
}

function NavItem({
  className,
  style,
  route,
  variant = 'rounded',
  depth = 0,
  showLabel = true,
  showIconButton = true,
  activeEmbelish = true,
  maxDepth = 3,
  orientation
}) {
  var _a;
  // If this item is set for navigation we will render it
  if (route.navigation) {
    // If the route has child routes (that show in the navigation), render a Group
    const hasNavigationChildren = Boolean(route.routes && route.routes.length > 0 && route.routes.find(r => r.navigation));
    return hasNavigationChildren && depth < maxDepth - 1 ? jsx(NavGroup, {
      className: className,
      style: style,
      route: route,
      variant: variant,
      depth: depth,
      showIconButton: showIconButton,
      showLabel: showLabel,
      activeEmbelish: activeEmbelish,
      maxDepth: maxDepth,
      orientation: orientation
    }) : jsx(NavLink, {
      className: className,
      style: style,
      route: route,
      variant: variant,
      depth: depth,
      showIconButton: showIconButton,
      showLabel: showLabel,
      activeEmbelish: activeEmbelish,
      maxDepth: maxDepth,
      orientation: orientation
    });
  } else {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      jsx(Fragment, {
        children: (_a = route.routes) === null || _a === void 0 ? void 0 : _a.map(r => {
          return jsx(NavItem, {
            variant: variant,
            route: r,
            showIconButton: showIconButton,
            showLabel: showLabel,
            activeEmbelish: activeEmbelish,
            maxDepth: maxDepth,
            orientation: orientation
          }, `${r.path}|${r.title}`);
        })
      })
    );
  }
}

const useStyles$l = makeStyles()(theme => {
  const activeBackground = tinycolor(theme.palette.primary.main).setAlpha(0.1).toHex8String();
  return {
    root: {
      flexGrow: 1,
      visibility: 'visible',
      overflowX: 'hidden',
      overflowY: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > li': {
        listStyle: 'none',
        margin: theme.spacing(0, 0.25)
      },
      '& > li > a.active': {
        background: activeBackground,
        borderRadius: theme.shape.borderRadius
      },
      '& > li > a:first-of-type': {
        marginLeft: 0
      }
    }
  };
});
function HorizontalNavbar({
  className,
  style,
  classes: classesProp,
  routes,
  itemVariant = 'rounded',
  showLabel = true,
  showIconButton = true,
  activeEmbelish = true,
  maxDepth = 3
}) {
  const {
    classes,
    cx
  } = useStyles$l(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: routes.map(r => {
      return jsx(NavItem, {
        variant: itemVariant,
        route: r,
        showIconButton: showIconButton,
        showLabel: showLabel,
        activeEmbelish: activeEmbelish,
        maxDepth: maxDepth,
        orientation: "horizontal"
      }, `${r.path}|${r.title}`);
    })
  }));
}

const useStyles$k = makeStyles()(( /*theme*/
) => {
  return {
    root: {
      flexGrow: 1,
      visibility: 'visible',
      overflowX: 'hidden',
      overflowY: 'hidden'
    }
  };
});
function VerticalNavbar({
  className,
  style,
  classes: classesProp,
  routes,
  itemVariant = 'rounded',
  showLabel = true,
  showIconButton = true,
  activeEmbelish = true,
  maxDepth = 3
}) {
  const {
    classes,
    cx
  } = useStyles$k(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx(List, Object.assign({
    className: cx(classes.root, className),
    style: style,
    dense: true
  }, {
    children: routes.map(r => {
      return jsx(NavItem, {
        variant: itemVariant,
        route: r,
        showIconButton: showIconButton,
        showLabel: showLabel,
        activeEmbelish: activeEmbelish,
        maxDepth: maxDepth,
        orientation: "vertical"
      }, `${r.path}|${r.title}`);
    })
  }));
}

const useStyles$j = makeStyles()(theme => {
  return {
    root: {
      flexGrow: 1,
      overflow: 'auto',
      borderColor: 'transparent',
      transition: theme.transitions.create(['border-color'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      }),
      '&::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        borderRadius: theme.spacing(1),
        width: theme.spacing(0.5),
        border: `${theme.spacing(0.5)} solid transparent`
      },
      '&::-webkit-scrollbar, &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-corner': {
        borderRightStyle: 'inset',
        borderRightWidth: 'calc(100vw + 100vh)',
        borderColor: 'inherit'
      },
      '&:hover': {
        transition: theme.transitions.create(['border-color'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.shorter
        }),
        borderColor: alpha(theme.palette.primary.compliment || theme.palette.action.focus, 1 - ((theme === null || theme === void 0 ? void 0 : theme.palette.action.disabledOpacity) || 0.38))
      },
      '&:hover::-webkit-scrollbar': {
        backgroundColor: theme.palette.primary[theme.palette.mode]
      },
      '&::-webkit-scrollbar-thumb': {
        borderColor: 'inherit',
        backgroundClip: 'content-box',
        borderRadius: theme.spacing(1) || 8
      }
    }
  };
});
function Navbar({
  className,
  style,
  classes: classesProp,
  routes,
  orientation = 'vertical',
  itemVariant = 'rounded',
  showLabel = true,
  showIconButton = true,
  activeEmbelish = true,
  maxDepth
}) {
  const {
    classes,
    cx
  } = useStyles$j(undefined, {
    props: {
      classes: classesProp
    }
  });
  const NavbarWrapper = useMemo(() => {
    return orientation === 'horizontal' ? HorizontalNavbar : VerticalNavbar;
  }, [orientation]);
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: jsx(NavbarWrapper, {
      routes: routes,
      itemVariant: itemVariant,
      showIconButton: showIconButton,
      showLabel: showLabel,
      activeEmbelish: activeEmbelish,
      maxDepth: maxDepth
    })
  }));
}

function NavigateTo({
  path
}) {
  return jsx(Navigate, {
    to: path
  });
}

const useStyles$i = makeStyles()((theme, {
  backgroundColor,
  renderNavigation
}) => {
  var _a, _b;
  const transparentPrimary = tinycolor(theme.palette.primary.main).setAlpha(0.6).toHex8String();
  const transparentSecondary = tinycolor(theme.palette.secondary.main).setAlpha(0.6).toHex8String();
  const iconColor = ((_a = mostReadable(backgroundColor, [transparentPrimary, transparentSecondary])) === null || _a === void 0 ? void 0 : _a.toHex8String()) || theme.palette.action.active;
  const textColor = ((_b = mostReadable(backgroundColor, [theme.palette.text.primary, theme.palette.primary.contrastText, theme.palette.secondary.contrastText])) === null || _b === void 0 ? void 0 : _b.toHex8String()) || theme.palette.text.primary;
  return {
    root: {
      overflow: 'visible',
      minHeight: '100%',
      color: theme.palette.text.primary
    },
    mobileNavButton: {
      position: 'absolute!important',
      top: theme.spacing(0.5),
      left: theme.spacing(1),
      display: 'none',
      [theme.breakpoints.down('lg')]: {
        display: 'inline-flex'
      }
    },
    navigationFn: renderNavigation ? {
      [theme.breakpoints.down('lg')]: {
        paddingTop: theme.spacing(5)
      }
    } : {},
    iconColorFn: {
      color: iconColor
    },
    colorFn: {
      color: textColor
    }
  };
});
const Page = forwardRef((_a, ref) => {
  var {
      className,
      style,
      classes: classesProp,
      children,
      backgroundColor,
      renderNavigation = true,
      imageAlpha = 0.05
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "children", "backgroundColor", "renderNavigation", "imageAlpha"]);
  const theme = useTheme();
  const [derivedBackground, setDerivedBackground] = useState();
  const [innerRef, setInnerRef] = useState();
  // const containerRef = useRef<ContainerRef | undefined | null>();
  const containerRef = useCallback(node => {
    setDerivedBackground((node === null || node === void 0 ? void 0 : node.backgroundColor) || theme.palette.background.default);
    setInnerRef(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    classes,
    cx
  } = useStyles$i({
    backgroundColor: derivedBackground || theme.palette.background.default,
    renderNavigation
  }, {
    props: {
      classes: classesProp
    }
  });
  useEffect(() => {
    if (!containerRef || !ref) {
      return;
    }
    if (typeof ref === 'function') {
      ref(innerRef);
    } else {
      ref.current = innerRef;
    }
  }, [innerRef, containerRef, ref]);
  return jsx(Container, Object.assign({
    className: cx(classes.root, classes.colorFn, classes.navigationFn, className),
    square: true,
    style: style,
    ref: containerRef,
    backgroundColor: backgroundColor || theme.palette.background.default,
    imageAlpha: imageAlpha
  }, rest, {
    children: children
  }));
});

const useStyles$h = makeStyles()(( /*theme*/
) => {
  return {
    root: {}
  };
});
function CommandPanelItem(_a) {
  var {
      className,
      style,
      classes: classesProp,
      icon,
      size,
      color = 'inherit',
      onClick,
      title
    } = _a;
    __rest(_a, ["className", "style", "classes", "icon", "size", "color", "onClick", "title"]);
  const {
    classes,
    cx
  } = useStyles$h(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: jsx(IconButton, {
      icon: icon,
      size: size,
      color: color,
      onClick: onClick,
      title: title
    })
  }));
}

const useStyles$g = makeStyles()((theme, {
  hasOverflow,
  padding
}) => {
  const menuPadding = 0.75;
  return {
    root: {
      height: 'auto',
      flexGrow: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary
    },
    root_inherit: {
      minHeight: theme.spacing(1),
      maxHeight: theme.spacing(3)
    },
    root_small: {
      minHeight: theme.spacing(3),
      maxHeight: theme.spacing(5)
    },
    root_medium: {
      minHeight: theme.spacing(5),
      maxHeight: theme.spacing(7)
    },
    root_large: {
      minHeight: theme.spacing(7),
      maxHeight: theme.spacing(9)
    },
    menuArea: {
      alignItems: 'center',
      overflow: 'hidden',
      minWidth: theme.spacing(10),
      flexGrow: 1,
      flexShrink: 1,
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing(0.5),
      paddingLeft: theme.spacing(1.5 * menuPadding),
      paddingRight: theme.spacing(1.5 * menuPadding)
    },
    overflowArea: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    overflowAreaDisplayFn: {
      display: hasOverflow ? undefined : 'none'
    },
    spacer: {
      flexGrow: 1,
      flexShrink: 1,
      height: '100%',
      minHeight: theme.spacing(3)
    },
    showDivider: {
      borderRightStyle: 'solid',
      borderRightColor: theme.palette.divider,
      borderRightWidth: 'thin'
    },
    menuWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    primaryMenu: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexShrink: 0,
      flexGrow: 0,
      '& > *': {
        borderRightStyle: 'solid',
        borderRightColor: theme.palette.divider,
        borderRightWidth: 'thin',
        marginRight: theme.spacing(menuPadding),
        paddingRight: theme.spacing(menuPadding)
      },
      '& > *:last-child': {
        borderRightStyle: 'none',
        marginRight: 0
      }
    },
    secondaryMenu: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexShrink: 0,
      overflow: 'hidden',
      flexGrow: 0,
      transition: theme.transitions.create('padding-left', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeInOut
      }),
      '& > *': {
        borderLeftStyle: 'solid',
        borderLeftColor: theme.palette.divider,
        borderLeftWidth: 'thin',
        marginLeft: theme.spacing(menuPadding),
        paddingLeft: theme.spacing(menuPadding)
      },
      '& > *:first-of-type': {
        borderLeftStyle: 'none',
        marginLeft: 0
      }
    },
    secondaryMenuPaddingFn: {
      // 32 is the width of the menu button
      paddingLeft: padding - 32
    },
    menuDivider: {
      width: '100%'
    },
    menuDisplayed: {
      background: 'blue'
    },
    menuHidden: {
      background: 'green'
    }
  };
});
function CommandPanel(_a) {
  var {
      className,
      style,
      classes: classesProp,
      elevation = 1,
      size = 'medium',
      color = 'inherit',
      primaryMenu = [],
      secondaryMenu = [],
      overflowIcon = 'more_vertical'
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "elevation", "size", "color", "primaryMenu", "secondaryMenu", "overflowIcon"]);
  const [overflow, setOverflow] = useState(0);
  const [padding, setPadding] = useState(0);
  const [hiddenSectionIndex, setHiddenSectionIndex] = useState(-1);
  const {
    classes,
    cx
  } = useStyles$g({
    hasOverflow: overflow > 0,
    padding
  }, {
    props: {
      classes: classesProp
    }
  });
  const contentRef = useRef(null);
  const secondaryMenuRef = useRef(null);
  const updateOverflow = () => {
    if (contentRef.current && secondaryMenu && secondaryMenu.length > 0) {
      // Measure the content area and decide what needs to be
      // pushed under the collapsible menu
      const containingElement = contentRef.current;
      const containerWidth = (containingElement === null || containingElement === void 0 ? void 0 : containingElement.offsetWidth) || 0;
      const secondaryMenuArea = secondaryMenuRef.current;
      const contentWidth = Array.from(containingElement.children).reduce((acc, c) => {
        return acc + c.clientWidth;
      }, 0);
      const calculatedOverflow = contentWidth - containerWidth;
      let calculatedPadding = 0;
      let hiddenIndex = -1;
      if (calculatedOverflow > 0) {
        // We need to hide items until overflow <= 0
        let remaining = calculatedOverflow;
        for (let i = secondaryMenuArea.children.length; i--; i >= 0) {
          const child = secondaryMenuArea.children[i];
          if (remaining > 0) {
            remaining -= child.offsetWidth;
            child.style.visibility = 'hidden';
          } else {
            child.style.visibility = 'visible';
            calculatedPadding = remaining * -1;
            if (hiddenIndex < 0) {
              hiddenIndex = i;
            }
          }
        }
      } else {
        // We can display items while overflow <= 0
        Array.from(secondaryMenuArea.children).forEach(c => {
          c.style.visibility = 'visible';
        });
      }
      setPadding(calculatedPadding);
      setOverflow(calculatedOverflow);
      setHiddenSectionIndex(hiddenIndex);
    }
  };
  useEffect(() => {
    const handleResize = _.debounce(() => {
      updateOverflow();
    }, 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useLayoutEffect(() => {
    updateOverflow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondaryMenu, contentRef.current]);
  const renderMenu = menu => {
    if (Array.isArray(menu) && menu.length === 0) {
      // Empty array, so we don't care where we are just render null
      return null;
    } else if (Array.isArray(menu) && Array.isArray(menu[0])) {
      // We are rendering a section so wrap and render content
      return menu.map((innerMenu, index) => {
        return jsx("div", Object.assign({
          className: cx(classes.menuWrapper)
        }, {
          children: renderMenu(innerMenu)
        }), index);
      });
    } else if (Array.isArray(menu)) {
      // The section contents, render each item
      return menu.map(menuItem => {
        if (isValidElement(menuItem)) {
          return menuItem;
        } else if (typeof menuItem === 'function') {
          return menuItem(Object.assign({
            className,
            style,
            elevation,
            size,
            color
          }, rest));
        } else {
          return jsx(CommandPanelItem, Object.assign({
            color: color,
            size: size
          }, menuItem));
        }
      }).filter(i => i);
    } else {
      // Don't know what we are rendering.
      return null;
    }
  };
  const secondaryOverflowMenu = useMemo(() => {
    if (!secondaryMenu || secondaryMenu.length === 0) {
      return [];
    }
    const flattenedMenu = secondaryMenu.slice(hiddenSectionIndex + 1).flatMap((sections, index) => [...sections, jsx(Divider, {
      className: cx(classes.menuDivider),
      orientation: "horizontal"
    }, `divider_${index}`)]);
    return flattenedMenu.slice(0, -1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondaryMenu, hiddenSectionIndex]);
  return jsxs(Container, Object.assign({
    className: cx(classes.root, classes[`root_${size}`], className),
    style: style,
    elevation: elevation
  }, rest, {
    children: [jsxs("div", Object.assign({
      ref: contentRef,
      className: cx(classes.menuArea)
    }, {
      children: [jsx("div", Object.assign({
        className: cx(classes.primaryMenu)
      }, {
        children: renderMenu(primaryMenu)
      })), jsx("div", {
        className: cx(classes.spacer, (primaryMenu === null || primaryMenu === void 0 ? void 0 : primaryMenu.length) > 0 && (secondaryMenu === null || secondaryMenu === void 0 ? void 0 : secondaryMenu.length) > 0 && classes.showDivider)
      }), jsx("div", Object.assign({
        ref: secondaryMenuRef,
        className: cx(classes.secondaryMenu, classes.secondaryMenuPaddingFn)
      }, {
        children: renderMenu(secondaryMenu)
      }))]
    })), jsx("div", Object.assign({
      className: cx(classes.overflowArea, classes.overflowAreaDisplayFn)
    }, {
      children: jsx(DropdownMenu, {
        menu: secondaryOverflowMenu
      })
    }))]
  }));
}

const useStyles$f = makeStyles()(theme => {
  return {
    root: {
      boxSizing: 'content-box'
    },
    drawerContent: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      maxWidth: '100%',
      overflow: 'hidden'
    }
  };
});
const ContextPanel = forwardRef((_a, ref) => {
  var {
      className,
      style,
      children,
      classes: classesProp,
      position = 'bottom',
      open = false,
      PaperProps = {}
    } = _a,
    rest = __rest(_a, ["className", "style", "children", "classes", "position", "open", "PaperProps"]);
  const {
    classes,
    cx
  } = useStyles$f(undefined, {
    props: {
      classes: classesProp
    }
  });
  return position !== 'none' ? jsx(Drawer, Object.assign({
    ref: ref,
    className: cx(classes.root, className),
    style: style,
    anchor: position,
    open: open,
    variant: "persistent",
    PaperProps: Object.assign(Object.assign({}, PaperProps), {
      style: Object.assign(Object.assign({}, PaperProps.style), {
        boxSizing: 'border-box',
        overflow: 'hidden'
      })
    })
  }, rest, {
    children: jsx("div", Object.assign({
      className: cx(classes.drawerContent)
    }, {
      children: children
    }))
  })) : null;
});

const useStyles$e = makeStyles()((theme, {
  selectedColor
}) => {
  var _a;
  const background = selectedColor && ((_a = mostReadable(selectedColor, [theme.palette.text.primary, theme.palette.primary.contrastText, theme.palette.secondary.contrastText])) === null || _a === void 0 ? void 0 : _a.toHex8String()) || theme.palette.text.primary;
  const pillPadding = 2;
  return {
    root: {},
    root_standard: {},
    root_outlined: {},
    root_filled: {},
    root_pill: {
      '& .MuiInputBase-root': {
        borderRadius: '500px',
        paddingLeft: theme.spacing(pillPadding),
        paddingRight: theme.spacing(pillPadding)
      },
      '& .MuiInputLabel-root': {
        paddingLeft: theme.spacing(pillPadding)
      },
      '& .Mui-focused .MuiOutlinedInput-notchedOutline legend span': {
        marginLeft: theme.spacing(pillPadding * 0.75)
      }
    },
    popper: {},
    selectedColorFn: {
      color: selectedColor && `#${selectedColor}` || undefined,
      backgroundColor: background
    },
    colorBox: {
      minWidth: theme.spacing(40),
      '& > div': {
        overflow: 'visible'
      },
      '.muicc-colorbox-hsvgradient': {
        width: `calc(100% - ${theme.spacing(6)})`
      },
      '.muicc-colorbox-color': {
        background: selectedColor ? `#${selectedColor}` : 'transparent'
      },
      '.muicc-colorbox-sliders > span > :last-child': {
        marginLeft: 0
      },
      '.muicc-colorbox-inputs .MuiInput-root': {
        fontSize: '1rem'
      }
    },
    popperContainer: {
      overflow: 'visible',
      padding: theme.spacing(0)
    }
  };
});
function ColorPicker(_a) {
  var {
      className,
      style,
      classes: classesProp,
      variant = 'outlined',
      autoComplete = 'off',
      fullWidth = true,
      clearable = false,
      icon = 'brush',
      iconColor = 'inherit',
      iconSize = 'medium',
      value,
      defaultColor = 'transparent',
      onChange,
      placement = 'bottom'
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "variant", "autoComplete", "fullWidth", "clearable", "icon", "iconColor", "iconSize", "value", "defaultColor", "onChange", "placement"]);
  const popupState = usePopupState({
    variant: 'popper',
    popupId: '__colorpicker__'
  });
  const getColor = color => {
    if (!color) {
      return null;
    }
    if (color.raw) {
      return color;
    }
    return createColor(color);
  };
  const [colorValue, setColorValue] = useState(value || defaultColor ? getColor(value || defaultColor).hex : null);
  const [textValue, setTextValue] = useState('');
  const {
    classes,
    cx
  } = useStyles$e({
    selectedColor: colorValue
  }, {
    props: {
      classes: classesProp
    }
  });
  useEffect(() => {
    setTextValue(`#${colorValue}`);
  }, [colorValue]);
  const handleChange = e => {
    const newValue = e.target.value;
    setTextValue(newValue);
    // If the new value is a valid colour then update
    const parsedColor = getColor(newValue);
    if (parsedColor && parsedColor.format !== 'unknown') {
      setColorValue(parsedColor.hex);
      onChange && onChange(e, `#${parsedColor.hex}`);
    }
  };
  // This is required as the authors of the picker forgot classname in the props definition
  const classNameProps = {
    className: cx(classes.colorBox)
  };
  return jsxs(Fragment, {
    children: [jsx(TextField$2, Object.assign({
      className: cx(classes.root, variant && classes[`root_${variant}`], className),
      style: style,
      variant: variant === 'pill' ? 'outlined' : variant,
      autoComplete: autoComplete,
      fullWidth: fullWidth,
      value: textValue || ''
    }, rest, {
      onChange: handleChange,
      InputProps: {
        startAdornment: jsx(InputAdornment, Object.assign({
          position: "start"
        }, {
          children: jsx(IconButton, Object.assign({
            className: cx(classes.selectedColorFn),
            size: iconSize,
            color: iconColor,
            icon: icon
          }, bindToggle(popupState)))
        }))
      }
    })), jsx(Popper, Object.assign({
      className: cx(classes.popper),
      role: "menu",
      transition: true,
      modifiers: [{
        name: 'flip',
        enabled: true,
        options: {
          altBoundary: true,
          rootBoundary: 'document',
          padding: 8
        }
      }, {
        name: 'preventOverflow',
        enabled: true,
        options: {
          altAxis: false,
          altBoundary: false,
          tether: false,
          rootBoundary: 'document',
          padding: 8
        }
      }],
      placement: placement
    }, bindPopper(popupState), {
      children: ({
        TransitionProps
      }) => {
        return jsx(Grow, Object.assign({}, TransitionProps, {
          children: jsx(Container, Object.assign({
            elevation: 1,
            className: cx(classes.popperContainer)
          }, {
            children: jsx(ClickAwayListener, Object.assign({
              onClickAway: e => {
                onChange && onChange(e, `#${colorValue}`);
                popupState.close();
              }
            }, {
              children: jsx("div", {
                children: jsx(ColorBox, Object.assign({
                  value: colorValue ? `#${colorValue}` : defaultColor,
                  defaultValue: defaultColor,
                  onChange: color => {
                    setColorValue(color.hex);
                  }
                }, classNameProps))
              })
            }))
          }))
        }));
      }
    }))]
  });
}

class ApplicationRepositoryBase {
  constructor(args) {
    this.baseURL = args.baseURL;
    if (args.axios) {
      this.axios = args.axios;
    } else {
      this.axios = globalAxios;
    }
    this.definitions = this.createDefinitions();
  }
  getDefinitions() {
    return this.definitions;
  }
  getDefinition(name) {
    return this.definitions[name];
  }
  addDefinition(name, generator) {
    const factory = generator(this.baseURL, this.axios);
    this.definitions[name] = factory;
    return factory;
  }
}

const useStyles$d = makeStyles()(theme => {
  return {
    root: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    iconWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2)
    },
    icon: {
      width: `${theme.spacing(12)}!important`,
      height: `${theme.spacing(12)}!important`,
      fontSize: `${theme.spacing(12)}!important`,
      color: theme.palette.action.disabled,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        width: `${theme.spacing(16)}!important`,
        height: `${theme.spacing(16)}!important`,
        fontSize: `${theme.spacing(16)}!important`
      }
    },
    title: {
      margin: theme.spacing(2),
      marginTop: theme.spacing(1)
    }
  };
});
function EmptyTableView({
  className,
  style,
  classes: classesProp,
  getStateParams
}) {
  const {
    classes,
    cx
  } = useStyles$d(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const stateParams = getStateParams();
  // Only update if it actually changed
  const memoisedStateParams = useMemoDeepCompare(() => {
    return stateParams;
  }, [stateParams]);
  const {
    updating,
    entityName,
    entityIcon
  } = memoisedStateParams;
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [updating && jsx(Loader, {
      title: t('loading {0}...', entityName)
    }), !updating && jsxs("div", Object.assign({
      className: cx(classes.iconWrapper)
    }, {
      children: [jsx(Icon, Object.assign({
        className: cx(classes.icon),
        size: "inherit",
        color: "inherit"
      }, {
        children: entityIcon || 'fa database'
      })), jsx(Typography, Object.assign({
        variant: "h4",
        component: "h2",
        className: cx(classes.title)
      }, {
        children: t('no {0} found', entityName)
      }))]
    }))]
  }));
}

const useStyles$c = makeStyles()(theme => {
  return {
    root: {
      background: theme.palette.background.paper
    },
    root_variant_condensed: {},
    root_variant_regular: {},
    root_variant_expanded: {},
    row: {},
    row_variant_condensed: {
      '& td': {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      }
    },
    row_variant_regular: {},
    row_variant_expanded: {},
    cell: {
      display: 'flex !important',
      alignItems: 'center'
    }
  };
});
function TableBody(_a) {
  var {
      className,
      style,
      classes: classesProp,
      prepareRow,
      page,
      onRowClick,
      variant = 'regular'
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "prepareRow", "page", "onRowClick", "variant"]);
  const {
    classes,
    cx
  } = useStyles$c(undefined, {
    props: {
      classes: classesProp
    }
  });
  return jsx(TableBody$1, Object.assign({
    className: cx(classes.root, classes[`root_variant_${variant}`], className),
    style: style
  }, rest, {
    children: page.map(r => {
      const row = r;
      prepareRow(row);
      const handleRowClick = () => {
        onRowClick && onRowClick(row.original);
      };
      const selected = Boolean(row.isSelected);
      return jsx(TableRow, Object.assign({
        className: cx(classes.row, classes[`row_variant_${variant}`]),
        onClick: handleRowClick,
        "aria-selected": selected,
        hover: true,
        tabIndex: -1,
        selected: selected
      }, row.getRowProps(), {
        children: row.cells.map(cell => {
          const {
            column
          } = cell;
          const cellProps = cell.getCellProps();
          return jsx(TableCell, Object.assign({
            className: cx(classes.cell),
            width: column.width
          }, Object.assign(Object.assign({}, cellProps), {
            style: column.maxWidth ? Object.assign(Object.assign({}, cellProps.style), {
              maxWidth: column.maxWidth
            }) : cellProps.style
          }), {
            children: cell.render('Cell')
          }));
        })
      }));
    })
  }));
}

const useStyles$b = makeStyles()(theme => {
  return {
    root: {
      maxWidth: theme.spacing(5)
    },
    checkbox: {}
  };
});
function TableBodySelectCell(props) {
  const {
    classes,
    cx
  } = useStyles$b(undefined, {
    props: {}
  });
  const {
    row: r
  } = props;
  const row = r;
  const {
    getToggleRowSelectedProps,
    canSelect
  } = row;
  const _a = getToggleRowSelectedProps(),
    {
      onChange
    } = _a,
    toggleRowSelectedProps = __rest(_a, ["onChange"]);
  return jsx("div", Object.assign({
    className: cx(classes.root),
    onClick: e => {
      e.stopPropagation();
    }
  }, {
    children: jsx(Checkbox, Object.assign({
      className: cx(classes.checkbox),
      color: "primary",
      disabled: canSelect && !canSelect(row.original, row.index, props),
      onChange: e => {
        return onChange(e);
      }
    }, toggleRowSelectedProps))
  }));
}

const useStyles$a = makeStyles()(theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      borderTopColor: theme.palette.divider,
      borderTopWidth: 'thin',
      borderTopStyle: 'solid',
      background: theme.palette.background.paper
    },
    separator: {
      height: '100%',
      width: theme.spacing(4)
    },
    pageSizeSelector: {
      width: 'auto',
      maxWidth: theme.spacing(15),
      marginLeft: `${theme.spacing(2)} !important`
    }
  };
});
function TableFooter({
  className,
  style,
  classes: classesProp,
  pageCount = 0,
  totalCount = 0,
  index = 0,
  pageSize = 0,
  entityName = '',
  onRefreshClick,
  onFirstPageClick,
  onPreviousPageClick,
  onNextPageClick,
  onLastPageClick,
  onPageSizeChange
}) {
  const {
    classes,
    cx
  } = useStyles$a(undefined, {
    props: {
      classes: classesProp
    }
  });
  const handleRefresh = () => {
    onRefreshClick();
  };
  const hasNext = index + pageCount < totalCount;
  const hasPrevious = index > 0;
  const handleNavigation = direction => {
    switch (direction) {
      case 'first_page':
        onFirstPageClick();
        break;
      case 'previous':
        onPreviousPageClick();
        break;
      case 'next':
        onNextPageClick();
        break;
      case 'last_page':
        onLastPageClick();
        break;
    }
  };
  const {
    t
  } = useContext(LocalizationContext);
  const pageSizeOptions = useMemo(() => {
    return [10, 25, 50, 100].map(count => {
      return {
        value: count,
        title: count.toString()
      };
    });
  }, []);
  const selectedOption = pageSizeOptions.find(o => o.value >= pageSize);
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [jsx(Typography, Object.assign({
      variant: "caption"
    }, {
      children: `${entityName} ${t('per page')}`
    })), jsx(SelectField, {
      className: cx(classes.pageSizeSelector),
      inputProps: {
        style: {
          border: '1px solid red'
        }
      },
      size: "small",
      variant: "filled",
      value: selectedOption,
      options: pageSizeOptions,
      onChange: (e, value) => onPageSizeChange(value)
    }), jsx("div", {
      className: cx(classes.separator)
    }), jsx(Typography, Object.assign({
      variant: "caption"
    }, {
      children: `${totalCount > 0 ? index + 1 : totalCount} - ${index + pageCount} ${t('of')} ${totalCount}`
    })), jsx("div", {
      className: cx(classes.separator)
    }), jsx(IconButton, {
      size: "small",
      title: hasPrevious ? t('first page') : '',
      icon: "first_page",
      color: hasPrevious ? 'action' : 'disabled',
      disabled: !hasPrevious,
      onClick: () => {
        handleNavigation('first_page');
      }
    }), jsx(IconButton, {
      size: "small",
      title: hasPrevious ? t('previous') : '',
      icon: "navigate_before",
      color: hasPrevious ? 'action' : 'disabled',
      disabled: !hasPrevious,
      onClick: () => {
        handleNavigation('previous');
      }
    }), jsx(IconButton, {
      size: "small",
      title: hasNext ? t('next') : '',
      icon: "navigate_next",
      color: hasNext ? 'action' : 'disabled',
      disabled: !hasNext,
      onClick: () => {
        handleNavigation('next');
      }
    }), jsx(IconButton, {
      size: "small",
      title: hasNext ? t('last page') : '',
      icon: "last_page",
      color: hasNext ? 'action' : 'disabled',
      disabled: !hasNext,
      onClick: () => {
        handleNavigation('last_page');
      }
    }), jsx("div", {
      className: cx(classes.separator)
    }), jsx(IconButton, {
      size: "small",
      title: "refresh",
      icon: "refresh",
      color: "action",
      onClick: handleRefresh
    })]
  }));
}

const useStyles$9 = makeStyles()(theme => {
  return {
    root: {
      background: theme.palette.background.paper
    },
    cell: {
      display: 'flex !important',
      justifyItems: 'center'
    }
  };
});
function TableHeader({
  className,
  style,
  classes: classesProp,
  headerGroups
}) {
  const {
    classes,
    cx
  } = useStyles$9(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const sortableHeader = (column, header) => {
    return column.canSort ? jsx(Tooltip, Object.assign({
      title: t('Click to change sort'),
      placement: column.align === 'right' ? 'bottom-end' : 'bottom-start',
      enterDelay: 300
    }, {
      children: jsx(TableSortLabel, Object.assign({
        active: column.isSorted,
        direction: column.isSortedDesc ? 'desc' : 'asc'
      }, {
        children: header
      }))
    })) : header;
  };
  return jsx(TableHead, Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: headerGroups.map(headerGroup => {
      return jsx(TableRow, Object.assign({}, headerGroup.getHeaderGroupProps(), {
        children: headerGroup.headers.map(column => {
          const sortableColumn = column;
          const cellProps = sortableColumn.getHeaderProps(sortableColumn.getSortByToggleProps());
          return jsx(TableCell, Object.assign({
            className: cx(classes.cell)
          }, Object.assign(Object.assign({}, cellProps), {
            style: column.maxWidth ? Object.assign(Object.assign({}, cellProps.style), {
              maxWidth: column.maxWidth
            }) : cellProps.style
          }), {
            children: sortableHeader(sortableColumn, sortableColumn.render('Header'))
          }));
        })
      }));
    })
  }));
}

const useStyles$8 = makeStyles()(theme => {
  return {
    root: {
      maxWidth: theme.spacing(6)
    },
    checkbox: {}
  };
});
function TableHeaderSelectCell(props) {
  const {
    classes,
    cx
  } = useStyles$8(undefined, {
    props: {}
  });
  const {
      rows
    } = props,
    rest = __rest(props, ["rows"]);
  const {
    getToggleAllRowsSelectedProps,
    toggleRowSelected
  } = rest;
  const toggleProps = getToggleAllRowsSelectedProps && getToggleAllRowsSelectedProps();
  return jsx("div", Object.assign({
    className: cx(classes.root)
  }, {
    children: jsx(Checkbox, Object.assign({
      className: cx(classes.checkbox)
    }, toggleProps, {
      onChange: e => {
        rows.forEach(r => {
          const row = r;
          if (!row.canSelect || row.canSelect(r.original, r.index, props)) {
            toggleRowSelected && toggleRowSelected(r.id, e.target.checked);
          }
        });
      }
    }))
  }));
}

const useStyles$7 = makeStyles()(( /*theme*/
) => {
  return {
    root: {}
  };
});
function BooleanCell({
  className,
  style,
  classes: classesProp,
  value,
  field,
  tableVariant = 'regular'
}) {
  const {
    classes,
    cx
  } = useStyles$7(undefined, {
    props: {
      classes: classesProp
    }
  });
  let icon = 'remove';
  if (value === true) {
    icon = 'check';
  } else if (value === false) {
    icon = 'close';
  }
  let iconSize = 'medium';
  if (tableVariant === 'condensed') {
    iconSize = 'small';
  }
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: jsx(Icon, Object.assign({
      size: iconSize
    }, {
      children: icon
    }))
  }));
}
const cellBuilder$4 = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'boolean';
  },
  getComponent: () => {
    return BooleanCell;
  }
};

const useStyles$6 = makeStyles()(theme => {
  return {
    root: {},
    image: {
      '& img': {
        maxHeight: theme.spacing(4),
        objectFit: 'cover'
      }
    }
  };
});
function ImageURLCell(_a) {
  var {
      className,
      style,
      classes: classesProp,
      value,
      field,
      tableVariant = 'regular'
    } = _a;
    __rest(_a, ["className", "style", "classes", "value", "field", "tableVariant"]);
  const {
    classes,
    cx
  } = useStyles$6(undefined, {
    props: {
      classes: classesProp
    }
  });
  const imgSrc = (field.format ? field.format(value) : value) || '';
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: jsx(Image, {
      className: cx(classes.image),
      src: imgSrc,
      alt: field.description || ''
    })
  }));
}
const cellBuilder$3 = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'imageURL';
  },
  getComponent: () => {
    return ImageURLCell;
  }
};

const useStyles$5 = makeStyles()(( /*theme*/
) => {
  return {
    root: {},
    typography: {
      '& > p': {
        margin: 0
      }
    }
  };
});
function RichtextCell(_a) {
  var {
      className,
      style,
      classes: classesProp,
      value,
      field,
      tableVariant = 'regular'
    } = _a;
    __rest(_a, ["className", "style", "classes", "value", "field", "tableVariant"]);
  const {
    classes,
    cx
  } = useStyles$5(undefined, {
    props: {
      classes: classesProp
    }
  });
  const content = (field.format ? field.format(value) : value) || '';
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: jsx(Typography, {
      component: "p",
      className: cx(classes.typography, className),
      dangerouslySetInnerHTML: {
        __html: content
      }
    })
  }));
}
const cellBuilder$2 = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'richtext';
  },
  getComponent: () => {
    return RichtextCell;
  }
};

const useStyles$4 = makeStyles()(( /*theme*/
) => {
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
});
function DetailNavigationCell(_a) {
  var {
      className,
      style,
      classes: classesProp,
      value,
      field,
      tableVariant = 'regular'
    } = _a,
    rest = __rest(_a, ["className", "style", "classes", "value", "field", "tableVariant"]);
  const {
    classes,
    cx
  } = useStyles$4(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    label = '',
    icon
  } = field.componentProps || {};
  const {
    t
  } = useContext(LocalizationContext);
  const {
    row,
    getRowID
  } = rest;
  const rowID = row && getRowID && getRowID(row.original);
  return jsx("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: jsx(RouteLink, {
      title: label || t('Details'),
      to: rowID,
      variant: "link",
      icon: icon,
      color: "primary"
    })
  }));
}
const cellBuilder$1 = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'detailNavigation';
  },
  getComponent: () => {
    return DetailNavigationCell;
  }
};

const useStyles$3 = makeStyles()(( /*theme*/
) => {
  return {
    root: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    root_condensed: {},
    root_regular: {},
    root_expanded: {
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: '3',
      WebkitBoxOrient: 'vertical'
    }
  };
});
function TextCell(_a) {
  var {
      className,
      style,
      classes: classesProp,
      value,
      field,
      tableVariant = 'regular'
    } = _a;
    __rest(_a, ["className", "style", "classes", "value", "field", "tableVariant"]);
  const {
    classes,
    cx
  } = useStyles$3(undefined, {
    props: {
      classes: classesProp
    }
  });
  const wrap = tableVariant !== 'expanded';
  return jsx(Typography, Object.assign({
    noWrap: wrap,
    className: cx(classes.root, classes[`root_${tableVariant}`], className),
    style: style,
    variant: "body2"
  }, {
    children: (field.format ? field.format(value) : value) || ''
  }));
}
const cellBuilder = {
  isCompatible: fieldDefinition => {
    return fieldDefinition.type === 'string' || fieldDefinition.type === 'email' || fieldDefinition.type === 'url' || fieldDefinition.type === 'number' || fieldDefinition.type === 'password';
  },
  getComponent: () => {
    return TextCell;
  }
};

const tableCellMap = [cellBuilder$4, cellBuilder$3, cellBuilder$2, cellBuilder, cellBuilder$1, {
  isCompatible: () => true,
  getComponent: () => TextCell
}];
function getTableCellComponent(fieldDefinition) {
  const builder = tableCellMap.find(builder => builder.isCompatible(fieldDefinition));
  return (builder === null || builder === void 0 ? void 0 : builder.getComponent()) || TextCell;
}

function createReactTableColumns(fields = [], tableVariant, isSelectable = () => true) {
  return fields.map(field => {
    // TODO: columnProps should be typed
    const {
      columnProps
    } = field;
    if (isComponentField(field)) {
      const CellComponent = field.render;
      return Object.assign(Object.assign({}, columnProps), {
        id: field.id,
        accessor: field.getValue || field.id,
        Header: field.label || '',
        Footer: undefined,
        Cell: CellComponent
      });
    } else {
      const CellComponent = getTableCellComponent(field);
      return Object.assign(Object.assign({}, columnProps), {
        id: field.id,
        accessor: field.getValue || field.id,
        Header: field.label || '',
        Footer: undefined,
        Cell: props => jsx(CellComponent, Object.assign({}, props, {
          field: field,
          tableVariant: tableVariant
        })),
        isSelectable
      });
    }
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles$2 = makeStyles()((theme, props, classes) => {
  return {
    root: {
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      flexShrink: 1
    },
    root_variant_condensed: {},
    root_variant_regular: {},
    root_variant_expanded: {},
    table: {
      tableLayout: 'auto',
      width: '100%',
      flexGrow: 1,
      flexShrink: 1,
      [`& .${classes.loaderWrapper}`]: {
        opacity: 0,
        transition: theme.transitions.create(['opacity'], {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.short
        })
      },
      [`& .${classes.tableBody}`]: {
        opacity: 1,
        transition: theme.transitions.create(['opacity'], {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.short
        })
      }
    },
    table_updating: {
      height: '100%',
      [`& .${classes.loaderWrapper}`]: {
        opacity: 1
      },
      [`& .${classes.tableBody}`]: {
        opacity: 0
      }
    },
    tableScroll: {
      height: '100%',
      overflowY: 'auto'
    },
    tableHeader: {
      flexShrink: 0,
      flexGrow: 0,
      position: 'sticky',
      top: 0,
      zIndex: 1
    },
    tableBody: {
      flexShrink: 0,
      flexGrow: 1,
      minHeight: theme.spacing(8),
      zIndex: 0
    },
    tableFooterToolbar: {
      flexShrink: 0,
      flexGrow: 0,
      zIndex: 1
    },
    loaderWrapper: {}
  };
});
// const TABLE_SETTINGS_ID = 'icat_table';
// /**
//  * Register the Table Settings with the settings provider
//  * so they can be managed by the user
//  * @type {[type]}
//  */
// registerSettings({
//   name : TABLE_SETTINGS_ID,
//   sectionName : 'userInterface',
//   label : 'table',
//   icon : 'table',
//   getInstanceSettingsID : ({match})=>{
//     return CryptoJS.MD5(match.path).toString();
//   },
//   fields : [
//     {
//       id : 'density',
//       type : 'select',
//       default : 'regular',
//       options : [{
//         id : 'condensed'
//       },{
//         id : 'regular',
//       },{
//         id : 'expanded',
//       }]
//     }, {
//       id : 'rowsPerPage',
//       type : 'select',
//       default : 10,
//       options : [
//         {
//           id : '10',
//           value : 10,
//         },{
//           id : '25',
//           value : 25,
//         },{
//           id : '50',
//           value : 50,
//         },{
//           id : '100',
//           value : 100,c
//         }
//       ]
//     }
//   ]
// });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Table({
  className,
  style,
  classes: classesProp,
  variant = 'condensed',
  columns,
  data = [],
  index,
  totalCount,
  pageSize,
  entityName,
  entityIcon,
  updating = false,
  sortBy = [],
  globalFilter,
  selectable = true,
  onRefresh,
  onFirstPage,
  onPreviousPage,
  onNextPage,
  onLastPage,
  getRowID,
  onRowClick,
  EmptyTableComponent = EmptyTableView,
  canSelectRow = () => true,
  onSelectionChange,
  onPageSizeChange,
  tableRef
}) {
  const {
    classes,
    cx
  } = useStyles$2(undefined, {
    props: {
      classes: classesProp
    }
  });
  if (!columns || columns.length === 0) {
    console.warn('column definitions not provided');
  }
  // Set the limits so we can display to the user
  index = index || 0;
  totalCount = totalCount || data.length;
  pageSize = pageSize || data.length;
  const {
    t
  } = useContext(LocalizationContext);
  entityName = entityName || t('rows');
  const columnDefinitions = useMemoDeepCompare(() => {
    return createReactTableColumns(columns, variant, canSelectRow);
  }, [columns, variant]);
  const sortByFields = useMemoDeepCompare(() => {
    return sortBy || [];
  }, [sortBy]);
  const globalFilterText = useMemo(() => {
    return globalFilter || undefined;
  }, [globalFilter]);
  const sortTypes = useMemo(() => {
    return {};
  }, []);
  const filterTypes = useMemo(() => {
    return {};
  }, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    selectedFlatRows,
    setPageSize,
    toggleAllRowsSelected,
    state: {
      // pageIndex,
      pageSize: tablePageSize
      // pageCount
    }
  } = useTable({
    columns: columnDefinitions,
    data,
    getRowID,
    initialState: {
      sortBy: sortByFields,
      globalFilter: globalFilterText,
      selectedRowIds: {},
      // Pagination State
      manualPagination: true,
      pageSize: pageSize || 10
      //pageIndex,
      //pageCount,
      //autoResetPage,
      //paginateExpandedRows
    },

    // useSortBy hook properties
    sortTypes: sortTypes,
    // useGlobalFilter hook properties
    filterTypes: filterTypes,
    // useRowSelect hook properties
    autoResetGlobalFilter: false,
    autoResetSelectedRows: false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, useFlexLayout, useGlobalFilter, useSortBy,
  // TODO: Implement pagination queries from server side
  usePagination, useRowSelect,
  // TODO: Implement column order
  // useColumnOrder,
  // TODO: Implement resize columns
  // useResizeColumn,
  // TODO: Implement column filters
  // useFilters,
  hooks => {
    if (!selectable) {
      return;
    }
    // If selectable add a column to allow the user to interact
    hooks.allColumns.push(columns => [selectable && {
      id: 'table_selection',
      Header: TableHeaderSelectCell,
      Cell: TableBodySelectCell,
      disableSortBy: true,
      defaultCanSort: false,
      width: 56,
      maxWidth: 56
    }, ...columns].filter(i => i));
  });
  useEffect(() => {
    setGlobalFilter(globalFilterText);
  }, [globalFilterText, setGlobalFilter]);
  useEffect(() => {
    setPageSize(pageSize || 10);
  }, [pageSize]);
  useDeepCompareEffect(() => {
    onSelectionChange && onSelectionChange(selectedFlatRows);
  }, [selectedFlatRows]);
  useImperativeHandle(tableRef, () => {
    return {
      onSearchChange: search => {
        setGlobalFilter(search || '');
      },
      toggleRowsSelected: selected => {
        toggleAllRowsSelected(selected);
      }
    };
  }, [setGlobalFilter]);
  return jsxs(TableContainer, Object.assign({
    className: cx(classes.root, `root_variant_${variant}`, className),
    style: style
  }, {
    children: [data && data.length > 0 && jsxs(Fragment, {
      children: [jsx("div", Object.assign({
        className: cx(classes.tableScroll)
      }, {
        children: jsxs(Table$1, Object.assign({
          className: cx(classes.table, updating && classes.table_updating)
        }, getTableProps(), {
          children: [jsx(TableHeader, {
            className: cx(classes.tableHeader),
            headerGroups: headerGroups
          }), updating && jsx("tbody", Object.assign({
            className: cx(classes.loaderWrapper)
          }, {
            children: jsx("tr", {
              children: jsx("td", Object.assign({
                colSpan: columns.length
              }, {
                children: jsx(Loader, {
                  variant: "circular"
                })
              }))
            })
          })), !updating && jsx(TableBody, Object.assign({
            className: cx(classes.tableBody),
            onRowClick: onRowClick,
            prepareRow: r => {
              prepareRow(r);
              r.canSelect = canSelectRow;
            },
            page: page,
            variant: variant
          }, getTableBodyProps()))]
        }))
      })), jsx(TableFooter, {
        className: cx(classes.tableFooterToolbar),
        pageCount: data.length,
        totalCount: totalCount,
        index: index,
        pageSize: tablePageSize,
        entityName: entityName,
        onRefreshClick: () => {
          onRefresh && onRefresh();
        },
        onFirstPageClick: () => {
          onFirstPage && onFirstPage();
        },
        onPreviousPageClick: () => {
          onPreviousPage && onPreviousPage();
        },
        onNextPageClick: () => {
          onNextPage && onNextPage();
        },
        onLastPageClick: () => {
          onLastPage && onLastPage();
        },
        onPageSizeChange: size => {
          setPageSize((size === null || size === void 0 ? void 0 : size.value) || 10);
          onPageSizeChange && onPageSizeChange(size);
        }
      })]
    }), (!data || data.length === 0) && jsx(EmptyTableComponent, {
      getStateParams: () => ({
        updating: updating,
        entityIcon: entityIcon,
        entityName: entityName || ''
      })
    })]
  }));
}

const useStyles$1 = makeStyles()(( /*theme*/
) => {
  return {
    root: {}
  };
});
function RepositoryTable({
  className,
  style,
  classes: classesProp,
  repository,
  model,
  onRowClick,
  onSelectionChange,
  tableRef,
  selectable = true
}) {
  const {
    classes,
    cx
  } = useStyles$1(undefined, {
    props: {
      classes: classesProp
    }
  });
  const stateRepo = repository;
  const dataState = stateRepo.getState();
  const fieldDefinitions = useMemo(() => {
    return model.listLayout.map(fieldID => {
      return typeof fieldID === 'string' ? model.fields[fieldID] : fieldID;
    });
  }, [model]);
  useLayoutEffect(() => {
    const subscription = refreshData();
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);
  const {
    index,
    pageSize,
    totalCount
  } = dataState.page;
  const refreshData = useCallback(() => {
    return stateRepo.findAll({
      offset: index,
      // TODO: Page size needs to come from the table props (user selected)
      limit: pageSize || 25
    }).subscribe();
  }, [stateRepo, index, pageSize]);
  const onFirstPage = useCallback(() => {
    stateRepo.findAll({
      offset: 0,
      limit: pageSize
    }).subscribe();
  }, [pageSize, stateRepo]);
  const onPreviousPage = useCallback(() => {
    stateRepo.findAll({
      offset: index - pageSize,
      limit: pageSize
    }).subscribe();
  }, [index, pageSize, stateRepo]);
  const onNextPage = useCallback(() => {
    stateRepo.findAll({
      offset: index + pageSize,
      limit: pageSize
    }).subscribe();
  }, [index, pageSize, stateRepo]);
  const onLastPage = useCallback(() => {
    stateRepo.findAll({
      offset: totalCount - pageSize,
      limit: pageSize
    }).subscribe();
  }, [pageSize, stateRepo, totalCount]);
  const onPageSizeChange = useCallback(size => {
    return stateRepo.findAll({
      offset: index,
      limit: (size === null || size === void 0 ? void 0 : size.value) || 10
    }).subscribe();
  }, [stateRepo, index]);
  // Check the model permissions
  const canDelete = model.hasPermission(ModelPermission.Delete);
  const canUpdate = model.hasPermission(ModelPermission.Update);
  const resolvedSelectable = selectable && (canDelete || canUpdate);
  return jsx(Table, {
    className: cx(classes.root, className),
    tableRef: tableRef,
    style: style,
    columns: fieldDefinitions,
    data: dataState.page.data,
    totalCount: dataState.page.totalCount,
    index: dataState.page.index,
    pageSize: dataState.page.pageSize,
    entityName: model.pluralTitle,
    entityIcon: model.icon,
    selectable: resolvedSelectable,
    getRowID: d => {
      return d[model.identityField];
    },
    updating: dataState.listing,
    onRefresh: () => {
      refreshData();
    },
    onSelectionChange: onSelectionChange,
    onRowClick: onRowClick,
    onFirstPage: onFirstPage,
    onPreviousPage: onPreviousPage,
    onNextPage: onNextPage,
    onLastPage: onLastPage,
    onPageSizeChange: onPageSizeChange,
    canSelectRow: (data, relativeIndex, tableProps) => {
      return resolvedSelectable && model.hasPermission(ModelPermission.Update | ModelPermission.Delete, data);
    }
  });
}

const useStyles = makeStyles()(theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      width: '100%',
      maxHeight: '100%'
    },
    navigation: {
      paddingTop: theme.spacing(0.5),
      flexBasis: theme.spacing(32),
      flexShrink: 0,
      boxShadow: theme.shadows[1],
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.background.paper
    },
    content: {
      flexGrow: 1,
      paddingLeft: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100%',
      overflow: 'hidden'
    },
    searchField: {
      '& input': {
        padding: theme.spacing(0.5, 1, 0.5)
      },
      padding: `${theme.spacing(1.5)} !important`,
      boxSizing: 'border-box'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexGrow: 0,
      flexShrink: 0
    },
    headerIcon: {
      marginRight: theme.spacing(1)
    },
    navigationList: {},
    categoryContent: {
      display: 'flex',
      maxHeight: '100%',
      flexGrow: 1,
      flexShrink: 1,
      // This '90%' helps with ensuring the buttons are visible.  It seems to be ignored, just forces some layout
      height: '90%'
    },
    entityForm: {
      flexGrow: 1,
      flexShrink: 0
    }
  };
});
function Settings({
  className,
  style,
  classes: classesProp,
  categories,
  readonly,
  processing,
  onSubmit,
  value = {}
}) {
  const {
    classes,
    cx
  } = useStyles(undefined, {
    props: {
      classes: classesProp
    }
  });
  const {
    t
  } = useContext(LocalizationContext);
  const [formErrors, setFormErrors] = useState([]);
  const [categorySearch, setCategorySearch] = useState(null);
  const [searchPipe$, setSearchPipe$] = useState(null);
  const [filteredCategories, setFilteredCategories] = useState(categories || []);
  const [selected, setSelected] = useState(filteredCategories && filteredCategories[0]);
  const selectedModel = useMemo(() => {
    if (selected) {
      const fieldDefinitions = selected.fields.reduce((acc, field) => {
        acc[field.id] = field;
        return acc;
      }, {});
      return createModel({
        name: selected.name,
        icon: selected.icon,
        fields: fieldDefinitions
      });
    }
  }, [selected]);
  const categoryValue = useMemo(() => {
    if (!selected) {
      return {};
    }
    return selected.fields.reduce((acc, field) => {
      acc[field.id] = value[field.id];
      return acc;
    }, {});
  }, [value, selected, categorySearch]);
  const handleSearchChange = (event, search) => {
    if (searchPipe$) {
      searchPipe$.next(search || '');
    }
  };
  const handleSubmit = useCallback((e, callback, formData) => __awaiter(this, void 0, void 0, function* () {
    setFormErrors(null);
    onSubmit(e, Object.assign(Object.assign({}, value), formData), err => {
      callback && callback(err);
      if (!err) {
        callback && callback();
      } else {
        callback && callback(err);
        setFormErrors(err);
      }
    });
  }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [value]);
  useEffect(() => {
    if (!categorySearch) {
      setFilteredCategories(categories || []);
    } else {
      const filtered = categories.map(category => {
        const updatedCategory = Object.assign(Object.assign({}, category), {
          fields: category.fields.filter(field => {
            const contentText = `|${field.id}|${field.label || ''}|${field.description || ''}|`.toLowerCase();
            return contentText.includes(categorySearch);
          })
        });
        return updatedCategory.fields.length > 0 ? updatedCategory : null;
      }).filter(i => i);
      setFilteredCategories(filtered);
    }
  }, [categories, categorySearch]);
  useEffect(() => {
    const search$ = new BehaviorSubject('');
    setSearchPipe$(search$);
    const sub = search$.pipe(debounceTime(300)).subscribe(value => {
      setCategorySearch(value.toLowerCase());
    });
    return () => {
      sub.unsubscribe();
    };
  }, []);
  useEffect(() => {
    setSelected(filteredCategories[0]);
  }, [filteredCategories]);
  return jsxs("div", Object.assign({
    className: cx(classes.root, className),
    style: style
  }, {
    children: [jsxs("div", Object.assign({
      className: cx(classes.navigation)
    }, {
      children: [jsx(TextField$1, {
        id: "search",
        className: cx(classes.searchField),
        icon: "search",
        placeholder: `Search...`,
        variant: "pill",
        size: "small",
        iconSize: "small",
        clearable: true,
        onChange: handleSearchChange
      }, 'searchField'), jsx(List, Object.assign({
        className: cx(classes.navigationList)
      }, {
        children: filteredCategories.map(category => {
          const {
            name,
            label,
            description,
            icon
          } = category;
          return jsxs(ListItemButton, Object.assign({
            dense: true,
            selected: name === (selected === null || selected === void 0 ? void 0 : selected.name),
            onClick: () => {
              setSelected(category);
            }
          }, {
            children: [jsx(ListItemAvatar, {
              children: icon && jsx(Icon, Object.assign({
                size: "small"
              }, {
                children: icon
              }))
            }), jsx(ListItemText, {
              primary: t(label || name),
              secondary: t(description || '')
            })]
          }), name);
        })
      }))]
    })), jsxs("div", Object.assign({
      className: cx(classes.content)
    }, {
      children: [jsxs("div", Object.assign({
        className: cx(classes.header)
      }, {
        children: [(selected === null || selected === void 0 ? void 0 : selected.icon) && jsx(Icon, Object.assign({
          className: cx(classes.headerIcon),
          size: "large"
        }, {
          children: selected.icon
        })), selected && jsxs("div", {
          children: [jsx(Typography, Object.assign({
            component: "h2",
            variant: "h5"
          }, {
            children: t(selected.name)
          })), jsx(Typography, Object.assign({
            variant: "caption"
          }, {
            children: selected.description ? t(selected.description) : ''
          }))]
        })]
      })), jsx("div", Object.assign({
        className: cx(classes.categoryContent)
      }, {
        children: selected && jsx(EntityViewForm, {
          entityViewShrink: true,
          className: cx(classes.entityForm),
          value: categoryValue,
          errors: formErrors,
          model: selectedModel,
          onSubmit: handleSubmit,
          submit: t('Save'),
          alignTitle: "center",
          processing: processing,
          readonly: readonly
        })
      }))]
    }))]
  }));
}

var colors = {
  primary: '#6F8789',
  secondary: '#213037',
  complimentary: '#7d6f89'
};

const appSettings = {
  environment: 'dev',
  name: 'ICatalyst React Library',
  description: `The ICatalyst React Library is intended as a quickstarter for anyone who is using Singularity as their Identification provider.  The library includes some of the most common UI patterns that are required across all applications and allows teams to focus on the value proposition of their application during the creation of a MVP or POC phase.  The ICatalyst React Library deals with the basics such as security, access control, and user management, to allow a team to quickly get up and running.`,
  keywords: 'RAD MVP Production ready protoype',
  featureImage: 'assets/images/backgrounds/templates.jpg',
  frontEndDocs: 'https://dev-docs.icatalyst.com/dev/libs/react/storybook/index.html',
  apiDocs: '',
  sourceDocs: '',
  website: '',
  repo: '',
  favIcon: 'assets/logos/favicon-96x96.png',
  logo: 'assets/logos/icatalyst_logo.png',
  company_name: 'ICatalyst',
  company_logo: 'assets/logos/icatalyst_logo.png',
  company_url: 'https://icatalyst.com',
  ga_tag_id: 'gtag',
  colors: colors,
  themeMode: 'light'
};

const initialise = staticInit;

export { actions as ACTIONS, Actions, App, AppContext, AppContextComponent, AppRouter, ApplicationRepositoryBase, Avatar, Button, Card, CheckboxField, ColorChart, ColorPicker, ColorSwatch, CommandPanel, Container, ContextPanel, DataGrid, DateInputField, DefaultAuthGuard, Dialog, DialogContent, DropdownMenu, EntityView, EntityViewForm, Error$1 as Error, ErrorBoundary, ErrorWrapper, FeatureCard, Footer, Form, Icon, IconButton, Image, ImageUrlInputField, Link, Loader, LocalizationContext, LocalizationProvider, LottieLoader, Media, ModelPermission, ModuleExplorer, Navbar, NavigateTo, Page, RepositoryGrid, RepositoryLookupInputField, RepositoryTable, RichTextInputField, RouteExplorer, RouteLink, SectionHeader, SelectField, Settings, Snackbar, SplitButton, StateDialog, SuspenseLoader, Table, TagInputField, TextField$1 as TextField, Theme, ThemeVariantExplorer, TitleBar, UpdateAvailable, WebContainer, appSettings, globalAxios as axios, cloneRoutes, createApp, createDateRangeConstraint, createEmailConstraint, createLengthConstraint, createMatchConstraint, createModel, createModelFields, createModelRepository, createModuleFromRepository, createNameConstraint, createPasswordConstraint, createStore, createThemeVariants, createTokenRefreshInterceptor, createURLConstraint, defaultThemeOptions, extendThemeWithMixins, extractRoutesFromModules, findModule, getApplicationReducers, initialise, isComponentField, isComponentFieldDefinition, isModuleConfig, isModuleConfigFunction, localStore, redirectTo, reduxConfig, requiredThemeOptions, resolveModules, useAppDispatch, useAppSelector, useApplication, useApplicationRepository, useAuthContext, useAuthorisation, useAxios, useBreakpoint, useContextPanelSelector, useContextRoutes, useCurrentPath, useDebounce, useDeepCompareEffect, useDialogSelector, useEffectOnce, useEventListener, useForm, useHookWithRefCallback, useIsomorphicLayoutEffect, useLayoutSelector, useLocalStorage, useLocalization, useMemoDeepCompare, useMessageSelector, useMouse, useObservable, useObservableRepository, usePrevious, useRepository, useScript, useSessionStorage, useSettingsSelector, useTraceProps, useWebsockets };
