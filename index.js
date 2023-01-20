import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import createCache from '@emotion/cache';
import { useTheme, CacheProvider } from '@emotion/react';
import { Typography, LinearProgress, CircularProgress, Alert, AlertTitle, Button as Button$1, Tooltip, IconButton as IconButton$1, Paper, Modal, ButtonGroup, Popper, Grow, ClickAwayListener, MenuList, MenuItem, Snackbar as Snackbar$1, GlobalStyles, alpha, TextField as TextField$2, InputAdornment, useAutocomplete, Fade, List, ListItem, ListItemText, CssBaseline, CardHeader as CardHeader$1, CardContent, Card as Card$1, CardActions, CardMedia, Dialog as Dialog$1, AppBar, Slide, DialogContent as DialogContent$1, Divider, DialogActions, Toolbar, FormControl, FormControlLabel, Checkbox, FormHelperText, Autocomplete, Chip, Link as Link$1, ListItemIcon, Menu, ListSubheader, ListItemButton, Badge, Drawer, TableBody as TableBody$1, TableRow, TableCell, TableHead, TableSortLabel, TableContainer, Table as Table$1 } from '@mui/material';
import React, { useContext, useRef, useMemo, useEffect, useState, useLayoutEffect, useCallback, createContext, Suspense, forwardRef, useImperativeHandle, Component, useId, isValidElement } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { useLocation, matchRoutes, Outlet, Navigate, useRoutes, BrowserRouter, useResolvedPath, useNavigate, NavLink as NavLink$1, useMatch } from 'react-router-dom';
import { mostReadable, tinycolor, _, formatString, BasicI18NStrategy, DataRepository, isEmail, isName, isValidPassword, isURL, createColorPalette, deepFreeze, getMimeType } from '@icatalyst/js-core';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import pluralize from 'pluralize';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { makeStyles } from 'tss-react/mui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IonIcon from '@reacticons/ionicons';
import MUIIcon from '@mui/material/Icon';
import axios$1 from 'axios';
export { AxiosInstance } from 'axios';
import { of } from 'rxjs';
import io from 'socket.io-client';
import { usePopupState, bindToggle, bindPopper } from 'material-ui-popup-state/hooks';
import { createColor, ColorBox } from 'mui-color';
import { useTable, useFlexLayout, useGlobalFilter, useSortBy, usePagination, useRowSelect } from 'react-table';
import _$1 from 'lodash';
import IframeResizer from 'iframe-resizer-react';

library.add(fas, far, fab);

function staticInit() {
}

var useStyles$14 = makeStyles()(function(theme) {
    return {
        root: {
            alignSelf: "center",
            height: "100%",
            display: "flex",
            flexGrow: 1,
            flexShrink: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
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
function Loader(param) {
    var className = param.className, style = param.style, classesProp = param.classes, title = param.title, id = param.id, _param_color = param.color, color = _param_color === void 0 ? "primary" : _param_color, _param_variant = param.variant, variant = _param_variant === void 0 ? "linear" : _param_variant, _param_minValue = param.minValue, minValue = _param_minValue === void 0 ? 0 : _param_minValue, _param_maxValue = param.maxValue, maxValue = _param_maxValue === void 0 ? 100 : _param_maxValue, value = param.value;
    var _mostReadable;
    var _useStyles = useStyles$14(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var theme = useTheme();
    var normalizedValue = value === undefined || value === null ? value : (value - minValue) * 100 / (maxValue - minValue);
    var progressVariant = value === undefined || value === null ? "indeterminate" : "determinate";
    color = color || (((_mostReadable = mostReadable(tinycolor(theme.palette.background.paper), [
        theme.palette.primary.main,
        theme.palette.secondary.main
    ])) === null || _mostReadable === void 0 ? void 0 : _mostReadable.toHex8String()) === theme.palette.primary.main ? "primary" : "secondary");
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            title && /*#__PURE__*/ jsx(Typography, {
                className: cx(classes.title),
                variant: "h6",
                children: title
            }),
            variant === "linear" && /*#__PURE__*/ jsx(LinearProgress, {
                className: cx(classes.linearProgress),
                "aria-label": title,
                id: id,
                color: color,
                value: normalizedValue,
                variant: progressVariant
            }),
            variant === "circular" && /*#__PURE__*/ jsx(CircularProgress, {
                className: cx(classes.circularProgress),
                "aria-label": title,
                id: id,
                color: color,
                value: normalizedValue,
                variant: progressVariant
            })
        ]
    });
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
        p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAACtCAYAAADGWi9+AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAYj0lEQVR4nO2dXVMb2ZnH/+cg1BIIkABjPF7bxFvZnamaqYHUrh1XqjbMxc7YV4Mucj3kEwzfIOwnCLnei+BP0PgmME5twWQry8DWFrh2qpKt3aRgXB4DtngRWKIlcc5eSGLUp7ul7qPWS7fO78rdWK1G+vP0c57zvAAKhUKhUCgUCoVCoVAoFAqFQqEIMqTTN9Au9Ofb0+B8CgzTICRJCZ8GAHAkOfBxnZeeEYJdAGAMewD2ALIHXO0hFttNfzJz2up7V9gTSvHqq5tTQN8sCKYp4dOc4+ctfLt9DuwCfAOUbqQ/fbDbwvdS1BAa8epfbc2Bk1kCPgfgXgdv5YwDG+BkBbH+FWWZW0egxauvbs4CdJ4QzAEY6fT92MGBZ0rIrSFw4tXXd5IwjHkCsgCPFjYej6E/EkF/fx80LQpKKQBgIB5zfI1hFHDFGAAgn78EAOTyBkrFEoqlkpe3P+McK+gjS8q18IfAiLfsx9JFt1ZW06IYiGvQotGyaPsjvt8TYwyXRgH5/CVyeeNa3I0gBF8zxhbTTx5t+H5TPUTXi7dGtF80+r+JwQEkBuMtE6sbLt7lcHGRRz5/6cYy73OChfRnD1facW9ho2vFq6/vJHFZWGok2ng8hpGhQSQSA9duQLdQFfLFuxxYxfWwQ1liObpSvPraNwsEZBEO7gGlFInBAYyNjnTMwnqBMYaLixwyx2d1rXF5cccW0k8e7bXv7oJLV4lXf749TRlfdto0oJQilRxCKjncdVbWLRfvcjg5Pa/nH59x8MX0458utfO+gkjXiFdf3VokBL+y+1kYRCuSy1/izdsTGEbB9ucVV2JeWWFnOi5efXVzihK64mRtU8khjI0mQyNakWz2op47ccY5WUg/ebDc5tsKBB0Vr766PU8IX4KNbxuPxzAxnoKmRTtwZ+2FMYbM8SlOTs9tf845niIWXVCbHGY6Jl59bXuJgH8pnqeUYmx0BKnkcCduq6MYRgEHRxlbV4IALxhnc8qN+IG2i7e8Q1ZYJsDn4s80LYr3Jm8EIoLQSt68PXaywmecklm1Q1emreLV13eS1Chs2Pm3qeQQboyPtvN2upqLdzkcHGbs4sPKD67QNvE6LcwopZgYT2F4ONGuW3Gkut1bzn/ovPUvFkv4/uCNrRvBOfllrwu4LeLVn29PE8Y3ICzMKKW4c/tm2xZlhlGAYRRQLJWQyxtgjDmGqmrpj0QQ6Y9cJ/XE4zHEahJ7WgljDEdvTpA9v7D8rNcF3HLx6qubU4TQXQjC1bQo7ty+2VIBFIslXLzLIZ83cPEu5/v1q8k/g4MDdTPT/ODgMKMELNBS8Tr5uK0UblWw2fN3rqyqX1S3rFPJoZY9SU5Os3jz9sRyvlcF3DLxtlu4ufwlstl3ttbJCwR4wYEpNJHc3h+JYGx0pCV+fDZ7gYOjjOU8p2Sm16IQrRPv2taKGA5rhXBz+Utkjs885tJiw0sRZbliAwDoLAimCTANF4nwrdrWdhBwz4XRWiJeuw0Iv4VrGAUcvT1pKNpycB8rANvwM+XwhyJPPmcXs66lFZbYzgcmwAumRWd7ZSfOd/FWtnx/W3uOUor7U7d9EW6jrdQK+xxkBfxqqR07UuXc4+IcJXyhXhm931vedgLmwLP044dzvrxBl+OreO0iC36Gw3L5SxweZurlxO5zThY7uXjRn29P44ov1EuiHxsdwdho0pf323/52rIw5Rz/kn7ycNGXN+hifBXvs7WtXdHyTE6M+fK4zByfInN85vTjjotWpFH5Ujwew+TEWNObIYwx7H/32vIH3QsLON/Ea5eP68eWL2MMr16/cfJtuz5xW1/dnKWELtm5E5RSvHfrRtMxYsMoYP/la/H0Ptei02H2f30Rb2UHbaf2nKZFce/OraauWy/LKmglM/VKm/x4OtnFgDnIb9KPHyw0deEuxhfxiu4CpRT37txq6pFoGAW8fHVon5jS5dbWiXplTn74wS9fHVqeUGF2H5pe/utr31hW2M0WRtYR7j6nZDaIwgWA9KcPdpkWneUcT8WfZY7PcHBo3XzwwuTEmCWiQxlfbuqiXUxTlldf30kSo7CHmkdhPB7Dnds3pa/pJNywxTArbsSvxfPNrhNs3YeQbh83Z3kvC5YSnonxlPTlnITLOZ5+/vhhqBYf6cc/XeKc/FI8f3J6jmxWfos7lRxGXFgAEsKX9PUdf2JzXYS0eMsxXXMYqJmkFMYYDo6sydec42n6ycN52fvsZtJPHizbCfjgKNNUFtzYqGVNOILLQugWbk1YXrpoOqK0qQXHq9fWpOswC7eKo4AP7aMsbhiIxzA8ZI5eEIKFsFlfKfE6WV3Z7d/M8alllUyAF2EXbhU7ATs9idzSC9ZX0vJara5stW81K0xgn2nRWakLBpSygM1RCMMoIHMs5+b390dCb309i1df30lW2oxeI2t1GWM4tIaHzjglc2FanLkl/eThPCH4uvbcyek5ci7TPUXsrW8xNEk73hVnGPMQEm9krW7m+NS6Jw++GNaguhtYNDoHwPQoOrSvIm6IvfXli83cXzfhWbyVjuTXJAblWosaRsGS1lhO5wvmBoRfpD+ZOeUE87XniqUSTk6zUtdLJYfEU/f059vTcnfXXXhSXaWiwFRBYPNocsWRtRbrDJyFakEhS/qzhysceFZ7LnN8hmLR0xgBAOUcE0v48oqH4nP2aDLpfO2RbAfyXP7SugcPvhiUJJu2UP5DNrkPdVJC65IaMVtfcc0SVDyJV/ylR4YGpd7ULrrQ6+6CSPrJoz3OYfpMsucXUtY3kRgQT43oX20FXsCuxVv5ZU0+gs2H0hBbq8vJoucL9QKx6BJ8sL7VsnwTLPjW173l5WS29lB2oZbNvhNP7YcxacQP0p/MnNpZX5nIQ2IwbjoOg+vgWn2VyZLXiB+GG4rFkrVgUFnd+thY3zOJxB1b1yHgUQdX4i3XY5mjDGLmkhtskk3OlNWtT/qTmVMOslx77rR+5bQtlFLrd3bFA219XVrevtnaI02LSkUZsudml0H8UhQO8CuT61AslaSSdsSnJaWYbeq+Oow78RKYHi8Dcc3zGxWLNh+48KUo7Ek/ebRHgBe152TaWonxXs7x8+burLO4Ei8l3CReLeo9Z1d0GcpZYyqu6xYGczlPLm94voZdlXKQ/V5X4hX/QmX83bzwYZdbMClcw7np8zKMglTUwer3IrzitfvLlPF3rYs1tuH5Ij1M5Sm1X3tOJtsspvULZ/iU9E11mMaWl5t/ORmra7e4UHN2vcM5NmqP3XbGrCUSMRueIC/aGouXmR8r/RHvVlcUr5izqnAL2ag9ujSKnq9gSdLhCGxyemPxEmL65fr7+zy/iZizW+6Pq/BMH0x5zjLhspgYcajT1bLbaSheS6RBojrYujIme54vooCYpM8Y87xoC9MYXM+/iWy5j5mrPc8XUQAohxhrjy8lrK/o+v3Q+T1YuFiwNe8TWR5vsVjPlvk0DUHTtX2RLpgx5wcNxSv6RH6MbOrF4kq/YNws3nZOPOo2wuMA9QocFr+3V2m5eHv5w1W0lpaLV1xQiAsOhUKWlotXXNlWBvQpFE3TevFaV7bSkyUVilrUgi1oCDuevYwb8Zrqp3o5NNMN+LHjGRYaipcQc2jmSqZnVkh2dLoRf3Y8g0lb3Iaw7Oh0A2JhgB9ZfkHd8WwoXsawV3ssk0Nq/YDprOeLKKpV3CaanaAJBHfH043l3Wv2TSxplCS4pScdhVIfMvwsxmff7v8FARfiNacvyhT+WabTQIlXCqEwQKYQ1jIijDRvnDqFC/Ga0xdLEo3exARoAPfsHoGK+oglO5qlHq0xor/LOAmkvwu4EK9Ya1YslaQSoK2POHMjE0V99PWdpLhYk8nwsz452V4Tt9VR3EYbTH6RTAK0pVEJCXarobZTKMzWHtobhMZYG7/w8FpeAOAwx3plIg6DQotNAnwepsk0LUdoSWppWeqCYtH61AxyFbdLy8s3ao9ku7VYAuohmkzTSioTmExz7xIJ71067WbdNXdnncWdeCndqD2UsbyA1VpQEo7ZCC1H+CO3bRbtAtHoMKGUPmi4Em+latWU4yAzG1ecTMOBj4PcK6tdiOOnZIQL2HxnxPxEDRqut4c5zL0WLi7ynt9M06LW3baQTKZpFXYTmGzGUzXEtrdZNLohfWNdgJe2/qZGb7Kugzj6ihB8oWK+zlBqHpUbj8ekogxiS1RC8HVQt4WruBdvrN8k3mKpJOU6DA8nbDKhzF+Qooy+ujkrxnZlrC5gfVIyoetkEHEt3nJ7efNgOxnXAbB+ARXrOyt1sRBDCF2uPe6PRCQXapeWlltiy9Qg4i0lUnAdLt7lpHJDU8lhi+9LCVVd0mvQ175ZgODr3rw5JnUtcQITIfg6DI29vYm37DpcRx0YY7i48O46UEotvi8HPq58YT2Pvro5RWCekhSPx6S2gxljFn+XsXDMAvEk3spcMJP1lR0pOjycsMk2I4sqdAZQSpchFKpOjKekrmUzcPtMXL8EFe+VFH3EMplGZuEG2H4hI5Tx5V7eNtZXtxbFRdrY6Ih0rdqJMPaKgywHPcpQxbN4058+2BWbQ4sfkFs0LWrrPuCy0JP+r766OUsIflV7rvwZyf0tZ7M20zJDNIFJqoaNMbZYe5zPX0rNRwCAsdGk1X0g+KLX/F/9+fY0IdTyOJ+ckFukAVaXjnM8DcNCrYqUeCuZSKY0yTdvT6RvYnJizBL7JSC/1le356UvGiD09Z0kYXwFgp87OTEm7S5kjk+t4THB5Qs60tXDnMBkGQ2jgKzETFygXET43q0blvOE8N+GXcD6+k6SGoUNCGGx4aEEhocTUtdkjFldOYLfiZ3Vg460eNOfPVwRfd/M8Zl0T4CBeMz2ERlmAVeFK/ZAjsdjmJSM6QJlq2v1dfEj6Qt2KU31bRB932KphMyx/EJ2eDhhWcAB4RSw/nx7mhiFXVG4mhbFbZunkFsMo+C0gP5AX9tWbkOV9JNHG+KW8cnpeVMtocZGkxgesj4uywLeWpa+cBehr27OEsY3ILgKmhbFnds3mxp6cnCUcfwZAf8yTHH05jvmcLYAIde33gfohsmbY7YJKITgi2dfbW0EOQ6sr24tEkLXISzO/BBu5vjUYjj6hOtRzkNjfYkfF9HXvlkgIL+uPZdKDuHG+GhT181mL5z+EM44wXz6s4eB2SnSVzenKKXLdpPW4/EYbt+60ZRwDaOA/ZevTedGhgZw/94kdr79q+k85+xHYQiZ+dKrLP34p0t2GxeyO29VhocTeM/+Sx0hHLq+trUShFxgfe2bBULorp1wh4cSTVtcxhi+f/3Gcn7mo/u4e3vcpnKbhKJ20LdGe4yxeYjuw2EGRYkmJbUkBgdw5/ZN23gnAT4nhO7qq1uL3ehK6KubsytrW3uVp5JlJTo5MdZUVKHKwWHGEtP98P27GBkqp0/ev3fT9DMKMt/0m3YBvrgNVfTV7XlC+G9rz/nhywFl65I5Pq23FX3GOZYQiy51eu9eX92cpZRachSqaFq0qQ2IWjLHp5adtPHRIfzsHz+4Ps7lDfz+D+ZC4bnHD3397juB77+Avrq1LJZpDw8lfLEwQDmx+tDG0tRwxkGWwa+W2unX6es7SVwW5yrFkvec/t/Y6Ih0roKI3ZqgP9KHf/75NPoj5uaGv/u3/0KxdHV9zCmZCfqmhf+Nc2PRBWIUpmvjl9V8Uj8EPBCP4d7dWzg5zTqlY44Q8C9B6JfP1rZeMPBlcL7SCiHr6ztJFAqzYJgjRuGLeqYgHo9hYjzlWydzwyjgyGZL/mcPPrAIFwBGhgfw9rjmqXV11XVullda8ujQVzenCKG7EPy8G+MppJLDvr1PsVhC5vjMkmztwD7n2ADIBvqwK2N19NXNKVA6DYZpSmGpL7OjPxLBzZtjvkwOrWIYBbx8dWjZRZv5sLxAs+OP//knk3g5Z58EuVsO0CLxApUdpHIg3pJsIrtn74RHEV9DgBcgOGUcp+JkyfJ/IMnqDAg3Qq0lHo8hlRyS7rHghJNw79+bxEfv33V8nRKvR+wWcEBrBAyUF3Vn2Qucnp7X84lbRrWTTSo51JJBJ07CvfPeOH7y0f26rxV9XgD/NPf44b/7fpNtpOUrTicB+7mIs8MwCsieXyCXN1o6wagq2EQi7ruVrcVJuJMTKTyc+XHd19pFGwjwgmnR2U5HZpqhLeGSTgm4CmMMufwl8vlLXBpF++4xLtG0KLRoFJrWjwHJBiBeyWYvcPT2xHLPI0MDjgu0Wv6yf4Bv//yd5XzQBdy2WJ+TgP2KA3uFMXbdZ7iemDUtCkop+iMRX4aXeMUujguULe5PPrrfULgA8Ps/vHDs7BlkAbc1UO0k4P5IORm9lwfiiTDGcHCYsd1id+PjVnGyurUEVcBt32VxikIA/ofSgophFPD96ze2i85GUYVacnkDG//xrbhQsyWIAu7IFqH+fHuaMr4sJmIDlSqCibGOPKK7ASc3AagfxxUplq7wx+0/4ezcbLnHRkccrx80AXdsf1tf30nCKCwT4HPxZ9WOOr1khQ2jgIOjjG1kpD/Sh589+OA60aYRTsKtpqnWSTUNlIA7npxhlwtcJR6PYWx0xNfdqW6jUcJRaiSBR//w964WZgDw+ugEO//9V4uroGlR3Ltz6/rYrYDLORuX00D3za/ouHiBaz94BQ4JLcND5dq2sLkSVdHWC9v1R/owOZHC305N1rW83716i5ffvzHnL1RwiujUEzBAvgf4MYAPTWeBF4yTpfSTB8uON9MmukK8QNWNKC4S8C+d/k9YRJzNXiBzfOZ5F3AgrmEgHsVYquxOFUtXyJ6/sxVslUahyPoCdqYb3IuuEW+Veou5KsNDiZZtwbaKci+FbCNLewZO/hWE/wJ10irdkkoOYWw02TCGHlQBd514q1RiwkuwCalV0bQoUiNDSCQG2r7J4ZZc/hLZ7LuGSUOc4yli0YUf/MzCAik3dnH8/Z2QWSvUi3KMDA2gWLqy3ejopIC7VrxANcHb3ZeYGBxAYjDeFUKu5lVcXOQbugac4ynAFu3yjcuulDFPQebrPYlqIYTg7t9MenoqOeVNjI8OYebD+9c1cLm8ge2d/7VEMTol4K4WbxWvligejyExGIemRdsSqSgWS5Vmg4brbvH1RGvHD6v+vimATxGKSXDMA9DE/0spdaz7E/GaqeYUhuuEgAMh3ipuS21E4vEYYlo/IpEINC2KWCVfQYZc/hKMMRhG4TpjzUOSj68lSvV2K90IWDbFslsEHCjx1qI/357GFV8gBHOQ8AuBck5FxEXkoipWWQjB14yR5VaEl2QF3ExuMNAdAg6seGvRv9qaA8NcM0L2G0LwNeN8pVX1c7V4FXCzwq3SaQGHQry1VCzyXKXGbBptEjMBXjCQDRC+gWh0o92LF7cC9ku4VTop4NCJV6QsZkwDfIpSzIIj6Xbl7sA+IdhjnOwCbA+c73bLtmkjAd+cGMXh0bFvwq3SKQGHXrz18DS4MBbbDUKySj0B29GscKt0QsA9Ld6w4lbAfgm3SrsFrMQbUhoJ2G/hVmmngJV4Q0xFwN9A2MholXCrtEvASrwhZ2Vt6xzAdZMMsQlfq2iHgLszm0XhC5UF6bVw+yN9eDDzd215b6fqDw58TI2CL93tlXjDDKUmgYwMD7iuyPCDVgtYiTfMcD5VexiJtD+Jv5UCVuINM5ybmgdmz5sbsyBLqwSsxBtmYjGTeHN5A3/+v1cduZVGApa5phJviEl/MnNazhv+gf/5yyt89+ptR+6nnoBlBhwq8YYetghh0M3Ot3/tOgHLDDhU4g056SeP9jgnC+L5Tgv4wcyPrZEPxhe9XEeJtwdIP3mwzDn5pXi+kwIeiGv48H1zMQwBPvcyV0+Jt0foRgE3O+BQibeH6EYBT06khDNk1u1rlXh7jG4T8K0Jc4iXALNuX6vE24N0k4DHRy2dQF2XbSnx9ijdJGBZlHh7mKALWIm3xwmygJV4FR0V8NvjrHjKvtufDUq8CgCdE/DrI3NBBQc23L5WiVdxTScEfHAkTq7nG25fq8SrMNFOAX/36q215y/nK25fr8SrsNAOARdLV/j2z/umcxx45qWvmxKvwpZWCrhaWWwZbkjJopfrKPEqHKkn4L/sH0hd06kknoP8Jv3pg12Hl9mi+jYoGuI0M3pyIoWP3r9rzQxzwGlGnGwvByVehSucBAyUO/DcvT1ul6eAYukKrw9PHGfEAdjnWnRapgmJEq/CNfUEXGV8dOj637l8wXaCUJVmu+co8So80WhaqVtqR3fJXkOJVyGFvrq1KDMnrjyfgy360ZBbiVchTXU6EwifqySROwl5n4OsgGLZa0ShHkq8Ct+oFE9OmU4GpKO8QqFQKBQKhUKhUCgUCoVCoVAoFAqFa/4fCbut2hEefs8AAAAASUVORK5CYII=",
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
        p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAADyCAYAAAD6Bd/wAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAPn0lEQVR4nO3dXVobR74G8LeqW60vGgkZFA/J2OZ54rkNZwXxDiY7GGYHnrOBISs4mbMCZwPnOCsYZwf2re05Mk6GsYUQSE2jr+6ucyGaMCBA6KtK1Pu7sUBSV7n00vp3qVoNEBERERGRScSiGqrVjp7ETrytlNoWSjw7a/3bRbVP2u1B4QMEPiioD0jw6unWxqtFNT7XoL+t1bellDtKiGdCqW/m2RYtrZ8g8NKJnZdbW2vH82pkLkF//7GxoyCeXw53PptBLuci4zpwHYms50LKhb2pkEa9foQkUegPYvT6ETq9AaIoufiQAMD/OImzu7W19mHW7c80Ze8/NnagsAvgcfo7v5hFseAhn80w1PRvoihB2OmjHfbQ70cX7/px1oGfSfLe1urbwnFepHtw15Xwi1mU/TzDTWPpdAcIwh6CsHf+OwX1vZu4P8yipJk6he/2DnYFxF8BQEqBkp9jwGliUZSgfniCTm8AAFBCvFFxvPOHrerrabY7cRprtaNyLOKX6cxJMe+h+mCFAaeZCDt91A9PkCRq+AuBP3/9aP3FpNubKJUXSxUpBdbXivCL2Un7QDRSkijUD08Qdvrpr378+vH6ziTbunPQz6YMfwaw6roSD9d9ZD13kraJxtJsneKo1Ul/nCjsdwr6xZB7nosvq6ssVWghgrCH+uFJ+uOdwy7HfWCtdlQWjvMCDDlp4BezqD5YSX/807u9g927PH/soMcifimU+sZ1JUNOWlwMu4D46/uPje/Gfe5YQX+3d7ALgW+lFHi47jPkpI1fzP428aHwY6129GSc590a9Le1+nY6T76+VuSBJ2lXfbACb5jD1VjEL8Z5zq1BP6vLUcx7nEIkY1QrxeENgW/HKWFuDPr7j42ddK78woEAkXZZz8VaKT/8QeG/b3v8zXv04QItlPwc63IyTqVUgOtKAPj9P/YOn9/02GuD/v5jYwfAY9eVqJQKs+0h0Yyk2VRQ/3nT464NuoJ4DoB1ORnNL2bP9+pnO+eRRgb9ba2+nS65Lfv5uXSQaFYuTDdee1A6MuhSyp10A6zNyXSrxVx684+12lF51GOuK12+A4BiwZtDt4hmy3VlOq+O2IlH7tWvBP3sk6bHwHDunGgZrP5Wvjwbdf+VoMdOvA0MT2QmWhZexklvPht1/5WgK6W2ASCX40f9tDzyufMd8+NRdfqVoKdfLpRxnct3ERktrdMjRNuX77t2Ht11xl7BS2QERwxnCIUjnly+72qaz0525ipFWjZpua2UenL5vmt325w/p/uE9QlZgUEnKzDoZAUGnazAoJMVGHSyAoNOVmDQyQoMOlmBQScrMOhkBQadrMCgkxUYdLICg05WYNDJCgw6WYFBJysYeWJotxchCLvo9SPE6QVVyWg5z0Uu62KlmINj4GmYRgW9FXRw0AwxiGLdXaE7Oj2/6G0bJT+PjUrRqK9MMSLocaLw66fjC4NFy6wVdBCEXTxc91Ey5NuYtQc9ThQ+/rOJbj/S3RWaoSRR2K+3AcCIsGs/GGXI77f9ehutoHP7A+dMa9APmicMuQU+NQLtx13agh4nCs3Wqa7maYGSROGgGWrtg7agt4IOEk4dWiMIu1qnirUFPQh7upomDZJEaZ1V0xZ0TiXap9sbaGtb+6wL2WMQJdraZtBpYXTOvDDotDCFnL7rYmkLOr9/3T6OxquoaGvZ/+0iqGSJQk7f5Tw1Bj2rq2nSIOM6yGX1La3SGnSTlnHSfG1Uilrb13owulld1dk8LUgh72lfwag16IW8hy/WfZ1doDmTUuCrh1eub7v4fujuQKVUwPqa3rc1mo+M6+DxZsWIU+u0n3gBABuVFeSyGXw2YDknzUbJz+OLdd+IkAOGBB0YHpwW8h5Owi6ax6dcp76EpBTwizmU/RwKeX1TiaMYE3QAcKRAyc+fH7hw4dfykFJqnT68jbk9A4zbK9Dy0n4wSrQIDDpZgUEnKzDoZAUGnazAoJMVGHSyAoNOVmDQyQoMOlmBQScrMOhkBQadrMCgkxUYdLICg05WYNDJCgw6WYFBJysw6GQFBp2swKCTFRh0sgKDTlZg0MkKDDpZgUEnKzDoZAUjv2Q0PrtuvM5Lai9aLptBIe8t/PvEZzXWjiNRyHnGfqOuUb3q9iI0W6doBR3dXdGm5OexUSnO/UJmp50+mq1TBGFvptvNuA5Kfg6VctGYiwAABgX9cyNAs3WquxvatYIOWkEH62tFbFRW5tLGPMd6EMVoHIVoBV1sVleN+epv7TV6nCjs7R8x5Jc0jkLs19sz3WacKNR+OVzIWA+iGHv7R8a8O2sP+udGwCtbXKMVdGYa9l8/HS/8kjn79bYRr6/WoNtej4+jFXRmUkcfNE+0Be6XT8eIE6Wl7ZS2oMeJwkHzRFfzS+VzI5jq+XGitJaGSaLQPA61tQ9oDPpJ2EWi+a98WQyieKp3vlbQ0T7Wuo/BtAV91tNa990049Vq6y8Pk0Rpfc0Z9CURTlFfm3LNVp0fAGqfdaHxTFp6mHQl7kGUaGubQb/nBgOTgq6vLwz6PZfNZnR34dy8lzXcRFvQpUHrIJbBpCExab1JxtW3X9XWctGQNRDLYpo1I6asN9H5mmsLul/M6mp6KU0zXiaMtZRC6x+ctqCX/LzWmm2ZZFxnqrCW/Lz2UrFSKmhtX+vB6Bfrvs7ml8a04+RIMbclv+PIuA4q5aK29gHNQfeLWZT8vM4uGK9SKsyk9KiUClrGWkqBrx6WtR8Ua59e3KyuMuzXKPn5mb7rLXqspRR4vFkx4vQ6/T3A8AXIuBKNI70r3Ewhz0qNedS1ixrrnOfid9WSESEHDAk6AGxUVlBezeOgGSKwdGWjlAJlP49KuTDXA/V5jnXOc1Ep6ymTbmJM0IHhQctmdRXAKk47fQyiGH2DPsKeFy/jIOtlFrr3uzzW3X6EOJ58LUouO+y/qTNpRgX9IlM+5LBBIe/d+/HWfjBKtAgMOlmBQScrMOhkBQadrMCgkxUYdLICg05WYNDJCgw6WYFBJysw6GQFBp2swKCTFRh0sgKDTlZg0MkKDDpZgUEnKzDoZAUGnazAoJMVGHSyAoNOVmDQyQoMOlmBQScrMOhkBWO/ZHQQxRgM4nv/jbpexkHGdZA5+1eHacc6vdqcyV9UalTQ40SheRyiFXSNurT3omRcByU/h0q5OPdLocxyrC9eVMAvZlEpFYwLvTFBbwUdfGoEVl4AIDWIYjSOQjRbp9isluZ22cRm6xQHzZO5jHUQ9hCEPRTy3tnVNcz4vnQjavT9ehv79bbVIb8oSRR+/XSMz41g5tver7fxeQE7lNNOH//3yyG6vWiu7YxLe9A/NwK0go7ubhgp3fPOyn69vdCxThKFvf2mEWHXGvQg7KHZOtXZBeM1jkKcdvpTbycIe1p2KEmi8K96a+HtXqY16PN4a76P9uvtqbehc6y7/Wim70yT0Bb0VtCxcmZlEoMoRhD2Jn6+CWPdCrpa29cW9GleOBtNM14mjPUgimdSgk1KW9BDjf/pZTRNSEwIOqD3NdcWdE4l3s2kpUds0DgPosmvYzot7dOLNF+93kB3F87pPE5g0O+5TMaMTyYBzH1Zw00Y9CUhJwyJKR/BA0DW07fiRFvQTVv0Y7riFOOV0xiwi3LZjLa2tQV9XguW7qtpxqu0mp9hTyYjpdC6c9MW9JKfn/jt2DZSCqwUcxM/34Sx9os5O2t0RwpUSgVdzS+VjcrKVCHRPdZSCnyx7mtrH9B8MLpRWWGtfov0RIZpbVRWtNXqm9WS1r05YMCsy1cPy8YcLJkm57n4XbU0s+09+rKy8LHerK4acTymPeiOFHj0ZQUlX/8Bk0kqpQK2fv9gpnvCdKwXETwpBb56WDbmdTViV+pIgc3qKsp+DgczWn+9rAp5DxtrxbmVdM5ZAE87/bmMtTw7HljEea93YUTQU4W8h8d573ylW38Qo9ePjFqvMWsZ10HGlfAyDgp5b2Ef8Fwc6yDsIY6Ticc657mQUiCXzRhRpoxiVNBTw7PhzXjLu+8yrmPF7Jf2Gp1oERh0sgKDTlZg0MkKDDpZgUEnKzDoZAUGnazAoJMVGHSyAoNOVmDQyQoMOlmBQScrMOhkBQadrMCgkxUYdLICg05WYNDJCgw6WYFBJysw6GQFBp2swKCTFRh0sgKDTlZg0MkKDDpZgUEnKzDoZIVRQW8BQK8fLbgrRNNJbriIwdWgK7y+7UlEJur34+GNBK8u33c16ALHANAfxPPtFdGMDeLrM3sl6ArqNcDShZZLkihEUQIAeLq18ery/Vf36Ge7/R736LREOr0BAEAJ8WbU/VeCnv419PvR+V8Ikek63WHQhVKvRt0/enpR4WcACC2+3ictl/OsiqsHosA1QRdCvASAdtibU7eIZqf3W/XR/vrR+stRjxkZdJnIFwDLF1oOraCb3vzf6x4zMuhbW2vHAH4EgGbrdOYdI5qVJFEIziqPJEl+uO5x1y4BUIl6AQBB2ONenYx1HHSGNxR+/sNW9fV1j7s26E+3Nl6lB6Xcq5OJoijBUWsYdKXU7k2PvXFRV/rkIOydT98QmaJxFA5vKPw86kOii24M+tmT/wYA9eYJ17+QMcJO/3xKMVHJ89sef+syXSdxdgG0oyj57S+ISKMoSlA/PAEAKKjvb6rNU2KcDb+rHTwTUvwdAKoPVuAXs1N1lGhSSaLwz3ob/X4EJcSbp48ebI/zvLFOvHi6tfFKQX0PAPXDE9brpE3jKER/uOCw7cbyu3GfN9YePfV+r/ECwJ+kFNisriLruXfrJdEU6ocnF+fM/2OckiV1p6ADwPsPjVcQ+FZKgfW1IssYmrskUWgchechh8Cfv360/uIu27jzOaOOcr4D8FOSKNQPTy5+/Eo0c2lNPk3Ih0+bUFrGAEAx76H6YAVSTrw5oivCTh/1w/Np7bZK1B9vmy+/zlTJ/Mfe4XMF9V8AwFKGZuVyqaKEeKPieOcuNfllU++C39bq28JxXgilvgGAfDaDtVIe+Vxm2k2TZZJE4TjooBV0L344+TcncXbPFhpObGa1xru9g10B8RcAq8Aw8P5Klnt4ulUUJWiH3X8LuBLiDeLk+aSlymUzLaprtaNyLOMfcFa7A8OSppj3UCx4yGczrOMJwPBkiW4vQjvspfPiqT0I7E5ywHmTuaSuVjsqRzJ6LiB2ADy+eJ/nucg4Ep7nABju+el+i+IEgyhGkij0+zF6g2jUuqmfIPDiujOEpjX33evbWn1bSrmjhHiW1vFEGH4j3CsIvHRi5+W0NfhtFl5HvKsdPJNSbidIygLiCRSeLLoPtHhKDM/OF0K8dmLn9dbW2ge9PSIiIiIiIp3+H/yNcCHjpRNmAAAAAElFTkSuQmCC",
        e: 1
    },
    {
        id: "image_3",
        w: 216,
        h: 260,
        u: "",
        p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAEECAYAAABKq/oNAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAeX0lEQVR4nO2dX3Ybx5XGv6puNEAIAkGR4vAokQnO2H41ZwXiDuysIM4GJjnZQJIV2LOCaHZg74DeAfwqKQFgOxoOBRIgBDXxp7tqHtAFNWmA+NdV1Q3c3zl+oAii22R/qFu37ncvQBAEQRAEQRAEQZiC2b4BItu8ql+ecodXpZSnDKwKieq010kmzzl4RwhRc+HWTk72OkZv1BIkMGIh6vV2JUBwCo6ziZAYXqz6fpKxH5mU50KIl5+fHNaSu9N0QQIjfsXr+rsz5rAqJE4hcQqGUwC7017LOYOXc+DlHHDGUMi7v3pNEAoEgUAQCgxHIYaj8P5LmgzsWy74y01b2UhgW0y93q6GTngahXenkrEqk/KLWa8v5F24DofrcBTy7lhUfPlHSAgJvz9CfxDA748ghFTf6krIb1zhfrspQiOBbQEqvOOcn0rI03nhnevwyarkec7kax0osXW6fQShUP/cBcMfP/3k4KWWixqEBLZhqPBOSlllkp0tGt4pEU0L8UzR84d3hSbxgyOdr7K8mpHAMkq93q4GCKpR0mFueBcXUiHvwnXHoV4a6XT76Lzvqy+7UsgvPzt5em7xllaGBJZy7oV31Sjp8GB457ocBc/VHt7pZDgK0Wr7HxMiDH/IYshIAksR0ZnSaSy8qwI4nvbatIV3OhBC4vrmFj1/OP6HDIqMBGaBVcK7uIjSHN7p4PrmFt3eYPxFxkRGAtPM6/q7s3vh3cykQzy8c92PmTxinABptf3xFxkSGQksIe6UDM0J7wBMzpHiKfFVzpS2iVbbn4SLQoj/zEIFCP1Fl+ReeFeVjJ1SeGeOy6sP8PsjAOg6wjlOewqfBPYAy4R3KumgwjuVDieSRQiJi1ZPZRe///T44Cvb9/QQJDD8qiL8FMAp5oR3d6odKLwzynAU4u3l+/EXDL/79JOD7+ze0Wy26qlYtiL8zh7J+5gSJ+wTO4xufnp8ULV8OzPZWIGtWhEer3Yg0osQEr/8X3dcKJzirGLmBXa/IhwLhnfrVoQT9oml7lO7imXmyUpzRThhj5/+9ybVq1gq46BpFeEhwl0GBonIOxR9NFB4t92UH+XHezGJrwC8tH0/97G6gi1r+MtSRThhhiAU+OWiCwBwhHNycrLXsHtHdzH2UR+J6SyWdHgRIgQkwCKdMzlenTalIpzQj3o2hqMQoROeIWWrmFaB1evtiuDia8HwdSjDL1R0Ny2829SKcEI/paKH65vbVIaJWp7mer1dDXn41xDh7wGARcIq5F0UPJfCOyJRYh/KZxZvYyqJ7sGUsAD8Xv1bIe+iVPRQLOQoHU5oo/GvcUli2vZhia1gr5vv/hoi/DOAx8B42S6X8rR3IoxQyLvoDwIECKoAGpZvZ8LaAqvX29XAEd+p7F8h7+LJ7g4JizCKl3PQHwQAxxmAc8u3M2Etgb2uvzsLefg9kyhzzvBkdwelopfUvRHEwqj9fFTNkxpWFtibn1pfQ+LvwPjT43D/ESUtCGuoiEkyVrV6I/dYSWBxcZWKHg72isneFUEsiRLYQ4UKNlh6ySFxEWmEczaJoF7VL1MTJi4lsNf1d2ckLiKtuO74ceYOz57A6vV2lXH2PUDiItJJwRvveKSUVbt38pGFBRay8CWAspdz8GR3R98dEcSKqBWMSXZm904+spDA/tG8+hMYXnDOcLj/iCoyiFQyOXtl06ds2mCuwOr1dkVC/g0AKo8LlIonUkusuOG4Xm9XbN6LYq5aQh5+C6BcyLsol/IGbokgVkeJLECQikTHgwKr19tVRIW7lccFE/dDEGuhBMZ5OjKJDwosqowf20zIp0VkALWFkUhHJnGmwKIY9ncArV5EdpgsBBLpXsFCJ/wKQJmayBBZQqXqH+o4ZpLZIeLYfk2JDSJTuA6fHCNFOQSrPLQH+xIAijs5Q7dCEMmgEh2hE1oPE6cK7HX93RmASQdcgsgSE+uKlOkUWOQKpdWLyCRpMl9OFZi6MbL9E1kkTebLqQJTN0bhIZFFVNY7DebL6StYrIENQWQRtTiofIK1+7B5cSL7jIIQg2GIwTDAYBggFOMuswXPRd5zsFPIIeea32q4LkcQCjCHVY1fPH4fNi9OZAchJPqRiAbDAKNA4HY8jHwq8e+Vih72K0XkPXOPW8Eb90m0bb4kgRG/wu+PEAQhRoGA3x9hMAzGM7hWpOcP0fOH2K8UsV8x44T3PNUEx675kgS2xdwP70aBwGAYaLveVcfHKAhxdPBY2zUUkwQds1uTSALbAuLhXRAI9IfBg+GdTrq9AXKuo30lix0x7dbr7crJyV5H6wVnQALbMOKrUTzUSxNXHR+loqd9T6bmhkXmy3OtF5vBrP/DJoDj4Sikw+aUMoqEcxvtkXSHd0lzef0Bz492tV5DCSwyX55rvdgMpgtMogGG4yAUJDDLpCm8S5Lb/gijINSawo+ZL63tw6YKTDJ5zsBeDIchigWqRzRFfCVKa3iXJD1/iL2yvhaAhbwLvAcg7XWZmiowxlgDEuhnKOTIEvHwLp7J2zZu+yOtAkuD+XL6ChbKBuMMwQZ/eppCnSOp8G7dM6VNItT8e1DmSyEk6vV21cbky6kC++zk6fmbZgtBSAJblG0L77KCGswXmS8bpq8/M08qGfuRSflFfxBQ0W8MlXRQ4d28kiHCLkpgkfnyO9PXn6kcJmUDwBfDUbi1AlMr0WAYUningYKB2sTJ3DBL5svZKxhkjYF9uQ1hYjy8ix/UEnrJe/qPgGKexnQJjDFWgwSGo9Dk/Whl2YpwQh+cM5SK+juWxaKvY+0Xm8JMgTmhUwt5mFmBJV0RTiTLXnnH2JQe1xl7w17X3519dvL03MhF1bVnfePkZK/xptmCEBJBKFLbPsB0RTixPjmXaz3/uo+Xc6yZLx/eZUr8AIYXQZAOgakUOIV32YVzhmeHZaMz5rycA78/stJO+2GBMTQAvLCdqu/2+pGXiBIPWYZzhudHu0adzcBH86UNgT24LDGwGgBrB86jIETzbQcXrR6JK+PsFHI4flYxLi7ArvnyQYEJIWqAnUziYBig+bZD+6mMUyp6+O3RLp4f7VppfgP82nxp8toPfpy4cGshzGcShZD4+eKGsn4ZIudyuK6DYiGHnMuR91wrq9UsCvlxExzT5ssHfwMnJ3udN83WDYBdk+bLf112SVwpZqeQQ8Fz4UZCKniu0aTFKkzCxHFb+HNj1537CokaGF6YMl/6/RFlB1NC3nPvrEZ5z7EW5q1LrF991eh1573AtPmy073Vfg3iLpwz5D13Et6pUG+TsGW+nCsw0+bLnj80cp1tZefeHikL4V0STKIvw+bLuQIToahxzo2YL30KDRPjbmiX7fAuCThnE/Plq/rl6ecnhzUT150rsM9PDmvKfCmE3IpPuyyhwjvVC34Tw7ukUN4w7vAqgHQIDPhovtxmb1gaUOFdznUmmTz6wFscG+bLhdRC5kuz3A/v1NfEetgwXy62ghkyXzpb9mkcD+/UmRKFd/qwYb5c7GNR4Bwcf9Fd0ZGPQp5NPGSOJxrioR5hDhvmy4UE5sJthAjRH+hP1ZeKHrq9gfbr6CJ+jkThXfpQ7bRNmS8X+ssr8yUA7ebL/UoxEwKj8C6buA432q9+8Y9WQ+bLnOtgr7yDdooqOuIrEYV32UaZLyXMTL5cXGAMNRgyX+5XihPnsknSXhFOrI9p8+XCTw8Da0hII9YV5Xz9+eJGm8iyWBFOrE+sZCpdAhNC1BhnxtzNSmRXHX+tcJHCOyJObHuza6Jf/cICs2G+5Jzh6ZNHqJQLuOr46PnDmSn8bagIJ5IhZr6sQnO/+oUFFpkvrUy+zLnOZHC23x9BCInBMJgIicI7YhlMmi+X28FHky9tjpZVq1Kp6Fm5PpF9YiVTVd3XWirfLpk8B0Bzw4hMowQmmf6axKUExhhrADT5ksg2kxVMyi90X2spgYlw3MaNVjAiyyjzJQC8ql9qXcWWEphygSrzJUFkFbWKReZLbSxd8yQZ+xHYrLFGxPahhv9F5kttLC0wJqW1br8EkRSuG7Vxk+xM53WWX8EgG4C9fvUEkQSxfvVVnddZvixejA/maAUjsowp8+XSAnPhNgAYMV8ShE5UouN1/d2ZrmssLbCoOPIGoDCRWI5REMLvj+78ZzMbrcLEyHyp5xor/VTUr344ClMx+ZJIH8rPFwRiMnh+lpjynou9cgHlUsHoPZowX64msMh8aapfPZFe4nOx43Oyl32Pi1YPVx0fzw7LxkyusX716VrBTJoviXQhhMRNr4+eP0x8Cs4oEGi+7eDooGRkNVOpep3my5XiOzX5kvZg28VVx8c/f7nGu+sPWkdMXbR66Pb62t5fcd98qeMaKwlMtbuiFWw7EEKi+baDq45vLClxef0Bo0D/86XS9ZH5MnHWyVA0AUrXbzpqnK/pBkRCSFx1fO3Xmfgax+bLxFldYHJstaYwcbP512XX2iD6bm+gfRWLTb7Usg9bWWBkvtx8ur2+9XG+ugcyxsyXVR3vv3I+lDFWMzn5clsRQk7OkdSZUpycy1Es5LRk3UyEaPPo+UPslXe0vb9u8+XKAhOhaHDOKdGRIPFzJL8/QhCEc8+UbjEOpS6vP2CvvIP9SjGxe1n2PEsHupMqnDO4DkcQCi2TL1cWmJp8KYSkyZdLMoqEcxtVO6iD2nVQSYGeP8Szw8dr935My6xsE/s/1x0LjDv8FAlPvlzryJwmX87nfsmQ7j3NYBig+baD42eVtURmIkW+CCY+uAueqyZfVpN+77VUEZkvSWC4WzK0aHinCyEk3l6+x/Oj3ZUf0DSEhwCMlE3pNF+ut4JBNhjYVu3D4uHdKAgxGIbW0tgPMRgGaHdvE9uT2aJgQGCxfvXVpN97vbuPJl9u6lnYMhXhaeSq42OvvLPSKpZzOdIwQOqRgQazsSa6x/V6u3JystdJ6r3XEpjqV5/1ao4kKsLTyk2vv1Kaexya2R2EqI4gTKAmXwYIEh3Mt5bAon71NwB2dU++TAJ1pqTCOxXqbTKrniOVih7eXX/QcEeL82/RPAIT6Jp8uX6Am1LzpUo0DIZhJsO7pFj1A0QNa7f1AbRX3jHqNdRlvlxfYCkxXyqfUrc3SGXSIYvsV4r45eLG+HXLpTyePnlk9Jq6zJfJCEzata70/CEuWu+3coXSSbGQMz4ve6+8Y1xcwB3z5Ysk33ftmE6G4z6JtgR20XqPt5ddEpcmnj55hHIpr/06paKH42cVK+ICxnswlW1N0ny59gr22cnT8zfNlhXbykXrPbo9u5mutJPEQa0afpjU71pNIy14LvKeE432tT/W18s5iU++TOoUrwnguD8IjFV09PwhiWsBktoXHx08RqmYx7vr3lJHGPlIRCppkuYZ2UpgSU6+TEoNNQDHplYxISQuWu+NXCvrJBnelYoeSsUnk4Y38exsPhrjWyzk7gyezxI6zJeJ/AYkZI2BfWlqH3bT69OeawF2ooc9acZC27wRvjrMl4kcXDHGjE5codBwPpwzHB2UbN9GplDbmyTNl4kITISiAZgTGJ1zzefoYH1P2DaiwsSk+tUnIjDlAlXmS534G17atC5q5drEEM4EE+uKw6pJvF9ytU0SPwDUK9EmO4Ucnh/tGu/xvknEJl9Wk3i/5HbADA0AL0ym6olxxflO1PSG5gSsj+epJjjJmC8TU4IyX+pO1efc9BQUm0adI43PlsYHtdQLJVliky8TSdUnt9QYMl/mXAecs41O08dFFD+oJfQTM1/uJmG+TExgJs2XpaK3Ean6+yVDrutQmJcCkjRfJiawuPlyOArjnwSJUy4VMieweJnQTiFH4V2KUQJLwnyZbDYiMl8GodAqsGIhZ9UM+BD3w7sslgxtO2ofJiHX3ocl+5c3aL78zWEZ//zl2tpeLB7euZGIKLzbDGLmy+q675W8wAyZLzlneH60i58vbrSLLEsV4cT6JGm+TFRgMpQNxs31Scx7Lp4f7eKi1UukfCrn8kmigcK77UWZL4WQqNfb1ZOTvcbK75XgfVkxXyqRtbu3aHdvF17NVKKBwjtiGsobFjrhKdYwXyb+8az61Zus6OCcYb9SxH6leMerpHCi/RKFd8SiKIFJKU8BfLfq+ySuACZlAxb71W+qV4kwS1Lmy8TrjiRkDaDRskS2Scp8mbjATJsvCUIHSZkvExeYEzokMGIjSMJ8mbjAVEpTCElhIpFpJvOb1zBf6vF+RObLYEMmlBDbyaTcb4122noENjZfZn6sEbHdKPNl6gTGwCiTSGSeJMyXWgQmhKBEB5F57psvV3kPLQJz4ZLAiI1Apesj8+XSaBFYZLO+AUhkRLaZhInjfvXL/3yC93IXQ+ZLIvvE52KryaRqwIRyNOwUctgtFYy7wGMlU9WVfj65W7mLZPKcgVmffEmkh/hc7Pjg+Yd/RmAUDNHzh3h3/QH7lSL2yjvGhLau+VKbwBhjDUjcqWontgchJHr+YDIjO6n2DlcdH91eH88Oy0a8epPoa0XzpbYmg2ryJR02bxejIMRF6z3e/HSFi1YP7e5t4r1TRoHAzxc3RmYUcM4mq+Wr+uXSiQ5tAvvs5Ok5QGdh20S310fzbcdIxy8hpLHRwWoV4w6vLvuzWtvkSsZ+BKiiYxvo9vq4aPWMNiEaBQJXHV/7dSbWFbl8lymtAovMl5Sq33B6/hAXrZ6Va7e7txgFep+vSdHvCuZLvSsYmS83njSM8+35Q63vPzkLw/IlU3onKYhxV1Rawczh90fo9vq46vi46vhod2+1zlS76vjW5wToFlis9cXxsj+rNc/pwm2ECElgGoifI8UPamfBOUOp6GG/Uky06c9Nr5/Ye62KiWyi63AEocDr+rszlcBb6Oc03hNOTvYab5qtifkyttQSCyKERP+eiFZJewsh0e0N0O0NJh241sXvj6yvXgCMZRKDUCxtvtR/UifxAxheBAEJbB7xMiE/qnbQ8fBcdXwMhgGODh6vVRGRxtkAuvByzjjUXtIbpl9gUb96mnz5kVEQYjAM76xKpge79/whLq97ODp4bPS6WWVV86X2J56BNSTkVu7DkgrvdNHtDZD3XOyVd2zfylrsGKh1jZVMpUtgQoga4/pHy9rmoYrwNHPV8a1UqSeJiUazse3N7jL96rULTE2+3JQVbJWK8DQjhMRNr7/SKpaWedmmOjkX8i76gwABgioW7FevXWDR5MsmgGPdky+TJB7eBYFItCI8bfT84UoCMxGazaNcyhubNXDPfHm+0M9ou5s4Eg2w9Aosq+FdUqz6wZFzHeQ919oKzjnD4ZOSsevFSqaqi/6MEYEp82UarCvKpzROg4eZDu+SRAi50j5sr1ywUoeoBjCa3DvG+tUvnOgwIrA0mC+FkEvPENsm+sNgJed5uVTATW9gNHxW4jI9HHGygi3Rr97ILlWE4zZutlawwTBA8207FXVzaWWdhMVvDsvGEh7lUh7//tsnViaPrmK+NPJb+fzkcFJVb/oBHwwD/Hxxs1V7qlVYJ1HAOcNvNa4oO4Uc9itFnPx2b+3qk3VZ1nxp7GNATb40OZhPCGlkSHrWSSIbmHMdPD/anVTwr/YePBo4794ZPJ8mCp671ORLYwKzMfny8tqswzarJHWOxDnD0yePUCkXcNXx0fOHU3//PBrpW4hEpAbPZwE3CoWZZGcLvV7nzcSRkDUG9qWpio5REBrpDZF1OGfYLRUSfc+c60xqHEf3jjwKnpvpqpFYv/rqIq83dxRv2HzZ6dr3KWWB/UpR6wOfi1Yn9V+WxQUsb740JjAXbgMw1wCn59PqNY9S0ct8oa8NVKJjkcmXxgQWFUfeAGZ6dFDW8GHynktWlRVRYSLnfG6q3my1poSR8zCdPSg2gb3yDo6fVTIfrtliUtEBWZ33WrMCG5svqU+iJcqlPI6fVfD0ySPbt5JpljFfGj0ON2W+LFg45U8bec+9M5kk69m7NLGM+dLok2jKfKlKWrbhDCzn8sk5UvygltDHMuZLo3+Jz06enr9ptoyk6ouFnPZ+eaZRK5EbCYlWJXssar608VHXBHCsuwlOuVTIrMDuh3c5l6euZGjb8XLOOJcwx3xpXmCR+VJ3mFgqelbNgIugSoZUeJelkqFtZ9HJl8YFZtJ8eXRQQvNtR/t1FmHn3h6Jwrtss6j50rjAGGM1U+bL8WFqyajjNh7epbUinFifRc2XxgUmQtHgnBurSSxHhaxJiyzLFeHE+nDOJv3qX9UvT5Xn8T7GBfb5yWFN9atftQ/EspRLBeQ9F5fXH1aytscTDXSmRChcdyww7vBTAOkQGGDHfJn3XDw/2p2M95nmVbpv+FNfE8Q0YubL6qzXWHl6mJQ1GDZfKpRtQuH3R5QGJ1ZiEfOlnRUMssHAUtHtl/ZNxKrESqaqs15jp/dxZL7c9H71xGYTa6J7XK+3K9NeY0Vgps2XBKELJbIAwdTzMCsCM22+JAhdzDNf2huPEZkv07API4hVmWe+tCewyHw5HJLAiOwyyYLPMF9aExgDawC0ghGbgeQsPUkOYGy+BGgPRmSbeTWJ1gT22cnTc4BWMCLbzCuZsz0DtAlQup7YXGwLjMJEYqOxKjAJSal6ItPMWxysCowxRgIjMs3EmS/xw7TvWxWYCEUDIIER2UXIh1sDWhWYcoEq8yVBZA1VKCGZPJ/2fdtJjsnSSqsYkUVUbxnGxoUT97EvMDZu2kipeiKLqOfWCZ3zad+3LjAJ2QAoVU9kj9gUn+as9tnWBUbmSyKr+LcTgc0chm5dYC5cGmlEZBK1gkkh0yuwk5O9DiLzJSU6iKwQ60rWVHW107AuMAAfJ19SmEhkhE63DwBgYN8+9Lp0CIzMl0SG6PlDtRh0ueAvH3ptugRGISKRcoSQk9VLQn4TbXFmkgqByXCcqieBEWmn2xuo1etnV7gPhodASgSmNom0ByPSTH8QoPN+vHqB4b/mrV5ASgQWQeZLIrUIIdFq++rL7z/95GBmaj5OmgRGmUQitVy0eurZbDrC+XrRn0uNwMh8SaSVVttXz2VXCPHVIqGhIjUCI/MlkUZabR89fwgAkEJ+OWvQ3ixSM/zKCZ1ayEMSGJEKhJC4vP7wMSfA8IeHKjZmkZoVTFUjCyFpH0ZYZTgKcdHqKXF1wfC7Tz85eLnKe6VGYAAm5stJnwOCMEy3N8BFqxffc71YNGM4jXQJjMyXhCX6gwBvL9/j+uZ2XMQr8YMjnONl91z3Sc0eDAAYWE1C/p5CRMIU6vA49qHeZWB/+Y/q/twqjUVIlcCEEDXG0zFalthchJDw+yN0e4P7z9r/OML50zJp+HmkSmAu3FqIcSZRCDm37zdBLEIQCgxHIYbDEH5/NO0D/H8c4fx1lu1/HVL3BL/+6arGpPzicP8RDSgnlqY/CDAchR9FFX1Y30cy9iOXeMkFf5nkinWfVK1gAMCkPAfwhX87IoERM5mIaBiiPwwQBOLh4x2JH8BQA0PNCZ3vdIoqTuoEJoR4yTn/Y6xjD7HFCCExHIXoD4I7q9IsJGM/MikbErLGGKs5oVPTEfotSupCRAB402w1ABwf7BVRKnq2b4cwxH0RzQrvIm4gUZNMnjPGGjKUjVUqLXSTuhUMGPc5kJDfdHsDEtgGEg/vlJAWCO8aDKwmhKi5cGumQrx1SeUKVq+3KyEPmwDKRwelj4OmiUxxP7wLQjGviKAJoKbCOxGKxroHvbZJpcAA4HXz3V8Z2F+8nINnh49t3w4xh4mIAoH+MFgovFNJh7SGd0mQWoHFV7Enuzsol/K2b4nA3TOleDp8JlF4JyEbEDjPUniXBKkVGAD8o3n1Jwn5DecMzw4fw3XSVTq5yajwLr5H2rbwLglSLTDg48FzIe/i6KBk+3Y2komIlgzvGFhDCFHb1PAuCVIvsHq9XQ15+COAcrmUx5PdHdu3lFkme6R71Q6ziM6UarHwrmHzTCmLpF5gAPDmp9bXkPg7ANDZ2Hzi4Z0S0dzwTqIRnSlReJcgmRAYALxptr4F8EeARBbnfni3aMkQhXdmyIzAAOBNs/USwO+B7RPZiuFdQ0LWKLyzR6YEBtwV2abuyRatCI+Ih3cNEYoahXfpIXMCA+6Gi4W8i4O9YiZT+KtWhKvwbtvOlLJIJgUGTBIf/w2gzDlD5XEhtYfR8fAuixXhxOpkVmAA8Kp+ecoc5yWT8gsA8HIOnuzuWK1d3MSKcGJ1Mi0wRVTx8TcAZWAcNpaKntYkyDZVhBOrsxECA8a1iwEP/sTA/gzgMQBwzlAs5FDcyaHguSv1+Fi3IpzCu+1mYwSmiAntawDH8e95OQdezoHr8Jlh5BLZu62pCCdWZ+MEFudV/fKUc/61ZOxM7dNWYssrwonV2WiBxanX25UAwSk4zhhYBRKnU18YCYlKhgiCIAiCIAiCIAgiW/w/zQ1m2VyA5iUAAAAASUVORK5CYII=",
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
var markers = [];
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

var globalAxios = axios$1.create({
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});
var axios = globalAxios;

function useAxios() {
    return axios;
}

function useApplication() {
    return useContext(AppContext);
}

function _arrayLikeToArray$O(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$G(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$G(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$G() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$G(arr, i) {
    return _arrayWithHoles$G(arr) || _iterableToArrayLimit$G(arr, i) || _unsupportedIterableToArray$O(arr, i) || _nonIterableRest$G();
}
function _unsupportedIterableToArray$O(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$O(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$O(o, minLen);
}
function useMemoDeepCompare(callback) {
    var dependencies = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], comparator = arguments.length > 2 ? arguments[2] : void 0, debug = arguments.length > 3 ? arguments[3] : void 0;
    var previousValue = useRef(undefined);
    var previousRef = useRef([]);
    var previous = previousRef.current;
    return useMemo(function() {
        var isEqual = comparator ? comparator(previous, dependencies) : // finding the first non matching item
        !dependencies.find(function(d, index) {
            return !_.isEqual(d, previous[index]);
        });
        if (!isEqual) {
            if (debug) {
                var updatedProps = Object.entries(dependencies).reduce(function(acc, param) {
                    var _param = _slicedToArray$G(param, 2), key = _param[0], value = _param[1];
                    if (!_.isEqual(previous[key], value)) {
                        acc[key] = {
                            from: previous[key],
                            to: value
                        };
                    }
                    return acc;
                }, {});
                if (Object.keys(updatedProps).length > 0) {
                    console.info("".concat(debug, ":"), updatedProps);
                }
            }
            previousRef.current = dependencies;
            previousValue.current = callback();
        }
        return previousValue.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        dependencies,
        comparator
    ]);
}

function _arrayLikeToArray$N(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$F(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$F(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$F() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$F(arr, i) {
    return _arrayWithHoles$F(arr) || _iterableToArrayLimit$F(arr, i) || _unsupportedIterableToArray$N(arr, i) || _nonIterableRest$F();
}
function _unsupportedIterableToArray$N(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$N(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$N(o, minLen);
}
function useObservable(observable, setter) {
    var deps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], debug = arguments.length > 3 ? arguments[3] : void 0;
    useEffect(function() {
        var subscription = observable.subscribe(function(result) {
            setter(function(state) {
                if (!_.isEqual(state, result)) {
                    if (debug) {
                        var updatedProps = Object.entries(result).reduce(function(acc, param) {
                            var _param = _slicedToArray$F(param, 2), key = _param[0], value = _param[1];
                            if (!_.isEqual(state[key], value)) {
                                acc[key] = {
                                    from: state[key],
                                    to: value
                                };
                            }
                            return acc;
                        }, {});
                        if (Object.keys(updatedProps).length > 0) {
                            console.log("useObservable - ".concat(debug, ":"), updatedProps);
                        }
                    }
                    return result;
                }
                if (debug) {
                    console.log("useObservable - ".concat(debug, ": No changes"));
                }
                return state;
            });
        });
        return function() {
            subscription.unsubscribe();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

function _arrayLikeToArray$M(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$E(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$E(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$E() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$E(arr, i) {
    return _arrayWithHoles$E(arr) || _iterableToArrayLimit$E(arr, i) || _unsupportedIterableToArray$M(arr, i) || _nonIterableRest$E();
}
function _unsupportedIterableToArray$M(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$M(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$M(o, minLen);
}
function useApplicationRepository(repositoryName, dataDefinition) {
    var _useContext = useContext(AppContext), _useContext_repositories = _useContext.repositories, repositories = _useContext_repositories === void 0 ? {} : _useContext_repositories;
    var _useMemoDeepCompare = useMemoDeepCompare(function() {
        var repository = repositories[repositoryName];
        if (!repository) {
            var repositoryNames = Object.keys(repositories).join(", ");
            throw new Error("The application repository '".concat(repositoryName, "' does not exist in this application.  Try one of [").concat(repositoryNames, "]"));
        }
        var dataRepository = repository.getDefinition(dataDefinition);
        if (!dataRepository) {
            var repositoryNames1 = Object.keys(repository.getDefinitions()).join(", ");
            throw new Error("The data definition for '".concat(dataDefinition, "' does not exist in the repository '").concat(repositoryName, "'.  Try one of [").concat(repositoryNames1, "]"));
        }
        return {
            useRepository: dataRepository.useRepository,
            repositoryDescriptor: dataRepository.getDescriptor()
        };
    }, [
        repositories,
        repositoryName,
        dataDefinition
    ]), useRepository = _useMemoDeepCompare.useRepository, repositoryDescriptor = _useMemoDeepCompare.repositoryDescriptor;
    var _useRepository = _slicedToArray$E(useRepository([
        repositories,
        repositoryName,
        dataDefinition
    ]), 2), repo = _useRepository[0], data = _useRepository[1];
    var _useState = _slicedToArray$E(useState(data), 2), repoData = _useState[0], setRepoData = _useState[1];
    useEffect(function() {
        setRepoData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        repo
    ]);
    useObservable((repo === null || repo === void 0 ? void 0 : repo.getObservable()) || of(data), setRepoData);
    return {
        repository: repo,
        repositoryDescriptor: repositoryDescriptor,
        dataState: repoData
    };
}

function useAuthContext() {
    var getAuthContext = useContext(AppContext).getAuthContext;
    var auth = getAuthContext().auth;
    return auth;
}

/* eslint-disable react-hooks/exhaustive-deps */ function _arrayLikeToArray$L(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles$g(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$L(arr);
}
function _iterableToArray$g(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread$g() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$g(arr) {
    return _arrayWithoutHoles$g(arr) || _iterableToArray$g(arr) || _unsupportedIterableToArray$L(arr) || _nonIterableSpread$g();
}
function _unsupportedIterableToArray$L(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$L(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$L(o, minLen);
}
function usePrevious(value) {
    var deps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var ref = useRef();
    useEffect(function() {
        ref.current = value;
    }, [
        value
    ].concat(_toConsumableArray$g(deps)));
    return ref.current;
}

function _arrayLikeToArray$K(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$D(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles$f(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$K(arr);
}
function _iterableToArray$f(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit$D(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$D() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$f() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$D(arr, i) {
    return _arrayWithHoles$D(arr) || _iterableToArrayLimit$D(arr, i) || _unsupportedIterableToArray$K(arr, i) || _nonIterableRest$D();
}
function _toConsumableArray$f(arr) {
    return _arrayWithoutHoles$f(arr) || _iterableToArray$f(arr) || _unsupportedIterableToArray$K(arr) || _nonIterableSpread$f();
}
function _unsupportedIterableToArray$K(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$K(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$K(o, minLen);
}
function useBreakpoint(func, breakpoint) {
    var deps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var _useState = _slicedToArray$D(useState(window.innerWidth), 2), width = _useState[0], setWidth = _useState[1];
    var previousWidth = usePrevious(width);
    useEffect(function() {
        var handleWindowResize = function() {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleWindowResize);
        return function() {
            window.removeEventListener("resize", handleWindowResize);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, _toConsumableArray$f(deps).concat([
        breakpoint
    ]));
    useEffect(function() {
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
    }, [
        width
    ]);
    useEffect(function() {
        // As the actual breakpoint has changed we need to trigger
        func(width > breakpoint, width);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        breakpoint
    ]);
}

function useCurrentPath(routes) {
    var location = useLocation();
    var matchedRoutes = matchRoutes(routes, location);
    return [
        matchedRoutes && matchedRoutes.length > 0 ? matchedRoutes[0].pathname : location.pathname,
        matchedRoutes === null || matchedRoutes === void 0 ? void 0 : matchedRoutes.map(function(r) {
            return r.route;
        })
    ];
}

var _typeof$1 = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
/**
 * https://github.com/kentcdodds/use-deep-compare-effect
 */ function checkDeps(deps) {
    if (!deps || !deps.length) {
        throw new Error("useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.");
    }
    if (deps.every(isPrimitive)) {
        throw new Error("useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.");
    }
}
function isPrimitive(val) {
    return val == null || /^[sbn]/.test(typeof val === "undefined" ? "undefined" : _typeof$1(val));
}
function useDeepCompareMemoize(value) {
    var ref = React.useRef();
    if (!_.isEqual(value, ref.current)) {
        ref.current = value;
    }
    return ref.current;
}
function useDeepCompareEffect(callback, dependencies) {
    if (process.env["NODE_ENV"] !== "production") {
        checkDeps(dependencies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(callback, useDeepCompareMemoize(dependencies));
}

function useDebounce(func, wait, options) {
    return useRef(_.debounce(func, wait, options)).current;
}

// https://dev.to/ag-grid/react-18-avoiding-use-effect-getting-called-twice-4i9e
function _arrayLikeToArray$J(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$C(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$C(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$C() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$C(arr, i) {
    return _arrayWithHoles$C(arr) || _iterableToArrayLimit$C(arr, i) || _unsupportedIterableToArray$J(arr, i) || _nonIterableRest$C();
}
function _unsupportedIterableToArray$J(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$J(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$J(o, minLen);
}
function useEffectOnce(effect) {
    var deps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var destroyFunc = useRef();
    var effectCalled = useRef(false);
    var renderAfterCalled = useRef(false);
    var _useState = _slicedToArray$C(useState(0), 2); _useState[0]; var setVal = _useState[1];
    if (effectCalled.current) {
        renderAfterCalled.current = true;
    }
    useEffect(function() {
        // only execute the effect first time around
        if (!effectCalled.current) {
            destroyFunc.current = effect();
            effectCalled.current = true;
        }
        // this forces one render after the effect is run
        setVal(function(val) {
            return val + 1;
        });
        return function() {
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
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
var useIsomorphicLayoutEffect$1 = useIsomorphicLayoutEffect;

// FROM : https://usehooks-ts.com/react-hook/use-event-listener
function useEventListener(eventName, handler, element, options) {
    // Create a ref that stores handler
    var savedHandler = useRef(handler);
    useIsomorphicLayoutEffect$1(function() {
        savedHandler.current = handler;
    }, [
        handler
    ]);
    useEffect(function() {
        // Define the listening target
        var targetElement = (element === null || element === void 0 ? void 0 : element.current) || window;
        if (!(targetElement && targetElement.addEventListener)) {
            return;
        }
        // Create event listener that calls handler function stored in ref
        var eventListener = function(event) {
            return savedHandler.current(event);
        };
        targetElement.addEventListener(eventName, eventListener, options);
        // Remove event listener on cleanup
        return function() {
            targetElement.removeEventListener(eventName, eventListener);
        };
    }, [
        eventName,
        element,
        options
    ]);
}

function _arrayLikeToArray$I(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$B(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$R(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$B(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$B() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$N(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$R(target, key, source[key]);
        });
    }
    return target;
}
function _slicedToArray$B(arr, i) {
    return _arrayWithHoles$B(arr) || _iterableToArrayLimit$B(arr, i) || _unsupportedIterableToArray$I(arr, i) || _nonIterableRest$B();
}
function _unsupportedIterableToArray$I(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$I(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$I(o, minLen);
}
function useForm(initialState, validate, onSubmit) {
    var _useState = _slicedToArray$B(useState(initialState), 2), form = _useState[0], setForm = _useState[1];
    var _useState1 = _slicedToArray$B(useState({}), 2), errors = _useState1[0], setErrors = _useState1[1];
    var handleChange = useCallback(function(event, newValue) {
        if (event) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var target = event.target;
            event.persist && event.persist();
            var value = target.value;
            // Checkboxes and dates are handled differently
            if (target.type === "checkbox") {
                value = target.checked;
            } else if (target.type === "datetime-local" || target.type === "date") {
                value = value && value.length > 0 ? new Date(value).getTime() : null;
            }
            var validationForm = form;
            var fieldName = target.name;
            setForm(function(_form) {
                // @ts-expect-error setIn is a mixin added
                validationForm = _.setIn(_objectSpread$N({}, _form), fieldName, value);
                return validationForm;
            });
            setErrors(function(previousErrors) {
                return validate ? validate(validationForm, fieldName, previousErrors) : {};
            });
        } else if (newValue) {
            var validationForm1 = form;
            var fieldNames = [];
            Object.keys(newValue).forEach(function(key) {
                fieldNames.push(key);
                setForm(function(_form) {
                    // @ts-expect-error setIn is a mixin added
                    validationForm1 = _.setIn(_objectSpread$N({}, _form), key, newValue[key]);
                    return validationForm1;
                });
                setErrors(function(previousErrors) {
                    return validate ? validate(validationForm1, fieldNames, previousErrors) : {};
                });
            });
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    var resetForm = useCallback(function() {
        if (!_.isEqual(initialState, form)) {
            setForm(initialState);
            setErrors({});
        }
    }, [
        form,
        initialState
    ]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var setInForm = useCallback(function(name, value) {
        var validationForm = form;
        setForm(function(_form) {
            // @ts-expect-error setIn is a mixin added
            validationForm = _.setIn(_form, name, value);
            return validationForm;
        });
        setErrors(function(previousErrors) {
            return validate ? validate(validationForm, name, previousErrors) : {};
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var handleSubmit = useCallback(function(event, afterSubmit, callback) {
        if (event) {
            event.preventDefault();
        }
        if (onSubmit) {
            onSubmit(form);
        }
        if (afterSubmit) {
            afterSubmit(event, callback);
        }
    }, [
        onSubmit,
        form
    ]);
    var checkIsValid = useCallback(function(fields) {
        return validate ? Object.entries(validate(form, fields)).flatMap(function(param) {
            var _param = _slicedToArray$B(param, 2); _param[0]; var entry = _param[1];
            return entry;
        }).length === 0 : false;
    }, [
        form,
        validate
    ]);
    return {
        form: form,
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        resetForm: resetForm,
        setForm: setForm,
        setInForm: setInForm,
        modified: !_.isEqual(form, initialState),
        errors: errors,
        validate: validate,
        isValid: checkIsValid
    };
}

// based on https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
// updated the watch parameters on the useCallback for flexibility
function useHookWithRefCallback(callback) {
    var deps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var ref = useRef(null);
    var setRef = useCallback(function(node) {
        if (node) {
            callback && callback(node);
        }
        ref.current = node;
        setRef.current = node;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    return [
        setRef
    ];
}

function _arrayLikeToArray$H(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$A(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles$e(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$H(arr);
}
function _iterableToArray$e(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit$A(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$A() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$e() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$A(arr, i) {
    return _arrayWithHoles$A(arr) || _iterableToArrayLimit$A(arr, i) || _unsupportedIterableToArray$H(arr, i) || _nonIterableRest$A();
}
function _toArray(arr) {
    return _arrayWithHoles$A(arr) || _iterableToArray$e(arr) || _unsupportedIterableToArray$H(arr) || _nonIterableRest$A();
}
function _toConsumableArray$e(arr) {
    return _arrayWithoutHoles$e(arr) || _iterableToArray$e(arr) || _unsupportedIterableToArray$H(arr) || _nonIterableSpread$e();
}
function _unsupportedIterableToArray$H(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$H(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$H(o, minLen);
}
var LocalizationContext = /*#__PURE__*/ createContext({
    t: function t() {
        for(var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++){
            params[_key] = arguments[_key];
        }
        var _params = _toArray(params), text = _params[0], rest = _params.slice(1);
        if (!text) {
            return text;
        }
        return formatString.apply(void 0, [
            text
        ].concat(_toConsumableArray$e(rest)));
    },
    setVocabulary: function() {
    // No Default Action
    },
    isRTL: function() {
        return false;
    },
    onInvalidTranslation: function() {
    // No Default Action
    },
    loadVocabularies: function() {
        return [];
    }
});
function LocalizationProvider(param) {
    var children = param.children, localizationStrategy = param.localizationStrategy;
    var _strategy_current;
    var strategy = useRef(new BasicI18NStrategy());
    useEffect(function() {
        if (localizationStrategy) {
            strategy.current = localizationStrategy;
        } else {
            strategy.current = new BasicI18NStrategy();
        }
    }, [
        localizationStrategy
    ]);
    var _useState = _slicedToArray$A(useState(null), 2), availableVocabularies = _useState[0], setAvailableVocabularies = _useState[1];
    useEffect(function() {
        if (!availableVocabularies) {
            setAvailableVocabularies(strategy.current.loadVocabularies());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ jsxs(LocalizationContext.Provider, {
        value: {
            t: function() {
                for(var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++){
                    params[_key] = arguments[_key];
                }
                return (_strategy_current = strategy.current).t.apply(_strategy_current, _toConsumableArray$e(params));
            },
            setVocabulary: function(name, vocabularyDefinition) {
                return strategy.current.setVocabulary(name, vocabularyDefinition);
            },
            isRTL: function() {
                return strategy.current.isRTL();
            },
            onInvalidTranslation: function(text, vocabulary) {
                return strategy.current.onInvalidTranslation(text, vocabulary);
            },
            loadVocabularies: function() {
                return strategy.current.loadVocabularies();
            }
        },
        children: [
            !availableVocabularies && /*#__PURE__*/ jsx(Loader, {}),
            availableVocabularies && children
        ]
    });
}

function _arrayLikeToArray$G(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$z(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles$d(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$G(arr);
}
function _iterableToArray$d(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit$z(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$z() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$d() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$z(arr, i) {
    return _arrayWithHoles$z(arr) || _iterableToArrayLimit$z(arr, i) || _unsupportedIterableToArray$G(arr, i) || _nonIterableRest$z();
}
function _toConsumableArray$d(arr) {
    return _arrayWithoutHoles$d(arr) || _iterableToArray$d(arr) || _unsupportedIterableToArray$G(arr) || _nonIterableSpread$d();
}
function _unsupportedIterableToArray$G(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$G(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$G(o, minLen);
}
function useLocalization(text) {
    if (!text) {
        text = "";
    }
    var params = typeof text === "string" ? [
        text
    ] : text;
    var translationText = params && params[0] || "";
    var localization = useContext(LocalizationContext);
    var _useState = _slicedToArray$z(useState(translationText), 2), translation = _useState[0], setTranslation = _useState[1];
    useEffect(function() {
        var _localization;
        setTranslation((_localization = localization).t.apply(_localization, _toConsumableArray$d(params)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        text,
        localization
    ]);
    return translation;
}

// FROM: https://github.com/juliencrn/usehooks-ts/blob/master/src/useEventCallback/useEventCallback.ts
function _arrayLikeToArray$F(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles$c(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$F(arr);
}
function _iterableToArray$c(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread$c() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$c(arr) {
    return _arrayWithoutHoles$c(arr) || _iterableToArray$c(arr) || _unsupportedIterableToArray$F(arr) || _nonIterableSpread$c();
}
function _unsupportedIterableToArray$F(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$F(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$F(o, minLen);
}
function useEventCallback(fn) {
    var _ref;
    var ref = useRef(function() {
        throw new Error("Cannot call an event handler while rendering.");
    });
    useIsomorphicLayoutEffect$1(function() {
        ref.current = fn;
    }, [
        fn
    ]);
    return useCallback(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return (_ref = ref).current.apply(_ref, _toConsumableArray$c(args));
    }, [
        ref
    ]);
}

// FROM: https://usehooks-ts.com/react-hook/use-local-storage
function _arrayLikeToArray$E(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$y(arr) {
    if (Array.isArray(arr)) return arr;
}
function _instanceof$1(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArrayLimit$y(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$y() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$y(arr, i) {
    return _arrayWithHoles$y(arr) || _iterableToArrayLimit$y(arr, i) || _unsupportedIterableToArray$E(arr, i) || _nonIterableRest$y();
}
function _unsupportedIterableToArray$E(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$E(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$E(o, minLen);
}
function useLocalStorage(key, initialValue) {
    // Get from local storage then
    // parse stored json or return initialValue
    var readValue = useCallback(function() {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            var item = window.localStorage.getItem(key);
            return item ? parseJSON$1(item) : initialValue;
        } catch (error) {
            console.warn("Error reading localStorage key “".concat(key, "”:"), error);
            return initialValue;
        }
    }, [
        initialValue,
        key
    ]);
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    var _useState = _slicedToArray$y(useState(readValue), 2), storedValue = _useState[0], setStoredValue = _useState[1];
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    var setValue = useEventCallback(function(value) {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window === "undefined") {
            console.warn("Tried setting localStorage key “".concat(key, "” even though environment is not a client"));
        }
        try {
            // Allow value to be a function so we have the same API as useState
            var newValue = _instanceof$1(value, Function) ? value(storedValue) : value;
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(newValue));
            // Save state
            setStoredValue(newValue);
            // We dispatch a custom event so every useLocalStorage hook are notified
            window.dispatchEvent(new Event("local-storage"));
        } catch (error) {
            console.warn("Error setting localStorage key “".concat(key, "”:"), error);
        }
    });
    useEffect(function() {
        setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var handleStorageChange = useCallback(function(event) {
        if ((event === null || event === void 0 ? void 0 : event.key) && event.key !== key) {
            return;
        }
        setStoredValue(readValue());
    }, [
        key,
        readValue
    ]);
    // this only works for other documents, not the current one
    useEventListener("storage", handleStorageChange);
    // this is a custom event, triggered in writeValueToLocalStorage
    // See: useLocalStorage()
    useEventListener("local-storage", handleStorageChange);
    return [
        storedValue,
        setValue
    ];
}
// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON$1(value) {
    try {
        return value === "undefined" ? undefined : JSON.parse(value !== null && value !== void 0 ? value : "");
    } catch (e) {
        console.log("parsing error on", {
            value: value
        });
        return undefined;
    }
}

function _arrayLikeToArray$D(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$x(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$x(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$x() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$x(arr, i) {
    return _arrayWithHoles$x(arr) || _iterableToArrayLimit$x(arr, i) || _unsupportedIterableToArray$D(arr, i) || _nonIterableRest$x();
}
function _unsupportedIterableToArray$D(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$D(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$D(o, minLen);
}
var ORIGIN = Object.freeze({
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
var useMouse = function(ref, options) {
    var _useState = _slicedToArray$x(useState(ORIGIN), 2), position = _useState[0], setPosition = _useState[1];
    var handleMouseMove = _.debounce(function(e) {
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
    useEffect(function() {
        if (ref && ref.current) {
            var element = ref.current;
            element.addEventListener("mousemove", handleMouseMove);
            return function() {
                element.removeEventListener("mousemove", handleMouseMove);
            };
        }
        return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ref,
        options
    ]);
    return position;
};
var useMouse$1 = useMouse;

function _arrayLikeToArray$C(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$w(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles$b(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$C(arr);
}
function _iterableToArray$b(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit$w(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$w() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$b() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$w(arr, i) {
    return _arrayWithHoles$w(arr) || _iterableToArrayLimit$w(arr, i) || _unsupportedIterableToArray$C(arr, i) || _nonIterableRest$w();
}
function _toConsumableArray$b(arr) {
    return _arrayWithoutHoles$b(arr) || _iterableToArray$b(arr) || _unsupportedIterableToArray$C(arr) || _nonIterableSpread$b();
}
function _unsupportedIterableToArray$C(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$C(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$C(o, minLen);
}
function useRepository(repository) {
    var deps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], debug = arguments.length > 2 ? arguments[2] : void 0;
    var _useState = _slicedToArray$w(useState(repository.getState()), 2), data = _useState[0], setData = _useState[1];
    // Note the repository is a mutable object so comparisons directly wont work.  We check the URL instead
    var repoURL = repository.getBaseURL();
    var memoisedRepo = useMemo(function() {
        return repository;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        repoURL
    ]);
    useEffect(function() {
        setData(memoisedRepo.getState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        repoURL
    ]);
    if (debug) {
        debug = "useRepository - ".concat(debug, ":").concat(memoisedRepo.getBaseURL());
    }
    useEffect(function() {
        if (debug) {
            console.log("".concat(debug, ": Subscribe"));
        }
        var observable = memoisedRepo.getObservable();
        var subscription = observable.subscribe(function(result) {
            setData(function(state) {
                if (!_.isEqual(state, result)) {
                    if (debug) {
                        var updatedProps = Object.entries(result).reduce(function(acc, param) {
                            var _param = _slicedToArray$w(param, 2), key = _param[0], value = _param[1];
                            if (!_.isEqual(state[key], value)) {
                                acc[key] = {
                                    from: state[key],
                                    to: value
                                };
                            }
                            return acc;
                        }, {});
                        if (Object.keys(updatedProps).length > 0) {
                            console.log("".concat(debug, ":"), updatedProps);
                        }
                    }
                    return result;
                }
                if (debug) {
                    console.log("".concat(debug, ": No changes"));
                }
                return state;
            });
        });
        return function() {
            if (debug) {
                console.log("".concat(debug, ": Unsubscribe"));
            }
            subscription.unsubscribe();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, _toConsumableArray$b(deps));
    return [
        memoisedRepo,
        data
    ];
}

function _arrayLikeToArray$B(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$v(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$v(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$v() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$v(arr, i) {
    return _arrayWithHoles$v(arr) || _iterableToArrayLimit$v(arr, i) || _unsupportedIterableToArray$B(arr, i) || _nonIterableRest$v();
}
function _unsupportedIterableToArray$B(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$B(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$B(o, minLen);
}
function useObservableRepository(props) {
    var deps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var repository = useMemo(function() {
        return new DataRepository(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        deps
    ]);
    // TODO: Populate with initial state;
    var _useState = _slicedToArray$v(useState(repository.getState()), 2), data = _useState[0], setData = _useState[1];
    useIsomorphicLayoutEffect$1(function() {
        var subscription = repository.getObservable().subscribe(function(result) {
            setData(result);
        });
        return function() {
            subscription.unsubscribe();
        };
    }, deps);
    return [
        repository,
        data
    ];
}

function _arrayLikeToArray$A(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$u(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$u(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$u() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$u(arr, i) {
    return _arrayWithHoles$u(arr) || _iterableToArrayLimit$u(arr, i) || _unsupportedIterableToArray$A(arr, i) || _nonIterableRest$u();
}
function _unsupportedIterableToArray$A(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$A(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$A(o, minLen);
}
function useScript(src) {
    var _useState = _slicedToArray$u(useState(src ? "loading" : "idle"), 2), status = _useState[0], setStatus = _useState[1];
    useEffect(function() {
        if (!src) {
            setStatus("idle");
            return;
        }
        // Check if it already exists
        var script = document.querySelector('script[src="'.concat(src, '"]'));
        if (!script) {
            // Does not exist so create it
            script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.setAttribute("data_status", "loading");
            document.body.appendChild(script);
            // Store the status so we can read from other instances of the hook
            var setAttribute = function(event) {
                script === null || script === void 0 ? void 0 : script.setAttribute("data-status", event.type === "load" ? "ready" : "error");
            };
            script.addEventListener("load", setAttribute);
            script.addEventListener("error", setAttribute);
        } else {
            // Exists so get the status
            setStatus(script.getAttribute("data-status"));
        }
        var setState = function(event) {
            setStatus(event.type === "load" ? "ready" : "error");
        };
        script.addEventListener("load", setState);
        script.addEventListener("error", setState);
        return function() {
            if (script) {
                script.removeEventListener("load", setState);
                script.removeEventListener("error", setState);
            }
        };
    }, [
        src
    ]);
    return status;
}

function _arrayLikeToArray$z(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$t(arr) {
    if (Array.isArray(arr)) return arr;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArrayLimit$t(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$t() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$t(arr, i) {
    return _arrayWithHoles$t(arr) || _iterableToArrayLimit$t(arr, i) || _unsupportedIterableToArray$z(arr, i) || _nonIterableRest$t();
}
function _unsupportedIterableToArray$z(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$z(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$z(o, minLen);
}
function useSessionStorage(key, initialValue) {
    // Get from session storage then
    // parse stored json or return initialValue
    var readValue = useCallback(function() {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            var item = window.sessionStorage.getItem(key);
            return item ? parseJSON(item) : initialValue;
        } catch (error) {
            console.warn("Error reading sessionStorage key “".concat(key, "”:"), error);
            return initialValue;
        }
    }, [
        initialValue,
        key
    ]);
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    var _useState = _slicedToArray$t(useState(readValue), 2), storedValue = _useState[0], setStoredValue = _useState[1];
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to sessionStorage.
    var setValue = useEventCallback(function(value) {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window == "undefined") {
            console.warn("Tried setting sessionStorage key “".concat(key, "” even though environment is not a client"));
        }
        try {
            // Allow value to be a function so we have the same API as useState
            var newValue = _instanceof(value, Function) ? value(storedValue) : value;
            // Save to session storage
            window.sessionStorage.setItem(key, JSON.stringify(newValue));
            // Save state
            setStoredValue(newValue);
            // We dispatch a custom event so every useSessionStorage hook are notified
            window.dispatchEvent(new Event("session-storage"));
        } catch (error) {
            console.warn("Error setting sessionStorage key “".concat(key, "”:"), error);
        }
    });
    useEffect(function() {
        setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var handleStorageChange = useCallback(function(event) {
        if ((event === null || event === void 0 ? void 0 : event.key) && event.key !== key) {
            return;
        }
        setStoredValue(readValue());
    }, [
        key,
        readValue
    ]);
    // this only works for other documents, not the current one
    useEventListener("storage", handleStorageChange);
    // this is a custom event, triggered in writeValueTosessionStorage
    // See: useSessionStorage()
    useEventListener("session-storage", handleStorageChange);
    return [
        storedValue,
        setValue
    ];
}
// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON(value) {
    try {
        return value === "undefined" ? undefined : JSON.parse(value !== null && value !== void 0 ? value : "");
    } catch (e) {
        console.log("parsing error on", {
            value: value
        });
        return undefined;
    }
}

function useTraceProps(props) {
    var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    useMemoDeepCompare(function() {
    // Nothing to do, handled by the deep compare
    }, props, undefined, prefix);
}

function _arrayLikeToArray$y(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$s(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$Q(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$s(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$s() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$M(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$Q(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$F(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$F(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$F(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray$s(arr, i) {
    return _arrayWithHoles$s(arr) || _iterableToArrayLimit$s(arr, i) || _unsupportedIterableToArray$y(arr, i) || _nonIterableRest$s();
}
function _unsupportedIterableToArray$y(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$y(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$y(o, minLen);
}
function useWebsockets(host, namespace, events) {
    var emitWSEvent = function emitWSEvent(event, payload) {
        socket.current && socket.current.emit(event, _objectSpreadProps$F(_objectSpread$M({}, payload), {
            socketID: socketID,
            timestamp: Date.now()
        }));
    };
    var _socket_current;
    var socket = useRef(null);
    var _useState = _slicedToArray$s(useState(null), 2), socketID = _useState[0], setSocketID = _useState[1];
    var _useState1 = _slicedToArray$s(useState(((_socket_current = socket.current) === null || _socket_current === void 0 ? void 0 : _socket_current.connected) || false), 2), connected = _useState1[0], setConnected = _useState1[1];
    var _useState2 = _slicedToArray$s(useState(null), 2), error = _useState2[0], setError = _useState2[1];
    useEffect(function() {
        if (socket.current) {
            Object.keys(events).forEach(function(e) {
                var _socket_current;
                return (_socket_current = socket.current) === null || _socket_current === void 0 ? void 0 : _socket_current.off(e);
            });
            socket.current.close();
        }
        if (host) {
            var ws = io(host + "/".concat(namespace), {
                autoConnect: false,
                transports: [
                    "websocket"
                ]
            });
            ws.on("connect", function() {
                setConnected(true);
                setSocketID(ws.id);
                setError(null);
            });
            ws.on("disconnect", function(value) {
                setConnected(false);
                setError(null);
                setSocketID(null);
                ws.close();
            });
            ws.on("connect_error", function(err) {
                setError(err.message);
                setConnected(false);
                setSocketID(null);
                ws.close();
            });
            ws.on("error", function(err) {
                setError(err.message);
            });
            Object.keys(events).forEach(function(e) {
                ws.on(e, function(value) {
                    events[e](e, value);
                });
            });
            ws.connect();
            socket.current = ws;
        } else {
            socket.current = null;
        }
        return function() {
            if (socket.current) {
                Object.keys(events).forEach(function(e) {
                    var _socket_current;
                    return (_socket_current = socket.current) === null || _socket_current === void 0 ? void 0 : _socket_current.off(e);
                });
                socket.current.close();
            }
        };
    }, [
        host,
        namespace
    ]);
    return {
        host: host,
        namespace: namespace,
        connected: connected,
        socketID: socketID,
        error: error,
        emitEvent: emitWSEvent
    };
}

function _arrayLikeToArray$x(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$r(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$r(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$r() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$r(arr, i) {
    return _arrayWithHoles$r(arr) || _iterableToArrayLimit$r(arr, i) || _unsupportedIterableToArray$x(arr, i) || _nonIterableRest$r();
}
function _unsupportedIterableToArray$x(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$x(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$x(o, minLen);
}
var initialState$4 = {
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
    var _useState = _slicedToArray$r(useState(null), 2), element = _useState[0], ref = _useState[1];
    var _useState1 = _slicedToArray$r(useState(initialState$4), 2), rect = _useState1[0], setRect = _useState1[1];
    var observer = useMemo(function() {
        return new window.ResizeObserver(function(entries) {
            if (entries[0]) {
                var _entries__contentRect = entries[0].contentRect, x = _entries__contentRect.x, y = _entries__contentRect.y, width = _entries__contentRect.width, height = _entries__contentRect.height, top = _entries__contentRect.top, left = _entries__contentRect.left, bottom = _entries__contentRect.bottom, right = _entries__contentRect.right;
                setRect({
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    top: top,
                    left: left,
                    bottom: bottom,
                    right: right
                });
            }
        });
    }, []);
    useIsomorphicLayoutEffect$1(function() {
        if (element) {
            observer.observe(element);
            return function() {
                observer.disconnect();
            };
        } else {
            return function() {
            // Do nothing
            };
        }
    }, [
        element
    ]);
    return [
        ref,
        rect
    ];
}

function _arrayLikeToArray$w(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$q(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$q(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$q() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$q(arr, i) {
    return _arrayWithHoles$q(arr) || _iterableToArrayLimit$q(arr, i) || _unsupportedIterableToArray$w(arr, i) || _nonIterableRest$q();
}
function _unsupportedIterableToArray$w(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$w(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$w(o, minLen);
}
var useStyles$13 = makeStyles()(function() {
    return {
        root: {
            alignSelf: "center",
            height: "100%",
            width: "100%",
            display: "flex",
            flexGrow: 1,
            flexShrink: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        }
    };
});
function LottieLoader(param) {
    var className = param.className, style = param.style, classesProp = param.classes, src = param.src, _param_defaultSrc = param.defaultSrc, defaultSrc = _param_defaultSrc === void 0 ? defaultLottie : _param_defaultSrc;
    var _useStyles = useStyles$13(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var parseLottie = function(lottie) {
        return typeof lottie === "string" ? lottie : JSON.stringify(lottie);
    };
    var _useMeasure = _slicedToArray$q(useMeasure(), 2), ref = _useMeasure[0], _useMeasure_ = _useMeasure[1], width = _useMeasure_.width, height = _useMeasure_.height;
    var lottieSrc = useMemo(function() {
        return parseLottie(src || defaultSrc);
    }, [
        src,
        defaultSrc
    ]);
    var scriptStatus = useScript("https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js");
    var _useHookWithRefCallback = _slicedToArray$q(useHookWithRefCallback(function(ref) {
        if (ref && scriptStatus === "ready" && !src) {
            ref.src = lottieSrc;
        }
    }, [
        scriptStatus,
        lottieSrc
    ]), 1), lottieRef = _useHookWithRefCallback[0];
    var LottiePlayer = /*#__PURE__*/ React.createElement("lottie-player", {
        ref: lottieRef,
        src: lottieSrc,
        background: "transparent",
        speed: 1,
        style: {
            width: width,
            height: height
        },
        loop: true,
        autoplay: true
    });
    return /*#__PURE__*/ jsx("div", {
        className: cx(classes.root, className),
        style: style,
        ref: ref,
        children: scriptStatus === "ready" && LottiePlayer
    });
}

var useStyles$12 = makeStyles()(function() {
    return {
        root: {}
    };
});
function SuspenseLoader(param) {
    param.className; param.style; var classesProp = param.classes, children = param.children;
    var _useStyles = useStyles$12(undefined, {
        props: {
            classes: classesProp
        }
    }); _useStyles.classes; _useStyles.cx;
    return /*#__PURE__*/ jsx(Suspense, {
        fallback: /*#__PURE__*/ jsx(Loader, {
            variant: "circular"
        }),
        children: children
    });
}

/**
 * Helper hook to extract the proper auth context
 */ function useAuthorisation() {
    var getAuthContext = useApplication().getAuthContext;
    return getAuthContext();
}

function DefaultAuthGuard(param) {
    var roles = param.roles, paths = param.paths;
    var location = useLocation();
    var _useAuthorisation = useAuthorisation(), _useAuthorisation_auth = _useAuthorisation.auth, auth = _useAuthorisation_auth === void 0 ? {} : _useAuthorisation_auth, isInRole = _useAuthorisation.isInRole;
    var user = auth.user;
    var login = paths.login, unauthorised = paths.unauthorised;
    var externalLogin = login.startsWith("http");
    // Prevent looping
    var isInGuard = location.pathname.endsWith(unauthorised) || location.pathname.endsWith(login);
    // Just for clarity on the code
    var isAuthenticated = Boolean(user);
    // If we are redirecting to an external login, update the location
    if (!isAuthenticated && externalLogin) {
        window.location.href = login;
        return null;
    } else {
        return isInGuard || isInRole(roles) ? // The user has the appropriate role assigned
        /*#__PURE__*/ jsx(SuspenseLoader, {
            children: /*#__PURE__*/ jsx(Outlet, {})
        }) : /*#__PURE__*/ jsx(Navigate, {
            to: user ? unauthorised : login,
            state: {
                from: location
            },
            replace: true
        });
    }
}

function _arrayLikeToArray$v(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$p(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$P(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$p(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$p() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$L(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$P(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties$p(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$p(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$p(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray$p(arr, i) {
    return _arrayWithHoles$p(arr) || _iterableToArrayLimit$p(arr, i) || _unsupportedIterableToArray$v(arr, i) || _nonIterableRest$p();
}
function _unsupportedIterableToArray$v(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$v(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$v(o, minLen);
}
var AuthContext = /*#__PURE__*/ createContext({});
function useDefaultAuthorisation() {
    return useContext(AuthContext);
}
function DefaultAuthProvider(param) {
    var children = param.children, _param_paths = param.paths, paths = _param_paths === void 0 ? {} : _param_paths;
    var _useState = _slicedToArray$p(useState({}), 2), auth = _useState[0], setAuth = _useState[1];
    var _useState1 = _slicedToArray$p(useState(JSON.parse(localStorage.getItem("persist") || "false")), 2), persist = _useState1[0], setPersist = _useState1[1];
    var _useState2 = _slicedToArray$p(useState(_.merge({}, {
        login: "/login",
        unauthorised: "/unauthorised",
        logout: "/logout"
    }, paths)), 1), authPaths = _useState2[0];
    var isInRole = useCallback(function(roles) {
        if (!auth || !auth.user) {
            return false;
        }
        return false;
    }, [
        auth
    ]);
    var logoutUser = function(accessToken) {
        console.log("redirect to logout page");
    };
    return /*#__PURE__*/ jsx(AuthContext.Provider, {
        value: {
            auth: auth,
            setAuth: setAuth,
            persist: persist,
            setPersist: setPersist,
            GuardComponent: function(_param)  {
                var roles = _param.roles, rest = _objectWithoutProperties$p(_param, [
                    "roles"
                ]);
                return jsx(DefaultAuthGuard, _objectSpread$L({
                    paths: authPaths,
                    roles: roles
                }, rest));
            },
            isInRole: isInRole,
            logoutUser: logoutUser
        },
        children: children
    });
}

var useStyles$11 = makeStyles()(function(theme, param) {
    var inheritFontSize = param.inheritFontSize, size = param.size, color = param.color;
    var sizes = {
        inherit: inheritFontSize && (typeof inheritFontSize === "string" ? inheritFontSize : "".concat(inheritFontSize, "px")) || "inherit",
        small: theme.typography.pxToRem(20),
        medium: theme.typography.pxToRem(24),
        large: theme.typography.pxToRem(36)
    };
    var colors = {
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
            width: size === "inherit" ? "".concat(sizes[size], " !important") : "calc(".concat(sizes[size], " - 2px) !important"),
            height: size === "inherit" ? "".concat(sizes[size], " !important") : "calc(".concat(sizes[size], " - 2px) !important")
        },
        faWrapper: {
            // fa icon designs are generally heavier and therefore end up appearing larger
            // so reducing the size so they are visually equivalent
            "& svg": {
                height: "85%",
                width: "85%"
            }
        },
        iconWrapperSizeFn: {
            display: "flex !important",
            alignItems: "center",
            justifyContent: "center",
            width: "".concat(sizes[size], " !important"),
            height: "".concat(sizes[size], " !important"),
            "& svg": {
                height: "95%",
                width: "95%"
            }
        },
        colorFn: {
            color: colors[color]
        }
    };
});
function Icon(param) {
    var className = param.className, style = param.style, sx = param.sx, _param_children = param.children, children = _param_children === void 0 ? "question_mark" : _param_children, _param_color = param.color, color = _param_color === void 0 ? "inherit" : _param_color, _param_size = param.size, size = _param_size === void 0 ? "medium" : _param_size, classesProp = param.classes, onClick = param.onClick;
    var inheritFontSize = size === "inherit" ? style === null || style === void 0 ? void 0 : style.fontSize : undefined;
    var _useStyles = useStyles$11({
        size: size,
        color: color,
        inheritFontSize: inheritFontSize
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    if (children.startsWith("fa ")) {
        var faType = children.substring(3).split(" ", 2);
        if (faType.length === 1) {
            faType.unshift("fas");
        }
        var faIcon = faType;
        return /*#__PURE__*/ jsx("span", {
            className: cx(classes.root, classes.iconWrapperSizeFn, classes.colorFn, classes.faWrapper, className),
            style: style,
            children: /*#__PURE__*/ jsx(FontAwesomeIcon, {
                icon: faIcon,
                onClick: onClick
            })
        });
    } else if (children.startsWith("ion ")) {
        var ionType = children.substring(4).split(" ", 2);
        var ionIcon = ionType[0];
        return /*#__PURE__*/ jsx(IonIcon, {
            style: style,
            className: cx(classes.root, classes.iconWrapperSizeFn, classes.ionWrapperFn, classes.colorFn, className),
            onClick: onClick,
            name: ionIcon
        });
    } else {
        return /*#__PURE__*/ jsx(MUIIcon, {
            className: cx(classes.root, className),
            style: style,
            color: color,
            fontSize: size,
            sx: sx,
            onClick: onClick,
            children: children
        });
    }
}

var useStyles$10 = makeStyles()(function(theme) {
    return {
        root: {
            width: "100%"
        },
        alertTitle: {},
        alertTitleNoContent: {
            marginBottom: 0
        }
    };
});
function Error$1(param) {
    var className = param.className, style = param.style, error = param.error, children = param.children, _param_size = param.size, size = _param_size === void 0 ? "medium" : _param_size, classesProp = param.classes, iconMapping = param.iconMapping;
    var _useStyles = useStyles$10(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var iconMap = _.merge({
        error: "error_outlined",
        info: "info_outlined",
        success: "task_alt",
        warning: "report_problem_outlined"
    }, iconMapping || {});
    var title = (error === null || error === void 0 ? void 0 : error.message) || "";
    var severity = (error === null || error === void 0 ? void 0 : error.severity) || "error";
    return /*#__PURE__*/ jsx(Alert, {
        className: cx(classes.root, className),
        style: style,
        severity: severity,
        icon: /*#__PURE__*/ jsx(Icon, {
            size: size,
            children: iconMap[severity]
        }),
        children: /*#__PURE__*/ jsxs(Fragment, {
            children: [
                title && /*#__PURE__*/ jsx(AlertTitle, {
                    className: cx(classes.alertTitle, !children && classes.alertTitleNoContent),
                    children: title
                }),
                children
            ]
        })
    });
}

function _defineProperty$O(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$K(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$O(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$E(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$E(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$E(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$o(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$o(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$o(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$$ = makeStyles()(function(theme) {
    return {
        root: {},
        variantPill: {
            borderRadius: "500px"
        },
        noContentMargin: {
            "& .MuiButton-startIcon, & .MuiButton-endIcon": {
                marginLeft: 0,
                marginRight: 0
            }
        }
    };
});
function Button(_param) {
    var className = _param.className, children = _param.children, _param_variant = _param.variant, variant = _param_variant === void 0 ? "contained" : _param_variant, icon = _param.icon, _param_iconPosition = _param.iconPosition, iconPosition = _param_iconPosition === void 0 ? "start" : _param_iconPosition, style = _param.style, _param_color = _param.color, color = _param_color === void 0 ? "primary" : _param_color, _param_size = _param.size, size = _param_size === void 0 ? "medium" : _param_size, classesProp = _param.classes, rest = _objectWithoutProperties$o(_param, [
        "className",
        "children",
        "variant",
        "icon",
        "iconPosition",
        "style",
        "color",
        "size",
        "classes"
    ]);
    var _useStyles = useStyles$$(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx(Button$1, _objectSpreadProps$E(_objectSpread$K({
        className: cx(classes.root, className, !children && classes.noContentMargin, variant === "pill" && classes.variantPill),
        style: style,
        variant: variant === "pill" ? "contained" : variant,
        color: color,
        size: size,
        startIcon: icon && iconPosition === "start" && /*#__PURE__*/ jsx(Icon, {
            children: icon
        }),
        endIcon: icon && iconPosition === "end" && /*#__PURE__*/ jsx(Icon, {
            children: icon
        })
    }, rest), {
        children: children
    }));
}

function _defineProperty$N(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$J(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$N(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$D(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$D(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$D(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$n(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$n(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$n(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$_ = makeStyles()(function(theme, param) {
    var size = param.size, color = param.color;
    // As we want width and height to be equal same we need to parse size
    var sizes = {
        inherit: "1.3em",
        small: theme.typography.pxToRem(20 + 8),
        medium: theme.typography.pxToRem(24 + 8),
        large: theme.typography.pxToRem(36 + 8)
    };
    var palette = null;
    if (color === "disabled") {
        palette = {
            main: theme.palette.action.disabled,
            contrastText: theme.palette.getContrastText(theme.palette.action.active)
        };
    } else if (color === "action") {
        palette = {
            main: theme.palette.action.active,
            contrastText: theme.palette.getContrastText(theme.palette.action.active)
        };
    } else if (color !== "inherit") {
        palette = theme.palette[color];
    }
    return {
        root: {
            cursor: "default"
        },
        icon: {},
        iconBtn: {
            width: sizes[size],
            height: sizes[size]
        },
        root_text: {
            color: (palette === null || palette === void 0 ? void 0 : palette.main) ? "".concat(palette.main, " !important") : undefined
        },
        root_contained: {
            backgroundColor: (palette === null || palette === void 0 ? void 0 : palette.main) ? "".concat(palette.main, " !important") : undefined,
            color: (palette === null || palette === void 0 ? void 0 : palette.contrastText) ? "".concat(palette.contrastText, " !important") : undefined
        },
        root_outlined: {
            borderWidth: "thin",
            borderStyle: "solid",
            borderColor: (palette === null || palette === void 0 ? void 0 : palette.main) ? "".concat(palette.main, " !important") : undefined,
            color: (palette === null || palette === void 0 ? void 0 : palette.main) ? "".concat(palette.main, " !important") : undefined
        }
    };
});
function IconButton(_param) {
    var className = _param.className, title = _param.title, icon = _param.icon, style = _param.style, _param_color = _param.color, color = _param_color === void 0 ? "primary" : _param_color, _param_size = _param.size, size = _param_size === void 0 ? "medium" : _param_size, _param_variant = _param.variant, variant = _param_variant === void 0 ? "text" : _param_variant, id = _param.id, classesProp = _param.classes, rest = _objectWithoutProperties$n(_param, [
        "className",
        "title",
        "icon",
        "style",
        "color",
        "size",
        "variant",
        "id",
        "classes"
    ]);
    var _useStyles = useStyles$_({
        size: size,
        color: color
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx(Tooltip, {
        title: title || "",
        children: /*#__PURE__*/ jsx("span", {
            id: id,
            className: cx(classes.root),
            children: /*#__PURE__*/ jsx(IconButton$1, _objectSpreadProps$D(_objectSpread$J({
                className: cx(classes.iconBtn, classes["root_".concat(variant)], className),
                "aria-label": title,
                style: style,
                color: "inherit"
            }, rest), {
                children: /*#__PURE__*/ jsx(Icon, {
                    size: size,
                    color: "inherit",
                    className: cx(classes.icon),
                    children: icon
                })
            }))
        })
    });
}

function _defineProperty$M(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$I(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$M(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$C(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$C(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$C(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var useStyles$Z = makeStyles()(function(theme, param) {
    var count = param.count;
    var _mostReadable, _mostReadable1, _mostReadable2, _mostReadable3, _mostReadable4, _mostReadable5;
    var columnTemplate = Array(count).fill("auto").join(" ");
    return {
        root: _defineProperty$M({
            display: "grid",
            gridTemplateColumns: columnTemplate,
            gap: theme.spacing(1),
            alignItems: "center"
        }, theme.breakpoints.down("sm"), {
            gridTemplateColumns: "auto",
            justifyItems: "end",
            alignItems: "start"
        }),
        action: {},
        action_iconButton: {},
        action_button: _defineProperty$M({}, theme.breakpoints.down("sm"), {
            width: "100%"
        }),
        action_color_inherit: {},
        action_color_default: {},
        action_color_action: {},
        action_color_disabled: {},
        action_color_primary: {
            color: "".concat((_mostReadable = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.primary.dark
            ], {})) === null || _mostReadable === void 0 ? void 0 : _mostReadable.toHex8String())
        },
        action_color_secondary: {
            color: "".concat((_mostReadable1 = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.secondary.light,
                theme.palette.secondary.main,
                theme.palette.secondary.dark
            ], {})) === null || _mostReadable1 === void 0 ? void 0 : _mostReadable1.toHex8String())
        },
        action_color_error: {
            color: "".concat((_mostReadable2 = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.error.light,
                theme.palette.error.main,
                theme.palette.error.dark
            ], {})) === null || _mostReadable2 === void 0 ? void 0 : _mostReadable2.toHex8String())
        },
        action_color_info: {
            color: "".concat((_mostReadable3 = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.info.light,
                theme.palette.info.main,
                theme.palette.info.dark
            ], {})) === null || _mostReadable3 === void 0 ? void 0 : _mostReadable3.toHex8String())
        },
        action_color_success: {
            color: "".concat((_mostReadable4 = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.success.light,
                theme.palette.success.main,
                theme.palette.success.dark
            ], {})) === null || _mostReadable4 === void 0 ? void 0 : _mostReadable4.toHex8String())
        },
        action_color_warning: {
            color: "".concat((_mostReadable5 = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.warning.light,
                theme.palette.warning.main,
                theme.palette.warning.dark
            ], {})) === null || _mostReadable5 === void 0 ? void 0 : _mostReadable5.toHex8String())
        }
    };
});
function Actions(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_variant = param.variant, variant = _param_variant === void 0 ? "iconButton" : _param_variant, actions = param.actions;
    var _useStyles = useStyles$Z({
        count: actions.length
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var renderedActions = useMemoDeepCompare(function() {
        return actions.map(function(action) {
            var ActionComponent = variant === "iconButton" ? IconButton : Button;
            var actionColor = action.color || "primary";
            return typeof action !== "function" ? /*#__PURE__*/ jsx(ActionComponent, _objectSpreadProps$C(_objectSpread$I({
                color: variant === "iconButton" ? "inherit" : actionColor,
                variant: action.variant || "text"
            }, action), {
                className: cx(classes.action, classes["action_".concat(variant)], classes["action_color_".concat(actionColor)], action.className),
                children: action.title
            }), action.key || action.title || action.name) : action();
        });
    }, [
        actions,
        variant
    ]);
    return /*#__PURE__*/ jsx("div", {
        className: cx(classes.root, className),
        style: style,
        children: renderedActions
    });
}

function _arrayLikeToArray$u(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$o(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$L(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$o(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$o() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$H(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$L(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$B(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$B(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$B(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$m(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$m(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$m(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray$o(arr, i) {
    return _arrayWithHoles$o(arr) || _iterableToArrayLimit$o(arr, i) || _unsupportedIterableToArray$u(arr, i) || _nonIterableRest$o();
}
function _unsupportedIterableToArray$u(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$u(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$u(o, minLen);
}
var useStyles$Y = makeStyles()(function(theme, param) {
    var verticalAlign = param.verticalAlign, horizontalAlign = param.horizontalAlign, imageSrc = param.imageSrc, imageFit = param.imageFit, imagePosition = param.imagePosition, imageAlpha = param.imageAlpha, backgroundColor = param.backgroundColor, square = param.square;
    var _mostReadable;
    var vertical = {
        top: "flex-start",
        center: "center",
        bottom: "flex-end"
    };
    var horizontal = {
        left: "flex-start",
        center: "center",
        right: "flex-end"
    };
    return {
        root: {
            display: "flex",
            height: "100%",
            width: "100%",
            flexDirection: "column",
            boxSizing: "border-box",
            borderRadius: square ? 0 : theme.shape.borderRadius,
            overflow: "hidden",
            padding: theme.spacing(3),
            flexShrink: 1,
            flexGrow: 1,
            position: "relative",
            isolation: "isolate",
            backgroundColor: backgroundColor || undefined,
            color: (_mostReadable = mostReadable(backgroundColor || theme.palette.background.default, [
                theme.palette.text.primary,
                theme.palette.text.secondary,
                theme.palette.primary.contrastText,
                theme.palette.secondary.contrastText
            ])) === null || _mostReadable === void 0 ? void 0 : _mostReadable.toHex8String()
        },
        containerImageFn: imageSrc ? {
            backgroundImage: "url('".concat(imageSrc, "')"),
            objectFit: imageFit,
            backgroundSize: imageFit === "fill" ? "auto" : imageFit,
            backgroundPosition: imagePosition,
            backgroundRepeat: "no-repeat",
            "&::after": {
                content: '""',
                position: "absolute",
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
var Container = /*#__PURE__*/ forwardRef(function(props, ref) {
    var className = props.className, style = props.style, children = props.children, _props_verticalAlign = props.verticalAlign, verticalAlign = _props_verticalAlign === void 0 ? "top" : _props_verticalAlign, _props_horizontalAlign = props.horizontalAlign, horizontalAlign = _props_horizontalAlign === void 0 ? "left" : _props_horizontalAlign, imageSrc = props.imageSrc, _props_imageFit = props.imageFit, imageFit = _props_imageFit === void 0 ? "cover" : _props_imageFit, _props_imagePosition = props.imagePosition, imagePosition = _props_imagePosition === void 0 ? "center" : _props_imagePosition, _props_imageAlpha = props.imageAlpha, imageAlpha = _props_imageAlpha === void 0 ? 0.25 : _props_imageAlpha, _props_backgroundColor = props.backgroundColor, backgroundColor = _props_backgroundColor === void 0 ? null : _props_backgroundColor, _props_elevation = props.elevation, elevation = _props_elevation === void 0 ? 0 : _props_elevation, _props_variant = props.variant, variant = _props_variant === void 0 ? "elevation" : _props_variant, _props_square = props.square, square = _props_square === void 0 ? false : _props_square, classesProp = props.classes, rest = _objectWithoutProperties$m(props, [
        "className",
        "style",
        "children",
        "verticalAlign",
        "horizontalAlign",
        "imageSrc",
        "imageFit",
        "imagePosition",
        "imageAlpha",
        "backgroundColor",
        "elevation",
        "variant",
        "square",
        "classes"
    ]);
    // TODO: Create a useBackgroundColor hook which will get the parent element with a background set and extract the color
    var _useState = _slicedToArray$o(useState(null), 2), derivedBackground = _useState[0], setDerivedBackground = _useState[1];
    useEffect(function() {
        var color = backgroundColor;
        if (color) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            var parsedColor = tinycolor(backgroundColor);
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
    }, [
        backgroundColor
    ]);
    var _useStyles = useStyles$Y({
        verticalAlign: verticalAlign,
        horizontalAlign: horizontalAlign,
        imageSrc: imageSrc,
        imageFit: imageFit,
        imagePosition: imagePosition,
        imageAlpha: imageAlpha,
        square: square,
        backgroundColor: derivedBackground
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var _useHookWithRefCallback = _slicedToArray$o(useHookWithRefCallback(function(newRef) {
        if (newRef && !derivedBackground) {
            var color = tinycolor(getComputedStyle(newRef).backgroundColor);
            if (color.getAlpha() > 0) {
                var extractedColor = color.toHex8String();
                setDerivedBackground(extractedColor);
                // @ts-expect-error typing specified ref could be an instance or fuction, that is basically what we are chacking here
                if (ref === null || ref === void 0 ? void 0 : ref.current) {
                    // @ts-expect-error typing specified ref could be an instance or fuction, that is basically what we are chacking here
                    ref.current.backgroundColor = extractedColor;
                }
            }
        }
    }, []), 1), pageRef = _useHookWithRefCallback[0];
    useImperativeHandle(ref, function() {
        // @ts-expect-error required because of modals in mui
        pageRef.current.backgroundColor = derivedBackground;
        return pageRef.current;
    }, [
        pageRef,
        derivedBackground
    ]);
    return /*#__PURE__*/ jsx(Paper, _objectSpreadProps$B(_objectSpread$H({
        className: cx(classes.root, classes.contentAlignFn, className, classes.containerImageFn),
        square: square,
        variant: variant,
        ref: pageRef,
        style: style,
        elevation: _.clamp(elevation, 0, 24)
    }, rest), {
        children: children
    }));
});
Container.displayName = "Container";

function _arrayLikeToArray$t(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$n(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$n(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$n() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$n(arr, i) {
    return _arrayWithHoles$n(arr) || _iterableToArrayLimit$n(arr, i) || _unsupportedIterableToArray$t(arr, i) || _nonIterableRest$n();
}
function _unsupportedIterableToArray$t(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$t(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$t(o, minLen);
}
var useStyles$X = makeStyles()(function() {
    return {
        root: {
            position: "relative",
            width: "100%",
            height: "100%",
            "& > div": {
                position: "absolute !important"
            },
            display: "flex",
            flexDirection: "column"
        },
        modalWrapper: {
            width: "100%",
            height: "100%"
        },
        iframe: {
            border: "none",
            flexGrow: 1
        },
        modalBackdrop: {
            position: "absolute"
        }
    };
});
function WebContainer(param) {
    var className = param.className, style = param.style, _param_id = param.id, id = _param_id === void 0 ? "webModalWrapper" : _param_id, src = param.src, title = param.title, _param_sandbox = param.sandbox, sandbox = _param_sandbox === void 0 ? [
        "allow-same-origin",
        "allow-scripts",
        "allow-forms",
        "allow-downloads"
    ] : _param_sandbox, classesProp = param.classes;
    var _useStyles = useStyles$X(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    useStyles$X();
    var _useState = _slicedToArray$n(useState(false), 2), loaded = _useState[0], setLoaded = _useState[1];
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        id: id,
        children: [
            /*#__PURE__*/ jsx(IframeResizer, {
                className: cx(classes.iframe),
                title: title,
                id: "".concat(id, "_iframe"),
                src: src,
                sandbox: sandbox.join(" "),
                onLoad: function() {
                    setLoaded(true);
                },
                style: {
                    width: "1px",
                    minWidth: "100%"
                },
                autoResize: true,
                scrolling: true
            }),
            /*#__PURE__*/ jsx(Modal, {
                container: function() {
                    return document.getElementById(id);
                },
                open: !loaded,
                componentsProps: {
                    backdrop: {
                        className: cx(classes.modalBackdrop)
                    }
                },
                children: /*#__PURE__*/ jsx("div", {
                    className: cx(classes.modalWrapper),
                    children: /*#__PURE__*/ jsx(Loader, {})
                })
            })
        ]
    });
}

function _arrayLikeToArray$s(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$m(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$K(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$m(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$m() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$G(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$K(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$A(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$A(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$A(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray$m(arr, i) {
    return _arrayWithHoles$m(arr) || _iterableToArrayLimit$m(arr, i) || _unsupportedIterableToArray$s(arr, i) || _nonIterableRest$m();
}
function _unsupportedIterableToArray$s(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$s(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$s(o, minLen);
}
var useStyles$W = makeStyles()(function(theme) {
    return {
        root: {
            "& .MenuButton .MuiButton-endIcon, & .MenuButton .MuiButton-startIcon": {
                marginLeft: 0,
                marginRight: 0
            }
        },
        root_text: {},
        root_outlined: {},
        root_contained: {},
        root_pill: {
            borderRadius: "500px"
        },
        menu: {
            zIndex: 999
        },
        menuContainer: {
            padding: theme.spacing(0)
        },
        optionWrapper: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        itemIconButton: {
            marginRight: theme.spacing(2)
        }
    };
});
function SplitButton(param) {
    var className = param.className, _param_variant = param.variant, variant = _param_variant === void 0 ? "contained" : _param_variant, _param_icon = param.icon, icon = _param_icon === void 0 ? "arrow_drop_down" : _param_icon, _param_iconPosition = param.iconPosition, iconPosition = _param_iconPosition === void 0 ? "start" : _param_iconPosition, style = param.style, _param_color = param.color, color = _param_color === void 0 ? "primary" : _param_color, _param_size = param.size, size = _param_size === void 0 ? "medium" : _param_size, id = param.id, _param_placement = param.placement, placement = _param_placement === void 0 ? "bottom-end" : _param_placement; param.onChange; var _param_options = param.options, options = _param_options === void 0 ? [] : _param_options, _param_selectedIndex = param.selectedIndex, selectedIndex = _param_selectedIndex === void 0 ? 0 : _param_selectedIndex, renderOption = param.renderOption, _param_clickOnSelect = param.clickOnSelect, clickOnSelect = _param_clickOnSelect === void 0 ? false : _param_clickOnSelect, classesProp = param.classes;
    var _useStyles = useStyles$W(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var anchorRef = useRef(null);
    var _useState = _slicedToArray$m(useState(false), 2), open = _useState[0], setOpen = _useState[1];
    var _useState1 = _slicedToArray$m(useState(options[selectedIndex]), 2), selectedOption = _useState1[0], setSelectedOption = _useState1[1];
    var menuID = "".concat(id, "_split_menu");
    renderOption = renderOption || function(option) {
        return /*#__PURE__*/ jsxs("div", {
            className: cx(classes.optionWrapper),
            children: [
                /*#__PURE__*/ jsx(Icon, {
                    className: cx(classes.itemIconButton, option.className),
                    size: "inherit",
                    color: "inherit",
                    title: option.label,
                    children: option.icon || "blank"
                }),
                (option.selectedLabel || option.label) && /*#__PURE__*/ jsx(Typography, {
                    children: selectedOption === option && option.selectedLabel || option.label
                })
            ]
        });
    };
    useEffect(function() {
        setSelectedOption(options[selectedIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selectedIndex
    ]);
    var toggleMenu = function() {
        setOpen(function(previousOpen) {
            return !previousOpen;
        });
    };
    var onMenuClosed = function() {
        setOpen(false);
    };
    var selectOption = function(e, option) {
        setSelectedOption(option);
        setOpen(false);
        if (clickOnSelect) {
            option.onClick && option.onClick(null, option);
        }
    };
    var buttonText = (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.selectedLabel) || (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) || "";
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            /*#__PURE__*/ jsxs(ButtonGroup, {
                className: cx(classes["root_".concat(variant)]),
                variant: variant === "pill" ? "contained" : variant,
                color: color,
                size: size,
                ref: anchorRef,
                "aria-label": buttonText,
                children: [
                    /*#__PURE__*/ jsx(Button, {
                        variant: variant,
                        color: color,
                        size: size,
                        icon: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.icon,
                        iconPosition: iconPosition,
                        onClick: function(e) {
                            (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.onClick) && selectedOption.onClick(e, selectedOption);
                        },
                        children: buttonText
                    }),
                    /*#__PURE__*/ jsx(Button, {
                        className: cx("MenuButton"),
                        size: "small",
                        icon: icon,
                        variant: variant,
                        color: color,
                        "aria-controls": open ? menuID : undefined,
                        "aria-expanded": open ? "true" : undefined,
                        "aria-label": buttonText,
                        "aria-haspopup": "menu",
                        onClick: toggleMenu
                    })
                ]
            }),
            /*#__PURE__*/ jsx(Popper, {
                className: cx(classes.menu),
                open: open,
                anchorEl: anchorRef.current,
                role: "menu",
                transition: true,
                disablePortal: true,
                placement: placement,
                children: function(param) {
                    var TransitionProps = param.TransitionProps;
                    return /*#__PURE__*/ jsx(Grow, _objectSpreadProps$A(_objectSpread$G({}, TransitionProps), {
                        children: /*#__PURE__*/ jsx(Container, {
                            elevation: 1,
                            className: cx(classes.menuContainer),
                            children: /*#__PURE__*/ jsx(ClickAwayListener, {
                                onClickAway: onMenuClosed,
                                children: /*#__PURE__*/ jsx(MenuList, {
                                    id: menuID,
                                    autoFocusItem: true,
                                    children: options.filter(function(o) {
                                        return o !== selectedOption;
                                    }).filter(function(i) {
                                        return i;
                                    }).map(function(option) {
                                        return /*#__PURE__*/ jsx(MenuItem, {
                                            onClick: function(e) {
                                                selectOption(e, option);
                                            },
                                            children: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                            renderOption(option)
                                        }, option.label);
                                    })
                                })
                            })
                        })
                    }));
                }
            })
        ]
    });
}

var useStyles$V = makeStyles()(function(theme) {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            background: theme.palette.background.default
        },
        root_prominent: {
            height: "100%",
            padding: theme.spacing(3),
            paddingTop: theme.spacing(4)
        },
        root_condensed: {
            height: "auto",
            minHeight: "auto",
            padding: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1)
        },
        titleWrapper: {
            display: "flex",
            alignItems: "center"
        },
        icon: {
            marginRight: theme.spacing(2)
        },
        list: {
            alignSelf: "stretch"
        },
        list_prominent: {
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            marginTop: theme.spacing(1),
            "& > *": {
                marginBottom: theme.spacing(1)
            }
        },
        list_condensed: {
            padding: theme.spacing(0.5),
            marginTop: theme.spacing(0.5),
            "& > *": {
                marginBottom: theme.spacing(0.5)
            }
        },
        contentWrapper: {
            textAlign: "center",
            margin: theme.spacing(2),
            alignSelf: "center"
        }
    };
});
function ErrorWrapper(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_role = param.role, role = _param_role === void 0 ? "alert" : _param_role, title = param.title, _param_showDetails = param.showDetails; _param_showDetails === void 0 ? process.env["NODE_ENV"] !== "production" : _param_showDetails; var _param_errors = param.errors, errors = _param_errors === void 0 ? [] : _param_errors, children = param.children, _param_variant = param.variant, variant = _param_variant === void 0 ? "prominent" : _param_variant, _param_icon = param.icon, icon = _param_icon === void 0 ? "error_outlined" : _param_icon;
    var _useStyles = useStyles$V(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsxs(Container, {
        className: cx(classes.root, classes["root_".concat(variant)], className),
        style: style,
        role: role,
        children: [
            title && /*#__PURE__*/ jsxs("div", {
                className: cx(classes.titleWrapper),
                children: [
                    /*#__PURE__*/ jsx(Icon, {
                        color: "error",
                        className: cx(classes.icon),
                        children: icon
                    }),
                    /*#__PURE__*/ jsx(Typography, {
                        color: "error",
                        variant: "h5",
                        component: "h1",
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.list, classes["list_".concat(variant)]),
                children: errors.filter(function(e, index, self) {
                    return self.findIndex(function(error) {
                        return error.message === e.message;
                    }) === index;
                }).map(function(error, index) {
                    return /*#__PURE__*/ jsx(Error$1, {
                        error: error
                    }, error.message || index);
                })
            }),
            children && /*#__PURE__*/ jsx("div", {
                className: cx(classes.contentWrapper),
                children: children
            })
        ]
    });
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty$J(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _objectSpread$F(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$J(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$z(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$z(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$z(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
// TODO: Use localisation for title and button text
var ErrorBoundary = /*#__PURE__*/ function(Component) {
    _inherits(ErrorBoundary, Component);
    var _super = _createSuper(ErrorBoundary);
    function ErrorBoundary(props) {
        _classCallCheck$1(this, ErrorBoundary);
        var _this;
        _this = _super.call(this, props);
        _this.state = {
            errors: [],
            title: props.title || "Oops something went wrong and we cannot recover from it.",
            buttonText: "Reload"
        };
        return _this;
    }
    var _proto = ErrorBoundary.prototype;
    _proto.componentDidCatch = function componentDidCatch(error, errorInfo) {
        this.setState(function(state) {
            return _objectSpreadProps$z(_objectSpread$F({}, state), {
                errors: [
                    error
                ]
            });
        });
    };
    _proto.render = function render() {
        var errors = this.state.errors;
        var title = this.state.title;
        var buttonText = this.state.buttonText;
        var children = this.props.children;
        return errors && errors.length > 0 ? /*#__PURE__*/ jsx(ErrorWrapper, {
            title: title,
            errors: errors,
            children: /*#__PURE__*/ jsx(Button, {
                icon: "refresh",
                color: "secondary",
                onClick: function() {
                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                },
                children: buttonText
            })
        }) : children;
    };
    ErrorBoundary.getDerivedStateFromError = function getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
            errors: [
                {
                    message: error.message
                }
            ]
        };
    };
    return ErrorBoundary;
}(Component);
var ErrorBoundary$1 = ErrorBoundary;

function _arrayLikeToArray$r(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$l(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$I(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$l(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$l() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$E(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$I(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$y(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$y(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$y(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$l(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$l(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$l(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray$l(arr, i) {
    return _arrayWithHoles$l(arr) || _iterableToArrayLimit$l(arr, i) || _unsupportedIterableToArray$r(arr, i) || _nonIterableRest$l();
}
function _unsupportedIterableToArray$r(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$r(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$r(o, minLen);
}
var useStyles$U = makeStyles()(function() {
    return {
        root: {},
        alert: {
            alignItems: "center"
        }
    };
});
function Snackbar(_param) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, message = _param.message, action = _param.action, _param_variant = _param.variant, variant = _param_variant === void 0 ? "message" : _param_variant, _param_autoHideDuration = _param.autoHideDuration, autoHideDuration = _param_autoHideDuration === void 0 ? 6000 : _param_autoHideDuration, open = _param.open, onClose = _param.onClose, rest = _objectWithoutProperties$l(_param, [
        "className",
        "style",
        "classes",
        "message",
        "action",
        "variant",
        "autoHideDuration",
        "open",
        "onClose"
    ]);
    var _useStyles = useStyles$U(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var _useState = _slicedToArray$l(useState(open), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    useEffect(function() {
        setIsOpen(open);
    }, [
        open,
        message
    ]);
    return /*#__PURE__*/ jsx(Snackbar$1, _objectSpreadProps$y(_objectSpread$E({
        className: cx(classes.root, className),
        style: style,
        message: variant === "message" ? message : null,
        action: variant === "message" ? action : null,
        autoHideDuration: autoHideDuration,
        onClose: function(e, reason) {
            setIsOpen(false);
            onClose && onClose(e, reason);
        },
        open: isOpen
    }, rest), {
        children: variant !== "message" ? /*#__PURE__*/ jsxs(Alert, {
            className: cx(classes.alert),
            severity: variant,
            children: [
                message,
                action
            ]
        }) : undefined
    }));
}

function _arrayLikeToArray$q(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$k(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$k(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$k() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$k(arr, i) {
    return _arrayWithHoles$k(arr) || _iterableToArrayLimit$k(arr, i) || _unsupportedIterableToArray$q(arr, i) || _nonIterableRest$k();
}
function _unsupportedIterableToArray$q(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$q(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$q(o, minLen);
}
var useStyles$T = makeStyles()(function(theme) {
    return {
        root: {
            background: theme.palette.background.default
        }
    };
});
function UpdateAvailable(param) {
    var className = param.className; param.style; var classesProp = param.classes;
    var _useStyles = useStyles$T(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var _useState = _slicedToArray$k(useState(false), 2), updateAvailable = _useState[0], setUpdateAvailable = _useState[1];
    useEffect(function() {
        var listener = function() {
            setUpdateAvailable(true);
        };
        window.addEventListener("updateAvailable", listener);
        return function() {
            window.removeEventListener("updateAvailable", listener);
        };
    }, []);
    var onReload = function() {
        window.location.reload();
    };
    // TODO: Make use of localization for text in this control
    return updateAvailable && /*#__PURE__*/ jsx(Modal, {
        open: updateAvailable,
        onClose: onReload,
        children: /*#__PURE__*/ jsxs(Container, {
            className: cx(classes.root, className),
            verticalAlign: "center",
            horizontalAlign: "center",
            children: [
                /*#__PURE__*/ jsx(Typography, {
                    variant: "h6",
                    children: "An update is available"
                }),
                /*#__PURE__*/ jsx(Typography, {
                    variant: "subtitle1",
                    children: "Please refresh for the latest version"
                }),
                /*#__PURE__*/ jsx(Button, {
                    color: "secondary",
                    variant: "contained",
                    size: "large",
                    icon: "refresh",
                    onClick: onReload,
                    children: "Refresh"
                })
            ]
        })
    }) || null;
}

function _defineProperty$H(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$D(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$H(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$x(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$x(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$x(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var initialState$3 = {
    open: false
};
var dialog$2 = createSlice({
    name: "icatalyst/contextPanel",
    initialState: initialState$3,
    reducers: {
        openPanel: function(_, action) {
            return _objectSpreadProps$x(_objectSpread$D({}, action.payload), {
                open: true
            });
        },
        closePanel: function() {
            return {
                open: false
            };
        }
    }
});
var contextPanel = dialog$2;
var reduxConfig$4 = {
    ignoredActions: [
        "icatalyst/contextPanel/openPanel"
    ],
    ignoredPaths: [
        "icatalyst/contextPanel"
    ]
};

function _defineProperty$G(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$C(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$G(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$w(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$w(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$w(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var initialState$2 = {
    open: false
};
var dialog = createSlice({
    name: "icatalyst/dialog",
    initialState: initialState$2,
    reducers: {
        openDialog: function(_, action) {
            return _objectSpreadProps$w(_objectSpread$C({}, action.payload), {
                open: true
            });
        },
        closeDialog: function() {
            return {
                open: false
            };
        }
    }
});
var dialog$1 = dialog;
var reduxConfig$3 = {
    ignoredActions: [
        "icatalyst/dialog/openDialog"
    ],
    ignoredPaths: [
        "icatalyst/dialog"
    ]
};

function _defineProperty$F(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$B(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$F(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$v(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$v(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$v(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var initialState$1 = {
    open: false
};
var message = createSlice({
    name: "icatalyst/message",
    initialState: initialState$1,
    reducers: {
        showMessage: function(_, action) {
            return _objectSpreadProps$v(_objectSpread$B({}, action.payload), {
                open: true
            });
        },
        hideMessage: function() {
            return {
                open: false
            };
        }
    }
});
var message$1 = message;
var reduxConfig$2 = {
    ignoredActions: [
        "icatalyst/message/openDialog"
    ],
    ignoredPaths: [
        "icatalyst/message"
    ]
};

function _objectWithoutProperties$k(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$k(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$k(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var initialState = {
    layoutSettings: {},
    current: {
        layouts: {}
    },
    userSettings: {
        layouts: {}
    }
};
var settings = createSlice({
    name: "icatalyst/settings",
    initialState: initialState,
    reducers: {
        /**
     * Updates the layout to the new layout state.  This also removes
     * and user overrides
     * @param state the current state
     * @param action the new layout configuration
     * @returns the new state
     */ resetLayout: function resetLayout(state, action) {
            state.layoutSettings[action.payload.name] = action.payload;
            state.userSettings.layouts[action.payload.name] = {};
            state.current.layouts[action.payload.name] = action.payload;
        },
        /**
     * Updates the user settings and the current layout based on the updates provided
     * @param state the current state
     * @param action the updates to apply
     * @returns the new state
     */ setLayoutUserSettings: function setLayoutUserSettings(state, action) {
            var _action_payload = action.payload, name = _action_payload.name, rest = _objectWithoutProperties$k(_action_payload, [
                "name"
            ]);
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
     */ setDefault: function setDefault(state, action) {
            var name = action.payload.name;
            state.layoutSettings[name] = action.payload;
            // Update the current state
            state.current.layouts[name] = _.merge(state.layoutSettings[name], state.userSettings.layouts[name]);
        }
    }
});
var settings$1 = settings;
var reduxConfig$1 = {};

function _arrayLikeToArray$p(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles$a(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$p(arr);
}
function _iterableToArray$a(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread$a() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$a(arr) {
    return _arrayWithoutHoles$a(arr) || _iterableToArray$a(arr) || _unsupportedIterableToArray$p(arr) || _nonIterableSpread$a();
}
function _unsupportedIterableToArray$p(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$p(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$p(o, minLen);
}
var applicationSlices = [
    contextPanel,
    dialog$1,
    message$1,
    settings$1
];
var actions = {
    contextPanel: contextPanel.actions,
    dialog: dialog$1.actions,
    message: message$1.actions,
    settings: settings$1.actions
};
var reduxConfig = [
    reduxConfig$4,
    reduxConfig$3,
    reduxConfig$2,
    reduxConfig$1
].reduce(function(acc, config) {
    var accConfig = acc.reduxSerializableConfig;
    if (config.ignoredPaths) {
        accConfig.ignoredPaths = _toConsumableArray$a(accConfig.ignoredPaths).concat(_toConsumableArray$a(config.ignoredPaths));
    }
    if (config.ignoredActionPaths) {
        accConfig.ignoredActionPaths = _toConsumableArray$a(accConfig.ignoredActionPaths).concat(_toConsumableArray$a(config.ignoredActionPaths));
    }
    if (config.ignoredActions) {
        accConfig.ignoredActions = _toConsumableArray$a(accConfig.ignoredActions).concat(_toConsumableArray$a(config.ignoredActions));
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
    return applicationSlices.reduce(function(acc, slice) {
        acc[slice.name] = slice.reducer;
        return acc;
    }, {});
}

var useAppDispatch = useDispatch;
var useAppSelector = useSelector;
function useLayoutSelector(name) {
    return useSettingsSelector().current.layouts[name];
}
function useSettingsSelector() {
    return useAppSelector(function(state) {
        return state["icatalyst/settings"];
    });
}
function useDialogSelector() {
    return useAppSelector(function(state) {
        return state["icatalyst/dialog"];
    });
}
function useContextPanelSelector() {
    return useAppSelector(function(state) {
        return state["icatalyst/contextPanel"];
    });
}
function useMessageSelector() {
    return useAppSelector(function(state) {
        return state["icatalyst/message"];
    });
}

function _defineProperty$E(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$A(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$E(target, key, source[key]);
        });
    }
    return target;
}
function createStore(param) {
    var reducers = param.reducers;
    return configureStore({
        middleware: function(getDefaultMiddleware) {
            return getDefaultMiddleware({
                // There are some actions that are non serialisable
                serializableCheck: reduxConfig.reduxSerializableConfig
            });
        },
        reducer: _objectSpread$A({}, getApplicationReducers(), reducers)
    });
}

function _defineProperty$D(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$z(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$D(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$u(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$u(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$u(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var useStyles$S = makeStyles()(function(theme) {
    return {
        root: {
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            background: "green",
            width: theme.spacing(12),
            height: theme.spacing(12),
            paddingRight: theme.spacing(1),
            borderWidth: "thin",
            borderStyle: "solid",
            borderColor: theme.palette.divider
        },
        textArea: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            overflow: "hidden",
            maxWidth: "100%",
            paddingLeft: theme.spacing(1)
        },
        title: {
            fontWeight: "bold",
            textAlign: "right",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            overflow: "hidden"
        }
    };
});
function ColorSwatch(param) {
    var className = param.className, style = param.style, classesProp = param.classes, title = param.title, color = param.color;
    var _useStyles = useStyles$S(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var theme = useTheme();
    var colorHex = tinycolor(color).toHex8String();
    return /*#__PURE__*/ jsx("div", {
        className: cx(classes.root, className),
        style: _objectSpreadProps$u(_objectSpread$z({}, style), {
            backgroundColor: colorHex,
            color: theme.palette.getContrastText(colorHex)
        }),
        children: /*#__PURE__*/ jsxs("div", {
            className: cx(classes.textArea),
            children: [
                /*#__PURE__*/ jsx(Tooltip, {
                    title: title,
                    children: /*#__PURE__*/ jsx(Typography, {
                        className: cx(classes.title),
                        variant: "body1",
                        children: title
                    })
                }),
                /*#__PURE__*/ jsx(Typography, {
                    variant: "caption",
                    children: colorHex
                })
            ]
        })
    });
}

function _arrayLikeToArray$o(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$j(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$j(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$j() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$j(arr, i) {
    return _arrayWithHoles$j(arr) || _iterableToArrayLimit$j(arr, i) || _unsupportedIterableToArray$o(arr, i) || _nonIterableRest$j();
}
function _unsupportedIterableToArray$o(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$o(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$o(o, minLen);
}
var useStyles$R = makeStyles()(function(theme) {
    return {
        root: {
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
            marginTop: theme.spacing(2),
            height: "auto",
            width: "100%",
            flexGrow: 0,
            flexShrink: 0,
            maxWidth: "100%"
        },
        variants: {
            paddingLeft: 0
        },
        swatches: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        },
        title: {
            fontWeight: "bold"
        }
    };
});
function ColorChart(param) {
    var className = param.className, style = param.style, classesProp = param.classes, title = param.title, colors = param.colors, _param_variants = param.variants, variants = _param_variants === void 0 ? false : _param_variants;
    var _useStyles = useStyles$R(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsxs(Container, {
        elevation: variants ? 0 : 1,
        className: cx(classes.root, variants && classes.variants, className),
        style: style,
        children: [
            /*#__PURE__*/ jsx(Typography, {
                className: cx(classes.title),
                variant: "subtitle1",
                gutterBottom: true,
                children: title
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.swatches),
                children: Object.entries(colors).map(function(param) {
                    var _param = _slicedToArray$j(param, 2), key = _param[0], color = _param[1];
                    return typeof color === "string" ? /*#__PURE__*/ jsx(ColorSwatch, {
                        title: key,
                        color: color
                    }, key) : /*#__PURE__*/ jsx(ColorChart, {
                        title: "".concat(title, " - ").concat(key),
                        colors: color,
                        variants: true
                    }, key);
                })
            })
        ]
    });
}

function Theme(param) {
    var children = param.children;
    var themes = useApplication().themes;
    // TODO: Get the name of the active default theme
    var selectedThemeName = "default";
    var selectedTheme = themes && themes[selectedThemeName];
    return /*#__PURE__*/ jsxs(ThemeProvider, {
        theme: selectedTheme || {},
        children: [
            /*#__PURE__*/ jsx(GlobalStyles, {
                styles: {
                    html: {
                        height: "100%",
                        width: "100%",
                        backgroundColor: selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.palette.background.default
                    },
                    body: {
                        height: "100%",
                        width: "100%"
                    },
                    "#root": {
                        height: "100%",
                        width: "100%"
                    },
                    "::-webkit-scrollbar": {
                        backgroundColor: selectedTheme.palette.action.hover,
                        borderRadius: (selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.spacing(1)) || 8,
                        width: (selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.spacing(1.5)) || 12
                    },
                    "::-webkit-scrollbar-track, ::-webkit-scrollbar-corner": {
                        background: "transparent"
                    },
                    /* Track */ "::-webkit-scrollbar-track": {
                        borderRadius: (selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.spacing(1)) || 8
                    },
                    /* Handle */ "::-webkit-scrollbar-thumb": {
                        backgroundColor: alpha((selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.palette.primary.compliment) || "grey", 1 - ((selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.palette.action.disabledOpacity) || 0.38)),
                        backgroundClip: "content-box",
                        borderRadius: (selectedTheme === null || selectedTheme === void 0 ? void 0 : selectedTheme.spacing(1)) || 8,
                        border: "".concat(selectedTheme.spacing(0.5), " solid transparent")
                    }
                }
            }),
            children
        ]
    });
}

function _arrayLikeToArray$n(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$i(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$C(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$i(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$i() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$y(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$C(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$t(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$t(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$t(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$j(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$j(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$j(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray$i(arr, i) {
    return _arrayWithHoles$i(arr) || _iterableToArrayLimit$i(arr, i) || _unsupportedIterableToArray$n(arr, i) || _nonIterableRest$i();
}
function _unsupportedIterableToArray$n(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$n(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$n(o, minLen);
}
var useStyles$Q = makeStyles()(function(theme) {
    var pillPadding = 2;
    return {
        root: {},
        root_filled: {},
        root_outlined: {},
        root_standard: {},
        root_pill: {
            "& .MuiInputBase-root": {
                borderRadius: "500px",
                paddingLeft: theme.spacing(pillPadding),
                paddingRight: theme.spacing(pillPadding)
            },
            "& .MuiInputLabel-root": {
                paddingLeft: theme.spacing(pillPadding)
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline legend span": {
                marginLeft: theme.spacing(pillPadding * 0.75)
            }
        },
        emptyLabel: {
            "& .Mui-focused .MuiOutlinedInput-notchedOutline legend span": {
                marginLeft: 0
            }
        },
        inputLabel: {}
    };
});
function createInputStyle(theme, rootClass) {
    var inputPlaceholderHidden = {
        opacity: "0 !important"
    };
    var inputPlaceholderVisible = {
        opacity: 1
    };
    var inputPlaceholder = {
        opacity: 1,
        transition: theme.transitions.create("opacity", {
            duration: theme.transitions.duration.shorter
        })
    };
    var _obj;
    return _objectSpreadProps$t(_objectSpread$y({}, theme.typography.body1), (_obj = {
        boxSizing: "border-box",
        display: "inline-flex",
        alignItems: "center",
        border: "none",
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        background: "none",
        margin: 0,
        // Reset for Safari
        WebkitTapHighlightColor: "transparent",
        // Make the flex item shrink with Firefox
        minWidth: 0,
        width: "100%",
        // Fix IE11 width issue
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": inputPlaceholder,
        "&::-moz-placeholder": inputPlaceholder,
        // Firefox 19+
        "&:-ms-input-placeholder": inputPlaceholder,
        // IE11
        "&::-ms-input-placeholder": inputPlaceholder,
        // Edge
        "&:focus": {
            outline: "none"
        },
        "&:invalid": {
            boxShadow: "none"
        },
        "&::-webkit-search-decoration": {
            // Remove the padding when type=search.
            WebkitAppearance: "none"
        },
        "&:-webkit-autofill": {
            WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
            caretColor: theme.palette.mode === "light" ? null : "#fff",
            borderRadius: "inherit",
            animationDuration: "5000s",
            animationName: "mui-auto-fill"
        }
    }, _defineProperty$C(_obj, ".".concat(rootClass, " label[data-shrink=false] + .MuiInputBase-formControl &"), {
        "&::-webkit-input-placeholder": inputPlaceholderHidden,
        "&::-moz-placeholder": inputPlaceholderHidden,
        // Firefox 19+
        "&:-ms-input-placeholder": inputPlaceholderHidden,
        // IE11
        "&::-ms-input-placeholder": inputPlaceholderHidden,
        // Edge
        "&:focus::-webkit-input-placeholder": inputPlaceholderVisible,
        "&:focus::-moz-placeholder": inputPlaceholderVisible,
        // Firefox 19+
        "&:focus:-ms-input-placeholder": inputPlaceholderVisible,
        // IE11
        "&:focus::-ms-input-placeholder": inputPlaceholderVisible
    }), _defineProperty$C(_obj, ".MuiInputBase-inputAdornedStart &", {
        paddingLeft: 0
    }), _defineProperty$C(_obj, ".MuiInputBase-inputAdornedEnd &", {
        paddingRight: 0
    }), _obj));
}
var InputBase = /*#__PURE__*/ forwardRef(function(_param, ref) {
    var handleChange = function handleChange(e) {
        var newValue = e.target.value;
        setStateValue(newValue);
        onChange && onChange(e, newValue);
    };
    var className = _param.className, style = _param.style, classesProp = _param.classes, id = _param.id, _param_variant = _param.variant, variant = _param_variant === void 0 ? "outlined" : _param_variant, _param_autoComplete = _param.autoComplete, autoComplete = _param_autoComplete === void 0 ? "off" : _param_autoComplete, _param_fullWidth = _param.fullWidth, fullWidth = _param_fullWidth === void 0 ? true : _param_fullWidth, _param_clearable = _param.clearable, clearable = _param_clearable === void 0 ? false : _param_clearable, icon = _param.icon, _param_iconColor = _param.iconColor, iconColor = _param_iconColor === void 0 ? "primary" : _param_iconColor, _param_iconSize = _param.iconSize, iconSize = _param_iconSize === void 0 ? "medium" : _param_iconSize, value = _param.value, errors = _param.errors, label = _param.label, placeholder = _param.placeholder, helperText = _param.helperText, InputComponent = _param.InputComponent, InputProps = _param.InputProps, onChange = _param.onChange, shrink = _param.shrink, clearableIconLabel = _param.clearableIconLabel, _param_clearableIcon = _param.clearableIcon, clearableIcon = _param_clearableIcon === void 0 ? "cancel" : _param_clearableIcon, _param_clearableIconColor = _param.clearableIconColor, clearableIconColor = _param_clearableIconColor === void 0 ? "inherit" : _param_clearableIconColor, clearableDisabled = _param.clearableDisabled, clearableVisible = _param.clearableVisible, onClearableClick = _param.onClearableClick, size = _param.size, rest = _objectWithoutProperties$j(_param, [
        "className",
        "style",
        "classes",
        "id",
        "variant",
        "autoComplete",
        "fullWidth",
        "clearable",
        "icon",
        "iconColor",
        "iconSize",
        "value",
        "errors",
        "label",
        "placeholder",
        "helperText",
        "InputComponent",
        "InputProps",
        "onChange",
        "shrink",
        "clearableIconLabel",
        "clearableIcon",
        "clearableIconColor",
        "clearableDisabled",
        "clearableVisible",
        "onClearableClick",
        "size"
    ]);
    var _inputRef_current, _inputRef_current1, _inputRef_current2;
    var tempID = useId();
    var controlID = id || tempID;
    var hasErrors = errors && errors.length > 0;
    var labelText = useLocalization(label);
    var placeholderText = useLocalization(placeholder);
    var translatedHelperText = useLocalization(hasErrors ? errors[0] : helperText);
    var _useState = _slicedToArray$i(useState(value || ""), 2), stateValue = _useState[0], updateStateValue = _useState[1];
    var _useStyles = useStyles$Q(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var setStateValue = function(value) {
        updateStateValue(value || "");
    };
    useEffect(function() {
        setStateValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        value
    ]);
    var inputRef = useRef();
    var isClearableDisabled = clearableDisabled ? clearableDisabled((_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.value) : !((_inputRef_current1 = inputRef.current) === null || _inputRef_current1 === void 0 ? void 0 : _inputRef_current1.value);
    var isClearableVisible = clearableVisible ? clearableVisible((_inputRef_current2 = inputRef.current) === null || _inputRef_current2 === void 0 ? void 0 : _inputRef_current2.value) : clearable && stateValue;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var handleClearableClick = useCallback(onClearableClick || function(e) {
        setStateValue("");
        onChange && onChange(e, null);
    }, [
        onClearableClick,
        onChange,
        setStateValue
    ]);
    return /*#__PURE__*/ jsx(TextField$2, _objectSpreadProps$t(_objectSpread$y({
        id: controlID,
        ref: ref,
        className: cx(classes.root, variant && classes["root_".concat(variant)], !label && classes.emptyLabel, className)
    }, rest), {
        style: style,
        variant: variant === "pill" ? "outlined" : variant,
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
            "aria-live": hasErrors ? "assertive" : "polite"
        },
        InputProps: {
            size: size,
            inputComponent: InputComponent ? "div" : "input",
            components: InputComponent ? {
                Input: InputComponent
            } : {},
            componentsProps: {
                input: _objectSpreadProps$t(_objectSpread$y({}, InputProps), {
                    // This is to support autofill fields
                    onInput: handleChange
                })
            },
            startAdornment: icon && /*#__PURE__*/ jsx(InputAdornment, {
                position: "start",
                children: /*#__PURE__*/ jsx(Icon, {
                    size: iconSize,
                    color: hasErrors ? "error" : iconColor,
                    children: icon
                })
            }),
            endAdornment: isClearableVisible && /*#__PURE__*/ jsx(InputAdornment, {
                position: "end",
                children: /*#__PURE__*/ jsx(IconButton, {
                    size: "small",
                    icon: clearableIcon,
                    color: clearableIconColor,
                    title: clearableIconLabel,
                    disabled: isClearableDisabled,
                    onClick: handleClearableClick
                })
            })
        }
    }));
});

function _defineProperty$B(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$x(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$B(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$s(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$s(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$s(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$i(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$i(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$i(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$P = makeStyles()(function(theme, params, classes) {
    var pillPadding = 2;
    var _obj, _obj1;
    return {
        root: {},
        root_standard: {},
        root_pill: {
            "& .MuiInputBase-root": {
                borderRadius: "500px",
                paddingLeft: theme.spacing(pillPadding),
                paddingRight: theme.spacing(pillPadding)
            },
            "& .MuiInputLabel-root": {
                paddingLeft: theme.spacing(pillPadding)
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline legend span": {
                marginLeft: theme.spacing(pillPadding * 0.75)
            }
        },
        root_outlined: _defineProperty$B({
            boxSizing: "border-box"
        }, "& .".concat(classes.inputField), {
            padding: theme.spacing(1.75),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            borderRadius: theme.shape.borderRadius
        }),
        root_filled: _defineProperty$B({
            "& .MuiChip-root": {
                marginTop: theme.spacing(1)
            }
        }, "& .".concat(classes.inputField), {
            paddingTop: theme.spacing(3),
            paddingRight: theme.spacing(1.5),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(1.5)
        }),
        root_size_small: _defineProperty$B({}, "& .".concat(classes.inputField), {
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(1.75),
            paddingRight: theme.spacing(1.75)
        }),
        root_size_medium: _defineProperty$B({}, "& .".concat(classes.inputField), {
            minHeight: theme.spacing(7.5)
        }),
        root_disabled: _defineProperty$B({}, "& .".concat(classes.inputField), {
            color: theme.palette.text.disabled,
            cursor: "default",
            opacity: 1
        }),
        popperContainer: {
            zIndex: theme.zIndex.modal,
            backgroundColor: theme.palette.background.paper,
            padding: 0,
            display: "flex",
            flexDirection: "row"
        },
        inputWrapper: {},
        inputField: createInputStyle(theme, classes.root),
        optionList: {
            listStyle: "none",
            margin: 0,
            padding: "8px 0",
            maxHeight: "40vh",
            overflow: "auto",
            flexGrow: 1
        },
        focused: {
            background: "green"
        },
        focusedVisible: {
            background: "purple"
        },
        optionListItem: (_obj1 = {
            minHeight: theme.spacing(6),
            display: "flex",
            overflow: "hidden",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
            paddingTop: theme.spacing(0.75),
            boxSizing: "border-box",
            outline: "0",
            WebkitTapHighlightColor: "transparent",
            paddingBottom: theme.spacing(0.75),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }, _defineProperty$B(_obj1, theme.breakpoints.up("sm"), {
            minHeight: "auto"
        }), _defineProperty$B(_obj1, "&.".concat(classes.focused), {
            backgroundColor: theme.palette.action.focus,
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }), _defineProperty$B(_obj1, "&:hover", {
            backgroundColor: theme.palette.action.hover,
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }), _defineProperty$B(_obj1, '&[aria-disabled="true"]', {
            opacity: theme.palette.action.disabledOpacity,
            pointerEvents: "none"
        }), _defineProperty$B(_obj1, "&.".concat(classes.focusVisible), {
            backgroundColor: theme.palette.action.focus
        }), _defineProperty$B(_obj1, '&[aria-selected="true"]', (_obj = {
            backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }, _defineProperty$B(_obj, "&.".concat(classes.focused), {
            backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: theme.palette.action.selected
            }
        }), _defineProperty$B(_obj, "&.".concat(classes.focusVisible), {
            backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        }), _obj)), _obj1)
    };
});
var AutocompleteInput = /*#__PURE__*/ forwardRef(function(_param, ref) {
    var className = _param.className; _param.style; var classesProp = _param.classes; _param.rootProps; var inputProps = _param.inputProps; _param.focused; var onBlur = _param.onBlur, onChange = _param.onChange, onFocus = _param.onFocus; _param.id; var rest = _objectWithoutProperties$i(_param, [
        "className",
        "style",
        "classes",
        "rootProps",
        "inputProps",
        "focused",
        "onBlur",
        "onChange",
        "onFocus",
        "id"
    ]);
    // @ts-expect-error ownerState is being added even though it is not part of the type
    rest.ownerState; var inputRest = _objectWithoutProperties$i(rest, [
        "ownerState"
    ]);
    var _useStyles = useStyles$P(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var onInputBlur = inputProps.onBlur, onInputChange = inputProps.onChange, onInputFocus = inputProps.onFocus; inputProps.onMouseDown; inputProps.className; var inputPropsRest = _objectWithoutProperties$i(inputProps, [
        "onBlur",
        "onChange",
        "onFocus",
        "onMouseDown",
        "className"
    ]);
    return /*#__PURE__*/ jsx("input", _objectSpreadProps$s(_objectSpread$x({
        className: cx(classes.inputField, className)
    }, inputRest, inputPropsRest), {
        onFocus: function(e) {
            onFocus && onFocus(e);
            onInputFocus && onInputFocus(e);
        },
        onBlur: function(e) {
            onBlur && onBlur(e);
            onInputBlur && onInputBlur(e);
        },
        onChange: function(e) {
            onChange && onChange(e);
            onInputChange && onInputChange(e);
        }
    }), inputPropsRest.id);
});
function SelectField(_param) {
    var defaultGetOptionLabel = function defaultGetOptionLabel(option) {
        if (!option) {
            return "";
        }
        return typeof option === "string" ? option : option.title;
    };
    var className = _param.className, style = _param.style, classesProp = _param.classes, _param_variant = _param.variant, variant = _param_variant === void 0 ? "outlined" : _param_variant, _param_disabled = _param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, _param_readOnly = _param.readOnly, readOnly = _param_readOnly === void 0 ? false : _param_readOnly, _param_size = _param.size, size = _param_size === void 0 ? "medium" : _param_size, _param_options = _param.options, options = _param_options === void 0 ? [] : _param_options, id = _param.id, _param_multiple = _param.multiple, multiple = _param_multiple === void 0 ? false : _param_multiple, _param_freeSolo = _param.freeSolo, freeSolo = _param_freeSolo === void 0 ? false : _param_freeSolo, renderOption = _param.renderOption, value = _param.value, _param_autoComplete = _param.autoComplete, autoComplete = _param_autoComplete === void 0 ? "on" : _param_autoComplete; _param.shrink; var _param_clearable = _param.clearable, clearable = _param_clearable === void 0 ? false : _param_clearable, getOptionLabel = _param.getOptionLabel, _param_noOptionsText = _param.noOptionsText, noOptionsText = _param_noOptionsText === void 0 ? [
        "No options"
    ] : _param_noOptionsText; _param.isOptionEqualToValue; var onChange = _param.onChange, rest = _objectWithoutProperties$i(_param, [
        "className",
        "style",
        "classes",
        "variant",
        "disabled",
        "readOnly",
        "size",
        "options",
        "id",
        "multiple",
        "freeSolo",
        "renderOption",
        "value",
        "autoComplete",
        "shrink",
        "clearable",
        "getOptionLabel",
        "noOptionsText",
        "isOptionEqualToValue",
        "onChange"
    ]);
    var _anchorRef_current;
    var _useStyles = useStyles$P(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var theme = useTheme();
    // ((option: string | TagType) => string) | undefined
    var noOptionsTranslatedText = useLocalization(noOptionsText);
    var _useAutocomplete = useAutocomplete({
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
        autoComplete: autoComplete === "on",
        autoHighlight: false,
        autoSelect: false,
        blurOnSelect: true,
        clearOnEscape: false,
        disabled: disabled,
        includeInputInList: false,
        readOnly: readOnly,
        onChange: onChange && function(e, value, reason) {
            if (reason === "selectOption") {
                onChange(e, value);
            }
        },
        openOnFocus: !freeSolo
    }), getRootProps = _useAutocomplete.getRootProps, getInputProps = _useAutocomplete.getInputProps, getInputLabelProps = _useAutocomplete.getInputLabelProps; _useAutocomplete.getPopupIndicatorProps; _useAutocomplete.getClearProps; _useAutocomplete.getTagProps; var getListboxProps = _useAutocomplete.getListboxProps, getOptionProps = _useAutocomplete.getOptionProps; _useAutocomplete.value; _useAutocomplete.dirty; _useAutocomplete.id; var popupOpen = _useAutocomplete.popupOpen, focused = _useAutocomplete.focused; _useAutocomplete.focusedTag; // anchorEl,
    var // setAnchorEl,
    groupedOptions = _useAutocomplete.groupedOptions, inputValue = _useAutocomplete.inputValue;
    var inputProps = getInputProps();
    var rootProps = getRootProps();
    var inputRef = inputProps === null || inputProps === void 0 ? void 0 : inputProps.ref;
    var anchorRef = useRef(null);
    var renderOptionFunction = renderOption || function(option, props, index, options) {
        if (!option) {
            return null;
        }
        var title = typeof option === "string" ? option : option.title;
        var subtitle = typeof option === "string" ? null : option.subtitle;
        return /*#__PURE__*/ jsx(ListItem, _objectSpreadProps$s(_objectSpread$x({
            className: cx(classes.optionListItem)
        }, props), {
            children: /*#__PURE__*/ jsx(ListItemText, {
                primary: title,
                secondary: subtitle
            })
        }));
    };
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx(InputBase, _objectSpreadProps$s(_objectSpread$x({
                className: cx(classes.root, classes["root_".concat(variant)], classes["root_size_".concat(size)], disabled && classes.root_disabled, className),
                ref: anchorRef,
                shrink: undefined,
                style: style,
                variant: variant,
                readOnly: readOnly,
                disabled: disabled,
                size: size,
                autoComplete: "off",
                value: inputValue
            }, rest), {
                InputLabelProps: getInputLabelProps(),
                InputComponent: AutocompleteInput,
                clearableIcon: focused ? "arrow_drop_up" : "arrow_drop_down",
                clearableVisible: function() {
                    return !freeSolo;
                },
                clearableDisabled: function() {
                    return freeSolo || popupOpen;
                },
                onClearableClick: function(e) {
                    console.log(popupOpen);
                    if (!popupOpen) {
                        inputRef.current.focus();
                    }
                },
                InputProps: {
                    rootProps: rootProps,
                    inputProps: inputProps,
                    focused: focused
                }
            })),
            /*#__PURE__*/ jsx(Popper, {
                role: "menu",
                anchorEl: anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current,
                open: popupOpen,
                disablePortal: false,
                style: {
                    width: "calc(".concat(anchorRef === null || anchorRef === void 0 ? void 0 : (_anchorRef_current = anchorRef.current) === null || _anchorRef_current === void 0 ? void 0 : _anchorRef_current.clientWidth, "px - ").concat(theme.spacing ? theme.spacing(1) : 8, ")")
                },
                transition: true,
                modifiers: [
                    {
                        name: "flip",
                        enabled: true,
                        options: {
                            altBoundary: true,
                            rootBoundary: "document",
                            padding: theme.spacing ? theme.spacing(1) : 8
                        }
                    },
                    {
                        name: "preventOverflow",
                        enabled: true,
                        options: {
                            altAxis: true,
                            altBoundary: true,
                            tether: true,
                            rootBoundary: "document",
                            padding: theme.spacing ? theme.spacing(1) : 8
                        }
                    }
                ],
                placement: "bottom",
                children: function(param) {
                    var TransitionProps = param.TransitionProps;
                    return /*#__PURE__*/ jsx(Fade, _objectSpreadProps$s(_objectSpread$x({}, TransitionProps), {
                        children: /*#__PURE__*/ jsx(Container, {
                            elevation: 1,
                            className: cx(classes.popperContainer),
                            children: /*#__PURE__*/ jsxs(List, _objectSpreadProps$s(_objectSpread$x({
                                className: cx(classes.optionList)
                            }, getListboxProps()), {
                                children: [
                                    groupedOptions.map(function(option, index, options) {
                                        return renderOptionFunction(option, getOptionProps({
                                            option: option,
                                            index: index
                                        }), index, options);
                                    }),
                                    groupedOptions.length === 0 && renderOptionFunction(noOptionsTranslatedText, getOptionProps({
                                        option: noOptionsTranslatedText,
                                        index: -1
                                    }), -1, options)
                                ]
                            }))
                        })
                    }));
                }
            })
        ]
    });
}

function _arrayLikeToArray$m(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$h(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles$9(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$m(arr);
}
function _defineProperty$A(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray$9(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit$h(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$h() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$9() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$w(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$A(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$r(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$r(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$r(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray$h(arr, i) {
    return _arrayWithHoles$h(arr) || _iterableToArrayLimit$h(arr, i) || _unsupportedIterableToArray$m(arr, i) || _nonIterableRest$h();
}
function _toConsumableArray$9(arr) {
    return _arrayWithoutHoles$9(arr) || _iterableToArray$9(arr) || _unsupportedIterableToArray$m(arr) || _nonIterableSpread$9();
}
function _unsupportedIterableToArray$m(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$m(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$m(o, minLen);
}
var useStyles$O = makeStyles()(function(theme) {
    return {
        root: {
            flexGrow: 1,
            overflow: "auto",
            background: theme.palette.background.default
        }
    };
});
function ThemePaletteExplorer(param) {
    var className = param.className, style = param.style, classesProp = param.classes, title = param.title, theme = param.theme;
    var _useStyles = useStyles$O(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var palette = theme.palette;
    var baseKeys = [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error"
    ];
    var additionalKeys = [];
    // Extract all of the colour keys
    var colorSwatches = Object.entries(palette).reduce(function(acc, param) {
        var _param = _slicedToArray$h(param, 2), key = _param[0], value = _param[1];
        if (value.main) {
            acc[key] = value;
            if (!baseKeys.includes(key) && !additionalKeys.includes(key)) {
                additionalKeys.push(key);
            }
        }
        return acc;
    }, {});
    var background = palette.background;
    var greys = palette.grey;
    return /*#__PURE__*/ jsx(ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ jsxs(Container, {
            className: cx(classes.root, className),
            style: _objectSpreadProps$r(_objectSpread$w({}, style), {
                color: theme.palette.text.primary
            }),
            children: [
                /*#__PURE__*/ jsx(Typography, {
                    variant: "h6",
                    children: title
                }),
                _toConsumableArray$9(baseKeys).concat(_toConsumableArray$9(additionalKeys.sort())).map(function(key) {
                    return /*#__PURE__*/ jsx(ColorChart, {
                        title: key,
                        colors: colorSwatches[key]
                    }, key);
                }),
                /*#__PURE__*/ jsx(ColorChart, {
                    title: "backgrounds",
                    colors: background
                }),
                /*#__PURE__*/ jsx(ColorChart, {
                    title: "greys",
                    colors: greys
                })
            ]
        })
    });
}

function _arrayLikeToArray$l(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$g(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$z(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$g(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$g() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$v(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$z(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$q(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$q(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$q(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray$g(arr, i) {
    return _arrayWithHoles$g(arr) || _iterableToArrayLimit$g(arr, i) || _unsupportedIterableToArray$l(arr, i) || _nonIterableRest$g();
}
function _unsupportedIterableToArray$l(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$l(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$l(o, minLen);
}
var useStyles$N = makeStyles()(function(theme) {
    return {
        root: {
            overflow: "hidden",
            padding: theme.spacing(3),
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
        },
        select: {},
        explorer: {}
    };
});
function ThemeVariantExplorer(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_themes = param.themes, themes = _param_themes === void 0 ? {} : _param_themes;
    var _useStyles = useStyles$N(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var _useState = _slicedToArray$g(useState("default"), 2), selectedThemeName = _useState[0], setSelectedThemeName = _useState[1];
    useTheme();
    var availableThemes = Object.keys(themes);
    // It is possible that we are rendering outside a theme provider so
    // provide one just in case
    var selectedTheme = useMemo(function() {
        return themes && themes[selectedThemeName] || createTheme({
            palette: {
                mode: "light"
            }
        });
    }, [
        selectedThemeName,
        themes
    ]);
    return /*#__PURE__*/ jsx(ThemeProvider, {
        theme: selectedTheme,
        children: /*#__PURE__*/ jsxs("div", {
            className: cx(classes.root, className),
            style: _objectSpreadProps$q(_objectSpread$v({}, style), {
                backgroundColor: selectedTheme.palette.background.default
            }),
            children: [
                /*#__PURE__*/ jsx(SelectField, {
                    className: cx(classes.select),
                    label: "Select Theme",
                    placeholder: "Choose a theme to display...",
                    icon: "palette",
                    options: availableThemes,
                    value: selectedThemeName,
                    onChange: function(e, value) {
                        setSelectedThemeName(value || "default");
                    }
                }),
                /*#__PURE__*/ jsx(ThemePaletteExplorer, {
                    className: cx(classes.explorer),
                    title: selectedThemeName || "base",
                    theme: selectedTheme
                })
            ]
        })
    });
}

/*global gtag*/ function _defineProperty$y(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$u(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$y(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$p(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$p(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$p(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$h(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$h(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$h(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function createApp(props) {
    var createRepositories = props.createRepositories, appWrapperProps = _objectWithoutProperties$h(props, [
        "createRepositories"
    ]);
    var repositories = undefined;
    if (createRepositories) {
        repositories = createRepositories(props.config, props.custom || {});
    }
    var AppContainer = function(_param) {
        var _param_DefaultComponent = _param.DefaultComponent, DefaultComponent = _param_DefaultComponent === void 0 ? props.DefaultComponent : _param_DefaultComponent, _param_defaultComponentProps = _param.defaultComponentProps, defaultComponentProps = _param_defaultComponentProps === void 0 ? props.defaultComponentProps : _param_defaultComponentProps, rest = _objectWithoutProperties$h(_param, [
            "DefaultComponent",
            "defaultComponentProps"
        ]);
        return /*#__PURE__*/ jsx(App, _objectSpreadProps$p(_objectSpread$u(_objectSpreadProps$p(_objectSpread$u({}, appWrapperProps), {
            DefaultComponent: DefaultComponent,
            defaultComponentProps: defaultComponentProps
        }), rest), {
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
 */ var createDateRangeConstraint = function(param) {
    var startFieldID = param.startFieldID, _param_requireStart = param.requireStart, requireStart = _param_requireStart === void 0 ? false : _param_requireStart, endFieldID = param.endFieldID, _param_requireEnd = param.requireEnd, requireEnd = _param_requireEnd === void 0 ? false : _param_requireEnd;
    if (!startFieldID || !endFieldID) {
        throw new Error("startFieldID and endFieldID must be specified");
    }
    return function(data, field, value, definition) {
        var error = null;
        var id = field.id, _field_label = field.label, label = _field_label === void 0 ? id : _field_label;
        var startValue = data[startFieldID], endValue = data[endFieldID];
        var startFieldLabel = definition.fields[startFieldID].label || startFieldID;
        var endFieldLabel = definition.fields[endFieldID].label || endFieldID;
        var isStartField = id === startFieldID;
        var isEndField = !isStartField;
        if (!value && isStartField && requireStart) {
            error = [
                "{0} is required",
                startFieldLabel
            ];
        }
        if (!value && isEndField && requireEnd) {
            error = [
                "{0} is required",
                endFieldLabel
            ];
        }
        if (value && isStartField && value >= endValue) {
            error = [
                "{0} must be before {1}",
                label,
                endFieldLabel
            ];
        }
        if (value && isEndField && value <= startValue) {
            error = [
                "{0} must be after {1}",
                label,
                startFieldLabel
            ];
        }
        return error;
    };
};

function createEmailConstraint() {
    return function(data, field, value) {
        value = value || "";
        var error = value && !isEmail(value) ? [
            "{0} must be a valid email address",
            field.label
        ] : null;
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
 */ var isNotSet = function(value) {
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
 */ var createLengthConstraint = function(min, max) {
    return function(data, field, value) {
        // If no value is provided then pass
        if (isNotSet(value)) {
            return null;
        }
        var label = field.label;
        var stringValue = value;
        if (!isNotSet(min) && !isNotSet(max)) {
            // Between constraint
            if (stringValue.length < min || stringValue.length > max) {
                return [
                    "{0} should be {1} to {2} characters. [{3}]",
                    label,
                    min,
                    max,
                    stringValue.length
                ];
            }
        } else if (!isNotSet(min)) {
            if (stringValue.length < min) {
                return [
                    "{0} should be at least {1} characters.  [{2}]",
                    label,
                    min,
                    stringValue.length
                ];
            }
        // Min constraint
        } else if (!isNotSet(max)) {
            // Max constraint
            if (stringValue.length > max) {
                return [
                    "{0} should be at most {1} characters.  [{2}]",
                    label,
                    max,
                    stringValue.length
                ];
            }
        }
        // Got here so pass
        return null;
    };
};

var createMatchConstraint = function(param) {
    var matchFieldID = param.matchFieldID;
    if (!matchFieldID) {
        throw new Error("matchFieldID must be specified");
    }
    return function(data, field, value, definition) {
        var id = field.id, _field_label = field.label, label = _field_label === void 0 ? id : _field_label;
        var matchValue = data[matchFieldID];
        var matchFieldLabel = definition.fields[matchFieldID].label || matchFieldID;
        var error = !_.isEqual(value, matchValue) ? [
            "{0} must match {1}",
            label,
            matchFieldLabel
        ] : null;
        return error;
    };
};

var NAME_FORMAT = RegExp("^[\\p{L}|\\p{N}]+.*[\\p{L}|\\p{N}]+$", "u");
var NAME_REGEX = new RegExp(NAME_FORMAT);
var MIN_LENGTH = 4;
/**
 * Validation function used for models.
 * Checks that the value is a valid name and is at least 4 or more characters
 * @param  {Object}  model The full object being validated
 * @param  {Object}  field The description of the field being validated
 * @param  {Object}  value The value that is being validated
 * @return {String}       The validation error, or null if the value was okay
 */ function createNameConstraint() {
    return function(data, field, value) {
        var error = null;
        value = value || "";
        if (value.length >= MIN_LENGTH && !isName(value)) {
            // For a better user experience, give a specific error
            error = NAME_REGEX.test(value) ? [
                "{0} can contain only letterSpacing, numbers, hyphens, underscores and spaces",
                field.label
            ] : [
                "{0} must start and end with letters or numbers",
                field.label
            ];
        } else if (value.length < MIN_LENGTH) {
            error = [
                "{0} must be at least {1} characters",
                field.label,
                MIN_LENGTH
            ];
        } else if (typeof value !== "string") {
            error = [
                "{0} must be a text value",
                field.label
            ];
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
 */ function createPasswordConstraint() {
    return function(data, field, value) {
        value = value || "";
        var error = !isValidPassword(value) ? [
            "{0} requires at least one uppercase letter, one lowercase letter, one number",
            field.label
        ] : null;
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
 */ var createURLConstraint = function() {
    var requireHTTPS = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return function(data, field, value) {
        value = value || "";
        var error = value && !isURL(value) ? [
            "{0} must be a valid url",
            field.label
        ] : null;
        if (value && requireHTTPS && !value.toLowerCase().startsWith("https:")) {
            error = [
                "{0} must be a secured url (https)",
                field.label
            ];
        }
        return error;
    };
};

function _arrayLikeToArray$k(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$f(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles$8(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$k(arr);
}
function _iterableToArray$8(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit$f(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$f() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$8() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$f(arr, i) {
    return _arrayWithHoles$f(arr) || _iterableToArrayLimit$f(arr, i) || _unsupportedIterableToArray$k(arr, i) || _nonIterableRest$f();
}
function _toConsumableArray$8(arr) {
    return _arrayWithoutHoles$8(arr) || _iterableToArray$8(arr) || _unsupportedIterableToArray$k(arr) || _nonIterableSpread$8();
}
function _unsupportedIterableToArray$k(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$k(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$k(o, minLen);
}
function isComponentFieldDefinition(field) {
    return field.render !== undefined;
}
function isComponentField(field) {
    return field.render !== undefined;
}
function normaliseValidations(field, validations) {
    var normalisedValidations = _toConsumableArray$8(validations || []);
    // Add min and max validations
    if (field.minLength !== null && field.minLength !== undefined || field.maxLength !== null && field.maxLength !== undefined) {
        normalisedValidations.unshift(createLengthConstraint(field.minLength, field.maxLength));
    }
    // Ensure required fields validate correctly
    if (field.required) {
        normalisedValidations.unshift(function(data, field, value, model) {
            var label = field.label;
            return !value || value.trim && value.trim() === "" ? [
                "{0} is required",
                label
            ] : null;
        });
    }
    return normalisedValidations.filter(function(i) {
        return i;
    });
}
function normaliseField(key, field) {
    if (isComponentFieldDefinition(field)) {
        return {
            id: key,
            render: field.render,
            getValue: field.getValue
        };
    } else {
        var normalisedField = {
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
            default: field.default || null,
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
    var layout = modelDefinition.layout || Object.keys(modelDefinition.fields).map(function(f) {
        return [
            f
        ];
    });
    var modelTitle = modelDefinition.title || _$1.startCase(modelDefinition.name);
    var fieldNames = Object.keys(modelDefinition.fields);
    var fields = Object.entries(modelDefinition.fields).reduce(function(acc, param) {
        var _param = _slicedToArray$f(param, 2), key = _param[0], fieldDefinition = _param[1];
        acc[key] = normaliseField(key, fieldDefinition);
        return acc;
    }, {});
    var model = {
        name: modelDefinition.name,
        identityField: modelDefinition.identityField || "id",
        primaryTextField: modelDefinition.primaryTextField || Object.keys(fields).find(function(field) {
            return fields[field].type === "string";
        }) || "",
        secondaryTextField: modelDefinition.secondaryTextField,
        featureImageField: modelDefinition.featureImageField,
        icon: modelDefinition.icon,
        title: modelTitle,
        singularTitle: modelDefinition.singularTitle || pluralize.singular(modelTitle),
        pluralTitle: modelDefinition.pluralTitle || pluralize(modelTitle),
        fields: fields,
        layout: layout,
        listLayout: modelDefinition.listLayout || layout.flatMap(function(l) {
            return Array.isArray(l) ? l : [
                l
            ];
        }),
        generateModel: modelDefinition.generateModel || function(overrides) {
            return Object.keys(fields).map(function(fieldName) {
                return fields[fieldName];
            }).filter(function(field) {
                return !isComponentField(field);
            })// Typescript doesn't pick up the guard in a filter
            .map(function(field) {
                return field;
            }).filter(function(field) {
                return !field.excludeFromModel;
            }).reduce(function(acc, field) {
                acc[field.id] = field.default === undefined || field.default === null ? overrides && overrides[field.id] || null : typeof field.default === "function" ? field.default(overrides) : field.default;
                return acc;
            }, {});
        }
    };
    model.validate = modelDefinition.validate || function(data) {
        var field = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fieldNames, errors = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        // If the field is not an array, make it one so that we can treat everything the same
        field = Array.isArray(field) ? field : [
            field
        ];
        return field.reduce(function(acc, fieldName) {
            var fieldDef = fields[fieldName];
            if (!isComponentField(fieldDef)) {
                acc[fieldName] = (fieldDef.validations || []).map(function(validate) {
                    return validate(data, fieldDef, data[fieldDef.id], model);
                }).filter(function(error) {
                    return error;
                });
            }
            return acc;
        }, errors);
    };
    return model;
}

function _arrayLikeToArray$j(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$e(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$x(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$e(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$e() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$t(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$x(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$o(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$o(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$o(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray$e(arr, i) {
    return _arrayWithHoles$e(arr) || _iterableToArrayLimit$e(arr, i) || _unsupportedIterableToArray$j(arr, i) || _nonIterableRest$e();
}
function _unsupportedIterableToArray$j(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$j(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$j(o, minLen);
}
var greys = {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161"
};
function createThemeVariants(theme) {
    var overrides = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _basePalette_background, _basePalette_background1, _basePalette_background2, _basePalette_background3;
    var name = theme.name, basePalette = theme.palette, _theme_mode = theme.mode, mode = _theme_mode === void 0 ? "light" : _theme_mode;
    var mainPalette = createColorPalette(basePalette);
    var tint = basePalette.tint || 0;
    var severityTint = Math.min(10, 100 - tint);
    var backgrounds = {
        light: mode === "light" ? {
            paper: ((_basePalette_background = basePalette.background) === null || _basePalette_background === void 0 ? void 0 : _basePalette_background.paper) || "#ffffff",
            default: ((_basePalette_background1 = basePalette.background) === null || _basePalette_background1 === void 0 ? void 0 : _basePalette_background1.default) || "#fafafa"
        } : {
            paper: "#ffffff",
            default: "#fafafa"
        },
        dark: mode === "dark" ? {
            paper: ((_basePalette_background2 = basePalette.background) === null || _basePalette_background2 === void 0 ? void 0 : _basePalette_background2.paper) || "#424242",
            default: ((_basePalette_background3 = basePalette.background) === null || _basePalette_background3 === void 0 ? void 0 : _basePalette_background3.default) || "#303030"
        } : {
            paper: "#424242",
            default: "#303030"
        }
    };
    var _obj;
    return _obj = {}, _defineProperty$x(_obj, name, createTheme(_.merge({}, defaultThemeOptions, {
        palette: mainPalette
    }, _objectSpread$t({}, requiredThemeOptions), _objectSpreadProps$o(_objectSpread$t({}, overrides), {
        palette: {
            mode: mode,
            background: {
                paper: tinycolor(backgrounds[mode].paper).mix(mainPalette.secondary[mode], severityTint).toHex8String(),
                default: tinycolor(backgrounds[mode].default).mix(mainPalette.secondary[mode], severityTint).toHex8String()
            },
            grey: Object.entries(greys).reduce(function(acc, param) {
                var _param = _slicedToArray$e(param, 2), key = _param[0], color = _param[1];
                acc[key] = tinycolor(color).mix(mainPalette.secondary[mode], severityTint).toHex8String();
                return acc;
            }, {})
        }
    }), {
        mixins: extendThemeWithMixins(mainPalette)
    }))), _defineProperty$x(_obj, "".concat(name, "Dark"), createTheme(_.merge({}, defaultThemeOptions, {
        palette: Object.entries(mainPalette).reduce(function(acc, param) {
            var _param = _slicedToArray$e(param, 2), key = _param[0], swatch = _param[1];
            acc[key] = {
                main: swatch === null || swatch === void 0 ? void 0 : swatch.light
            };
            return acc;
        }, {})
    }, _objectSpread$t({}, requiredThemeOptions), _objectSpreadProps$o(_objectSpread$t({}, overrides), {
        palette: {
            mode: "dark",
            background: {
                paper: tinycolor(backgrounds.dark.paper).mix(mainPalette.secondary.dark, severityTint).toHex8String(),
                default: tinycolor(backgrounds.dark.default).mix(mainPalette.secondary.dark, severityTint).toHex8String()
            },
            grey: Object.entries(greys).reduce(function(acc, param) {
                var _param = _slicedToArray$e(param, 2), key = _param[0], color = _param[1];
                acc[key] = tinycolor(color).mix(mainPalette.secondary.dark, severityTint).toHex8String();
                return acc;
            }, {})
        }
    }), {
        mixins: extendThemeWithMixins(mainPalette)
    }))), _defineProperty$x(_obj, "".concat(name, "Light"), createTheme(_.merge({}, defaultThemeOptions, {
        palette: Object.entries(mainPalette).reduce(function(acc, param) {
            var _param = _slicedToArray$e(param, 2), key = _param[0], swatch = _param[1];
            acc[key] = {
                main: swatch === null || swatch === void 0 ? void 0 : swatch.dark
            };
            return acc;
        }, {})
    }, _objectSpread$t({}, requiredThemeOptions), _objectSpreadProps$o(_objectSpread$t({}, overrides), {
        palette: {
            mode: "light",
            background: {
                paper: tinycolor(backgrounds.light.paper).mix(mainPalette.secondary.light, severityTint).toHex8String(),
                default: tinycolor(backgrounds.light.default).mix(mainPalette.secondary.light, severityTint).toHex8String()
            },
            grey: Object.entries(greys).reduce(function(acc, param) {
                var _param = _slicedToArray$e(param, 2), key = _param[0], color = _param[1];
                acc[key] = tinycolor(color).mix(mainPalette.secondary.light, severityTint).toHex8String();
                return acc;
            }, {})
        }
    }), {
        mixins: extendThemeWithMixins(mainPalette)
    }))), _obj;
}
/**
 * THEME DEFAULTS
 */ var defaultThemeOptions = {
    typography: {
        fontFamily: [
            "Muli",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif"
        ].join(","),
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600
    }
};
var requiredThemeOptions = {
    typography: {
        htmlFontSize: 10,
        fontSize: 10
    }
};
function extendThemeWithMixins(palette) {
    return {
        border: function() {
            var width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
            return {
                borderWidth: width,
                borderStyle: "solid",
                borderColor: palette["divider"]
            };
        },
        borderLeft: function() {
            var width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
            return {
                borderLeftWidth: width,
                borderStyle: "solid",
                borderColor: palette["divider"]
            };
        },
        borderRight: function() {
            var width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
            return {
                borderRightWidth: width,
                borderStyle: "solid",
                borderColor: palette["divider"]
            };
        },
        borderTop: function() {
            var width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
            return {
                borderTopWidth: width,
                borderStyle: "solid",
                borderColor: palette["divider"]
            };
        },
        borderBottom: function() {
            var width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
            return {
                borderBottomWidth: width,
                borderStyle: "solid",
                borderColor: palette["divider"]
            };
        }
    };
}

function _arrayLikeToArray$i(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles$7(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$i(arr);
}
function _iterableToArray$7(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread$7() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$7(arr) {
    return _arrayWithoutHoles$7(arr) || _iterableToArray$7(arr) || _unsupportedIterableToArray$i(arr) || _nonIterableSpread$7();
}
function _unsupportedIterableToArray$i(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$i(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$i(o, minLen);
}
/**
 * Extracts the routes that can be used with react router from
 * the modules that have been specified
 * @param modules The modules to extract the routes for
 * @returns the route definitions from the modules
 */ function extractRoutesFromModules(modules) {
    var accumulator = [];
    // Top level modules must provide a layout
    var errors = modules.filter(function(m) {
        return m.enabled;
    }).map(function(m) {
        if (!m.layout) {
            return "".concat(m.name, " is a top level module so must provide a layout");
        }
        return null;
    }).filter(function(i) {
        return i;
    });
    if (errors.length > 0) {
        throw new Error(errors.join("/n"));
    }
    extractRoutesRecursive(accumulator, modules);
    return accumulator;
}
function extractRoutesRecursive(accumulator, module) {
    if (Array.isArray(module)) {
        // This is an array of modules, so iterate through each
        module.filter(function(m) {
            return m.enabled;
        }).forEach(function(m) {
            return extractRoutesRecursive(accumulator, m);
        });
    } else {
        extractRoutesFromModule(accumulator, module);
    }
}
function extractRoutesFromModule(accumulator, module, currentRoute) {
    var currentPath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
    var route;
    var parentPath = currentPath === "" || currentPath === "/" ? "" : "".concat(currentPath, "/");
    var moduleTitle = module.title || module.name;
    var modulePath = "".concat(module.path || _.camelCase(moduleTitle));
    var absolutePath = "".concat(parentPath).concat(modulePath);
    if (module.layout && !module.isChildLayout) {
        // This route contains a layout so will be a top level route
        route = {
            title: moduleTitle,
            icon: module.icon || undefined,
            navigation: module.navigation || false,
            component: module.layout || null,
            componentProps: module.layoutComponentProps || undefined,
            auth: module.auth || undefined,
            routes: module.component ? [
                {
                    title: moduleTitle,
                    icon: module.icon || undefined,
                    navigation: module.navigation || false,
                    component: module.component || undefined,
                    componentProps: module.componentProps || undefined,
                    auth: module.auth || undefined,
                    routes: undefined,
                    index: true
                }
            ] : module.routes ? [] : undefined,
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
            routes: module.component ? [
                {
                    title: moduleTitle,
                    icon: module.icon || undefined,
                    navigation: module.navigation || false,
                    component: module.component || undefined,
                    componentProps: module.componentProps || undefined,
                    auth: module.auth || undefined,
                    routes: undefined,
                    index: true
                }
            ] : module.routes ? [] : undefined,
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
        var _route_routes;
        if (!route.routes) {
            route.routes = [];
        }
        (_route_routes = route.routes).push.apply(_route_routes, _toConsumableArray$7(cloneRoutes(module.routes)));
    }
    // Add the submodule routes
    if (module.modules) {
        module.modules.forEach(function(m) {
            extractRoutesFromModule(accumulator, m, route, absolutePath);
        });
    }
}
function cloneRoutes(routes) {
    return routes.map(function(r) {
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
    return JSON.parse(localStorage.getItem(key) || "null");
}

function redirectTo(url, params, hashParams) {
    var redirect = url + (params ? (url.indexOf("?") ? "?" : "&") + Object.keys(params).map(function(key) {
        return "".concat(key, "=").concat(encodeURIComponent(params[key]));
    }).join("&") : "") + (hashParams ? (url.indexOf("#") ? "#" : "&") + Object.keys(hashParams).map(function(key) {
        return "".concat(key, "=").concat(encodeURIComponent(hashParams[key]));
    }).join("&") : "");
    window.location.href = redirect;
}

function normaliseModel(path, modelDefinition) {
    var derivedName = path.split("/").pop() || path;
    return createModel(_.merge({}, {
        name: derivedName,
        fields: {}
    }, modelDefinition || {}));
}
function createModelRepository(props) {
    // TODO: Need to resolve the differences between Model and ModelDefinition
    var descriptor = normaliseModel(props.dtoPath, props.model);
    // If the model has an identityField then add a transform to convert to id
    var _props_transforms = props.transforms, transforms = _props_transforms === void 0 ? {} : _props_transforms, model = props.model;
    if (model === null || model === void 0 ? void 0 : model.identityField) {
        // Redeclaring because of TS
        var identityField = model.identityField;
        if (!transforms.dtoTransforms) {
            transforms.dtoTransforms = [];
        }
        transforms.dtoTransforms.unshift(function(d) {
            d.id = d[identityField];
            // We don't actually know if d is of type T at this point
            // as there could be other transforms
            return d;
        });
    }
    return {
        getDescriptor: function getDescriptor() {
            return descriptor;
        },
        useRepository: function(deps) {
            return useObservableRepository({
                dtoPath: props.dtoPath,
                baseURL: props.baseURL,
                global: false,
                axios: props.axios,
                transforms: transforms
            }, deps || []);
        },
        createRepository: function(args, deps) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useObservableRepository(_.merge({}, {
                dtoPath: props.dtoPath,
                baseURL: props.baseURL,
                global: false,
                axios: props.axios,
                transforms: transforms
            }, args), deps || []);
        }
    };
}

function createModuleFromRepository(repositoryName, repositoryDefinition, layout, layoutComponentProps, overrides) {
    return function(repositories, config) {
        var repository = repositories[repositoryName];
        if (!repository) {
            throw new Error("The application repository '".concat(repositoryName, "' does not exist in this application"));
        }
        var dataDefinition = repository.getDefinition(repositoryDefinition);
        if (!dataDefinition) {
            console.error("use one of ", Object.keys(repository.getDefinitions()));
            throw new Error("The data definition for '".concat(repositoryDefinition, "' does not exist in the repository '").concat(repositoryName, "'"));
        }
        var dataDescriptor = dataDefinition.getDescriptor();
        var icon = dataDescriptor.icon, name = dataDescriptor.name, pluralTitle = dataDescriptor.pluralTitle;
        var repositoryDefaultProps = {
            name: name,
            title: pluralTitle,
            icon: icon,
            enabled: true,
            path: "".concat(name, "/*"),
            navigation: true,
            index: true,
            layout: layout,
            layoutComponentProps: layoutComponentProps,
            isChildLayout: true,
            routes: [
                {
                    index: true,
                    component: "div"
                },
                {
                    path: "new",
                    component: "div"
                },
                {
                    path: ":recordID",
                    component: "div"
                }
            ]
        };
        return _.merge({}, repositoryDefaultProps, overrides);
    };
}

function isModuleConfig(module) {
    return typeof module !== "function";
}
function isModuleConfigFunction(module) {
    return typeof module === "function";
}
function findModule(moduleName, modules) {
    if (!modules) {
        return null;
    }
    for(var i = 0; i < modules.length; i++){
        var module = modules[i];
        if (module.name === moduleName) {
            return modules[i];
        } else {
            var retVal = null;
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

function _arrayLikeToArray$h(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles$6(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$h(arr);
}
function _iterableToArray$6(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread$6() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$6(arr) {
    return _arrayWithoutHoles$6(arr) || _iterableToArray$6(arr) || _unsupportedIterableToArray$h(arr) || _nonIterableSpread$6();
}
function _unsupportedIterableToArray$h(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$h(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$h(o, minLen);
}
function resolveRecursive(module, parentModule, repositories, config) {
    // Resolve functional modules
    var resolvedModule = isModuleConfigFunction(module) ? module(repositories || {}, config) : module;
    var resolvedPath = resolvedModule.path === undefined ? _.camelCase(module.name) : resolvedModule.path;
    var parentPath = (parentModule === null || parentModule === void 0 ? void 0 : parentModule.path) ? parentModule.path === "/" ? parentModule.path : parentModule.path + "/" : "";
    var normalisedModule = {
        name: resolvedModule.name,
        icon: resolvedModule.icon,
        navigation: resolvedModule.navigation || false,
        component: resolvedModule.component,
        componentProps: resolvedModule.componentProps,
        title: resolvedModule.title || pluralize(_.startCase(module.name)),
        path: resolvedPath,
        fullPath: "".concat(parentPath).concat(resolvedPath),
        // The AUTH is propagated to make it easier to check if the user is in ALL roles allowed for a route
        auth: resolvedModule.auth || (parentModule === null || parentModule === void 0 ? void 0 : parentModule.auth) ? _toConsumableArray$6(Array.from(new Set(_toConsumableArray$6(resolvedModule.auth || []).concat(_toConsumableArray$6((parentModule === null || parentModule === void 0 ? void 0 : parentModule.auth) || []))))) : undefined,
        enabled: resolvedModule.enabled,
        layout: resolvedModule.layout,
        layoutComponentProps: resolvedModule.layoutComponentProps,
        isChildLayout: Boolean(resolvedModule.isChildLayout),
        routes: resolvedModule.routes ? cloneRoutes(resolvedModule.routes) : undefined,
        // Modules are resolved after as the auth needs to be propagated
        modules: undefined
    };
    var childModules = resolvedModule.modules || [];
    // Resolve modules and routes
    if (childModules.length > 0) {
        normalisedModule.modules = childModules.map(function(m) {
            return resolveRecursive(m, normalisedModule, repositories, config);
        }).filter(function(m) {
            return m.enabled;
        });
    }
    return normalisedModule;
}
/**
 * Ensures that all paths, layouts, auth, and enabled properties are
 * propagated through the hierarchy
 * to make it easier to deal with in the routing logic
 */ function resolveModules(modules, repositories, config) {
    if (!modules || modules.length === 0) {
        return [];
    }
    return modules.map(function(m) {
        return resolveRecursive(m, undefined, repositories, config);
    }).filter(function(m) {
        return m.enabled;
    });
}

function _arrayLikeToArray$g(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$d(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$w(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$d(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$d() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$s(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$w(target, key, source[key]);
        });
    }
    return target;
}
function _slicedToArray$d(arr, i) {
    return _arrayWithHoles$d(arr) || _iterableToArrayLimit$d(arr, i) || _unsupportedIterableToArray$g(arr, i) || _nonIterableRest$d();
}
function _unsupportedIterableToArray$g(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$g(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$g(o, minLen);
}
var AppContext = /*#__PURE__*/ React.createContext({});
function AppContextComponent(param) {
    var children = param.children, _param_modules = param.modules, modules = _param_modules === void 0 ? [] : _param_modules, themes = param.themes, config = param.config, custom = param.custom, getAuthContext = param.getAuthContext, repositories = param.repositories;
    // In order to allow apps to render inside apps, we check that the context has not
    // already been set
    var application = useApplication();
    // If the context has been set already then we are the child app
    var isChildApp = Object.keys(application).length > 0;
    // Resolved modules are all of the modules that have been loaded
    var _useState = _slicedToArray$d(useState([]), 2), resolvedModules = _useState[0], setResolvedModules = _useState[1];
    var _useState1 = _slicedToArray$d(useState([]), 2), routes = _useState1[0], setRoutes = _useState1[1];
    var themeMap = useMemoDeepCompare(function() {
        if (!themes) {
            throw new Error("Themes not set for the application");
        }
        return themes.reduce(function(acc, theme) {
            acc = _objectSpread$s({}, acc, createThemeVariants(theme));
            return acc;
        }, {});
    }, [
        themes
    ]);
    useDeepCompareEffect(function() {
        var resolvedModules = resolveModules(modules, repositories, {
            application: application.config,
            custom: application.custom
        });
        setResolvedModules(resolvedModules);
        // Also update the routes by extracting from the modules
        setRoutes(extractRoutesFromModules(resolvedModules));
    }, [
        modules
    ]);
    return /*#__PURE__*/ jsx(AppContext.Provider, {
        value: {
            config: deepFreeze(config),
            // MUI ThemeProvider needs to be able to mutate themes
            themes: themeMap,
            modules: resolvedModules,
            routes: routes,
            custom: custom,
            getAuthContext: getAuthContext,
            repositories: repositories,
            isChildApp: isChildApp
        },
        children: children
    });
}

function _defineProperty$v(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var useStyles$M = makeStyles()(function(theme) {
    var _obj;
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: theme.spacing(4),
            height: "100%"
        },
        title: {
            marginBottom: theme.spacing(2)
        },
        icon: (_obj = {
            width: "".concat(theme.spacing(12), "!important"),
            height: "".concat(theme.spacing(12), "!important"),
            fontSize: "".concat(theme.spacing(12), "!important")
        }, _defineProperty$v(_obj, theme.breakpoints.up("md"), {
            width: "".concat(theme.spacing(16), "!important"),
            height: "".concat(theme.spacing(16), "!important"),
            fontSize: "".concat(theme.spacing(16), "!important")
        }), _defineProperty$v(_obj, "marginBottom", theme.spacing(4)), _obj),
        excerpt: {
            marginBottom: theme.spacing(4)
        },
        content: {
            marginBottom: theme.spacing(2)
        }
    };
});
function NotFound(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_icon = param.icon, icon = _param_icon === void 0 ? "error" : _param_icon, title = param.title, excerpt = param.excerpt, content = param.content;
    var _useStyles = useStyles$M(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var excerptText = typeof excerpt === "string" ? excerpt : null;
    var contentText = typeof content === "string" ? content : null;
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            /*#__PURE__*/ jsx(Icon, {
                className: cx(classes.icon),
                color: "error",
                children: icon
            }),
            /*#__PURE__*/ jsx(Typography, {
                variant: "h4",
                component: "h1",
                className: cx(classes.title),
                children: title
            }),
            // Render the excerpt text or the specified info Component
            excerptText ? /*#__PURE__*/ jsx(Typography, {
                variant: "subtitle1",
                component: "div",
                className: cx(classes.excerpt),
                children: excerpt
            }) : excerpt,
            // Render the content text or the specified info Component
            contentText ? /*#__PURE__*/ jsx(Typography, {
                variant: "caption",
                component: "div",
                className: cx(classes.content),
                children: content
            }) : content
        ]
    });
}

function _arrayLikeToArray$f(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles$5(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$f(arr);
}
function _defineProperty$u(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray$5(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread$5() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$r(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$u(target, key, source[key]);
        });
    }
    return target;
}
function _toConsumableArray$5(arr) {
    return _arrayWithoutHoles$5(arr) || _iterableToArray$5(arr) || _unsupportedIterableToArray$f(arr) || _nonIterableSpread$5();
}
function _unsupportedIterableToArray$f(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$f(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$f(o, minLen);
}
function NotFoundWrapper() {
    return /*#__PURE__*/ jsx(NotFound, {
        title: "Sorry, there is nothing here.",
        excerpt: "'".concat(window.location.pathname, "' seems to be an invalid path"),
        content: /*#__PURE__*/ jsx(Button, {
            icon: "refresh",
            color: "error",
            onClick: function() {
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            },
            children: "Go back home"
        })
    });
}
var DefaultWrapper = function(param) {
    var DefaultComponent = param.DefaultComponent, defaultComponentProps = param.defaultComponentProps;
    return useMemoDeepCompare(function() {
        return DefaultComponent ? /*#__PURE__*/ jsx(DefaultComponent, _objectSpread$r({}, defaultComponentProps)) : null;
    }, [
        DefaultComponent,
        defaultComponentProps
    ]);
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
    var indexRoute = routes.find(function(r) {
        return r.index || !r.path;
    });
    var defaultRoute = routes.find(function(r) {
        return r.path === "*";
    });
    // If there is no index route then we add one
    if (!indexRoute) {
        routes = _toConsumableArray$5(routes).concat([
            {
                title: "index",
                component: DefaultWrapper,
                componentProps: {
                    DefaultComponent: DefaultComponent,
                    defaultComponentProps: defaultComponentProps
                },
                index: true
            }
        ]);
    }
    // If there is no default route, add one
    if (!defaultRoute) {
        routes = _toConsumableArray$5(routes).concat([
            {
                title: "*",
                component: NotFoundWrapper,
                index: false,
                path: "*"
            }
        ]);
    }
    return routes.map(function(r) {
        var path = r.path;
        // Determine what to render at this route
        var RouteElement = debug ? r.component ? function(// eslint-disable-next-line @typescript-eslint/no-explicit-any
        props) {
            var Comp = r.component;
            return /*#__PURE__*/ jsxs("div", {
                style: {
                    height: "100%"
                },
                children: [
                    /*#__PURE__*/ jsxs("div", {
                        children: [
                            "Component: ",
                            Comp && Comp.name
                        ]
                    }),
                    /*#__PURE__*/ jsxs("div", {
                        children: [
                            "Path: ",
                            r.path
                        ]
                    }),
                    /*#__PURE__*/ jsxs("pre", {
                        children: [
                            "Routes:",
                            " ",
                            JSON.stringify(routes.map(function(r) {
                                return {
                                    title: r.title,
                                    path: r.path,
                                    component: r.component && r.component.name
                                };
                            }), null, 2)
                        ]
                    }),
                    Comp && /*#__PURE__*/ jsx(Comp, _objectSpread$r({}, props))
                ]
            });
        } : undefined : r.component;
        var route = {
            // 'as true' is just to get around the typescript guards
            index: Boolean(r.index || !r.path),
            path: path,
            element: RouteElement && /*#__PURE__*/ jsx(SuspenseLoader, {
                children: /*#__PURE__*/ jsx(RouteElement, _objectSpread$r({}, r.componentProps))
            }),
            children: r.routes && r.routes.length > 0 && renderRouteHooksRecursive(r.routes, GuardComponent, DefaultComponent, defaultComponentProps, debug) || undefined
        };
        // If the route has auth specified then wrap in the auth guard
        if (r.auth && r.auth.length > 0) {
            // TODO: This could probably be optimised by keeping track of a parent guard and if the
            // roles are not different, then not placing a guard
            route = {
                element: /*#__PURE__*/ jsx(GuardComponent, {
                    roles: r.auth
                }),
                children: [
                    route
                ]
            };
        }
        return route;
    });
}
function AppRouter(param) {
    var DefaultComponent = param.DefaultComponent, defaultComponentProps = param.defaultComponentProps, _param_debug = param.debug, debug = _param_debug === void 0 ? false : _param_debug;
    // Note that we don't use useApplication() here as it creates a circular dependency
    var _useContext = useContext(AppContext), routes = _useContext.routes, getAuthContext = _useContext.getAuthContext;
    var GuardComponent = getAuthContext().GuardComponent;
    var resolvedRoutes = useMemoDeepCompare(function() {
        return renderRouteHooksRecursive(routes || [], GuardComponent, DefaultComponent, defaultComponentProps, debug);
    }, [
        routes,
        DefaultComponent,
        defaultComponentProps,
        debug
    ]);
    var routeHooks = useRoutes(resolvedRoutes || []);
    if (debug) {
        console.debug("Resolved Routes:", resolvedRoutes);
    }
    return /*#__PURE__*/ jsx(SuspenseLoader, {
        children: routeHooks
    });
}

function _defineProperty$t(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$q(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$t(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$n(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$n(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$n(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var muiCache = createCache({
    key: "mui",
    prepend: true
});
function App(param) {
    var store = param.store, config = param.config, _param_themes = param.themes, themes = _param_themes === void 0 ? [] : _param_themes, _param_modules = param.modules, modules = _param_modules === void 0 ? [] : _param_modules, custom = param.custom, DefaultComponent = param.DefaultComponent, defaultComponentProps = param.defaultComponentProps, AuthProvider = param.AuthProvider, authProviderProps = param.authProviderProps, getAuthContext = param.getAuthContext, _param_repositories = param.repositories, repositories = _param_repositories === void 0 ? {} : _param_repositories, _param_Router = param.Router, Router = _param_Router === void 0 ? BrowserRouter : _param_Router, _param_debugRouter = param.debugRouter, debugRouter = _param_debugRouter === void 0 ? false : _param_debugRouter;
    if (!store) {
        console.error("No store provided to Application");
    }
    var ResolvedAuthProvider = useMemo(function() {
        return AuthProvider || DefaultAuthProvider;
    }, [
        AuthProvider
    ]);
    // If no auth provider is specified then use the default
    var getAuthContextFn = useMemoDeepCompare(function() {
        var authContextFn = null;
        if (!AuthProvider) {
            authContextFn = useDefaultAuthorisation;
        } else {
            authContextFn = getAuthContext;
        }
        if (!authContextFn) {
            throw new Error("An AuthProvider was specified without specifying getAuthContext, you probably specified an AuthProvider but forgot to specify the getAuthContext function");
        }
        return authContextFn;
    }, [
        ResolvedAuthProvider
    ]);
    // Allow rendering apps inside apps
    var application = useApplication();
    var useRouter = Boolean(!application.routes);
    var storeRef = useRef(createStore(store));
    var content = useMemo(function() {
        return /*#__PURE__*/ jsx(CssBaseline, {
            children: /*#__PURE__*/ jsx(AppContextComponent, {
                modules: modules,
                themes: themes,
                config: config,
                custom: custom,
                getAuthContext: getAuthContextFn,
                repositories: repositories,
                children: /*#__PURE__*/ jsx(Provider, {
                    store: storeRef.current,
                    children: /*#__PURE__*/ jsx(CacheProvider, {
                        value: muiCache,
                        children: /*#__PURE__*/ jsx(Theme, {
                            children: /*#__PURE__*/ jsx(ErrorBoundary$1, {
                                children: /*#__PURE__*/ jsxs(LocalizationProvider, {
                                    children: [
                                        /*#__PURE__*/ jsx(UpdateAvailable, {}),
                                        /*#__PURE__*/ jsx(ResolvedAuthProvider, _objectSpreadProps$n(_objectSpread$q({}, authProviderProps), {
                                            children: Router ? /*#__PURE__*/ jsx(AppRouter, {
                                                DefaultComponent: DefaultComponent,
                                                defaultComponentProps: defaultComponentProps,
                                                debug: debugRouter
                                            }) : DefaultComponent && /*#__PURE__*/ jsx(DefaultComponent, _objectSpread$q({}, defaultComponentProps))
                                        }))
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    return Router && useRouter ? /*#__PURE__*/ jsx(Router, {
        children: content
    }) : content;
}
 // // export function reportWebVitals({
 // //     name,
 // //     delta,
 // //     value,
 // //     id
 // // }){
 // //     if (gtag !== undefined) {
 // //         gtag('event', name, {
 // //             value : delta,
 // //             metric_id : id,
 // //             metric_value : value,
 // //             metric_delta : delta,
 // //             nonInteraction  :true,
 // //             transport : 'beacon'
 // //         });
 // //     }
 // // }
 // export interface AppProps {
 //   children?: ReactNode,
 // };
 // export interface CreateAppProps<T extends Store> {
 //   store: T
 // };
 // export function createApp<T extends Store>({
 //   store
 // }: CreateAppProps<T>) {
 //   const App = ({
 //     children
 //   }: AppProps) => {
 //     return (
 //       <AppContextComponent>
 //         <Provider store={store}>
 //           <Theme>
 //             <CssBaseline />
 //             <UpdateAvailable />
 //             <ErrorBoundary>
 //               <Router>
 //                 {children}
 //               </Router>
 //             </ErrorBoundary>
 //           </Theme>
 //         </Provider>
 //       </AppContextComponent>
 //     );
 //   };
 //   return App;
 // };
 // export default createApp;
 // {/* <SettingsProvider getReducerRoot={({icatalyst})=>{
 //                 return icatalyst.settings;
 //               }}>
 //                 <Theme>
 //                   <ErrorBoundary>
 //                     <Router history={history}>
 //                       <Singularity config={{
 //                         ...singularityConfig,
 //                         mapRoles : mapAuthRoles,
 //                         // Allows customisation of the roles that are displayed to the user
 //                         // filterDisplayRoles : filterDisplayRoles,
 //                       }}>
 //                         <CssBaseline/>
 //                         <Layout/>
 //                       </Singularity>
 //                     </Router>
 //                   </ErrorBoundary>
 //                 </Theme>
 //               </SettingsProvider> */}

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3csvg xmlns='http://www.w3.org/2000/svg' width='149' height='132'%3e%3cpath fill='white' d='M143.209%2c105.968c0%2c6.25-5.113%2c11.364-11.363%2c11.364H18.203c-6.250-11.363-5.113-11.363-11.364v-86.37c0-6.25%2c5.113-11.36311.363-11.363h113.643c6.25%2c0%2c11.363%2c5.113%2c11.363%2c11.363V105.968zM18.203%2c17.326c-1.207%2c0-2.271%2c1.068-2.271%2c2.271v86.37c0%2c1.207%2c1.0652.271%2c2.271%2c2.271h113.643c1.203%2c0%2c2.274-1.0642.274-2.271v-86.37c0-1.203-1.071-2.271-2.274-2.271H18.203zM38.661%2c53.691c-7.529%2c0-13.641-6.108-13.641-13.635s6.112-13.638%2c13.641-13.638c7.526%2c0%2c13.632%2c6.111%2c13.632%2c13.638S46.188%2c53.691%2c38.661%2c53.691zM125.025%2c99.15H25.02V85.51l22.73-22.724l11.363%2c11.36l36.365-36.361l29.547%2c29.547V99.15z'/%3e%3c/svg%3e";
var defaultDarkBackground = img$1;

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3csvg xmlns='http://www.w3.org/2000/svg' width='149' height='132'%3e%3cpath d='M143.209%2c105.968c0%2c6.25-5.113%2c11.364-11.363%2c11.364H18.203c-6.250-11.363-5.113-11.363-11.364v-86.37c0-6.25%2c5.113-11.36311.363-11.363h113.643c6.25%2c0%2c11.363%2c5.113%2c11.363%2c11.363V105.968zM18.203%2c17.326c-1.207%2c0-2.271%2c1.068-2.271%2c2.271v86.37c0%2c1.207%2c1.0652.271%2c2.271%2c2.271h113.643c1.203%2c0%2c2.274-1.0642.274-2.271v-86.37c0-1.203-1.071-2.271-2.274-2.271H18.203zM38.661%2c53.691c-7.529%2c0-13.641-6.108-13.641-13.635s6.112-13.638%2c13.641-13.638c7.526%2c0%2c13.632%2c6.111%2c13.632%2c13.638S46.188%2c53.691%2c38.661%2c53.691zM125.025%2c99.15H25.02V85.51l22.73-22.724l11.363%2c11.36l36.365-36.361l29.547%2c29.547V99.15z'/%3e%3c/svg%3e";
var defaultLightBackground = img;

function _arrayLikeToArray$e(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$c(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$c(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$c() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$c(arr, i) {
    return _arrayWithHoles$c(arr) || _iterableToArrayLimit$c(arr, i) || _unsupportedIterableToArray$e(arr, i) || _nonIterableRest$c();
}
function _unsupportedIterableToArray$e(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$e(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$e(o, minLen);
}
var useStyles$L = makeStyles()(function(theme, param) {
    var spinnerSize = param.spinnerSize, spinnerColor = param.spinnerColor, backgroundColor = param.backgroundColor;
    var sizes = {
        small: theme.spacing(2.5),
        medium: theme.spacing(3),
        large: theme.spacing(4.5)
    };
    var offset = {
        small: theme.spacing(1.25),
        medium: theme.spacing(1.5),
        large: theme.spacing(2.25)
    };
    var calcSize = sizes[spinnerSize] || theme.spacing(2);
    var offsetSize = offset[spinnerSize] || theme.spacing(1);
    return {
        "@keyframes rotating": {
            from: {
                transform: "rotate(0deg)"
            },
            to: {
                transform: "rotate(360deg)"
            }
        },
        root: {
            position: "relative",
            display: "inline-block",
            overflow: "hidden"
        },
        image: {
            opacity: 0,
            transition: "opacity ".concat(theme.transitions.duration.shortest, "ms linear"),
            height: "100%",
            width: "100%",
            verticalAlign: "center",
            display: "block"
        },
        imageOverride: {},
        image_loaded: {
            opacity: 1
        },
        spinner: {
            position: "absolute",
            animation: "$rotating ".concat(theme.transitions.duration.shorter * 10, "ms linear infinite"),
            opacity: 1,
            transition: "opacity ".concat(theme.transitions.duration.shortest, "ms linear")
        },
        spinner_loaded: {
            opacity: 0
        },
        spinnerFn: {
            width: calcSize,
            height: calcSize,
            top: "calc(50% - ".concat(offsetSize, ")"),
            left: "calc(50% - ".concat(offsetSize, ")"),
            color: spinnerColor || "initial"
        },
        backgroundFn: {
            backgroundColor: backgroundColor
        }
    };
});
function Image(param) {
    var className = param.className, style = param.style, classesProp = param.classes, src = param.src, defaultSrc = param.defaultSrc, _param_spinnerSize = param.spinnerSize, spinnerSize = _param_spinnerSize === void 0 ? "medium" : _param_spinnerSize, spinnerColor = param.spinnerColor, alt = param.alt, imageStyle = param.imageStyle, backgroundColor = param.backgroundColor, crossOrigin = param.crossOrigin, onError = param.onError;
    var theme = useTheme();
    var _useState = _slicedToArray$c(useState(src || null), 2), source = _useState[0], setSource = _useState[1];
    var _useState1 = _slicedToArray$c(useState(true), 2), loading = _useState1[0], setLoading = _useState1[1];
    var _useState2 = _slicedToArray$c(useState(!src), 2), error = _useState2[0], setError = _useState2[1];
    var _useState3 = _slicedToArray$c(useState(backgroundColor), 2), derivedBackground = _useState3[0], setDerivedBackground = _useState3[1];
    var derivedSpinnerColor = useMemo(function() {
        var _mostReadable;
        return spinnerColor || ((_mostReadable = mostReadable(derivedBackground || theme.palette.background.default, [
            "#fff",
            "#000"
        ], {})) === null || _mostReadable === void 0 ? void 0 : _mostReadable.toHexString());
    }, [
        spinnerColor,
        derivedBackground,
        theme
    ]);
    var _useStyles = useStyles$L({
        spinnerSize: spinnerSize,
        spinnerColor: derivedSpinnerColor,
        backgroundColor: derivedBackground
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    if (!defaultSrc) {
        defaultSrc = derivedSpinnerColor === "#000000" ? defaultLightBackground : defaultDarkBackground;
    }
    useEffect(function() {
        if (src !== source) {
            setError(null);
            setLoading(true);
            setSource(src || null);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        src
    ]);
    useEffect(function() {
        setDerivedBackground(backgroundColor);
    }, [
        backgroundColor
    ]);
    var _useHookWithRefCallback = _slicedToArray$c(useHookWithRefCallback(function(ref) {
        if (ref && !derivedBackground) {
            var color = tinycolor(getComputedStyle(ref).backgroundColor);
            if (color.getAlpha() > 0) {
                setDerivedBackground(color.toHex8String());
            }
        }
    }, []), 1), backgroundRef = _useHookWithRefCallback[0];
    return /*#__PURE__*/ jsxs("span", {
        className: cx(classes.root, className),
        ref: backgroundRef,
        style: style,
        children: [
            /*#__PURE__*/ jsx("img", {
                alt: alt,
                className: cx(classes.image, !loading && classes.image_loaded, classes.imageOverride),
                crossOrigin: crossOrigin,
                style: imageStyle,
                src: error ? defaultSrc : source || defaultSrc,
                onLoad: function() {
                    // Set timeout here to ensure the state of loading has time to change
                    setTimeout(function() {
                        setLoading(false);
                    }, 100);
                },
                onError: function(e) {
                    setLoading(false);
                    if (!error) {
                        setError(e);
                    }
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onError && onError(e);
                }
            }),
            /*#__PURE__*/ jsx(Icon, {
                className: cx(classes.spinner, !loading && classes.spinner_loaded, classes.spinnerFn),
                children: "fa spinner"
            })
        ]
    });
}

function _arrayLikeToArray$d(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$b(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$b(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$b() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$b(arr, i) {
    return _arrayWithHoles$b(arr) || _iterableToArrayLimit$b(arr, i) || _unsupportedIterableToArray$d(arr, i) || _nonIterableRest$b();
}
function _unsupportedIterableToArray$d(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$d(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$d(o, minLen);
}
var useStyles$K = makeStyles()(function(theme, param) {
    var size = param.size, backgroundColor = param.backgroundColor, _param_imageOffsetSize = param.imageOffsetSize, imageOffsetSize = _param_imageOffsetSize === void 0 ? 0 : _param_imageOffsetSize;
    var _mostReadable;
    var defaultBackground = theme.palette.background.paper;
    var sizes = {
        inherit: "inherit",
        small: theme.typography.pxToRem(24),
        medium: theme.typography.pxToRem(40),
        large: theme.typography.pxToRem(56)
    };
    var dimensions = sizes[size];
    var fontSizes = {
        inherit: "inherit",
        small: theme.typography.pxToRem(16),
        medium: theme.typography.pxToRem(32),
        large: theme.typography.pxToRem(48)
    };
    var fontDimensions = fontSizes[size];
    return {
        root: {
            backgroundColor: defaultBackground,
            overflow: "hidden",
            position: "relative",
            boxSizing: "border-box"
        },
        backgroundFn: {
            backgroundColor: alpha(backgroundColor || defaultBackground, 1)
        },
        colorFn: {
            color: (_mostReadable = mostReadable(backgroundColor || defaultBackground, [
                "#fff",
                "#000"
            ], {})) === null || _mostReadable === void 0 ? void 0 : _mostReadable.toHexString()
        },
        sizeFn: {
            width: dimensions,
            height: dimensions
        },
        imageSizeFn: {
            width: "calc(".concat(dimensions, " - ").concat(imageOffsetSize, "px)"),
            height: "calc(".concat(dimensions, " - ").concat(imageOffsetSize, "px)")
        },
        fontSizeFn: {
            fontSize: fontDimensions
        },
        imageContainer: {
            backgroundColor: backgroundColor || defaultBackground,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            objectFit: "contain",
            backgroundSize: "contain"
        },
        circular: {
            borderRadius: "50%",
            "& img": {
                borderRadius: "50%"
            }
        },
        square: {},
        letter: {
            position: "absolute",
            top: "50%",
            msTransform: "translateY(-50%)",
            transform: "translateY(-50%)",
            left: 0,
            textAlign: "center",
            width: "100%"
        }
    };
});
function Avatar(param) {
    var className = param.className, style = param.style, classesProp = param.classes, title = param.title, _param_src = param.src, src = _param_src === void 0 ? "" : _param_src, _param_variant = param.variant, variant = _param_variant === void 0 ? "circular" : _param_variant, _param_size = param.size, size = _param_size === void 0 ? "medium" : _param_size, backgroundColor = param.backgroundColor, _param_imageOffsetSize = param.imageOffsetSize, imageOffsetSize = _param_imageOffsetSize === void 0 ? 0 : _param_imageOffsetSize;
    var _useStyles = useStyles$K({
        size: size,
        backgroundColor: backgroundColor,
        imageOffsetSize: imageOffsetSize
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var _useState = _slicedToArray$b(useState(!src), 2), imageError = _useState[0], setImageError = _useState[1];
    var letter = title ? title.substring(0, 1).toUpperCase() : "";
    useEffect(function() {
        setImageError(!src);
    }, [
        src
    ]);
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, classes.sizeFn, classes[variant], classes.backgroundFn, className),
        style: style,
        children: [
            !imageError && /*#__PURE__*/ jsx(Image, {
                backgroundColor: backgroundColor,
                className: cx(classes.sizeFn, classes.backgroundFn, classes.imageContainer),
                classes: {
                    imageOverride: cx(classes.image, classes.imageSizeFn)
                },
                alt: title,
                src: src,
                onError: function(e) {
                    setImageError(true);
                }
            }),
            imageError && /*#__PURE__*/ jsx(Typography, {
                variant: "h4",
                component: "span",
                className: cx(classes.letter, classes.colorFn, classes.fontSizeFn),
                children: letter
            })
        ]
    });
}

function _arrayLikeToArray$c(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$a(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$a(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$a() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$a(arr, i) {
    return _arrayWithHoles$a(arr) || _iterableToArrayLimit$a(arr, i) || _unsupportedIterableToArray$c(arr, i) || _nonIterableRest$a();
}
function _unsupportedIterableToArray$c(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$c(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$c(o, minLen);
}
var validMimeTypes = [
    "audio",
    "video",
    "image"
];
var useStyles$J = makeStyles()(function(theme) {
    return {
        root: {
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            borderRadius: theme.shape.borderRadius
        },
        image: {
            borderRadius: theme.shape.borderRadius
        },
        video: {
            maxWidth: "100%",
            maxHeight: "100%"
        },
        audio: {}
    };
});
function Media(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_backgroundColor = param.backgroundColor, backgroundColor = _param_backgroundColor === void 0 ? "transparent" : _param_backgroundColor, defaultSrc = param.defaultSrc, src = param.src, mimeType = param.mimeType, alt = param.alt, crossOrigin = param.crossOrigin, _param_autoPlay = param.autoPlay, autoPlay = _param_autoPlay === void 0 ? false : _param_autoPlay, _param_controls = param.controls, controls = _param_controls === void 0 ? true : _param_controls, onLoad = param.onLoad, onError = param.onError;
    var _mostReadable;
    var _useStyles = useStyles$J(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var _useState = _slicedToArray$a(useState(src), 2), source = _useState[0], setSource = _useState[1];
    var _useState1 = _slicedToArray$a(useState(mimeType || getMimeType(src).split("/")[0]), 2), mediaType = _useState1[0], setMediaType = _useState1[1];
    var defaultSource = defaultSrc ? defaultSrc : ((_mostReadable = mostReadable(tinycolor(backgroundColor || "transparent"), [
        "#fff",
        "#000"
    ])) === null || _mostReadable === void 0 ? void 0 : _mostReadable.toHexString()) === "#000000" ? "assets/images/placeholders/image-dark.svg" : "assets/images/placeholders/image-light.svg";
    useEffect(function() {
        setSource(src ? src : defaultSource);
    }, [
        src,
        defaultSource
    ]);
    useEffect(function() {
        if (!mimeType) {
            var mime = getMimeType(source);
            setMediaType(mime && mime.split("/")[0].toLowerCase());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        source
    ]);
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            source && mediaType && mediaType === "audio" && /*#__PURE__*/ jsx("audio", {
                className: cx(classes.audio),
                crossOrigin: crossOrigin,
                controls: controls,
                autoPlay: autoPlay,
                onCanPlay: function(e) {
                    if (source !== defaultSource) {
                        onLoad && onLoad(e, source);
                    }
                },
                onError: function(e) {
                    if (source !== defaultSource) {
                        setSource(defaultSource);
                        setMediaType(getMimeType(defaultSource).split("/")[0]);
                    }
                    onError && onError(e, source);
                },
                children: /*#__PURE__*/ jsx("source", {
                    src: source,
                    type: getMimeType(source)
                })
            }),
            source && mediaType && mediaType === "video" && /*#__PURE__*/ jsx("video", {
                className: cx(classes.video),
                controls: controls,
                crossOrigin: crossOrigin,
                autoPlay: autoPlay,
                onCanPlay: function(e) {
                    if (source !== defaultSource) {
                        onLoad && onLoad(e, source);
                    }
                },
                onError: function(e) {
                    if (source !== defaultSource) {
                        setSource(defaultSource);
                        setMediaType(getMimeType(defaultSource).split("/")[0]);
                    }
                    onError && onError(e, source);
                },
                children: /*#__PURE__*/ jsx("source", {
                    src: source,
                    type: getMimeType(source)
                })
            }),
            source && mediaType && mediaType === "image" && /*#__PURE__*/ jsx(Image, {
                className: cx(classes.image),
                src: source,
                alt: alt,
                crossOrigin: crossOrigin
            }),
            (!source || !mediaType || validMimeTypes.indexOf(mediaType) < 0) && /*#__PURE__*/ jsx(Image, {
                className: cx(classes.image),
                src: defaultSource,
                alt: alt
            })
        ]
    });
}

var useStyles$I = makeStyles()(function(theme) {
    return {
        root: {
            "& .MuiCardHeader-content": {
                overflow: "hidden"
            }
        },
        titleWrapper: {
            overflow: "hidden",
            marginRight: theme.spacing(2)
        },
        emphasisText: {
            color: theme.palette.primary.main,
            textTransform: "uppercase"
        }
    };
});
function CardHeader(param) {
    var className = param.className, style = param.style, classesProp = param.classes, title = param.title, subtitle = param.subtitle, emphasisText = param.emphasisText, thumbnailImage = param.thumbnailImage, actions = param.actions;
    var theme = useTheme();
    var _useStyles = useStyles$I(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx(CardHeader$1, {
        className: cx(classes.root, className),
        style: style,
        avatar: thumbnailImage ? /*#__PURE__*/ jsx(Avatar, {
            title: title,
            src: thumbnailImage,
            backgroundColor: theme.palette.background.default
        }) : null,
        title: /*#__PURE__*/ jsxs("div", {
            className: cx(classes.titleWrapper),
            children: [
                /*#__PURE__*/ jsx(Typography, {
                    className: cx(classes.emphasisText),
                    gutterBottom: false,
                    noWrap: true,
                    display: "block",
                    variant: "subtitle1",
                    component: "h3",
                    children: emphasisText
                }),
                /*#__PURE__*/ jsx(Typography, {
                    noWrap: true,
                    display: "block",
                    variant: "h6",
                    component: "h3",
                    children: title
                })
            ]
        }),
        subheader: /*#__PURE__*/ jsx(Typography, {
            variant: "caption",
            component: "p",
            children: subtitle
        }),
        action: actions ? /*#__PURE__*/ jsx(Actions, {
            actions: actions
        }) : null
    });
}

function _defineProperty$s(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var useStyles$H = makeStyles()(function(theme) {
    return {
        root: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
        },
        contentWrapper: {
            flexGrow: 1,
            flexShrink: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            overflow: "hidden",
            padding: 0
        },
        cardContent: _defineProperty$s({
            flexShrink: 1,
            flexGrow: 1
        }, theme.breakpoints.down("sm"), {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1)
        }),
        description: {
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical"
        },
        cardActions: {
            marginLeft: theme.spacing(1)
        },
        actionWrapper: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        actions: _defineProperty$s({}, theme.breakpoints.down("sm"), {
            alignItems: "end"
        }),
        primaryActions: {},
        secondaryActions: {}
    };
});
function Card(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_square = param.square, square = _param_square === void 0 ? false : _param_square, _param_elevation = param.elevation, elevation = _param_elevation === void 0 ? 1 : _param_elevation, title = param.title, subtitle = param.subtitle, emphasisText = param.emphasisText, thumbnailImage = param.thumbnailImage, headerActions = param.headerActions, primaryActions = param.primaryActions, secondaryActions = param.secondaryActions, _param_showTitle = param.showTitle, showTitle = _param_showTitle === void 0 ? true : _param_showTitle, children = param.children, onClick = param.onClick;
    var _useStyles = useStyles$H(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var hasActions = Boolean(primaryActions || secondaryActions);
    var content = children && typeof children === "string" ? /*#__PURE__*/ jsx(CardContent, {
        className: cx(classes.cardContent),
        children: /*#__PURE__*/ jsx(Typography, {
            className: cx(classes.description),
            variant: "body2",
            color: "textSecondary",
            component: "p",
            children: children
        })
    }) : children;
    return /*#__PURE__*/ jsxs(Card$1, {
        className: cx(classes.root, className),
        style: style,
        square: square,
        elevation: elevation,
        onClick: onClick,
        children: [
            showTitle && /*#__PURE__*/ jsx(CardHeader, {
                title: title,
                subtitle: subtitle,
                emphasisText: emphasisText,
                thumbnailImage: thumbnailImage,
                actions: headerActions
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.contentWrapper),
                children: content
            }),
            hasActions && /*#__PURE__*/ jsx(CardActions, {
                className: cx(classes.cardActions),
                disableSpacing: true,
                children: /*#__PURE__*/ jsxs("div", {
                    className: cx(classes.actionWrapper),
                    children: [
                        primaryActions ? /*#__PURE__*/ jsx(Actions, {
                            className: cx(classes.actions, classes.primaryActions),
                            actions: primaryActions,
                            variant: "button"
                        }) : /*#__PURE__*/ jsx("div", {}),
                        secondaryActions && /*#__PURE__*/ jsx(Actions, {
                            className: cx(classes.actions, classes.secondaryActions),
                            actions: secondaryActions
                        })
                    ]
                })
            })
        ]
    });
}

function _defineProperty$r(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$p(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$r(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$m(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$m(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$m(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$g(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$g(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$g(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$G = makeStyles()(function(theme) {
    return {
        root: {
            width: "100%",
            display: "flex",
            flexDirection: "column"
        },
        cardHeader: {
            overflow: "hidden",
            "& .MuiCardHeader-content": {
                overflow: "hidden"
            }
        },
        title: {
            fontWeight: "bold"
        },
        cardActions: {},
        cardMedia: {
            width: "100%",
            aspectRatio: "16 / 9"
        },
        contentWrapper: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            overflow: "hidden"
        },
        cardContent: {
            flexGrow: 1,
            flexShrink: 1
        },
        description: {
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical"
        }
    };
});
function FeatureCard(_param) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, imageSrc = _param.imageSrc, imageAltText = _param.imageAltText, _param_variant = _param.variant, variant = _param_variant === void 0 ? "imageProminent" : _param_variant, children = _param.children, title = _param.title, subtitle = _param.subtitle, emphasisText = _param.emphasisText, thumbnailImage = _param.thumbnailImage, headerActions = _param.headerActions, rest = _objectWithoutProperties$g(_param, [
        "className",
        "style",
        "classes",
        "imageSrc",
        "imageAltText",
        "variant",
        "children",
        "title",
        "subtitle",
        "emphasisText",
        "thumbnailImage",
        "headerActions"
    ]);
    var _useStyles = useStyles$G(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var content = children && typeof children === "string" ? /*#__PURE__*/ jsx(Typography, {
        className: cx(classes.description),
        variant: "body2",
        color: "textSecondary",
        component: "p",
        children: children
    }) : children;
    return /*#__PURE__*/ jsxs(Card, _objectSpreadProps$m(_objectSpread$p({
        className: cx(classes.root, className),
        style: style,
        showTitle: variant === "titleProminent",
        title: title,
        subtitle: subtitle,
        emphasisText: emphasisText,
        thumbnailImage: thumbnailImage,
        headerActions: headerActions
    }, rest), {
        children: [
            /*#__PURE__*/ jsx(CardMedia, {
                className: cx(classes.cardMedia),
                image: imageSrc || "assets/images/placeholders/image-light.svg",
                title: imageAltText
            }),
            variant === "imageProminent" && /*#__PURE__*/ jsx(CardHeader, {
                title: title,
                subtitle: subtitle,
                emphasisText: emphasisText,
                thumbnailImage: thumbnailImage,
                actions: headerActions
            }),
            /*#__PURE__*/ jsx(CardContent, {
                className: cx(classes.cardContent),
                children: /*#__PURE__*/ jsx("div", {
                    className: cx(classes.contentWrapper),
                    children: content
                })
            })
        ]
    }));
}

function _defineProperty$q(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$o(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$q(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$l(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$l(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$l(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$f(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$f(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$f(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$F = makeStyles()(function(theme, param) {
    var appBarColor = param.appBarColor;
    var palette = appBarColor && appBarColor !== "inherit" ? theme.palette[appBarColor] : {
        contrastText: undefined
    };
    return {
        root: {
            overflow: "hidden"
        },
        titleBar: {
            borderRadius: 0,
            overflow: "hidden",
            width: "100%"
        },
        titleBarColor: {
            color: palette.contrastText
        },
        titleBarContent: {
            display: "flex",
            flexDirection: "row",
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(3),
            width: "100%",
            overflow: "hidden"
        },
        titleBarTitleWrapper: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            flexShrink: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            marginRight: theme.spacing(2),
            overflow: "hidden"
        },
        titleBarTitle: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%"
        },
        titleBarDescription: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%"
        },
        titleBarButton: {
            marginLeft: theme.spacing(2),
            color: "inherit"
        },
        contentWrapper: _defineProperty$q({
            overflow: "hidden",
            width: "100%",
            display: "flex",
            flexGrow: 1,
            flexShrink: 1,
            minWidth: theme.breakpoints.values["sm"]
        }, theme.breakpoints.down("sm"), {
            minWidth: "100%"
        })
    };
});
var TransitionFull = /*#__PURE__*/ forwardRef(function Transition(_param, ref) {
    var children = _param.children, rest = _objectWithoutProperties$f(_param, [
        "children"
    ]);
    return /*#__PURE__*/ jsx(Slide, _objectSpreadProps$l(_objectSpread$o({
        direction: "left",
        ref: ref
    }, rest), {
        children: children
    }));
});
var TransitionDialog = /*#__PURE__*/ forwardRef(function Transition(_param, ref) {
    var children = _param.children, rest = _objectWithoutProperties$f(_param, [
        "children"
    ]);
    return /*#__PURE__*/ jsx(Slide, _objectSpreadProps$l(_objectSpread$o({
        direction: "up",
        ref: ref
    }, rest), {
        children: children
    }));
});
function Dialog(_param) {
    var className = _param.className, style = _param.style, children = _param.children, classesProp = _param.classes, open = _param.open, fullWidth = _param.fullWidth, fullScreen = _param.fullScreen, onClose = _param.onClose, id = _param.id, _param_keepMounted = _param.keepMounted, keepMounted = _param_keepMounted === void 0 ? true : _param_keepMounted, TransitionComponent = _param.TransitionComponent, TransitionProps = _param.TransitionProps, _param_showTitle = _param.showTitle, showTitle = _param_showTitle === void 0 ? true : _param_showTitle, title = _param.title, description = _param.description, _param_allowClose = _param.allowClose, allowClose = _param_allowClose === void 0 ? true : _param_allowClose, _param_closeButtonText = _param.closeButtonText, closeButtonText = _param_closeButtonText === void 0 ? "Close" : _param_closeButtonText, _param_closeButtonIcon = _param.closeButtonIcon, closeButtonIcon = _param_closeButtonIcon === void 0 ? "close" : _param_closeButtonIcon, _param_variant = _param.variant, variant = _param_variant === void 0 ? "default" : _param_variant, appBarColor = _param.appBarColor, rest = _objectWithoutProperties$f(_param, [
        "className",
        "style",
        "children",
        "classes",
        "open",
        "fullWidth",
        "fullScreen",
        "onClose",
        "id",
        "keepMounted",
        "TransitionComponent",
        "TransitionProps",
        "showTitle",
        "title",
        "description",
        "allowClose",
        "closeButtonText",
        "closeButtonIcon",
        "variant",
        "appBarColor"
    ]);
    var _useStyles = useStyles$F({
        appBarColor: appBarColor
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var titleID = "".concat(id, "_dialog_title");
    var descriptionID = "".concat(id, "_dialog_description");
    TransitionComponent = TransitionComponent || (fullScreen ? TransitionFull : TransitionDialog);
    TransitionProps = TransitionProps || {
        role: "presentation"
    };
    var variantProps = variant === "default" ? {
        elevation: 1,
        appBarColor: appBarColor
    } : {
        elevation: 0,
        appBarColor: appBarColor || "transparent"
    };
    /*
        Workaround for accessibility issues with modal dialogs
        https://github.com/mui-org/material-ui/issues/19450
    */ useEffect(function() {
        if (open) {
            var _document_getElementById;
            (_document_getElementById = document.getElementById("root")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.setAttribute("aria-hidden", "false");
        }
    }, [
        open
    ]);
    return /*#__PURE__*/ jsxs(Dialog$1, _objectSpreadProps$l(_objectSpread$o({
        className: cx(classes.root, className),
        style: style,
        open: open,
        fullScreen: fullScreen,
        fullWidth: fullWidth,
        onClose: onClose,
        "aria-labelledby": showTitle ? titleID : rest["aria-labelledby"],
        "aria-describedby": showTitle ? descriptionID : rest["aria-describedby"],
        keepMounted: keepMounted,
        onClick: function(e) {
            e.stopPropagation();
        },
        role: "dialog",
        TransitionComponent: TransitionComponent,
        TransitionProps: TransitionProps
    }, rest), {
        children: [
            showTitle && /*#__PURE__*/ jsx(AppBar, {
                position: "static",
                className: cx(classes.titleBar, classes.titleBarColor),
                elevation: variantProps.elevation,
                color: variantProps.appBarColor,
                children: /*#__PURE__*/ jsxs("div", {
                    className: cx(classes.titleBarContent),
                    children: [
                        /*#__PURE__*/ jsxs("div", {
                            className: cx(classes.titleBarTitleWrapper),
                            children: [
                                /*#__PURE__*/ jsx(Typography, {
                                    id: titleID,
                                    className: cx(classes.titleBarTitle),
                                    noWrap: true,
                                    component: "h1",
                                    variant: "h5",
                                    children: title
                                }),
                                description && /*#__PURE__*/ jsx(Typography, {
                                    id: descriptionID,
                                    className: cx(classes.titleBarDescription),
                                    noWrap: true,
                                    variant: "caption",
                                    children: description
                                })
                            ]
                        }),
                        allowClose && /*#__PURE__*/ jsx(IconButton, {
                            className: cx(classes.titleBarButton),
                            size: "small",
                            title: closeButtonText,
                            icon: closeButtonIcon,
                            color: "inherit",
                            onClick: function(e) {
                                onClose && onClose(e, "closeButtonClick");
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.contentWrapper),
                children: children
            })
        ]
    }));
}

function _defineProperty$p(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$n(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$p(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$k(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$k(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$k(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function StateDialog() {
    var dispatch = useDispatch();
    var dialogProps = useDialogSelector();
    return /*#__PURE__*/ jsx(Dialog, _objectSpreadProps$k(_objectSpread$n({}, dialogProps), {
        onClose: function(e, reason) {
            dispatch(actions.dialog.closeDialog());
            dialogProps.onClose && dialogProps.onClose(e, reason);
        }
    }));
}

var useStyles$E = makeStyles()(function(theme) {
    return {
        root: {
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            width: "100%"
        },
        contentWrapper: {
            width: "100%"
        },
        actionWrapper: {},
        actionButton: {},
        actionButtonClose: {},
        actionSpacer: {
            minWidth: theme.spacing(2),
            background: "green",
            flexGrow: 1
        }
    };
});
function DialogContent(param) {
    var className = param.className, style = param.style, children = param.children, classesProp = param.classes, _param_closeText = param.closeText, closeText = _param_closeText === void 0 ? "Close" : _param_closeText, _param_closeIcon = param.closeIcon, closeIcon = _param_closeIcon === void 0 ? "close" : _param_closeIcon, _param_hideCloseButton = param.hideCloseButton, hideCloseButton = _param_hideCloseButton === void 0 ? false : _param_hideCloseButton, _param_disableActions = param.disableActions, disableActions = _param_disableActions === void 0 ? false : _param_disableActions, onClose = param.onClose, _param_actions = param.actions, actions$1 = _param_actions === void 0 ? [] : _param_actions;
    var _useStyles = useStyles$E(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var dispatch = useDispatch();
    var onContentClose = function(e) {
        dispatch(actions.dialog.closeDialog());
        onClose && onClose(e);
    };
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            /*#__PURE__*/ jsx(DialogContent$1, {
                className: cx(classes.contentWrapper),
                dividers: false,
                children: children
            }),
            (actions$1 && actions$1.length > 0 || !hideCloseButton) && /*#__PURE__*/ jsxs(Fragment, {
                children: [
                    /*#__PURE__*/ jsx(Divider, {
                        variant: "middle"
                    }),
                    /*#__PURE__*/ jsxs(DialogActions, {
                        className: cx(classes.actionWrapper),
                        children: [
                            actions$1 && actions$1.map(function(action) {
                                if (action === "spacer") {
                                    return /*#__PURE__*/ jsx("div", {
                                        className: cx(classes.actionSpacer)
                                    });
                                }
                                return /*#__PURE__*/ jsx(Button, {
                                    className: cx(classes.actionButton, action.className),
                                    color: action.color || "primary",
                                    variant: action.variant,
                                    disabled: disableActions || (typeof action.disabled === "function" ? action.disabled() : action.disabled),
                                    onClick: action.onClick,
                                    children: action.title
                                }, action.title);
                            }),
                            !hideCloseButton && /*#__PURE__*/ jsx(Button, {
                                className: cx(classes.actionButton, classes.actionButtonClose),
                                color: "secondary",
                                icon: closeIcon,
                                disabled: disableActions,
                                size: "medium",
                                onClick: onContentClose,
                                children: closeText
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

function _defineProperty$o(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$m(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$o(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$j(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$j(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$j(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$e(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$e(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$e(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$D = makeStyles()(function(theme) {
    var _obj;
    return {
        root: (_obj = {
            zIndex: 10,
            flexShrink: 0,
            flexGrow: 0,
            fontSize: theme.typography.pxToRem(10)
        }, _defineProperty$o(_obj, theme.breakpoints.up("md"), {
            fontSize: theme.typography.pxToRem(12)
        }), _defineProperty$o(_obj, "& .MuiTypography-root", _defineProperty$o({
            fontSize: theme.typography.pxToRem(10)
        }, theme.breakpoints.up("md"), {
            fontSize: theme.typography.pxToRem(12)
        })), _obj),
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
var Footer = /*#__PURE__*/ forwardRef(function(_param, ref) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, titleContent = _param.titleContent, actionContent = _param.actionContent, ToolbarProps = _param.ToolbarProps, rest = _objectWithoutProperties$e(_param, [
        "className",
        "style",
        "classes",
        "titleContent",
        "actionContent",
        "ToolbarProps"
    ]);
    var _useStyles = useStyles$D(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx(AppBar, _objectSpreadProps$j(_objectSpread$m({
        ref: ref,
        className: cx(classes.root, className),
        style: style,
        position: "relative",
        role: "contentinfo"
    }, rest), {
        children: /*#__PURE__*/ jsxs(Toolbar, _objectSpreadProps$j(_objectSpread$m({}, ToolbarProps), {
            className: cx(classes.toolbar),
            children: [
                /*#__PURE__*/ jsx("div", {
                    className: cx(classes.titleContent),
                    children: titleContent
                }),
                /*#__PURE__*/ jsx("div", {
                    className: cx(classes.actionContent),
                    children: actionContent
                })
            ]
        }))
    }));
});
var Footer$1 = Footer;

function _arrayLikeToArray$b(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles$4(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$b(arr);
}
function _iterableToArray$4(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread$4() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$4(arr) {
    return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _unsupportedIterableToArray$b(arr) || _nonIterableSpread$4();
}
function _unsupportedIterableToArray$b(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$b(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$b(o, minLen);
}
var useStyles$C = makeStyles()(function(theme) {
    return {
        root: {
            "&:focus-within label": {
                ".MuiCheckbox-root": {
                    color: theme.palette.primary.main
                }
            },
            "&:hover": {
                svg: {
                    color: theme.palette.action.active
                }
            }
        },
        checkbox: {}
    };
});
function CheckboxField(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_variant = param.variant, variant = _param_variant === void 0 ? "outlined" : _param_variant, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, _param_errors = param.errors, errors = _param_errors === void 0 ? [] : _param_errors, _param_labelPlacement = param.labelPlacement, labelPlacement = _param_labelPlacement === void 0 ? "end" : _param_labelPlacement, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, _param_readonly = param.readonly, readonly = _param_readonly === void 0 ? false : _param_readonly, label = param.label, id = param.id, autoFocus = param.autoFocus, value = param.value, helperText = param.helperText, onChange = param.onChange, _param_color = param.color, color = _param_color === void 0 ? "primary" : _param_color, _param_fullWidth = param.fullWidth, fullWidth = _param_fullWidth === void 0 ? true : _param_fullWidth, _param_disableRipple = param.disableRipple, disableRipple = _param_disableRipple === void 0 ? false : _param_disableRipple, _param_size = param.size, size = _param_size === void 0 ? "medium" : _param_size;
    var _useStyles = useStyles$C(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var t = useContext(LocalizationContext).t;
    var hasErrors = errors && errors.length > 0;
    var displayHelperText = hasErrors ? t.apply(void 0, _toConsumableArray$4(errors[0])) : helperText;
    return /*#__PURE__*/ jsxs(FormControl, {
        className: cx(classes.root, className),
        style: style,
        variant: variant,
        required: required,
        error: hasErrors,
        fullWidth: fullWidth,
        size: size,
        children: [
            /*#__PURE__*/ jsx(FormControlLabel, {
                labelPlacement: labelPlacement,
                disabled: disabled,
                label: label,
                control: /*#__PURE__*/ jsx(Checkbox, {
                    className: cx(classes.checkbox),
                    required: required,
                    name: id,
                    id: id,
                    autoFocus: autoFocus,
                    checked: value || false,
                    onChange: function(e, checked) {
                        /** MUI does not stop updates when readonly */ !readonly && onChange && onChange(e, checked);
                    },
                    disableRipple: disableRipple,
                    color: color,
                    size: size,
                    readOnly: readonly,
                    inputProps: {
                        readOnly: readonly || disabled
                    }
                })
            }),
            /*#__PURE__*/ jsx(FormHelperText, {
                error: hasErrors,
                children: displayHelperText
            })
        ]
    });
}

function _defineProperty$n(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$l(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$n(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$i(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$i(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$i(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$d(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$d(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$d(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$B = makeStyles()(function(theme, param) {
    var variant = param.variant;
    return {
        root: {},
        root_outlined: {},
        root_filled: {
            "& .MuiChip-root": {
                marginTop: theme.spacing(1)
            }
        },
        textField: {
            "& .MuiInputBase-root": {
                minHeight: theme.spacing(7)
            }
        },
        inputField: {
            display: "inline-flex",
            flexGrow: 1,
            width: "auto"
        },
        inputFieldFn: variant === "outlined" ? {
            boxSizing: "border-box"
        } : {}
    };
});
function TagField(_param) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, _param_variant = _param.variant, variant = _param_variant === void 0 ? "outlined" : _param_variant, label = _param.label, _param_fullWidth = _param.fullWidth, fullWidth = _param_fullWidth === void 0 ? true : _param_fullWidth, _param_options = _param.options, options = _param_options === void 0 ? [] : _param_options, _param_autoHighlight = _param.autoHighlight, autoHighlight = _param_autoHighlight === void 0 ? true : _param_autoHighlight, _param_autoSelect = _param.autoSelect, autoSelect = _param_autoSelect === void 0 ? false : _param_autoSelect, _param_multiple = _param.multiple, multiple = _param_multiple === void 0 ? true : _param_multiple, _param_filterSelectedOptions = _param.filterSelectedOptions, filterSelectedOptions = _param_filterSelectedOptions === void 0 ? true : _param_filterSelectedOptions, _param_freeSolo = _param.freeSolo, freeSolo = _param_freeSolo === void 0 ? true : _param_freeSolo, placeholder = _param.placeholder, renderTags = _param.renderTags, getOptionLabel = _param.getOptionLabel, _param_chipVariant = _param.chipVariant, chipVariant = _param_chipVariant === void 0 ? "filled" : _param_chipVariant, _param_chipColor = _param.chipColor, chipColor = _param_chipColor === void 0 ? "primary" : _param_chipColor, getChipColor = _param.getChipColor, defaultValue = _param.defaultValue, value = _param.value, rest = _objectWithoutProperties$d(_param, [
        "className",
        "style",
        "classes",
        "variant",
        "label",
        "fullWidth",
        "options",
        "autoHighlight",
        "autoSelect",
        "multiple",
        "filterSelectedOptions",
        "freeSolo",
        "placeholder",
        "renderTags",
        "getOptionLabel",
        "chipVariant",
        "chipColor",
        "getChipColor",
        "defaultValue",
        "value"
    ]);
    var _useStyles = useStyles$B({
        variant: variant
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    getOptionLabel = getOptionLabel || function(option) {
        return typeof option === "string" ? option : option.label;
    };
    getChipColor = getChipColor || function(option) {
        return chipColor;
    };
    renderTags = renderTags || function(value, getTagProps) {
        value = Array.isArray(value) ? value : [
            value
        ];
        return value.map(function(option, index) {
            return /*#__PURE__*/ jsx(Chip, _objectSpread$l({
                variant: chipVariant,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                label: getOptionLabel(option),
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any
                color: getChipColor(option)
            }, getTagProps({
                index: index
            })));
        });
    };
    return /*#__PURE__*/ jsx(FormControl, {
        className: cx(classes.root, classes["root_".concat(variant)], className),
        style: style,
        variant: variant,
        fullWidth: fullWidth,
        children: /*#__PURE__*/ jsx(Autocomplete, _objectSpreadProps$i(_objectSpread$l({
            options: options,
            autoHighlight: autoHighlight,
            autoSelect: autoSelect,
            multiple: multiple,
            filterSelectedOptions: filterSelectedOptions,
            freeSolo: freeSolo,
            renderTags: renderTags,
            defaultValue: defaultValue && (Array.isArray(defaultValue) ? defaultValue : [
                defaultValue
            ]),
            value: value && (Array.isArray(value) ? value : [
                value
            ])
        }, rest), {
            renderInput: function(_param) {
                var inputProps = _param.inputProps, textFieldProps = _objectWithoutProperties$d(_param, [
                    "inputProps"
                ]);
                return /*#__PURE__*/ jsx(TextField$2, _objectSpread$l({
                    className: cx(classes.textField),
                    inputProps: _objectSpreadProps$i(_objectSpread$l({}, inputProps), {
                        className: cx(classes.inputField, classes.inputFieldFn)
                    }),
                    label: label,
                    variant: variant,
                    placeholder: placeholder
                }, textFieldProps));
            }
        }))
    });
}

function _defineProperty$m(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$k(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$m(target, key, source[key]);
        });
    }
    return target;
}
function TextField$1(props) {
    return /*#__PURE__*/ jsx(InputBase, _objectSpread$k({}, props));
}

function _defineProperty$l(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$j(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$l(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$h(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$h(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$h(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var useStyles$A = makeStyles()(function(theme, param) {
    var dense = param.dense;
    return {
        root: {
            marginTop: theme.spacing(dense ? 0 : 1),
            marginBottom: theme.spacing(dense ? 1 : 2)
        }
    };
});
function BooleanField(param) {
    var className = param.className, style = param.style, classesProp = param.classes, field = param.field, editorProps = param.editorProps, _param_dense = param.dense, dense = _param_dense === void 0 ? false : _param_dense, _param_editorVariant = param.editorVariant, editorVariant = _param_editorVariant === void 0 ? "filled" : _param_editorVariant, _param_autoFocus = param.autoFocus, autoFocus = _param_autoFocus === void 0 ? false : _param_autoFocus, _param_errors = param.errors, errors = _param_errors === void 0 ? [] : _param_errors, onChange = param.onChange, value = param.value, label = param.label, _param_readonly = param.readonly, readonly = _param_readonly === void 0 ? false : _param_readonly;
    var _useStyles = useStyles$A({
        dense: dense
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var fieldLabel = field.label, id = field.id;
    var displayValue = useMemo(function() {
        return Boolean(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ jsx(CheckboxField, _objectSpreadProps$h(_objectSpread$j({
        className: cx(classes.root, className),
        style: style
    }, editorProps), {
        fullWidth: true,
        id: id,
        helperText: field.description,
        label: label || fieldLabel,
        variant: editorVariant,
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
        size: dense ? "small" : "medium"
    }));
}
var fieldBuilder$1 = {
    isCompatible: function(fieldDefinition) {
        return fieldDefinition.type === "boolean";
    },
    getComponent: function() {
        return BooleanField;
    }
};

function _defineProperty$k(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$i(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$k(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$g(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$g(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$g(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var useStyles$z = makeStyles()(function(theme, param) {
    var dense = param.dense;
    return {
        root: {
            marginTop: theme.spacing(dense ? 0 : 1),
            marginBottom: theme.spacing(dense ? 1 : 2)
        }
    };
});
// The text field is a special case as it is used as the default if a match cannot be found
// So we export it also
function TextField(param) {
    var className = param.className, style = param.style, classesProp = param.classes, field = param.field, editorProps = param.editorProps, _param_dense = param.dense, dense = _param_dense === void 0 ? false : _param_dense, _param_editorVariant = param.editorVariant, editorVariant = _param_editorVariant === void 0 ? "filled" : _param_editorVariant, _param_autoFocus = param.autoFocus, autoFocus = _param_autoFocus === void 0 ? false : _param_autoFocus, _param_errors = param.errors, errors = _param_errors === void 0 ? [] : _param_errors, onChange = param.onChange, value = param.value, _param_readonly = param.readonly, readonly = _param_readonly === void 0 ? false : _param_readonly;
    var _useStyles = useStyles$z({
        dense: dense
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var label = field.label, id = field.id, _field_maxLength = field.maxLength, maxLength = _field_maxLength === void 0 ? 255 : _field_maxLength;
    var displayValue = useMemo(function() {
        return (field.format ? field.format(value) : value) || "";
    }, [
        value,
        field
    ]);
    var inputType = "text";
    switch(field.type){
        case "email":
            inputType = "email";
            break;
        case "url":
            inputType = "url";
            break;
        case "number":
            inputType = "number";
            break;
        case "password":
            inputType = "password";
            break;
        default:
            inputType = "text";
    }
    return /*#__PURE__*/ jsx(TextField$1, _objectSpreadProps$g(_objectSpread$i({
        className: cx(classes.root, className),
        style: style
    }, editorProps), {
        fullWidth: true,
        id: id,
        name: id,
        label: label,
        autoComplete: inputType === "password" ? "on" : "off",
        size: dense ? "small" : "medium",
        variant: editorVariant,
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
            autoComplete: inputType === "password" ? "new-password" : undefined
        },
        multiline: maxLength > 256,
        rows: Math.min(maxLength / 256, 20) || 1,
        value: displayValue,
        onChange: onChange,
        errors: errors
    }));
}
var fieldBuilder = {
    isCompatible: function(fieldDefinition) {
        return fieldDefinition.type === "string" || fieldDefinition.type === "email" || fieldDefinition.type === "url" || fieldDefinition.type === "number" || fieldDefinition.type === "password";
    },
    getComponent: function() {
        return TextField;
    }
};

var fieldMap = [
    fieldBuilder$1,
    fieldBuilder,
    {
        isCompatible: function() {
            return true;
        },
        getComponent: function() {
            return TextField;
        }
    }
];
function getComponent(fieldDefinition) {
    var builder = fieldMap.find(function(builder) {
        return builder.isCompatible(fieldDefinition);
    });
    return (builder === null || builder === void 0 ? void 0 : builder.getComponent()) || TextField;
}

function _defineProperty$j(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$h(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$j(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$f(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$f(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$f(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var useStyles$y = makeStyles()(function(theme, param) {
    var dense = param.dense, gridTemplateAreas = param.gridTemplateAreas;
    return {
        root: _defineProperty$j({
            display: "grid",
            width: "100%",
            minHeight: dense ? "auto" : "100%",
            gap: theme.spacing(1),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            gridTemplateAreas: gridTemplateAreas
        }, theme.breakpoints.down("sm"), {
            gridTemplateAreas: "unset",
            gridTemplateColumns: "100%"
        }),
        componentFieldWrapper: _defineProperty$j({
            width: "100%"
        }, theme.breakpoints.down("sm"), {
            gridArea: "unset !important"
        })
    };
});
var EntityView = /*#__PURE__*/ forwardRef(function(param, ref) {
    var className = param.className, style = param.style, classesProp = param.classes, model = param.model, _param_dense = param.dense, dense = _param_dense === void 0 ? false : _param_dense, _param_editorVariant = param.editorVariant, editorVariant = _param_editorVariant === void 0 ? "outlined" : _param_editorVariant, _param_readonly = param.readonly, readonly = _param_readonly === void 0 ? false : _param_readonly, value = param.value, onChange = param.onChange;
    var _useForm = useForm(value || model.generateModel(), model.validate), form = _useForm.form, handleChange = _useForm.handleChange, validationErrors = _useForm.errors, validate = _useForm.validate, isValid = _useForm.isValid, handleSubmit = _useForm.handleSubmit, resetForm = _useForm.resetForm;
    var onHandleSubmit = useCallback(function(e, onSubmit, callback) {
        if (isValid()) {
            handleSubmit(e, onSubmit, callback);
        }
    }, [
        handleSubmit,
        isValid
    ]);
    useImperativeHandle(ref, function() {
        return {
            validate: validate,
            isValid: isValid,
            handleSubmit: onHandleSubmit,
            resetForm: resetForm
        };
    }, [
        validate,
        isValid,
        onHandleSubmit,
        resetForm
    ]);
    useEffect(function() {
        onChange && onChange(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        form
    ]);
    var gridLayout = useMemo(function() {
        // Extract columns/rows and fields
        var layout = model.layout.reduce(function(acc, row) {
            if (row.length > acc.columns) {
                acc.columns = row.length;
            }
            // Extract the ID of the field
            acc.layout.push(row.map(function(r) {
                return r;
            }));
            row.forEach(function(f) {
                acc.gridAreas.push(f);
            });
            return acc;
        }, {
            rows: model.layout.length,
            columns: 0,
            layout: [],
            gridTemplateAreas: "",
            gridAreas: []
        });
        // Define the grid template areas
        layout.gridTemplateAreas = layout.layout.map(function(l) {
            return "'".concat(Array.from(_objectSpreadProps$f(_objectSpread$h({}, l), {
                length: layout.columns
            })).map(function(c) {
                return c || ".";
            }).join(" "), "'");
        }).join(" ");
        // Make sure the grid areas are unique
        layout.gridAreas = layout.gridAreas.filter(function(v, i) {
            return !layout.gridAreas.includes(v, i + 1);
        });
        return layout;
    }, [
        model
    ]);
    var _useStyles = useStyles$y({
        dense: dense,
        gridTemplateAreas: gridLayout.gridTemplateAreas
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    // Generate the controls separately as they may change based on the values
    var fields = useMemo(function() {
        return gridLayout.gridAreas.map(function(fieldName) {
            var field = model.fields[fieldName];
            if (isComponentField(field)) {
                return /*#__PURE__*/ jsx("div", {
                    className: cx(classes.componentFieldWrapper),
                    style: {
                        gridArea: fieldName
                    },
                    children: field.render()
                }, field.id);
            } else {
                var _field_componentProps;
                var Component = getComponent(field);
                return /*#__PURE__*/ jsx(Component, _objectSpreadProps$f(_objectSpread$h({
                    className: cx(classes.componentFieldWrapper),
                    field: field,
                    dense: dense,
                    editorVariant: editorVariant,
                    value: form[field.id],
                    onChange: handleChange,
                    readonly: readonly || field.readonly,
                    errors: validationErrors[field.id]
                }, field.componentProps), {
                    style: _objectSpreadProps$f(_objectSpread$h({}, (_field_componentProps = field.componentProps) === null || _field_componentProps === void 0 ? void 0 : _field_componentProps.style), {
                        gridArea: fieldName
                    })
                }), "".concat(field.type, "|").concat(field.label));
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        gridLayout.gridAreas,
        model.fields,
        form,
        handleChange,
        validationErrors
    ]);
    return /*#__PURE__*/ jsx("div", {
        className: cx(classes.root, className),
        style: style,
        children: fields
    });
});

var useStyles$x = makeStyles()(function() {
    return {
        root: {
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%"
        }
    };
});
function Form(param) {
    var className = param.className, style = param.style, classesProp = param.classes, children = param.children, onSubmit = param.onSubmit;
    var _useStyles = useStyles$x(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx("form", {
        className: cx(classes.root, className),
        style: style,
        onSubmit: onSubmit,
        children: children
    });
}

function _arrayLikeToArray$a(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$9(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles$3(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$a(arr);
}
function _defineProperty$i(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray$3(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit$9(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$9() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$3() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$g(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$i(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$e(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$e(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$e(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray$9(arr, i) {
    return _arrayWithHoles$9(arr) || _iterableToArrayLimit$9(arr, i) || _unsupportedIterableToArray$a(arr, i) || _nonIterableRest$9();
}
function _toConsumableArray$3(arr) {
    return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$a(arr) || _nonIterableSpread$3();
}
function _unsupportedIterableToArray$a(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$a(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$a(o, minLen);
}
var useStyles$w = makeStyles()(function(theme, param) {
    var alignTitle = param.alignTitle;
    var headerAlignment = alignTitle === "center" ? alignTitle : alignTitle === "left" ? "flex-start" : "flex-end";
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            width: theme.spacing(48),
            maxWidth: "100%",
            overflow: "hidden"
        },
        header: {
            flexShrink: 0,
            flexGrow: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: headerAlignment,
            textAlign: alignTitle
        },
        form: {
            display: "flex",
            flexDirection: "column",
            flexShrink: 1,
            flexGrow: 1,
            maxHeight: "100%",
            overflow: "hidden"
        },
        form_dense: {
            flexGrow: 0
        },
        entityView: {
            flexShrink: 0,
            overflow: "auto"
        },
        title: _objectSpreadProps$e(_objectSpread$g({}, theme.typography.h6), _defineProperty$i({
            textTransform: "uppercase",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3)
        }, theme.breakpoints.up("sm"), {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(4)
        })),
        spacer: {
            minHeight: theme.spacing(1),
            flexGrow: 1
        },
        spacer_dense: {
            flexGrow: 0,
            flexShrink: 1
        },
        actions: {
            flexShrink: 1,
            flexGrow: 0
        },
        footer: {
            paddingTop: theme.spacing(1),
            flexGrow: 0,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column"
        },
        error: {
            width: "100%",
            borderRadius: theme.shape.borderRadius,
            borderColor: theme.palette.error.main,
            borderStyle: "solid",
            borderWidth: "thin",
            marginBottom: theme.spacing(0.5),
            padding: theme.spacing(0.5)
        }
    };
});
function EntityViewForm(param) {
    var className = param.className, style = param.style, classesProp = param.classes, onSubmit = param.onSubmit, model = param.model, _param_variant = param.variant, variant = _param_variant === void 0 ? "standard" : _param_variant, _param_dense = param.dense, dense = _param_dense === void 0 ? true : _param_dense, _param_title = param.title, title = _param_title === void 0 ? "" : _param_title, header = param.header, footer = param.footer, _param_submit = param.submit, submit = _param_submit === void 0 ? "submit" : _param_submit, _param_alignTitle = param.alignTitle, alignTitle = _param_alignTitle === void 0 ? "left" : _param_alignTitle, errors = param.errors, onChange = param.onChange, value = param.value, _param_processing = param.processing, processing = _param_processing === void 0 ? false : _param_processing, _param_readonly = param.readonly, readonly = _param_readonly === void 0 ? false : _param_readonly;
    var _useStyles = useStyles$w({
        alignTitle: alignTitle
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var entityViewRef = useRef(null);
    var _useState = _slicedToArray$9(useState(false), 2), canSubmit = _useState[0], setCanSubmit = _useState[1];
    var _useState1 = _slicedToArray$9(useState(processing), 2), isProcessing = _useState1[0], setIsProcessing = _useState1[1];
    var t = useContext(LocalizationContext).t;
    var errorRef = useRef(null);
    useEffect(function() {
        if (errors && errors.length > 0) {
            var // Set focus to the error div for screen readers
            _errorRef_current;
            errorRef === null || errorRef === void 0 ? void 0 : (_errorRef_current = errorRef.current) === null || _errorRef_current === void 0 ? void 0 : _errorRef_current.focus();
        }
    }, [
        errors
    ]);
    var resolvedProcessing = isProcessing || processing;
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            header,
            /*#__PURE__*/ jsxs("div", {
                className: cx(classes.header),
                children: [
                    title && /*#__PURE__*/ jsx(Typography, {
                        variant: "h1",
                        component: "div",
                        className: cx(classes.title),
                        children: t(title)
                    }),
                    errors && errors.length > 0 && /*#__PURE__*/ jsx("div", {
                        ref: errorRef,
                        className: cx(classes.error),
                        children: /*#__PURE__*/ jsx(Error$1, {
                            size: "small",
                            children: t.apply(void 0, _toConsumableArray$3(errors[0]))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsxs(Form, {
                className: cx(classes.form, dense && classes.form_dense),
                onSubmit: function(e) {
                    var _entityViewRef_current;
                    e.preventDefault();
                    setIsProcessing(true);
                    entityViewRef === null || entityViewRef === void 0 ? void 0 : (_entityViewRef_current = entityViewRef.current) === null || _entityViewRef_current === void 0 ? void 0 : _entityViewRef_current.handleSubmit(e, onSubmit, function(err) {
                        setIsProcessing(false);
                        if (!err) {
                            var _entityViewRef_current;
                            (_entityViewRef_current = entityViewRef.current) === null || _entityViewRef_current === void 0 ? void 0 : _entityViewRef_current.resetForm();
                        }
                    });
                },
                children: [
                    /*#__PURE__*/ jsx(EntityView, {
                        value: value,
                        className: cx(classes.entityView),
                        onChange: function(data) {
                            var _entityViewRef_current;
                            setCanSubmit((entityViewRef === null || entityViewRef === void 0 ? void 0 : (_entityViewRef_current = entityViewRef.current) === null || _entityViewRef_current === void 0 ? void 0 : _entityViewRef_current.isValid()) || false);
                            onChange && onChange(data);
                        },
                        readonly: readonly,
                        ref: entityViewRef,
                        model: model,
                        dense: dense,
                        editorVariant: variant
                    }),
                    /*#__PURE__*/ jsx("div", {
                        className: cx(classes.spacer, dense && classes.spacer_dense)
                    }),
                    /*#__PURE__*/ jsx("div", {
                        className: cx(classes.actions),
                        children: !resolvedProcessing ? typeof submit === "string" ? /*#__PURE__*/ jsx(Button, {
                            type: "submit",
                            fullWidth: true,
                            disabled: !canSubmit || readonly,
                            children: t(submit)
                        }) : submit : /*#__PURE__*/ jsx(Loader, {
                            variant: "circular"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.footer),
                children: footer
            })
        ]
    });
}

function _defineProperty$h(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var useStyles$v = makeStyles()(function(theme, param) {
    var columns = param.columns, _param_gap = param.gap, gap = _param_gap === void 0 ? 1 : _param_gap;
    var columnTemplate = Array(columns).fill("minmax(0, 1fr)").join(" ");
    var mdColumnTemplate = Array(columns).fill("minmax(0, 1fr)").join(" ");
    var _obj;
    return {
        root: {
            width: "100%",
            height: "100%"
        },
        errorWrapper: {
            flexGrow: 0
        },
        gridWrapper: (_obj = {
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: columnTemplate,
            gridTemplateRows: "auto auto auto",
            gap: theme.spacing(gap),
            padding: theme.spacing(0.25)
        }, _defineProperty$h(_obj, theme.breakpoints.down("md"), {
            gridTemplateColumns: mdColumnTemplate
        }), _defineProperty$h(_obj, theme.breakpoints.down("sm"), {
            gridTemplateColumns: "minmax(0, 1fr)"
        }), _obj)
    };
});
function DataGrid(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_errors = param.errors, errors = _param_errors === void 0 ? [] : _param_errors, _param_data = param.data, data = _param_data === void 0 ? [] : _param_data, _param_columns = param.columns, columns = _param_columns === void 0 ? 3 : _param_columns, _param_gap = param.gap, gap = _param_gap === void 0 ? 1 : _param_gap, itemComponent = param.itemComponent, _param_loading = param.loading, loading = _param_loading === void 0 ? false : _param_loading;
    var _useStyles = useStyles$v({
        columns: columns,
        gap: gap
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            errors && errors.length > 0 && /*#__PURE__*/ jsx(ErrorWrapper, {
                className: cx(classes.errorWrapper),
                errors: errors,
                variant: "condensed"
            }),
            loading && /*#__PURE__*/ jsx(Loader, {
                variant: "circular"
            }),
            !loading && /*#__PURE__*/ jsx("div", {
                className: cx(classes.gridWrapper),
                children: data.map(itemComponent)
            })
        ]
    });
}

function _arrayLikeToArray$9(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$8(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles$2(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$9(arr);
}
function _defineProperty$g(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray$2(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit$8(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$8() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$f(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$g(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties$c(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$c(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$c(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray$8(arr, i) {
    return _arrayWithHoles$8(arr) || _iterableToArrayLimit$8(arr, i) || _unsupportedIterableToArray$9(arr, i) || _nonIterableRest$8();
}
function _toConsumableArray$2(arr) {
    return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$9(arr) || _nonIterableSpread$2();
}
function _unsupportedIterableToArray$9(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$9(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$9(o, minLen);
}
var useStyles$u = makeStyles()(function() {
    return {
        root: {}
    };
});
function RepositoryGrid(_param) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, repository = _param.repository; _param.model; var itemComponent = _param.itemComponent, rest = _objectWithoutProperties$c(_param, [
        "className",
        "style",
        "classes",
        "repository",
        "model",
        "itemComponent"
    ]);
    var _useStyles = useStyles$u(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var t = useContext(LocalizationContext).t;
    var _useState = _slicedToArray$8(useState(repository.getState()), 2), dataState = _useState[0], setDataState = _useState[1];
    useObservable(repository.getObservable(), setDataState, []);
    useEffect(function() {
        repository.findAll();
    }, [
        repository
    ]);
    return /*#__PURE__*/ jsx(DataGrid, _objectSpread$f({
        className: cx(classes.root, className),
        style: style,
        errors: dataState.errors.map(function(e) {
            return {
                message: t.apply(void 0, _toConsumableArray$2(e))
            };
        }),
        data: dataState.page.data,
        itemComponent: itemComponent,
        loading: dataState.listing
    }, rest));
}

function _defineProperty$f(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$e(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$f(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$d(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$d(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$d(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var useStyles$t = makeStyles()(function(theme) {
    var _mostReadable, _mostReadable1, _mostReadable2, _mostReadable3, _mostReadable4, _mostReadable5;
    return {
        root: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        },
        root_inherit: {},
        root_small: {},
        root_large: {},
        root_medium: {},
        root_condensed: {},
        root_prominent: _defineProperty$f({}, theme.breakpoints.down("md"), {
            flexDirection: "column"
        }),
        titleWrapper: {
            flexGrow: 1,
            flexShrink: 1
        },
        icon: {
            marginRight: theme.spacing(2)
        },
        title: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        titleText: {
            display: "-webkit-box",
            WebkitLineClamp: 2,
            lineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis"
        },
        contentWrapper: {
            marginTop: theme.spacing(1)
        },
        actionWrapper: _defineProperty$f({
            flexGrow: 0,
            flexShrink: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: theme.spacing(2)
        }, theme.breakpoints.down("md"), {
            flexDirection: "column",
            paddingLeft: 0,
            "& > *": {
                marginRight: 0,
                marginBottom: theme.spacing(1)
            },
            "& > *:last-child": {
                marginRight: 0,
                marginBottom: 0
            }
        }),
        actionWrapper_condensed: {
            justifyContent: "center"
        },
        actionWrapper_prominent: _defineProperty$f({
            "& > *": {
                marginRight: theme.spacing(2)
            },
            "& > *:last-child": {
                marginRight: 0
            }
        }, theme.breakpoints.down("md"), {
            paddingTop: theme.spacing(2),
            "& > *": {
                marginRight: 0,
                marginBottom: theme.spacing(1)
            },
            "& > *:last-child": {
                marginRight: 0,
                marginBottom: 0
            }
        }),
        actionButton: _defineProperty$f({
            flexShrink: 0
        }, theme.breakpoints.down("md"), {
            width: "100%"
        }),
        actionButton_inherit: {},
        actionButton_default: {},
        actionButton_primary: {
            color: "".concat((_mostReadable = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.primary.dark
            ], {})) === null || _mostReadable === void 0 ? void 0 : _mostReadable.toHex8String())
        },
        actionButton_secondary: {
            color: "".concat((_mostReadable1 = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.secondary.light,
                theme.palette.secondary.main,
                theme.palette.secondary.dark
            ], {})) === null || _mostReadable1 === void 0 ? void 0 : _mostReadable1.toHex8String())
        },
        actionButton_error: {
            color: "".concat((_mostReadable2 = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.error.light,
                theme.palette.error.main,
                theme.palette.error.dark
            ], {})) === null || _mostReadable2 === void 0 ? void 0 : _mostReadable2.toHex8String())
        },
        actionButton_info: {
            color: "".concat((_mostReadable3 = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.info.light,
                theme.palette.info.main,
                theme.palette.info.dark
            ], {})) === null || _mostReadable3 === void 0 ? void 0 : _mostReadable3.toHex8String())
        },
        actionButton_success: {
            color: "".concat((_mostReadable4 = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.success.light,
                theme.palette.success.main,
                theme.palette.success.dark
            ], {})) === null || _mostReadable4 === void 0 ? void 0 : _mostReadable4.toHex8String())
        },
        actionButton_warning: {
            color: "".concat((_mostReadable5 = mostReadable(tinycolor(theme.palette.background.paper), [
                theme.palette.warning.light,
                theme.palette.warning.main,
                theme.palette.warning.dark
            ], {})) === null || _mostReadable5 === void 0 ? void 0 : _mostReadable5.toHex8String())
        }
    };
});
function isButtonProps(action) {
    return Boolean(action.title);
}
function isIconButtonProps(action) {
    return Boolean(action.title);
}
function SectionHeader(param) {
    var className = param.className, style = param.style, classesProp = param.classes, title = param.title, _param_size = param.size, size = _param_size === void 0 ? "medium" : _param_size, _param_variant = param.variant, variant = _param_variant === void 0 ? "prominent" : _param_variant, subtitle = param.subtitle, actions = param.actions, icon = param.icon, _param_iconColor = param.iconColor, iconColor = _param_iconColor === void 0 ? "inherit" : _param_iconColor, iconTitle = param.iconTitle, onIconClick = param.onIconClick, children = param.children, titleAction = param.titleAction;
    var _useStyles = useStyles$t(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var typographyVariants = {
        inherit: "inherit",
        small: "h5",
        medium: "h4",
        large: "h2"
    };
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className, classes["root_".concat(size)], classes["root_".concat(variant)]),
        style: style,
        children: [
            /*#__PURE__*/ jsxs("div", {
                className: cx(classes.titleWrapper),
                children: [
                    titleAction,
                    /*#__PURE__*/ jsxs("div", {
                        className: cx(classes.title),
                        children: [
                            icon && onIconClick && /*#__PURE__*/ jsx(IconButton, {
                                className: cx(classes.icon),
                                size: size,
                                icon: icon,
                                title: iconTitle,
                                color: iconColor,
                                onClick: function() {
                                    onIconClick();
                                }
                            }),
                            icon && !onIconClick && /*#__PURE__*/ jsx(Icon, {
                                className: cx(classes.icon),
                                size: size,
                                title: iconTitle,
                                color: iconColor,
                                children: icon
                            }),
                            /*#__PURE__*/ jsx(Typography, {
                                className: cx(classes.titleText),
                                variant: typographyVariants[size],
                                component: "h2",
                                children: title
                            })
                        ]
                    }),
                    subtitle && /*#__PURE__*/ jsx(Typography, {
                        variant: "caption",
                        children: subtitle
                    }),
                    children && /*#__PURE__*/ jsx("div", {
                        className: cx(classes.contentWrapper),
                        children: children
                    })
                ]
            }),
            actions && /*#__PURE__*/ jsx("div", {
                className: cx(classes.actionWrapper, classes["actionWrapper_".concat(variant)]),
                children: actions.map(function(action) {
                    if (isButtonProps(action) || isIconButtonProps(action)) {
                        if (variant === "prominent") {
                            var componentProps = action;
                            return /*#__PURE__*/ jsx(Button, _objectSpreadProps$d(_objectSpread$e({}, componentProps), {
                                className: cx(classes.actionButton, componentProps.className),
                                color: componentProps.color || "secondary",
                                variant: componentProps.variant || "pill",
                                children: action.title
                            }), componentProps.title);
                        } else {
                            var componentProps1 = action;
                            return /*#__PURE__*/ jsx(IconButton, _objectSpreadProps$d(_objectSpread$e({}, action), {
                                variant: "text",
                                color: "inherit",
                                className: cx(classes.actionButton, classes["actionButton_".concat(componentProps1.color || "secondary")], componentProps1.className),
                                title: componentProps1.title
                            }), componentProps1.title);
                        }
                    } else {
                        return action();
                    }
                })
            })
        ]
    });
}

function _defineProperty$e(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$d(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$e(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$c(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$c(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$c(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$b(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$b(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$b(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$s = makeStyles()(function(theme) {
    return {
        root: {
            zIndex: 10,
            color: theme.palette.secondary.contrastText,
            background: theme.palette.secondary.main
        },
        toolbar: {
            minWidth: "100%"
        },
        titleContent: {
            flexGrow: 1,
            flexShrink: 1,
            overflow: "hidden"
        },
        actionContent: {
            flexShrink: 0,
            flexGrow: 0
        }
    };
});
var TitleBar = /*#__PURE__*/ forwardRef(function(_param, ref) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, titleContent = _param.titleContent, actionContent = _param.actionContent, ToolbarProps = _param.ToolbarProps, rest = _objectWithoutProperties$b(_param, [
        "className",
        "style",
        "classes",
        "titleContent",
        "actionContent",
        "ToolbarProps"
    ]);
    var _useStyles = useStyles$s(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx(AppBar, _objectSpreadProps$c(_objectSpread$d({
        ref: ref,
        className: cx(classes.root, className),
        style: style,
        position: "relative"
    }, rest), {
        children: /*#__PURE__*/ jsxs(Toolbar, _objectSpreadProps$c(_objectSpread$d({}, ToolbarProps), {
            className: cx(classes.toolbar),
            children: [
                /*#__PURE__*/ jsx("div", {
                    className: cx(classes.titleContent),
                    children: titleContent
                }),
                /*#__PURE__*/ jsx("div", {
                    className: cx(classes.actionContent),
                    children: actionContent
                })
            ]
        }))
    }));
});
var TitleBar$1 = TitleBar;

function _defineProperty$d(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$c(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$d(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$b(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$b(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$b(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$a(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$a(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$a(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$r = makeStyles()(function(theme, param) {
    var color = param.color;
    var palette = null;
    if (color === "disabled") {
        palette = {
            main: theme.palette.action.disabled,
            light: theme.palette.action.disabled,
            dark: theme.palette.action.disabled,
            contrastText: theme.palette.getContrastText(theme.palette.action.active)
        };
    } else if (color === "action") {
        palette = {
            main: theme.palette.action.active,
            light: theme.palette.action.active,
            dark: theme.palette.action.active,
            contrastText: theme.palette.getContrastText(theme.palette.action.active)
        };
    } else if (color !== "inherit") {
        palette = theme.palette[color];
    }
    return {
        root: {
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            color: palette ? theme.palette.mode === "dark" && tinycolor(palette.main).isDark() ? palette.light : palette.main : undefined
        },
        icon: {
            fontSize: theme.spacing(2),
            marginLeft: theme.spacing(0.5)
        }
    };
});
function Link(_param) {
    var className = _param.className; _param.style; var classesProp = _param.classes, _param_target = _param.target, target = _param_target === void 0 ? "_blank" : _param_target, children = _param.children, icon = _param.icon, _param_underline = _param.underline, underline = _param_underline === void 0 ? "hover" : _param_underline, _param_color = _param.color, color = _param_color === void 0 ? "inherit" : _param_color, rest = _objectWithoutProperties$a(_param, [
        "className",
        "style",
        "classes",
        "target",
        "children",
        "icon",
        "underline",
        "color"
    ]);
    var _useStyles = useStyles$r({
        color: color
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    if (icon === "none") {
        icon = undefined;
    } else if (!icon) {
        icon = target === "_blank" ? "open_in_new" : "link";
    }
    return /*#__PURE__*/ jsxs(Link$1, _objectSpreadProps$b(_objectSpread$c({
        className: cx(classes.root, className),
        underline: underline,
        color: "inherit"
    }, rest), {
        children: [
            children,
            icon && /*#__PURE__*/ jsx(Icon, {
                className: cx(classes.icon),
                size: "small",
                children: icon
            })
        ]
    }));
}

function _defineProperty$c(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$b(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$c(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$a(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$a(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$a(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var useStyles$q = makeStyles()(function() {
    return {
        root: {}
    };
});
function RouteLink(props) {
    var className = props.className, style = props.style, classesProp = props.classes, _props_variant = props.variant, variant = _props_variant === void 0 ? "link" : _props_variant, LinkProps = props.LinkProps, IconButtonProps = props.IconButtonProps, ButtonProps = props.ButtonProps, to = props.to, navigationOptions = props.navigationOptions, title = props.title, color = props.color, _props_icon = props.icon, icon = _props_icon === void 0 ? "link" : _props_icon;
    var _useStyles = useStyles$q(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var path = useResolvedPath(to);
    var navigate = useNavigate();
    var navigateTo = useCallback(function(e) {
        e.stopPropagation();
        e.preventDefault();
        navigate(path, navigationOptions);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        path,
        navigationOptions
    ]);
    var Component = useMemo(function() {
        switch(variant){
            case "button":
                return /*#__PURE__*/ jsx(Button, _objectSpreadProps$a(_objectSpread$b({
                    className: cx(classes.root, className),
                    style: style,
                    icon: icon,
                    color: color
                }, ButtonProps), {
                    onClick: navigateTo,
                    children: title
                }));
            case "iconButton":
                return /*#__PURE__*/ jsx(IconButton, _objectSpreadProps$a(_objectSpread$b({
                    className: cx(classes.root, className),
                    style: style,
                    icon: icon,
                    color: color
                }, IconButtonProps), {
                    title: title,
                    onClick: navigateTo
                }));
            default:
                return /*#__PURE__*/ jsx(Link, _objectSpreadProps$a(_objectSpread$b({
                    className: cx(classes.root, className),
                    style: style,
                    icon: icon,
                    color: color
                }, LinkProps), {
                    href: path.pathname,
                    onClick: navigateTo,
                    target: "_self",
                    children: title
                }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props
    ]);
    return Component;
}

function _arrayLikeToArray$8(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$7(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$7(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$7() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$7(arr, i) {
    return _arrayWithHoles$7(arr) || _iterableToArrayLimit$7(arr, i) || _unsupportedIterableToArray$8(arr, i) || _nonIterableRest$7();
}
function _unsupportedIterableToArray$8(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$8(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$8(o, minLen);
}
var useStyles$p = makeStyles()(function(theme) {
    return {
        root: {
            cursor: "default",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        menuLabel: {
            marginRight: theme.spacing(1),
            flexGrow: 1,
            cursor: "pointer"
        },
        dropdown: {
            cursor: "pointer"
        },
        listItem: {
            padding: 0,
            paddingRight: theme.spacing(2),
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        listItemText: {},
        subListItem: {
            paddingRight: 0
        },
        subListItemText: {},
        menuItem: {},
        menuItemElement: {
            minHeight: 0,
            cursor: "default",
            "&:hover": {
                background: "transparent"
            }
        }
    };
});
var DropdownMenu = /*#__PURE__*/ forwardRef(function(param, ref) {
    var className = param.className, style = param.style, classesProp = param.classes, label = param.label, secondaryLabel = param.secondaryLabel, title = param.title, icon = param.icon, _param_iconColor = param.iconColor, iconColor = _param_iconColor === void 0 ? "inherit" : _param_iconColor, prefixIcon = param.prefixIcon, _param_prefixIconColor = param.prefixIconColor, prefixIconColor = _param_prefixIconColor === void 0 ? "inherit" : _param_prefixIconColor, _param_size = param.size, size = _param_size === void 0 ? "medium" : _param_size, id = param.id, onClose = param.onClose, _param_anchorOrigin = param.anchorOrigin, anchorOrigin = _param_anchorOrigin === void 0 ? {
        vertical: "bottom",
        horizontal: "right"
    } : _param_anchorOrigin, _param_transformOrigin = param.transformOrigin, transformOrigin = _param_transformOrigin === void 0 ? {
        vertical: "top",
        horizontal: "right"
    } : _param_transformOrigin, _param_TransitionComponent = param.TransitionComponent, TransitionComponent = _param_TransitionComponent === void 0 ? Fade : _param_TransitionComponent, menu = param.menu, _param_open = param.// @ts-expect-error 'open' is a hidden prop for use in sub menues
    open, open = _param_open === void 0 ? false : _param_open, anchorElement = param.anchorElement, _param_hideIconButton = param.hideIconButton, hideIconButton = _param_hideIconButton === void 0 ? false : _param_hideIconButton;
    var _useStyles = useStyles$p(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var menuWrapperRef = useRef(null);
    var menuID = "".concat(id, "_menu");
    var _useState = _slicedToArray$7(useState(anchorElement || null), 2), anchorEl = _useState[0], setAnchorEl = _useState[1];
    useEffect(function() {
        setAnchorEl(anchorElement || null);
    }, [
        anchorElement
    ]);
    var openMenu = function(e) {
        if (e) {
            e.stopPropagation();
        }
        setAnchorEl(menuWrapperRef.current);
    };
    var closeMenu = function(e) {
        if (e) {
            e.stopPropagation();
        }
        setAnchorEl(null);
        onClose && onClose(e);
    };
    useEffect(function() {
        if (!open && anchorEl) {
            // @ts-expect-error we are protecting against undefined in the method so this is okay
            closeMenu(undefined);
        }
    }, [
        open
    ]);
    useImperativeHandle(ref, function() {
        return {
            openMenu: openMenu,
            closeMenu: closeMenu
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    icon = icon || (label ? "arrow_drop_down" : "more_vertical");
    var renderMenuItem = function(item) {
        var menuContent;
        var key = null;
        var isElement = false;
        if (/*#__PURE__*/ isValidElement(item)) {
            key = item.key;
            menuContent = item;
            isElement = true;
        } else {
            key = "".concat(item.icon, "-").concat(item.title);
            var showLabel = item.showLabel === undefined || item.showLabel;
            var iconColor = item.iconColor || "inherit";
            var hasSubMenu = !!item.menu;
            menuContent = /*#__PURE__*/ jsxs(ListItem, {
                className: cx(classes.listItem, hasSubMenu && classes.subListItem),
                "aria-label": item.title,
                onClick: function(e) {
                    closeMenu(e);
                    item.onClick && item.onClick(e);
                },
                components: {
                    Root: "div"
                },
                children: [
                    !hasSubMenu && item.icon && /*#__PURE__*/ jsx(ListItemIcon, {
                        children: /*#__PURE__*/ jsx(Icon, {
                            color: iconColor,
                            children: item.icon
                        })
                    }),
                    !hasSubMenu && showLabel && /*#__PURE__*/ jsx(ListItemText, {
                        className: cx(classes.listItemText, hasSubMenu && classes.subListItemText),
                        primary: item.title,
                        secondary: item.subtitle
                    }),
                    hasSubMenu && /*#__PURE__*/ jsx(DropdownMenu, {
                        className: cx(classes.dropdown),
                        icon: "chevron_right",
                        prefixIcon: item.icon,
                        prefixIconColor: item.iconColor,
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        menu: item.menu,
                        label: item.title,
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "right"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        },
                        // @ts-expect-error 'open' is a hidden prop
                        open: !!anchorEl,
                        onClose: closeMenu
                    })
                ]
            });
        }
        return /*#__PURE__*/ jsx(MenuItem, {
            className: cx(classes.menuItem, isElement && classes.menuItemElement),
            disableTouchRipple: isElement,
            disableRipple: isElement,
            children: menuContent
        }, key);
    };
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        ref: menuWrapperRef,
        children: [
            prefixIcon && /*#__PURE__*/ jsx(ListItemIcon, {
                children: /*#__PURE__*/ jsx(Icon, {
                    color: prefixIconColor,
                    onClick: openMenu,
                    children: prefixIcon
                })
            }),
            label && typeof label === "string" && /*#__PURE__*/ jsx(ListItemText, {
                className: cx(classes.menuLabel),
                primary: label,
                secondary: secondaryLabel,
                onClick: openMenu
            }),
            label && typeof label !== "string" && /*#__PURE__*/ jsx("div", {
                onClick: openMenu,
                children: label
            }),
            !hideIconButton && /*#__PURE__*/ jsx(IconButton, {
                icon: icon,
                color: iconColor,
                size: size,
                title: title,
                "aria-haspopup": "menu",
                "aria-controls": anchorEl ? menuID : undefined,
                onClick: openMenu
            }),
            /*#__PURE__*/ jsx(Menu, {
                id: menuID,
                anchorEl: anchorEl,
                open: !!anchorEl,
                onClose: closeMenu,
                keepMounted: true,
                anchorOrigin: anchorOrigin,
                transformOrigin: transformOrigin,
                TransitionComponent: TransitionComponent,
                children: menu && menu.filter(function(i) {
                    return i;
                }).map(renderMenuItem)
            })
        ]
    });
});
var DropdownMenu$1 = DropdownMenu;

var useStyles$o = makeStyles()(function(theme) {
    return {
        root: {
            height: "auto",
            flexShrink: 0
        },
        module: {},
        disabledModule: {
            backgroundColor: "".concat(theme.palette.action.disabled, " !important")
        },
        subModule: {
            paddingLeft: "".concat(theme.spacing(2), " !important"),
            borderTop: "thin solid ".concat(theme.palette.divider)
        },
        moduleHeader: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        icon: {
            marginRight: theme.spacing(2)
        },
        roleAccess: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        subtitle: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        path: {
            marginLeft: theme.spacing(2),
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }
    };
});
function Module(param) {
    param.className; param.style; var classesProp = param.classes, module = param.module, subModule = param.subModule, _param_path = param.path, path = _param_path === void 0 ? "" : _param_path, filter = param.filter;
    var _useStyles = useStyles$o(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var roles = !module.auth ? "*" : typeof module.auth === "string" ? module.auth : module.auth.join(",");
    return /*#__PURE__*/ jsx(List, {
        className: cx(classes.module, subModule && classes.subModule),
        subheader: /*#__PURE__*/ jsxs(ListSubheader, {
            className: cx(classes.moduleHeader, !module.enabled && classes.disabledModule),
            children: [
                subModule && /*#__PURE__*/ jsx(Icon, {
                    className: cx(classes.icon),
                    children: "subdirectory_arrow_right"
                }),
                module.icon && /*#__PURE__*/ jsx(Icon, {
                    className: cx(classes.icon),
                    children: module.icon
                }),
                /*#__PURE__*/ jsx(ListItemText, {
                    primary: module.name,
                    primaryTypographyProps: {
                        component: "div"
                    },
                    secondaryTypographyProps: {
                        component: "div"
                    },
                    secondary: /*#__PURE__*/ jsxs("div", {
                        className: cx(classes.subtitle),
                        children: [
                            /*#__PURE__*/ jsx(Typography, {
                                component: "div",
                                style: {
                                    minWidth: 200
                                },
                                children: module.title
                            }),
                            /*#__PURE__*/ jsxs("div", {
                                className: cx(classes.path),
                                children: [
                                    /*#__PURE__*/ jsx(Icon, {
                                        className: cx(classes.icon),
                                        children: "route"
                                    }),
                                    "".concat(path).concat(module.path)
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsxs("div", {
                    className: cx(classes.roleAccess),
                    children: [
                        /*#__PURE__*/ jsx(Icon, {
                            className: cx(classes.icon),
                            children: "groups"
                        }),
                        roles
                    ]
                })
            ]
        }),
        children: module.modules && Object.values(module.modules).filter(function(m) {
            if (isModuleConfig(m)) {
                if (!filter) {
                    return true;
                } else if (typeof m.auth === "string") {
                    return m.auth === filter;
                } else if (Array.isArray(m.auth)) {
                    return m.auth.includes(filter);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }).map(function(submoduleConfig) {
            return /*#__PURE__*/ jsx(Module, {
                module: submoduleConfig,
                subModule: true,
                filter: filter,
                path: "".concat(path).concat(module.path).concat(module.path === "/" ? "" : "/")
            }, submoduleConfig.name);
        })
    });
}

function _arrayLikeToArray$7(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$6(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$6(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$6() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$6(arr, i) {
    return _arrayWithHoles$6(arr) || _iterableToArrayLimit$6(arr, i) || _unsupportedIterableToArray$7(arr, i) || _nonIterableRest$6();
}
function _unsupportedIterableToArray$7(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen);
}
var useStyles$n = makeStyles()(function(theme) {
    return {
        root: {
            padding: theme.spacing(3),
            paddingTop: theme.spacing(4),
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
        },
        moduleList: {
            overflow: "auto",
            flexShrink: 1,
            display: "flex",
            flexDirection: "column"
        }
    };
});
function ModuleExplorer(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_modules = param.modules, modules = _param_modules === void 0 ? [] : _param_modules;
    var _useStyles = useStyles$n(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var t = useContext(LocalizationContext).t;
    var _useState = _slicedToArray$6(useState(), 2), filter = _useState[0], setFilter = _useState[1];
    var _useState1 = _slicedToArray$6(useState([]), 2), resolvedModules = _useState1[0], setResolvedModules = _useState1[1];
    useDeepCompareEffect(function() {
        var resolvedModules = resolveModules(modules);
        setResolvedModules(resolvedModules);
    }, [
        modules
    ]);
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            /*#__PURE__*/ jsx(TextField$1, {
                icon: "groups",
                placeholder: t("enter role to filter..."),
                clearable: true,
                value: filter || "",
                onChange: function(e, value) {
                    setFilter(value);
                }
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.moduleList),
                children: resolvedModules.filter(function(m) {
                    if (isModuleConfig(m)) {
                        if (!filter) {
                            return true;
                        } else if (typeof m.auth === "string") {
                            return m.auth === filter;
                        } else if (Array.isArray(m.auth)) {
                            return m.auth.includes(filter);
                        } else {
                            return true;
                        }
                    } else {
                        return false;
                    }
                }).map(function(m) {
                    return /*#__PURE__*/ jsx(Module, {
                        module: m,
                        filter: filter
                    }, m.name);
                })
            })
        ]
    });
}

var useStyles$m = makeStyles()(function(theme) {
    return {
        root: {
            height: "auto",
            flexShrink: 0
        },
        route: {},
        disabledRoute: {
            backgroundColor: "".concat(theme.palette.action.disabled, " !important")
        },
        subRoute: {
            paddingLeft: "".concat(theme.spacing(2), " !important"),
            borderTop: "thin solid ".concat(theme.palette.divider)
        },
        routeHeader: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        icon: {
            marginRight: theme.spacing(2)
        },
        roleAccess: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        subtitle: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        path: {
            marginLeft: theme.spacing(2),
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }
    };
});
function Route(param) {
    param.className; param.style; var classesProp = param.classes, route = param.route, subRoute = param.subRoute, filter = param.filter, _param_path = param.path, path = _param_path === void 0 ? "" : _param_path;
    var _useStyles = useStyles$m(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var roles = !route.auth ? "*" : typeof route.auth === "string" ? route.auth : route.auth.join(",");
    return /*#__PURE__*/ jsx(List, {
        className: cx(classes.route, subRoute && classes.subRoute),
        subheader: /*#__PURE__*/ jsxs(ListSubheader, {
            className: cx(classes.routeHeader),
            children: [
                subRoute && /*#__PURE__*/ jsx(Icon, {
                    className: cx(classes.icon),
                    children: "subdirectory_arrow_right"
                }),
                route.icon && /*#__PURE__*/ jsx(Icon, {
                    className: cx(classes.icon),
                    children: route.icon
                }),
                /*#__PURE__*/ jsx(ListItemText, {
                    primaryTypographyProps: {
                        component: "div"
                    },
                    secondaryTypographyProps: {
                        component: "div"
                    },
                    primary: route.title,
                    secondary: /*#__PURE__*/ jsx("div", {
                        className: cx(classes.subtitle),
                        children: /*#__PURE__*/ jsx(Typography, {
                            component: "div",
                            style: {
                                minWidth: 200
                            },
                            children: "".concat(path).concat(route.path)
                        })
                    })
                }),
                /*#__PURE__*/ jsxs("div", {
                    className: cx(classes.roleAccess),
                    children: [
                        /*#__PURE__*/ jsx(Icon, {
                            className: cx(classes.icon),
                            children: "groups"
                        }),
                        roles
                    ]
                })
            ]
        }),
        children: route.routes && Object.values(route.routes).filter(function(m) {
            if (!filter) {
                return true;
            } else if (typeof m.auth === "string") {
                return m.auth === filter;
            } else if (Array.isArray(m.auth)) {
                return m.auth.includes(filter);
            } else {
                return true;
            }
        }).map(function(subrouteConfig) {
            return /*#__PURE__*/ jsx(Route, {
                route: subrouteConfig,
                subRoute: true,
                filter: filter,
                path: "".concat(path).concat(route.path).concat(route.path === "/" ? "" : "/")
            }, subrouteConfig.title);
        })
    });
}

function _arrayLikeToArray$6(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$5(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$5(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$5() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$5(arr, i) {
    return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i) || _unsupportedIterableToArray$6(arr, i) || _nonIterableRest$5();
}
function _unsupportedIterableToArray$6(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen);
}
var useStyles$l = makeStyles()(function(theme) {
    return {
        root: {
            padding: theme.spacing(3),
            paddingTop: theme.spacing(4),
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
        },
        routeList: {
            overflow: "auto",
            flexShrink: 1,
            display: "flex",
            flexDirection: "column"
        }
    };
});
function RouteExplorer(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_modules = param.modules, modules = _param_modules === void 0 ? [] : _param_modules;
    var _useStyles = useStyles$l(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var t = useContext(LocalizationContext).t;
    var _useState = _slicedToArray$5(useState(), 2), filter = _useState[0], setFilter = _useState[1];
    var _useState1 = _slicedToArray$5(useState([]), 2); _useState1[0]; var setResolvedModules = _useState1[1];
    var _useState2 = _slicedToArray$5(useState([]), 2), routes = _useState2[0], setRoutes = _useState2[1];
    useDeepCompareEffect(function() {
        var resolvedModules = resolveModules(modules);
        setResolvedModules(resolvedModules);
        // // Also update the routes by extracting from the modules
        setRoutes(extractRoutesFromModules(resolvedModules));
    }, [
        modules
    ]);
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            /*#__PURE__*/ jsx(TextField$1, {
                icon: "groups",
                placeholder: t("enter role to filter..."),
                clearable: true,
                value: filter || "",
                onChange: function(e, value) {
                    setFilter(value);
                }
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.routeList),
                children: routes.filter(function(r) {
                    if (!filter) {
                        return true;
                    } else if (typeof r.auth === "string") {
                        return r.auth === filter;
                    } else if (Array.isArray(r.auth)) {
                        return r.auth.includes(filter);
                    } else {
                        return true;
                    }
                }).map(function(r) {
                    return /*#__PURE__*/ jsx(Route, {
                        route: r,
                        filter: filter
                    }, r.title);
                })
            })
        ]
    });
}

var useStyles$k = makeStyles()(function() {
    return {
        root: {}
    };
});
function HorizontalNavbar(param) {
    var className = param.className, style = param.style, classesProp = param.classes;
    var _useStyles = useStyles$k(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx("div", {
        className: cx(classes.root, className),
        style: style,
        children: "HorizontalNavbar"
    });
}

function _defineProperty$b(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$a(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$b(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$9(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$9(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$9(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$9(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$9(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$9(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$j = makeStyles()(function(theme) {
    return {
        root: {
            display: "block"
        },
        active: {}
    };
});
var NavLinkAdapter = /*#__PURE__*/ forwardRef(function(_param, ref) {
    var children = _param.children, className = _param.className, classesProp = _param.classes; _param.ownerState; var rest = _objectWithoutProperties$9(_param, [
        "children",
        "className",
        "classes",
        "ownerState"
    ]);
    var _useStyles = useStyles$j(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx("li", {
        children: /*#__PURE__*/ jsx(NavLink$1, _objectSpreadProps$9(_objectSpread$a({
            className: function(param) {
                var isActive = param.isActive;
                return cx(classes.root, className, isActive && classes.active, isActive && "active");
            },
            end: true
        }, rest), {
            children: children
        }))
    });
});

var useStyles$i = makeStyles()(function(theme, param) {
    var variant = param.variant, depth = param.depth, showLabel = param.showLabel;
    var inactiveColor = theme.palette.action.active;
    var activeColor = theme.palette.mode === "light" ? theme.palette.primary.dark : theme.palette.primary.light;
    return {
        root: {
            textDecoration: "none!important",
            textTransform: "capitalize",
            color: inactiveColor,
            cursor: "pointer",
            borderWidth: 0,
            backgroundColor: "transparent",
            marginRight: variant === "rounded" ? theme.spacing(1) : 0,
            transition: theme.transitions.create([
                "border-width",
                "background-color",
                "border-bottom-right-radius",
                "border-top-right-radius"
            ], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter
            }),
            borderBottomRightRadius: variant === "rounded" ? theme.spacing(4) : 0,
            borderTopRightRadius: variant === "rounded" ? theme.spacing(4) : 0,
            "&.active": {
                color: activeColor
            }
        },
        itemWrapper: variant === "rounded" ? {
            borderBottomRightRadius: theme.spacing(4),
            borderTopRightRadius: theme.spacing(4),
            justifyContent: showLabel ? "flex-start" : "center",
            paddingLeft: theme.spacing(3),
            ".active &": {
                paddingLeft: theme.spacing(2.5)
            }
        } : {
            paddingLeft: theme.spacing(3),
            ".active &": {
                paddingLeft: theme.spacing(2.5)
            }
        },
        iconWrapper: {
            transition: theme.transitions.create([
                "padding-right"
            ], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter
            }),
            paddingLeft: showLabel ? theme.spacing(2 * Math.min(depth, 4)) : 0,
            minWidth: 0,
            paddingRight: showLabel ? theme.spacing(2) : 0,
            color: inactiveColor,
            ".active &": {
                color: activeColor
            }
        },
        icon: {
            transition: theme.transitions.create([
                "font-size"
            ], {
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
            overflow: "hidden",
            flexShrink: 1
        },
        labelText: {
            maxWidth: theme.spacing(1000),
            transition: theme.transitions.create([
                "max-width"
            ], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter
            }),
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: "thin",
            fontSize: theme.typography.pxToRem(12)
        },
        labelTextHidden: {
            maxWidth: 0
        },
        iconButton: {
            width: theme.spacing(3),
            height: theme.spacing(4),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: theme.typography.pxToRem(10),
            maxWidth: theme.spacing(1000),
            transition: theme.transitions.create([
                "max-width"
            ], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter
            }),
            overflow: "hidden",
            flexShrink: 0
        },
        iconButtonHidden: {
            maxWidth: 0
        },
        badge: {
            flexGrow: 1,
            overflow: "hidden",
            flexShrink: 1,
            marginRight: showLabel ? variant !== "rounded" ? theme.spacing(1) : 0 : 0
        },
        active: {
            backgroundColor: theme.palette.action.focus,
            fontWeight: "bold",
            borderLeftWidth: theme.spacing(0.5),
            borderColor: theme.palette.primary.main,
            borderStyle: "solid"
        }
    };
});
function NavLink(param) {
    var className = param.className, style = param.style, classesProp = param.classes, route = param.route, _param_variant = param.variant, variant = _param_variant === void 0 ? "rounded" : _param_variant, _param_depth = param.depth, depth = _param_depth === void 0 ? 0 : _param_depth, onClick = param.onClick, iconButton = param.iconButton, _param_showLabel = param.showLabel, showLabel = _param_showLabel === void 0 ? true : _param_showLabel, _param_showIconButton = param.showIconButton, showIconButton = _param_showIconButton === void 0 ? true : _param_showIconButton;
    var _useStyles = useStyles$i({
        variant: variant,
        depth: depth,
        showIconButton: showIconButton,
        showLabel: showLabel
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var derivedPath = route.absolutePath || route.path;
    var navPath = derivedPath && derivedPath.endsWith("*") ? derivedPath.slice(0, -1) : derivedPath;
    return /*#__PURE__*/ jsx(ListItem, {
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
        },
        children: /*#__PURE__*/ jsxs(ListItemButton, {
            className: cx(classes.itemWrapper),
            children: [
                /*#__PURE__*/ jsx(ListItemIcon, {
                    className: cx(classes.iconWrapper),
                    children: route.icon && /*#__PURE__*/ jsx(Icon, {
                        size: "inherit",
                        className: cx(classes.icon, !showLabel && classes.iconLarger),
                        style: {
                            fontSize: !showLabel ? "1.4rem" : "1rem"
                        },
                        children: route.icon
                    })
                }),
                /*#__PURE__*/ jsxs(Badge, {
                    className: cx(classes.badge),
                    children: [
                        /*#__PURE__*/ jsx(ListItemText, {
                            className: cx(classes.label),
                            primaryTypographyProps: {
                                variant: "subtitle1",
                                className: cx(classes.labelText, !showLabel && classes.labelTextHidden)
                            },
                            primary: route.title
                        }),
                        /*#__PURE__*/ jsx("div", {
                            className: cx(classes.iconButton, !showIconButton && classes.iconButtonHidden),
                            children: iconButton
                        })
                    ]
                })
            ]
        })
    });
}

function _arrayLikeToArray$5(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$4(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$4(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$4() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$4(arr, i) {
    return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$5(arr, i) || _nonIterableRest$4();
}
function _unsupportedIterableToArray$5(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen);
}
var useStyles$h = makeStyles()(function(theme, param) {
    param.variant;
    return {
        root: {
            padding: 0
        },
        groupWrapper: {
            maxHeight: 0,
            opacity: 0,
            transition: theme.transitions.create([
                "max-height",
                "opacity"
            ], {
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
function NavGroup(param) {
    var className = param.className, style = param.style, classesProp = param.classes, route = param.route, variant = param.variant, _param_depth = param.depth, depth = _param_depth === void 0 ? 0 : _param_depth, _param_showLabel = param.showLabel, showLabel = _param_showLabel === void 0 ? true : _param_showLabel, _param_showIconButton = param.showIconButton, showIconButton = _param_showIconButton === void 0 ? true : _param_showIconButton;
    var _route_routes;
    var match = useMatch({
        path: route.path || "",
        caseSensitive: false,
        end: false
    });
    var isActive = Boolean(match);
    var _useState = _slicedToArray$4(useState(isActive), 2), open = _useState[0], setOpen = _useState[1];
    var _useStyles = useStyles$h({
        variant: variant,
        depth: depth
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsxs(List, {
        className: cx(classes.root, className),
        style: style,
        dense: true,
        children: [
            /*#__PURE__*/ jsx(NavLink, {
                onClick: function() {
                    setOpen(function(open) {
                        return !open;
                    });
                },
                depth: depth,
                showIconButton: showIconButton,
                showLabel: showLabel,
                variant: variant,
                route: route,
                iconButton: /*#__PURE__*/ jsx(IconButton, {
                    color: "action",
                    "aria-label": open ? "collapse" : "expand",
                    disableRipple: true,
                    className: "w-16 h-16 p-0",
                    icon: open ? "expand_less" : "expand_more"
                })
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.groupWrapper, open && classes.groupWrapperOpen),
                children: (_route_routes = route.routes) === null || _route_routes === void 0 ? void 0 : _route_routes.map(function(r) {
                    return /*#__PURE__*/ jsx(NavItem, {
                        depth: depth + 1,
                        showIconButton: showIconButton,
                        showLabel: showLabel,
                        route: r,
                        variant: variant
                    }, "".concat(r.title, ":").concat(r.path));
                })
            })
        ]
    });
}

function NavItem(param) {
    var className = param.className, style = param.style, route = param.route, _param_variant = param.variant, variant = _param_variant === void 0 ? "rounded" : _param_variant, _param_depth = param.depth, depth = _param_depth === void 0 ? 0 : _param_depth, _param_showLabel = param.showLabel, showLabel = _param_showLabel === void 0 ? true : _param_showLabel, _param_showIconButton = param.showIconButton, showIconButton = _param_showIconButton === void 0 ? true : _param_showIconButton;
    // If this item is set for navigation we will render it
    if (route.navigation) {
        // If the route has child routes (that show in the navigation), render a Group
        var hasNavigationChildren = Boolean(route.routes && route.routes.length > 0 && route.routes.find(function(r) {
            return r.navigation;
        }));
        return hasNavigationChildren ? /*#__PURE__*/ jsx(NavGroup, {
            className: className,
            style: style,
            route: route,
            variant: variant,
            depth: depth,
            showIconButton: showIconButton,
            showLabel: showLabel
        }) : /*#__PURE__*/ jsx(NavLink, {
            className: className,
            style: style,
            route: route,
            variant: variant,
            depth: depth,
            showIconButton: showIconButton,
            showLabel: showLabel
        });
    } else {
        var _route_routes;
        return(// eslint-disable-next-line react/jsx-no-useless-fragment
        /*#__PURE__*/ jsx(Fragment, {
            children: (_route_routes = route.routes) === null || _route_routes === void 0 ? void 0 : _route_routes.map(function(r) {
                return /*#__PURE__*/ jsx(NavItem, {
                    variant: variant,
                    route: r,
                    showIconButton: showIconButton,
                    showLabel: showLabel
                }, "".concat(r.path, "|").concat(r.title));
            })
        }));
    }
}

var useStyles$g = makeStyles()(function() {
    return {
        root: {
            flexGrow: 1,
            visibility: "visible",
            overflowX: "hidden",
            overflowY: "hidden"
        }
    };
});
function VerticalNavbar(param) {
    var className = param.className, style = param.style, classesProp = param.classes, routes = param.routes, _param_itemVariant = param.itemVariant, itemVariant = _param_itemVariant === void 0 ? "rounded" : _param_itemVariant, _param_showLabel = param.showLabel, showLabel = _param_showLabel === void 0 ? true : _param_showLabel, _param_showIconButton = param.showIconButton, showIconButton = _param_showIconButton === void 0 ? true : _param_showIconButton;
    var _useStyles = useStyles$g(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx(List, {
        className: cx(classes.root, className),
        style: style,
        dense: true,
        children: routes.map(function(r) {
            return /*#__PURE__*/ jsx(NavItem, {
                variant: itemVariant,
                route: r,
                showIconButton: showIconButton,
                showLabel: showLabel
            }, "".concat(r.path, "|").concat(r.title));
        })
    });
}

var useStyles$f = makeStyles()(function(theme) {
    return {
        root: {
            flexGrow: 1,
            overflow: "auto",
            borderColor: "transparent",
            transition: theme.transitions.create([
                "border-color"
            ], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter
            }),
            "&::-webkit-scrollbar": {
                backgroundColor: "transparent",
                borderRadius: theme.spacing(1),
                width: theme.spacing(0.5),
                border: "".concat(theme.spacing(0.5), " solid transparent")
            },
            "&::-webkit-scrollbar, &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-corner": {
                borderRightStyle: "inset",
                borderRightWidth: "calc(100vw + 100vh)",
                borderColor: "inherit"
            },
            "&:hover": {
                transition: theme.transitions.create([
                    "border-color"
                ], {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.shorter
                }),
                borderColor: alpha(theme.palette.primary.compliment || theme.palette.action.focus, 1 - ((theme === null || theme === void 0 ? void 0 : theme.palette.action.disabledOpacity) || 0.38))
            },
            "&:hover::-webkit-scrollbar": {
                backgroundColor: theme.palette.primary[theme.palette.mode]
            },
            "&::-webkit-scrollbar-thumb": {
                borderColor: "inherit",
                backgroundClip: "content-box",
                borderRadius: theme.spacing(1) || 8
            }
        }
    };
});
function Navbar(param) {
    var className = param.className, style = param.style, classesProp = param.classes, routes = param.routes, _param_orientation = param.orientation, orientation = _param_orientation === void 0 ? "vertical" : _param_orientation, _param_itemVariant = param.itemVariant, itemVariant = _param_itemVariant === void 0 ? "rounded" : _param_itemVariant, _param_showLabel = param.showLabel, showLabel = _param_showLabel === void 0 ? true : _param_showLabel, _param_showIconButton = param.showIconButton, showIconButton = _param_showIconButton === void 0 ? true : _param_showIconButton;
    var _useStyles = useStyles$f(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var NavbarWrapper = useMemo(function() {
        return orientation === "horizontal" ? HorizontalNavbar : VerticalNavbar;
    }, [
        orientation
    ]);
    return /*#__PURE__*/ jsx("div", {
        className: cx(classes.root, className),
        style: style,
        children: /*#__PURE__*/ jsx(NavbarWrapper, {
            routes: routes,
            itemVariant: itemVariant,
            showIconButton: showIconButton,
            showLabel: showLabel
        })
    });
}

function _arrayLikeToArray$4(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$3(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$a(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$3(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$3() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$9(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$a(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$8(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$8(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$8(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$8(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$8(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$8(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray$3(arr, i) {
    return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest$3();
}
function _unsupportedIterableToArray$4(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
}
var useStyles$e = makeStyles()(function(theme, param) {
    var backgroundColor = param.backgroundColor, renderNavigation = param.renderNavigation;
    var _mostReadable, _mostReadable1;
    var transparentPrimary = tinycolor(theme.palette.primary.main).setAlpha(0.6).toHex8String();
    var transparentSecondary = tinycolor(theme.palette.secondary.main).setAlpha(0.6).toHex8String();
    var iconColor = ((_mostReadable = mostReadable(backgroundColor, [
        transparentPrimary,
        transparentSecondary
    ])) === null || _mostReadable === void 0 ? void 0 : _mostReadable.toHex8String()) || theme.palette.action.active;
    var textColor = ((_mostReadable1 = mostReadable(backgroundColor, [
        theme.palette.text.primary,
        theme.palette.primary.contrastText,
        theme.palette.secondary.contrastText
    ])) === null || _mostReadable1 === void 0 ? void 0 : _mostReadable1.toHex8String()) || theme.palette.text.primary;
    return {
        root: {
            overflow: "visible",
            minHeight: "100%",
            color: theme.palette.text.primary
        },
        mobileNavButton: _defineProperty$a({
            position: "absolute!important",
            top: theme.spacing(0.5),
            left: theme.spacing(1),
            display: "none"
        }, theme.breakpoints.down("lg"), {
            display: "inline-flex"
        }),
        navigationFn: renderNavigation ? _defineProperty$a({}, theme.breakpoints.down("lg"), {
            paddingTop: theme.spacing(5)
        }) : {},
        iconColorFn: {
            color: iconColor
        },
        colorFn: {
            color: textColor
        }
    };
});
var Page = /*#__PURE__*/ forwardRef(function(_param, ref) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, children = _param.children, backgroundColor = _param.backgroundColor, _param_renderNavigation = _param.renderNavigation, renderNavigation = _param_renderNavigation === void 0 ? true : _param_renderNavigation, _param_imageAlpha = _param.imageAlpha, imageAlpha = _param_imageAlpha === void 0 ? 0.05 : _param_imageAlpha, rest = _objectWithoutProperties$8(_param, [
        "className",
        "style",
        "classes",
        "children",
        "backgroundColor",
        "renderNavigation",
        "imageAlpha"
    ]);
    var theme = useTheme();
    var _useState = _slicedToArray$3(useState(), 2), derivedBackground = _useState[0], setDerivedBackground = _useState[1];
    var _useState1 = _slicedToArray$3(useState(), 2), innerRef = _useState1[0], setInnerRef = _useState1[1];
    // const containerRef = useRef<ContainerRef | undefined | null>();
    var containerRef = useCallback(function(node) {
        setDerivedBackground((node === null || node === void 0 ? void 0 : node.backgroundColor) || theme.palette.background.default);
        setInnerRef(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var _useStyles = useStyles$e({
        backgroundColor: derivedBackground || theme.palette.background.default,
        renderNavigation: renderNavigation
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    useEffect(function() {
        if (!containerRef || !ref) {
            return;
        }
        if (typeof ref === "function") {
            ref(innerRef);
        } else {
            ref.current = innerRef;
        }
    }, [
        innerRef,
        containerRef,
        ref
    ]);
    return /*#__PURE__*/ jsx(Container, _objectSpreadProps$8(_objectSpread$9({
        className: cx(classes.root, classes.colorFn, classes.navigationFn, className),
        square: true,
        style: style,
        ref: containerRef,
        backgroundColor: backgroundColor || theme.palette.background.default,
        imageAlpha: imageAlpha
    }, rest), {
        children: children
    }));
});

function _objectWithoutProperties$7(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$7(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$7(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$d = makeStyles()(function() {
    return {
        root: {}
    };
});
function CommandPanelItem(_param) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, icon = _param.icon, size = _param.size, _param_color = _param.color, color = _param_color === void 0 ? "inherit" : _param_color, onClick = _param.onClick, title = _param.title; _objectWithoutProperties$7(_param, [
        "className",
        "style",
        "classes",
        "icon",
        "size",
        "color",
        "onClick",
        "title"
    ]);
    var _useStyles = useStyles$d(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx("div", {
        className: cx(classes.root, className),
        style: style,
        children: /*#__PURE__*/ jsx(IconButton, {
            icon: icon,
            size: size,
            color: color,
            onClick: onClick,
            title: title
        })
    });
}

function _arrayLikeToArray$3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$2(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$3(arr);
}
function _defineProperty$9(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit$2(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$8(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$9(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$7(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$7(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$7(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$6(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$6(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$6(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray$2(arr, i) {
    return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$2();
}
function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread$1();
}
function _unsupportedIterableToArray$3(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}
var useStyles$c = makeStyles()(function(theme, param) {
    var hasOverflow = param.hasOverflow, padding = param.padding;
    var menuPadding = 0.75;
    return {
        root: {
            height: "auto",
            flexGrow: 0,
            padding: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
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
            alignItems: "center",
            overflow: "hidden",
            minWidth: theme.spacing(10),
            flexGrow: 1,
            flexShrink: 1,
            display: "flex",
            flexDirection: "row",
            padding: theme.spacing(0.5),
            paddingLeft: theme.spacing(1.5 * menuPadding),
            paddingRight: theme.spacing(1.5 * menuPadding)
        },
        overflowArea: {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        },
        overflowAreaDisplayFn: {
            display: hasOverflow ? undefined : "none"
        },
        spacer: {
            flexGrow: 1,
            flexShrink: 1,
            height: "100%",
            minHeight: theme.spacing(3)
        },
        showDivider: {
            borderRightStyle: "solid",
            borderRightColor: theme.palette.divider,
            borderRightWidth: "thin"
        },
        menuWrapper: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        primaryMenu: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexShrink: 0,
            flexGrow: 0,
            "& > *": {
                borderRightStyle: "solid",
                borderRightColor: theme.palette.divider,
                borderRightWidth: "thin",
                marginRight: theme.spacing(menuPadding),
                paddingRight: theme.spacing(menuPadding)
            },
            "& > *:last-child": {
                borderRightStyle: "none",
                marginRight: 0
            }
        },
        secondaryMenu: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexShrink: 0,
            overflow: "hidden",
            flexGrow: 0,
            transition: theme.transitions.create("padding-left", {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.easeInOut
            }),
            "& > *": {
                borderLeftStyle: "solid",
                borderLeftColor: theme.palette.divider,
                borderLeftWidth: "thin",
                marginLeft: theme.spacing(menuPadding),
                paddingLeft: theme.spacing(menuPadding)
            },
            "& > *:first-of-type": {
                borderLeftStyle: "none",
                marginLeft: 0
            }
        },
        secondaryMenuPaddingFn: {
            // 32 is the width of the menu button
            paddingLeft: padding - 32
        },
        menuDivider: {
            width: "100%"
        },
        menuDisplayed: {
            background: "blue"
        },
        menuHidden: {
            background: "green"
        }
    };
});
function CommandPanel(_param) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, _param_elevation = _param.elevation, elevation = _param_elevation === void 0 ? 1 : _param_elevation, _param_size = _param.size, size = _param_size === void 0 ? "medium" : _param_size, _param_color = _param.color, color = _param_color === void 0 ? "inherit" : _param_color, _param_primaryMenu = _param.primaryMenu, primaryMenu = _param_primaryMenu === void 0 ? [] : _param_primaryMenu, _param_secondaryMenu = _param.secondaryMenu, secondaryMenu = _param_secondaryMenu === void 0 ? [] : _param_secondaryMenu; _param.overflowIcon; var rest = _objectWithoutProperties$6(_param, [
        "className",
        "style",
        "classes",
        "elevation",
        "size",
        "color",
        "primaryMenu",
        "secondaryMenu",
        "overflowIcon"
    ]);
    var _useState = _slicedToArray$2(useState(0), 2), overflow = _useState[0], setOverflow = _useState[1];
    var _useState1 = _slicedToArray$2(useState(0), 2), padding = _useState1[0], setPadding = _useState1[1];
    var _useState2 = _slicedToArray$2(useState(-1), 2), hiddenSectionIndex = _useState2[0], setHiddenSectionIndex = _useState2[1];
    var _useStyles = useStyles$c({
        hasOverflow: overflow > 0,
        padding: padding
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var contentRef = useRef(null);
    var secondaryMenuRef = useRef(null);
    var updateOverflow = function() {
        if (contentRef.current && secondaryMenu && secondaryMenu.length > 0) {
            // Measure the content area and decide what needs to be
            // pushed under the collapsible menu
            var containingElement = contentRef.current;
            var containerWidth = (containingElement === null || containingElement === void 0 ? void 0 : containingElement.offsetWidth) || 0;
            var secondaryMenuArea = secondaryMenuRef.current;
            var contentWidth = Array.from(containingElement.children).reduce(function(acc, c) {
                return acc + c.clientWidth;
            }, 0);
            var calculatedOverflow = contentWidth - containerWidth;
            var calculatedPadding = 0;
            var hiddenIndex = -1;
            if (calculatedOverflow > 0) {
                // We need to hide items until overflow <= 0
                var remaining = calculatedOverflow;
                for(var i = secondaryMenuArea.children.length; i--; i >= 0){
                    var child = secondaryMenuArea.children[i];
                    if (remaining > 0) {
                        remaining -= child.offsetWidth;
                        child.style.visibility = "hidden";
                    } else {
                        child.style.visibility = "visible";
                        calculatedPadding = remaining * -1;
                        if (hiddenIndex < 0) {
                            hiddenIndex = i;
                        }
                    }
                }
            } else {
                // We can display items while overflow <= 0
                Array.from(secondaryMenuArea.children).forEach(function(c) {
                    c.style.visibility = "visible";
                });
            }
            setPadding(calculatedPadding);
            setOverflow(calculatedOverflow);
            setHiddenSectionIndex(hiddenIndex);
        }
    };
    useEffect(function() {
        var handleResize = _.debounce(function() {
            updateOverflow();
        }, 100);
        window.addEventListener("resize", handleResize);
        return function() {
            window.removeEventListener("resize", handleResize);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useLayoutEffect(function() {
        updateOverflow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        secondaryMenu,
        contentRef.current
    ]);
    var renderMenu = function(menu) {
        if (Array.isArray(menu) && menu.length === 0) {
            // Empty array, so we don't care where we are just render null
            return null;
        } else if (Array.isArray(menu) && Array.isArray(menu[0])) {
            // We are rendering a section so wrap and render content
            return menu.map(function(innerMenu, index) {
                return /*#__PURE__*/ jsx("div", {
                    className: cx(classes.menuWrapper),
                    children: renderMenu(innerMenu)
                }, index);
            });
        } else if (Array.isArray(menu)) {
            // The section contents, render each item
            return menu.map(function(menuItem) {
                if (/*#__PURE__*/ isValidElement(menuItem)) {
                    return menuItem;
                } else if (typeof menuItem === "function") {
                    return menuItem(_objectSpread$8({
                        className: className,
                        style: style,
                        elevation: elevation,
                        size: size,
                        color: color
                    }, rest));
                } else {
                    return /*#__PURE__*/ jsx(CommandPanelItem, _objectSpread$8({
                        color: color,
                        size: size
                    }, menuItem));
                }
            }).filter(function(i) {
                return i;
            });
        } else {
            // Don't know what we are rendering.
            return null;
        }
    };
    var secondaryOverflowMenu = useMemo(function() {
        if (!secondaryMenu || secondaryMenu.length === 0) {
            return [];
        }
        var flattenedMenu = secondaryMenu.slice(hiddenSectionIndex + 1).flatMap(function(sections, index) {
            return _toConsumableArray$1(sections).concat([
                /*#__PURE__*/ jsx(Divider, {
                    className: cx(classes.menuDivider),
                    orientation: "horizontal"
                }, "divider_".concat(index))
            ]);
        });
        return flattenedMenu.slice(0, -1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        secondaryMenu,
        hiddenSectionIndex
    ]);
    return /*#__PURE__*/ jsxs(Container, _objectSpreadProps$7(_objectSpread$8({
        className: cx(classes.root, classes["root_".concat(size)], className),
        style: style,
        elevation: elevation
    }, rest), {
        children: [
            /*#__PURE__*/ jsxs("div", {
                ref: contentRef,
                className: cx(classes.menuArea),
                children: [
                    /*#__PURE__*/ jsx("div", {
                        className: cx(classes.primaryMenu),
                        children: renderMenu(primaryMenu)
                    }),
                    /*#__PURE__*/ jsx("div", {
                        className: cx(classes.spacer, (primaryMenu === null || primaryMenu === void 0 ? void 0 : primaryMenu.length) > 0 && (secondaryMenu === null || secondaryMenu === void 0 ? void 0 : secondaryMenu.length) > 0 && classes.showDivider)
                    }),
                    /*#__PURE__*/ jsx("div", {
                        ref: secondaryMenuRef,
                        className: cx(classes.secondaryMenu, classes.secondaryMenuPaddingFn),
                        children: renderMenu(secondaryMenu)
                    })
                ]
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.overflowArea, classes.overflowAreaDisplayFn),
                children: /*#__PURE__*/ jsx(DropdownMenu$1, {
                    menu: secondaryOverflowMenu
                })
            })
        ]
    }));
}

function _defineProperty$8(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$7(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$8(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$6(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$6(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$6(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$5(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$5(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$5(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$b = makeStyles()(function(theme) {
    return {
        root: {
            boxSizing: "content-box"
        },
        drawerContent: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            maxWidth: "100%",
            overflow: "hidden"
        }
    };
});
var ContextPanel = /*#__PURE__*/ forwardRef(function(_param, ref) {
    var className = _param.className, style = _param.style, children = _param.children, classesProp = _param.classes, _param_position = _param.position, position = _param_position === void 0 ? "bottom" : _param_position, _param_open = _param.open, open = _param_open === void 0 ? false : _param_open, _param_PaperProps = _param.PaperProps, PaperProps = _param_PaperProps === void 0 ? {} : _param_PaperProps, rest = _objectWithoutProperties$5(_param, [
        "className",
        "style",
        "children",
        "classes",
        "position",
        "open",
        "PaperProps"
    ]);
    var _useStyles = useStyles$b(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return position !== "none" ? /*#__PURE__*/ jsx(Drawer, _objectSpreadProps$6(_objectSpread$7({
        ref: ref,
        className: cx(classes.root, className),
        style: style,
        anchor: position,
        open: open,
        variant: "persistent",
        PaperProps: _objectSpreadProps$6(_objectSpread$7({}, PaperProps), {
            style: _objectSpreadProps$6(_objectSpread$7({}, PaperProps.style), {
                boxSizing: "border-box",
                overflow: "hidden"
            })
        })
    }, rest), {
        children: /*#__PURE__*/ jsx("div", {
            className: cx(classes.drawerContent),
            children: children
        })
    })) : null;
});
var ContextPanel$1 = ContextPanel;

function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty$7(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit$1(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread$6(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$7(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$5(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$5(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$5(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$4(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$4(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$4(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$1();
}
function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}
var useStyles$a = makeStyles()(function(theme, param) {
    var selectedColor = param.selectedColor;
    var _mostReadable;
    var background = selectedColor && ((_mostReadable = mostReadable(selectedColor, [
        theme.palette.text.primary,
        theme.palette.primary.contrastText,
        theme.palette.secondary.contrastText
    ])) === null || _mostReadable === void 0 ? void 0 : _mostReadable.toHex8String()) || theme.palette.text.primary;
    var pillPadding = 2;
    return {
        root: {},
        root_standard: {},
        root_outlined: {},
        root_filled: {},
        root_pill: {
            "& .MuiInputBase-root": {
                borderRadius: "500px",
                paddingLeft: theme.spacing(pillPadding),
                paddingRight: theme.spacing(pillPadding)
            },
            "& .MuiInputLabel-root": {
                paddingLeft: theme.spacing(pillPadding)
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline legend span": {
                marginLeft: theme.spacing(pillPadding * 0.75)
            }
        },
        popper: {},
        selectedColorFn: {
            color: selectedColor && "#".concat(selectedColor) || undefined,
            backgroundColor: background
        },
        colorBox: {
            minWidth: theme.spacing(40),
            "& > div": {
                overflow: "visible"
            },
            ".muicc-colorbox-hsvgradient": {
                width: "calc(100% - ".concat(theme.spacing(6), ")")
            },
            ".muicc-colorbox-color": {
                background: selectedColor ? "#".concat(selectedColor) : "transparent"
            },
            ".muicc-colorbox-sliders > span > :last-child": {
                marginLeft: 0
            },
            ".muicc-colorbox-inputs .MuiInput-root": {
                fontSize: "1rem"
            }
        },
        popperContainer: {
            overflow: "visible",
            padding: theme.spacing(0)
        }
    };
});
function ColorPicker(_param) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, _param_variant = _param.variant, variant = _param_variant === void 0 ? "outlined" : _param_variant, _param_autoComplete = _param.autoComplete, autoComplete = _param_autoComplete === void 0 ? "off" : _param_autoComplete, _param_fullWidth = _param.fullWidth, fullWidth = _param_fullWidth === void 0 ? true : _param_fullWidth; _param.clearable; var _param_icon = _param.icon, icon = _param_icon === void 0 ? "brush" : _param_icon, _param_iconColor = _param.iconColor, iconColor = _param_iconColor === void 0 ? "inherit" : _param_iconColor, _param_iconSize = _param.iconSize, iconSize = _param_iconSize === void 0 ? "medium" : _param_iconSize, value = _param.value, _param_defaultColor = _param.defaultColor, defaultColor = _param_defaultColor === void 0 ? "transparent" : _param_defaultColor, onChange = _param.onChange, _param_placement = _param.placement, placement = _param_placement === void 0 ? "bottom" : _param_placement, rest = _objectWithoutProperties$4(_param, [
        "className",
        "style",
        "classes",
        "variant",
        "autoComplete",
        "fullWidth",
        "clearable",
        "icon",
        "iconColor",
        "iconSize",
        "value",
        "defaultColor",
        "onChange",
        "placement"
    ]);
    var popupState = usePopupState({
        variant: "popper",
        popupId: "__colorpicker__"
    });
    var getColor = function(color) {
        if (!color) {
            return null;
        }
        if (color.raw) {
            return color;
        }
        return createColor(color);
    };
    var _useState = _slicedToArray$1(useState(value || defaultColor ? getColor(value || defaultColor).hex : null), 2), colorValue = _useState[0], setColorValue = _useState[1];
    var _useState1 = _slicedToArray$1(useState(""), 2), textValue = _useState1[0], setTextValue = _useState1[1];
    var _useStyles = useStyles$a({
        selectedColor: colorValue
    }, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    useEffect(function() {
        setTextValue("#".concat(colorValue));
    }, [
        colorValue
    ]);
    var handleChange = function(e) {
        var newValue = e.target.value;
        setTextValue(newValue);
        // If the new value is a valid colour then update
        var parsedColor = getColor(newValue);
        if (parsedColor && parsedColor.format !== "unknown") {
            setColorValue(parsedColor.hex);
            onChange && onChange(e, "#".concat(parsedColor.hex));
        }
    };
    // This is required as the authors of the picker forgot classname in the props definition
    var classNameProps = {
        className: cx(classes.colorBox)
    };
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx(TextField$2, _objectSpreadProps$5(_objectSpread$6({
                className: cx(classes.root, variant && classes["root_".concat(variant)], className),
                style: style,
                variant: variant === "pill" ? "outlined" : variant,
                autoComplete: autoComplete,
                fullWidth: fullWidth,
                value: textValue || ""
            }, rest), {
                onChange: handleChange,
                InputProps: {
                    startAdornment: /*#__PURE__*/ jsx(InputAdornment, {
                        position: "start",
                        children: /*#__PURE__*/ jsx(IconButton, _objectSpread$6({
                            className: cx(classes.selectedColorFn),
                            size: iconSize,
                            color: iconColor,
                            icon: icon
                        }, bindToggle(popupState)))
                    })
                }
            })),
            /*#__PURE__*/ jsx(Popper, _objectSpreadProps$5(_objectSpread$6({
                className: cx(classes.popper),
                role: "menu",
                transition: true,
                modifiers: [
                    {
                        name: "flip",
                        enabled: true,
                        options: {
                            altBoundary: true,
                            rootBoundary: "document",
                            padding: 8
                        }
                    },
                    {
                        name: "preventOverflow",
                        enabled: true,
                        options: {
                            altAxis: false,
                            altBoundary: false,
                            tether: false,
                            rootBoundary: "document",
                            padding: 8
                        }
                    }
                ],
                placement: placement
            }, bindPopper(popupState)), {
                children: function(param) {
                    var TransitionProps = param.TransitionProps;
                    return /*#__PURE__*/ jsx(Grow, _objectSpreadProps$5(_objectSpread$6({}, TransitionProps), {
                        children: /*#__PURE__*/ jsx(Container, {
                            elevation: 1,
                            className: cx(classes.popperContainer),
                            children: /*#__PURE__*/ jsx(ClickAwayListener, {
                                onClickAway: function(e) {
                                    onChange && onChange(e, "#".concat(colorValue));
                                    popupState.close();
                                },
                                children: /*#__PURE__*/ jsx("div", {
                                    children: /*#__PURE__*/ jsx(ColorBox, _objectSpread$6({
                                        value: colorValue ? "#".concat(colorValue) : defaultColor,
                                        defaultValue: defaultColor,
                                        onChange: function(color) {
                                            setColorValue(color.hex);
                                        }
                                    }, classNameProps))
                                })
                            })
                        })
                    }));
                }
            }))
        ]
    });
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var ApplicationRepositoryBase = /*#__PURE__*/ function() {
    function ApplicationRepositoryBase(args) {
        _classCallCheck(this, ApplicationRepositoryBase);
        this.baseURL = args.baseURL;
        if (args.axios) {
            this.axios = args.axios;
        } else {
            this.axios = axios;
        }
        this.definitions = this.createDefinitions();
    }
    var _proto = ApplicationRepositoryBase.prototype;
    _proto.getDefinitions = function getDefinitions() {
        return this.definitions;
    };
    _proto.getDefinition = function getDefinition(name) {
        return this.definitions[name];
    };
    _proto.addDefinition = function addDefinition(name, generator) {
        var factory = generator(this.baseURL, this.axios);
        this.definitions[name] = factory;
        return factory;
    };
    return ApplicationRepositoryBase;
}();

function _defineProperty$6(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var useStyles$9 = makeStyles()(function(theme) {
    return {
        root: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        iconWrapper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(2)
        },
        icon: _defineProperty$6({
            width: "".concat(theme.spacing(12), "!important"),
            height: "".concat(theme.spacing(12), "!important"),
            fontSize: "".concat(theme.spacing(12), "!important"),
            color: theme.palette.action.disabled,
            marginBottom: theme.spacing(2)
        }, theme.breakpoints.up("md"), {
            width: "".concat(theme.spacing(16), "!important"),
            height: "".concat(theme.spacing(16), "!important"),
            fontSize: "".concat(theme.spacing(16), "!important")
        }),
        title: {
            margin: theme.spacing(2),
            marginTop: theme.spacing(1)
        }
    };
});
function EmptyTableView(param) {
    var className = param.className, style = param.style, classesProp = param.classes, getStateParams = param.getStateParams;
    var _useStyles = useStyles$9(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var t = useContext(LocalizationContext).t;
    var stateParams = getStateParams();
    // Only update if it actually changed
    var memoisedStateParams = useMemoDeepCompare(function() {
        return stateParams;
    }, [
        stateParams
    ]);
    var updating = memoisedStateParams.updating, entityName = memoisedStateParams.entityName, entityIcon = memoisedStateParams.entityIcon;
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            updating && /*#__PURE__*/ jsx(Loader, {
                title: t("loading {0}...", entityName)
            }),
            !updating && /*#__PURE__*/ jsxs("div", {
                className: cx(classes.iconWrapper),
                children: [
                    /*#__PURE__*/ jsx(Icon, {
                        className: cx(classes.icon),
                        size: "inherit",
                        color: "inherit",
                        children: entityIcon || "fa database"
                    }),
                    /*#__PURE__*/ jsx(Typography, {
                        variant: "h4",
                        component: "h2",
                        className: cx(classes.title),
                        children: t("no {0} found", entityName)
                    })
                ]
            })
        ]
    });
}

function _defineProperty$5(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$5(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$5(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$4(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$4(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$4(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$3(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$3(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$3(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$8 = makeStyles()(function(theme) {
    return {
        root: {
            background: theme.palette.background.paper
        },
        root_variant_condensed: {},
        root_variant_regular: {},
        root_variant_expanded: {},
        row: {},
        row_variant_condensed: {
            "& td": {
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1)
            }
        },
        row_variant_regular: {},
        row_variant_expanded: {},
        cell: {
            display: "flex !important",
            alignItems: "center"
        }
    };
});
function TableBody(_param) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, prepareRow = _param.prepareRow, page = _param.page, onRowClick = _param.onRowClick, _param_variant = _param.variant, variant = _param_variant === void 0 ? "regular" : _param_variant, rest = _objectWithoutProperties$3(_param, [
        "className",
        "style",
        "classes",
        "prepareRow",
        "page",
        "onRowClick",
        "variant"
    ]);
    var _useStyles = useStyles$8(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx(TableBody$1, _objectSpreadProps$4(_objectSpread$5({
        className: cx(classes.root, classes["root_variant_".concat(variant)], className),
        style: style
    }, rest), {
        children: page.map(function(r) {
            var row = r;
            prepareRow(row);
            var handleRowClick = function() {
                onRowClick && onRowClick(row.original);
            };
            var selected = Boolean(row.isSelected);
            return /*#__PURE__*/ jsx(TableRow, _objectSpreadProps$4(_objectSpread$5({
                className: cx(classes.row, classes["row_variant_".concat(variant)]),
                onClick: handleRowClick,
                "aria-selected": selected,
                hover: true,
                tabIndex: -1,
                selected: selected
            }, row.getRowProps()), {
                children: row.cells.map(function(cell) {
                    var column = cell.column;
                    var cellProps = cell.getCellProps();
                    return /*#__PURE__*/ jsx(TableCell, _objectSpreadProps$4(_objectSpread$5({
                        className: cx(classes.cell),
                        width: column.width
                    }, cellProps), {
                        style: column.maxWidth ? _objectSpreadProps$4(_objectSpread$5({}, cellProps.style), {
                            maxWidth: column.maxWidth
                        }) : cellProps.style,
                        children: cell.render("Cell")
                    }));
                })
            }));
        })
    }));
}

function _defineProperty$4(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$4(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$4(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties$2(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$2(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$7 = makeStyles()(function(theme) {
    return {
        root: {
            maxWidth: theme.spacing(5)
        },
        checkbox: {}
    };
});
function TableBodySelectCell(props) {
    var _useStyles = useStyles$7(undefined, {
        props: {}
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var r = props.row;
    var row = r;
    var getToggleRowSelectedProps = row.getToggleRowSelectedProps, canSelect = row.canSelect;
    var _getToggleRowSelectedProps = getToggleRowSelectedProps(), onChange = _getToggleRowSelectedProps.onChange, toggleRowSelectedProps = _objectWithoutProperties$2(_getToggleRowSelectedProps, [
        "onChange"
    ]);
    return /*#__PURE__*/ jsx("div", {
        className: cx(classes.root),
        onClick: function(e) {
            e.stopPropagation();
        },
        children: /*#__PURE__*/ jsx(Checkbox, _objectSpread$4({
            className: cx(classes.checkbox),
            color: "primary",
            disabled: canSelect && !canSelect(row.original, row.index, props),
            onChange: function(e) {
                return onChange(e);
            }
        }, toggleRowSelectedProps))
    });
}

var useStyles$6 = makeStyles()(function(theme) {
    return {
        root: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            borderTopColor: theme.palette.divider,
            borderTopWidth: "thin",
            borderTopStyle: "solid",
            background: theme.palette.background.paper
        },
        separator: {
            height: "100%",
            width: theme.spacing(4)
        },
        pageSizeSelector: {
            width: "auto",
            maxWidth: theme.spacing(15),
            marginLeft: "".concat(theme.spacing(2), " !important")
        }
    };
});
function TableFooter(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_pageCount = param.pageCount, pageCount = _param_pageCount === void 0 ? 0 : _param_pageCount, _param_totalCount = param.totalCount, totalCount = _param_totalCount === void 0 ? 0 : _param_totalCount, _param_index = param.index, index = _param_index === void 0 ? 0 : _param_index, _param_pageSize = param.pageSize, pageSize = _param_pageSize === void 0 ? 0 : _param_pageSize, _param_entityName = param.entityName, entityName = _param_entityName === void 0 ? "" : _param_entityName, onRefreshClick = param.onRefreshClick, onFirstPageClick = param.onFirstPageClick, onPreviousPageClick = param.onPreviousPageClick, onNextPageClick = param.onNextPageClick, onLastPageClick = param.onLastPageClick;
    var _useStyles = useStyles$6(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var handleRefresh = function() {
        onRefreshClick();
    };
    var hasNext = index + pageCount < totalCount;
    var hasPrevious = index > 0;
    var handleNavigation = function(direction) {
        switch(direction){
            case "first_page":
                onFirstPageClick();
                break;
            case "previous":
                onPreviousPageClick();
                break;
            case "next":
                onNextPageClick();
                break;
            case "last_page":
                onLastPageClick();
                break;
        }
    };
    var t = useContext(LocalizationContext).t;
    var pageSizeOptions = useMemo(function() {
        return [
            10,
            25,
            50,
            100
        ].map(function(count) {
            return {
                value: count,
                title: count.toString()
            };
        });
    }, []);
    var selectedOption = pageSizeOptions.find(function(o) {
        return o.value >= pageSize;
    });
    return /*#__PURE__*/ jsxs("div", {
        className: cx(classes.root, className),
        style: style,
        children: [
            /*#__PURE__*/ jsx(Typography, {
                variant: "caption",
                children: "".concat(entityName, " ").concat(t("per page"))
            }),
            /*#__PURE__*/ jsx(SelectField, {
                className: cx(classes.pageSizeSelector),
                inputProps: {
                    style: {
                        border: "1px solid red"
                    }
                },
                size: "small",
                variant: "filled",
                value: selectedOption,
                options: pageSizeOptions
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.separator)
            }),
            /*#__PURE__*/ jsx(Typography, {
                variant: "caption",
                children: "".concat(totalCount > 0 ? index + 1 : totalCount, " - ").concat(index + pageCount, " ").concat(t("of"), " ").concat(totalCount)
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.separator)
            }),
            /*#__PURE__*/ jsx(IconButton, {
                size: "small",
                title: hasPrevious ? t("first page") : "",
                icon: "first_page",
                color: hasPrevious ? "action" : "disabled",
                disabled: !hasPrevious,
                onClick: function() {
                    handleNavigation("first_page");
                }
            }),
            /*#__PURE__*/ jsx(IconButton, {
                size: "small",
                title: hasPrevious ? t("previous") : "",
                icon: "navigate_before",
                color: hasPrevious ? "action" : "disabled",
                disabled: !hasPrevious,
                onClick: function() {
                    handleNavigation("previous");
                }
            }),
            /*#__PURE__*/ jsx(IconButton, {
                size: "small",
                title: hasNext ? t("next") : "",
                icon: "navigate_next",
                color: hasNext ? "action" : "disabled",
                disabled: !hasNext,
                onClick: function() {
                    handleNavigation("next");
                }
            }),
            /*#__PURE__*/ jsx(IconButton, {
                size: "small",
                title: hasNext ? t("last page") : "",
                icon: "last_page",
                color: hasNext ? "action" : "disabled",
                disabled: !hasNext,
                onClick: function() {
                    handleNavigation("last_page");
                }
            }),
            /*#__PURE__*/ jsx("div", {
                className: cx(classes.separator)
            }),
            /*#__PURE__*/ jsx(IconButton, {
                size: "small",
                title: "refresh",
                icon: "refresh",
                color: "action",
                onClick: handleRefresh
            })
        ]
    });
}

function _defineProperty$3(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$3(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$3(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$3(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$3(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$3(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var useStyles$5 = makeStyles()(function(theme) {
    return {
        root: {
            background: theme.palette.background.paper
        },
        cell: {
            display: "flex !important",
            justifyItems: "center"
        }
    };
});
function TableHeader(param) {
    var className = param.className, style = param.style, classesProp = param.classes, headerGroups = param.headerGroups;
    var _useStyles = useStyles$5(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var t = useContext(LocalizationContext).t;
    var sortableHeader = function(column, header) {
        return column.canSort ? /*#__PURE__*/ jsx(Tooltip, {
            title: t("Click to change sort"),
            placement: column.align === "right" ? "bottom-end" : "bottom-start",
            enterDelay: 300,
            children: /*#__PURE__*/ jsx(TableSortLabel, {
                active: column.isSorted,
                direction: column.isSortedDesc ? "desc" : "asc",
                children: header
            })
        }) : header;
    };
    return /*#__PURE__*/ jsx(TableHead, {
        className: cx(classes.root, className),
        style: style,
        children: headerGroups.map(function(headerGroup) {
            return /*#__PURE__*/ jsx(TableRow, _objectSpreadProps$3(_objectSpread$3({}, headerGroup.getHeaderGroupProps()), {
                children: headerGroup.headers.map(function(column) {
                    var sortableColumn = column;
                    var cellProps = sortableColumn.getHeaderProps(sortableColumn.getSortByToggleProps());
                    return /*#__PURE__*/ jsx(TableCell, _objectSpreadProps$3(_objectSpread$3({
                        className: cx(classes.cell)
                    }, cellProps), {
                        style: column.maxWidth ? _objectSpreadProps$3(_objectSpread$3({}, cellProps.style), {
                            maxWidth: column.maxWidth
                        }) : cellProps.style,
                        children: sortableHeader(sortableColumn, sortableColumn.render("Header"))
                    }));
                })
            }));
        })
    });
}

function _defineProperty$2(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$2(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$2(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$1(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$4 = makeStyles()(function(theme) {
    return {
        root: {
            maxWidth: theme.spacing(6)
        },
        checkbox: {}
    };
});
function TableHeaderSelectCell(props) {
    var _useStyles = useStyles$4(undefined, {
        props: {}
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var rows = props.rows, rest = _objectWithoutProperties$1(props, [
        "rows"
    ]);
    var getToggleAllRowsSelectedProps = rest.getToggleAllRowsSelectedProps, toggleRowSelected = rest.toggleRowSelected;
    var toggleProps = getToggleAllRowsSelectedProps && getToggleAllRowsSelectedProps();
    return /*#__PURE__*/ jsx("div", {
        className: cx(classes.root),
        children: /*#__PURE__*/ jsx(Checkbox, _objectSpreadProps$2(_objectSpread$2({
            className: cx(classes.checkbox)
        }, toggleProps), {
            onChange: function(e) {
                rows.forEach(function(r) {
                    var row = r;
                    if (!row.canSelect || row.canSelect(r.original, r.index, props)) {
                        toggleRowSelected && toggleRowSelected(r.id, e.target.checked);
                    }
                });
            }
        }))
    });
}

var useStyles$3 = makeStyles()(function() {
    return {
        root: {}
    };
});
function BooleanCell(param) {
    var className = param.className, style = param.style, classesProp = param.classes, value = param.value; param.field; var _param_tableVariant = param.tableVariant, tableVariant = _param_tableVariant === void 0 ? "regular" : _param_tableVariant;
    var _useStyles = useStyles$3(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var icon = "remove";
    if (value === true) {
        icon = "check";
    } else if (value === false) {
        icon = "close";
    }
    var iconSize = "medium";
    if (tableVariant === "condensed") {
        iconSize = "small";
    }
    return /*#__PURE__*/ jsx("div", {
        className: cx(classes.root, className),
        style: style,
        children: /*#__PURE__*/ jsx(Icon, {
            size: iconSize,
            children: icon
        })
    });
}
var cellBuilder$1 = {
    isCompatible: function(fieldDefinition) {
        return fieldDefinition.type === "boolean";
    },
    getComponent: function() {
        return BooleanCell;
    }
};
var booleanCellBuilder = cellBuilder$1;

function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var useStyles$2 = makeStyles()(function() {
    return {
        root: {
            overflow: "hidden",
            textOverflow: "ellipsis"
        },
        root_condensed: {},
        root_regular: {},
        root_expanded: {
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical"
        }
    };
});
function TextCell(_param) {
    var className = _param.className, style = _param.style, classesProp = _param.classes, value = _param.value, field = _param.field, _param_tableVariant = _param.tableVariant, tableVariant = _param_tableVariant === void 0 ? "regular" : _param_tableVariant; _objectWithoutProperties(_param, [
        "className",
        "style",
        "classes",
        "value",
        "field",
        "tableVariant"
    ]);
    var _useStyles = useStyles$2(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var wrap = tableVariant !== "expanded";
    return /*#__PURE__*/ jsx(Typography, {
        noWrap: wrap,
        className: cx(classes.root, classes["root_".concat(tableVariant)], className),
        style: style,
        variant: "body2",
        children: (field.format ? field.format(value) : value) || ""
    });
}
var cellBuilder = {
    isCompatible: function(fieldDefinition) {
        return fieldDefinition.type === "string" || fieldDefinition.type === "email" || fieldDefinition.type === "url" || fieldDefinition.type === "number" || fieldDefinition.type === "password";
    },
    getComponent: function() {
        return TextCell;
    }
};

var tableCellMap = [
    booleanCellBuilder,
    cellBuilder,
    {
        isCompatible: function() {
            return true;
        },
        getComponent: function() {
            return TextCell;
        }
    }
];
function getTableCellComponent(fieldDefinition) {
    var builder = tableCellMap.find(function(builder) {
        return builder.isCompatible(fieldDefinition);
    });
    return (builder === null || builder === void 0 ? void 0 : builder.getComponent()) || TextCell;
}

function _defineProperty$1(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$1(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps$1(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function createReactTableColumns() {
    var fields = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], tableVariant = arguments.length > 1 ? arguments[1] : void 0, isSelectable = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
        return true;
    };
    return fields.map(function(field) {
        if (isComponentField(field)) {
            return {
                id: field.id,
                accessor: field.getValue || field.id,
                Header: "",
                Footer: undefined
            };
        } else {
            var CellComponent = getTableCellComponent(field);
            return {
                id: field.id,
                accessor: field.getValue || field.id,
                Header: field.label || "",
                Footer: undefined,
                Cell: function(props) {
                    return(// TODO: If the cell has a render method then let it render itself (custom cell type)
                    /*#__PURE__*/ jsx(CellComponent, _objectSpreadProps$1(_objectSpread$1({}, props), {
                        field: field,
                        tableVariant: tableVariant
                    })));
                },
                isSelectable: isSelectable
            };
        }
    });
}

function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var useStyles$1 = makeStyles()(function(theme, props, classes) {
    var _obj, _obj1;
    return {
        root: {
            overflow: "hidden",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            flexShrink: 1
        },
        root_variant_condensed: {},
        root_variant_regular: {},
        root_variant_expanded: {},
        table: (_obj = {
            tableLayout: "auto",
            width: "100%",
            flexGrow: 1,
            flexShrink: 1
        }, _defineProperty(_obj, "& .".concat(classes.loaderWrapper), {
            opacity: 0,
            transition: theme.transitions.create([
                "opacity"
            ], {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.short
            })
        }), _defineProperty(_obj, "& .".concat(classes.tableBody), {
            opacity: 1,
            transition: theme.transitions.create([
                "opacity"
            ], {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.short
            })
        }), _obj),
        table_updating: (_obj1 = {
            height: "100%"
        }, _defineProperty(_obj1, "& .".concat(classes.loaderWrapper), {
            opacity: 1
        }), _defineProperty(_obj1, "& .".concat(classes.tableBody), {
            opacity: 0
        }), _obj1),
        tableScroll: {
            height: "100%",
            overflowY: "auto"
        },
        tableHeader: {
            flexShrink: 0,
            flexGrow: 0,
            position: "sticky",
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
function Table(param) {
    var className = param.className, style = param.style, classesProp = param.classes, _param_variant = param.variant, variant = _param_variant === void 0 ? "condensed" : _param_variant, columns = param.columns, _param_data = param.data, data = _param_data === void 0 ? [] : _param_data, index = param.index, totalCount = param.totalCount, pageSize = param.pageSize, entityName = param.entityName, entityIcon = param.entityIcon, _param_updating = param.updating, updating = _param_updating === void 0 ? false : _param_updating, _param_sortBy = param.sortBy, sortBy = _param_sortBy === void 0 ? [] : _param_sortBy, globalFilter = param.globalFilter, _param_selectable = param.selectable, selectable = _param_selectable === void 0 ? true : _param_selectable, onRefresh = param.onRefresh, onFirstPage = param.onFirstPage, onPreviousPage = param.onPreviousPage, onNextPage = param.onNextPage, onLastPage = param.onLastPage, getRowID = param.getRowID, onRowClick = param.onRowClick, _param_EmptyTableComponent = param.EmptyTableComponent, EmptyTableComponent = _param_EmptyTableComponent === void 0 ? EmptyTableView : _param_EmptyTableComponent, _param_canSelectRow = param.canSelectRow, canSelectRow = _param_canSelectRow === void 0 ? function() {
        return true;
    } : _param_canSelectRow, onSelectionChange = param.onSelectionChange, tableRef = param.tableRef;
    var _useStyles = useStyles$1(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    if (!columns || columns.length === 0) {
        console.warn("column definitions not provided");
    }
    // Set the limits so we can display to the user
    index = index || 0;
    totalCount = totalCount || data.length;
    pageSize = pageSize || data.length;
    var t = useContext(LocalizationContext).t;
    entityName = entityName || t("rows");
    var columnDefinitions = useMemoDeepCompare(function() {
        return createReactTableColumns(columns, variant, canSelectRow);
    }, [
        columns,
        variant
    ]);
    var sortByFields = useMemoDeepCompare(function() {
        return sortBy || [];
    }, [
        sortBy
    ]);
    var globalFilterText = useMemo(function() {
        return globalFilter || undefined;
    }, [
        globalFilter
    ]);
    var sortTypes = useMemo(function() {
        return {};
    }, []);
    var filterTypes = useMemo(function() {
        return {};
    }, []);
    var _useTable = useTable({
        columns: columnDefinitions,
        data: data,
        getRowID: getRowID,
        initialState: {
            sortBy: sortByFields,
            globalFilter: globalFilterText,
            selectedRowIds: {}
        },
        // useSortBy hook properties
        sortTypes: sortTypes,
        // useGlobalFilter hook properties
        filterTypes: filterTypes,
        // useRowSelect hook properties
        autoResetGlobalFilter: false,
        autoResetSelectedRows: false
    }, useFlexLayout, useGlobalFilter, useSortBy, // TODO: Implement pagination queries from server side
    usePagination, useRowSelect, // TODO: Implement column order
    // useColumnOrder,
    // TODO: Implement resize columns
    // useResizeColumn,
    // TODO: Implement column filters
    // useFilters,
    function(hooks) {
        if (!selectable) {
            return;
        }
        // If selectable add a column to allow the user to interact
        hooks.allColumns.push(function(columns) {
            return [
                {
                    id: "table_selection",
                    Header: TableHeaderSelectCell,
                    Cell: TableBodySelectCell,
                    disableSortBy: true,
                    defaultCanSort: false,
                    width: 56,
                    maxWidth: 56
                }
            ].concat(_toConsumableArray(columns));
        });
    }), getTableProps = _useTable.getTableProps, getTableBodyProps = _useTable.getTableBodyProps, headerGroups = _useTable.headerGroups, prepareRow = _useTable.prepareRow, setGlobalFilter = _useTable.setGlobalFilter, page = _useTable.page, selectedFlatRows = _useTable.selectedFlatRows;
    useEffect(function() {
        setGlobalFilter(globalFilterText);
    }, [
        globalFilterText,
        setGlobalFilter
    ]);
    useDeepCompareEffect(function() {
        onSelectionChange && onSelectionChange(selectedFlatRows);
    }, [
        selectedFlatRows
    ]);
    useImperativeHandle(tableRef, function() {
        return {
            onSearchChange: function(search) {
                setGlobalFilter(search || "");
            }
        };
    }, [
        setGlobalFilter
    ]);
    return /*#__PURE__*/ jsxs(TableContainer, {
        className: cx(classes.root, "root_variant_".concat(variant), className),
        style: style,
        children: [
            data && data.length > 0 && /*#__PURE__*/ jsxs(Fragment, {
                children: [
                    /*#__PURE__*/ jsx("div", {
                        className: cx(classes.tableScroll),
                        children: /*#__PURE__*/ jsxs(Table$1, _objectSpreadProps(_objectSpread({
                            className: cx(classes.table, updating && classes.table_updating)
                        }, getTableProps()), {
                            children: [
                                /*#__PURE__*/ jsx(TableHeader, {
                                    className: cx(classes.tableHeader),
                                    headerGroups: headerGroups
                                }),
                                updating && /*#__PURE__*/ jsx("tbody", {
                                    className: cx(classes.loaderWrapper),
                                    children: /*#__PURE__*/ jsx("tr", {
                                        children: /*#__PURE__*/ jsx("td", {
                                            colSpan: columns.length,
                                            children: /*#__PURE__*/ jsx(Loader, {
                                                variant: "circular"
                                            })
                                        })
                                    })
                                }),
                                !updating && /*#__PURE__*/ jsx(TableBody, _objectSpread({
                                    className: cx(classes.tableBody),
                                    onRowClick: onRowClick,
                                    prepareRow: function(r) {
                                        prepareRow(r);
                                        r.canSelect = canSelectRow;
                                    },
                                    page: page,
                                    variant: variant
                                }, getTableBodyProps()))
                            ]
                        }))
                    }),
                    /*#__PURE__*/ jsx(TableFooter, {
                        className: cx(classes.tableFooterToolbar),
                        pageCount: data.length,
                        totalCount: totalCount,
                        index: index,
                        pageSize: pageSize,
                        entityName: entityName,
                        onRefreshClick: function() {
                            onRefresh && onRefresh();
                        },
                        onFirstPageClick: function() {
                            onFirstPage && onFirstPage();
                        },
                        onPreviousPageClick: function() {
                            onPreviousPage && onPreviousPage();
                        },
                        onNextPageClick: function() {
                            onNextPage && onNextPage();
                        },
                        onLastPageClick: function() {
                            onLastPage && onLastPage();
                        }
                    })
                ]
            }),
            (!data || data.length === 0) && /*#__PURE__*/ jsx(EmptyTableComponent, {
                getStateParams: function() {
                    return {
                        updating: updating,
                        entityIcon: entityIcon,
                        entityName: entityName || ""
                    };
                }
            })
        ]
    });
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var useStyles = makeStyles()(function() {
    return {
        root: {}
    };
});
function RepositoryTable(param) {
    var className = param.className, style = param.style, classesProp = param.classes, repository = param.repository, model = param.model, onRowClick = param.onRowClick, onSelectionChange = param.onSelectionChange, tableRef = param.tableRef;
    var _useStyles = useStyles(undefined, {
        props: {
            classes: classesProp
        }
    }), classes = _useStyles.classes, cx = _useStyles.cx;
    var _useRepository = _slicedToArray(useRepository(repository, [
        model
    ]), 2), stateRepo = _useRepository[0], dataState = _useRepository[1];
    var fieldDefinitions = useMemo(function() {
        return model.listLayout.map(function(fieldID) {
            return model.fields[fieldID];
        });
    }, [
        model
    ]);
    useLayoutEffect(function() {
        refreshData();
        return function() {
            stateRepo && stateRepo.cancelLast();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        model
    ]);
    var _dataState_page = dataState.page, index = _dataState_page.index, pageSize = _dataState_page.pageSize, totalCount = _dataState_page.totalCount;
    var refreshData = useCallback(function() {
        stateRepo.findAll({
            offset: index,
            // TODO: Page size needs to come from the table props (user selected)
            limit: pageSize || 25
        });
    }, [
        stateRepo,
        index,
        pageSize
    ]);
    var onFirstPage = useCallback(function() {
        stateRepo.findAll({
            offset: 0,
            limit: pageSize
        });
    }, [
        pageSize,
        stateRepo
    ]);
    var onPreviousPage = useCallback(function() {
        stateRepo.findAll({
            offset: index - pageSize,
            limit: pageSize
        });
    }, [
        index,
        pageSize,
        stateRepo
    ]);
    var onNextPage = useCallback(function() {
        stateRepo.findAll({
            offset: index + pageSize,
            limit: pageSize
        });
    }, [
        index,
        pageSize,
        stateRepo
    ]);
    var onLastPage = useCallback(function() {
        stateRepo.findAll({
            offset: totalCount - pageSize,
            limit: pageSize
        });
    }, [
        pageSize,
        stateRepo,
        totalCount
    ]);
    return /*#__PURE__*/ jsx(Table, {
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
        getRowID: function(d) {
            return d[model.identityField];
        },
        updating: dataState.listing,
        onRefresh: function() {
            refreshData();
        },
        onSelectionChange: onSelectionChange,
        onRowClick: onRowClick,
        onFirstPage: onFirstPage,
        onPreviousPage: onPreviousPage,
        onNextPage: onNextPage,
        onLastPage: onLastPage
    });
}

var colors = {
    primary: "#6F8789",
    secondary: "#213037",
    complimentary: "#7d6f89"
};

var appSettings = {
    environment: "dev",
    name: "ICatalyst React Library",
    description: "The ICatalyst React Library is intended as a quickstarter for anyone who is using Singularity as their Identification provider.  The library includes some of the most common UI patterns that are required across all applications and allows teams to focus on the value proposition of their application during the creation of a MVP or POC phase.  The ICatalyst React Library deals with the basics such as security, access control, and user management, to allow a team to quickly get up and running.",
    keywords: "RAD MVP Production ready protoype",
    featureImage: "assets/images/backgrounds/templates.jpg",
    frontEndDocs: "https://dev-docs.icatalyst.com/dev/libs/react/storybook/index.html",
    apiDocs: "",
    sourceDocs: "",
    website: "",
    repo: "",
    favIcon: "assets/logos/favicon-96x96.png",
    logo: "assets/logos/icatalyst_logo.png",
    company_name: "ICatalyst",
    company_logo: "assets/logos/icatalyst_logo.png",
    company_url: "https://icatalyst.com",
    ga_tag_id: "gtag",
    colors: colors,
    themeMode: "light"
};

var initialise = staticInit;

export { actions as ACTIONS, Actions, App, AppContext, AppContextComponent, AppRouter, ApplicationRepositoryBase, Avatar, Button, Card, CheckboxField, ColorChart, ColorPicker, ColorSwatch, CommandPanel, Container, ContextPanel$1 as ContextPanel, DataGrid, DefaultAuthGuard, Dialog, DialogContent, DropdownMenu$1 as DropdownMenu, EntityView, EntityViewForm, Error$1 as Error, ErrorBoundary$1 as ErrorBoundary, ErrorWrapper, FeatureCard, Footer$1 as Footer, Form, Icon, IconButton, Image, Link, Loader, LocalizationContext, LocalizationProvider, LottieLoader, Media, ModuleExplorer, Navbar, Page, RepositoryGrid, RepositoryTable, RouteExplorer, RouteLink, SectionHeader, SelectField, Snackbar, SplitButton, StateDialog, SuspenseLoader, Table, TagField, TextField$1 as TextField, Theme, ThemeVariantExplorer, TitleBar$1 as TitleBar, UpdateAvailable, WebContainer, appSettings, axios, cloneRoutes, createApp, createDateRangeConstraint, createEmailConstraint, createLengthConstraint, createMatchConstraint, createModel, createModelRepository, createModuleFromRepository, createNameConstraint, createPasswordConstraint, createStore, createThemeVariants, createURLConstraint, defaultThemeOptions, extendThemeWithMixins, extractRoutesFromModules, findModule, getApplicationReducers, initialise, isComponentField, isModuleConfig, isModuleConfigFunction, localStore, redirectTo, reduxConfig, requiredThemeOptions, resolveModules, useAppDispatch, useAppSelector, useApplication, useApplicationRepository, useAuthContext, useAuthorisation, useAxios, useBreakpoint, useContextPanelSelector, useCurrentPath, useDebounce, useDeepCompareEffect, useDialogSelector, useEffectOnce, useEventListener, useForm, useHookWithRefCallback, useIsomorphicLayoutEffect$1 as useIsomorphicLayoutEffect, useLayoutSelector, useLocalStorage, useLocalization, useMemoDeepCompare, useMessageSelector, useMouse$1 as useMouse, useObservable, useObservableRepository, usePrevious, useRepository, useScript, useSessionStorage, useSettingsSelector, useTraceProps, useWebsockets };
