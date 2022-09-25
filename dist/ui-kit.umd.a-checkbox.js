((typeof self !== 'undefined' ? self : this)["webpackChunkui_kit"] = (typeof self !== 'undefined' ? self : this)["webpackChunkui_kit"] || []).push([[4118],{

/***/ 14677:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _vue = __webpack_require__(77203);

var _objectSpread2 = _interopRequireDefault(__webpack_require__(42122));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(38416));

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _classNames3 = _interopRequireDefault(__webpack_require__(62678));

var _Checkbox = _interopRequireDefault(__webpack_require__(43966));

var _propsUtil = __webpack_require__(40070);

var _warning = _interopRequireDefault(__webpack_require__(3469));

var _FormItemContext = __webpack_require__(19900);

var _useConfigInject2 = _interopRequireDefault(__webpack_require__(38369));

var _interface = __webpack_require__(28443);

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var _default = (0, _vue.defineComponent)({
  name: 'ACheckbox',
  inheritAttrs: false,
  __ANT_CHECKBOX: true,
  props: (0, _interface.checkboxProps)(),
  // emits: ['change', 'update:checked'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        attrs = _ref.attrs,
        slots = _ref.slots,
        expose = _ref.expose;
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();

    var _useConfigInject = (0, _useConfigInject2.default)('checkbox', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var checkboxGroup = (0, _vue.inject)(_interface.CheckboxGroupContextKey, undefined);
    var uniId = Symbol('checkboxUniId');
    (0, _vue.watchEffect)(function () {
      if (!props.skipGroup && checkboxGroup) {
        checkboxGroup.registerValue(uniId, props.value);
      }
    });
    (0, _vue.onBeforeUnmount)(function () {
      if (checkboxGroup) {
        checkboxGroup.cancelValue(uniId);
      }
    });
    (0, _vue.onMounted)(function () {
      (0, _warning.default)(props.checked !== undefined || checkboxGroup || props.value === undefined, 'Checkbox', '`value` is not validate prop, do you mean `checked`?');
    });

    var handleChange = function handleChange(event) {
      var targetChecked = event.target.checked;
      emit('update:checked', targetChecked);
      emit('change', event);
    };

    var checkboxRef = (0, _vue.ref)();

    var focus = function focus() {
      var _a;

      (_a = checkboxRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };

    var blur = function blur() {
      var _a;

      (_a = checkboxRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };

    expose({
      focus: focus,
      blur: blur
    });
    return function () {
      var _classNames;

      var _a;

      var children = (0, _propsUtil.flattenChildren)((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));

      var indeterminate = props.indeterminate,
          skipGroup = props.skipGroup,
          _props$id = props.id,
          id = _props$id === void 0 ? formItemContext.id.value : _props$id,
          restProps = __rest(props, ["indeterminate", "skipGroup", "id"]);

      var onMouseenter = attrs.onMouseenter,
          onMouseleave = attrs.onMouseleave,
          onInput = attrs.onInput,
          className = attrs.class,
          style = attrs.style,
          restAttrs = __rest(attrs, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]);

      var checkboxProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, restProps), {
        id: id,
        prefixCls: prefixCls.value
      }), restAttrs);

      if (checkboxGroup && !skipGroup) {
        checkboxProps.onChange = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          emit.apply(void 0, ['change'].concat(args));
          checkboxGroup.toggleOption({
            label: children,
            value: props.value
          });
        };

        checkboxProps.name = checkboxGroup.name.value;
        checkboxProps.checked = checkboxGroup.mergedValue.value.indexOf(props.value) !== -1;
        checkboxProps.disabled = props.disabled || checkboxGroup.disabled.value;
        checkboxProps.indeterminate = indeterminate;
      } else {
        checkboxProps.onChange = handleChange;
      }

      var classString = (0, _classNames3.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-wrapper"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-wrapper-checked"), checkboxProps.checked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-wrapper-disabled"), checkboxProps.disabled), _classNames), className);
      var checkboxClass = (0, _classNames3.default)((0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-indeterminate"), indeterminate));
      return (0, _vue.createVNode)("label", {
        "class": classString,
        "style": style,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave
      }, [(0, _vue.createVNode)(_Checkbox.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, checkboxProps), {}, {
        "class": checkboxClass,
        "ref": checkboxRef
      }), null), children.length ? (0, _vue.createVNode)("span", null, [children]) : null]);
    };
  }
});

exports["default"] = _default;

/***/ }),

/***/ 64546:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _vue = __webpack_require__(77203);

var _defineProperty2 = _interopRequireDefault(__webpack_require__(38416));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(861));

var _createForOfIteratorHelper2 = _interopRequireDefault(__webpack_require__(74704));

var _Checkbox = _interopRequireDefault(__webpack_require__(14677));

var _FormItemContext = __webpack_require__(19900);

var _useConfigInject2 = _interopRequireDefault(__webpack_require__(38369));

var _interface = __webpack_require__(28443);

var _default2 = (0, _vue.defineComponent)({
  name: 'ACheckboxGroup',
  props: (0, _interface.checkboxGroupProps)(),
  // emits: ['change', 'update:value'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        expose = _ref.expose;
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();

    var _useConfigInject = (0, _useConfigInject2.default)('checkbox', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var mergedValue = (0, _vue.ref)((props.value === undefined ? props.defaultValue : props.value) || []);
    (0, _vue.watch)(function () {
      return props.value;
    }, function () {
      mergedValue.value = props.value || [];
    });
    var options = (0, _vue.computed)(function () {
      return props.options.map(function (option) {
        if (typeof option === 'string' || typeof option === 'number') {
          return {
            label: option,
            value: option
          };
        }

        return option;
      });
    });
    var triggerUpdate = (0, _vue.ref)(Symbol());
    var registeredValuesMap = (0, _vue.ref)(new Map());

    var cancelValue = function cancelValue(id) {
      registeredValuesMap.value.delete(id);
      triggerUpdate.value = Symbol();
    };

    var registerValue = function registerValue(id, value) {
      registeredValuesMap.value.set(id, value);
      triggerUpdate.value = Symbol();
    };

    var registeredValues = (0, _vue.ref)(new Map());
    (0, _vue.watch)(triggerUpdate, function () {
      var valuseMap = new Map();

      var _iterator = (0, _createForOfIteratorHelper2.default)(registeredValuesMap.value.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          valuseMap.set(value, true);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      registeredValues.value = valuseMap;
    });

    var toggleOption = function toggleOption(option) {
      var optionIndex = mergedValue.value.indexOf(option.value);
      var value = (0, _toConsumableArray2.default)(mergedValue.value);

      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }

      if (props.value === undefined) {
        mergedValue.value = value;
      }

      var val = value.filter(function (val) {
        return registeredValues.value.has(val);
      }).sort(function (a, b) {
        var indexA = options.value.findIndex(function (opt) {
          return opt.value === a;
        });
        var indexB = options.value.findIndex(function (opt) {
          return opt.value === b;
        });
        return indexA - indexB;
      });
      emit('update:value', val);
      emit('change', val);
      formItemContext.onFieldChange();
    };

    (0, _vue.provide)(_interface.CheckboxGroupContextKey, {
      cancelValue: cancelValue,
      registerValue: registerValue,
      toggleOption: toggleOption,
      mergedValue: mergedValue,
      name: (0, _vue.computed)(function () {
        return props.name;
      }),
      disabled: (0, _vue.computed)(function () {
        return props.disabled;
      })
    });
    expose({
      mergedValue: mergedValue
    });
    return function () {
      var _a;

      var _props$id = props.id,
          id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      var children = null;
      var groupPrefixCls = "".concat(prefixCls.value, "-group");

      if (options.value && options.value.length > 0) {
        children = options.value.map(function (option) {
          var _a;

          return (0, _vue.createVNode)(_Checkbox.default, {
            "prefixCls": prefixCls.value,
            "key": option.value.toString(),
            "disabled": 'disabled' in option ? option.disabled : props.disabled,
            "indeterminate": option.indeterminate,
            "value": option.value,
            "checked": mergedValue.value.indexOf(option.value) !== -1,
            "onChange": option.onChange,
            "class": "".concat(groupPrefixCls, "-item")
          }, {
            default: function _default() {
              return [option.label === undefined ? (_a = slots.label) === null || _a === void 0 ? void 0 : _a.call(slots, option) : option.label];
            }
          });
        });
      }

      return (0, _vue.createVNode)("div", {
        "class": [groupPrefixCls, (0, _defineProperty2.default)({}, "".concat(groupPrefixCls, "-rtl"), direction.value === 'rtl')],
        "id": id
      }, [children || ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});

exports["default"] = _default2;

/***/ }),

/***/ 25994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "CheckboxGroup", ({
  enumerable: true,
  get: function get() {
    return _Group.default;
  }
}));
Object.defineProperty(exports, "checkboxGroupProps", ({
  enumerable: true,
  get: function get() {
    return _interface.checkboxGroupProps;
  }
}));
Object.defineProperty(exports, "checkboxProps", ({
  enumerable: true,
  get: function get() {
    return _interface.checkboxProps;
  }
}));
exports["default"] = void 0;

var _Checkbox = _interopRequireDefault(__webpack_require__(14677));

var _Group = _interopRequireDefault(__webpack_require__(64546));

var _interface = __webpack_require__(28443);

_Checkbox.default.Group = _Group.default;
/* istanbul ignore next */

_Checkbox.default.install = function (app) {
  app.component(_Checkbox.default.name, _Checkbox.default);
  app.component(_Group.default.name, _Group.default);
  return app;
};

var _default = _Checkbox.default;
exports["default"] = _default;

/***/ }),

/***/ 28443:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkboxProps = exports.checkboxGroupProps = exports.abstractCheckboxProps = exports.abstractCheckboxGroupProps = exports.CheckboxGroupContextKey = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _vueTypes = _interopRequireDefault(__webpack_require__(98566));

var abstractCheckboxGroupProps = function abstractCheckboxGroupProps() {
  return {
    name: String,
    prefixCls: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: Boolean,
    id: String
  };
};

exports.abstractCheckboxGroupProps = abstractCheckboxGroupProps;

var checkboxGroupProps = function checkboxGroupProps() {
  return (0, _extends2.default)((0, _extends2.default)({}, abstractCheckboxGroupProps()), {
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    onChange: {
      type: Function
    },
    'onUpdate:value': {
      type: Function
    }
  });
};

exports.checkboxGroupProps = checkboxGroupProps;

var abstractCheckboxProps = function abstractCheckboxProps() {
  return {
    prefixCls: String,
    defaultChecked: {
      type: Boolean,
      default: undefined
    },
    checked: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    isGroup: {
      type: Boolean,
      default: undefined
    },
    value: _vueTypes.default.any,
    name: String,
    id: String,
    indeterminate: {
      type: Boolean,
      default: undefined
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    autofocus: {
      type: Boolean,
      default: undefined
    },
    onChange: Function,
    'onUpdate:checked': Function,
    onClick: Function,
    skipGroup: {
      type: Boolean,
      default: false
    }
  };
};

exports.abstractCheckboxProps = abstractCheckboxProps;

var checkboxProps = function checkboxProps() {
  return (0, _extends2.default)((0, _extends2.default)({}, abstractCheckboxProps()), {
    indeterminate: {
      type: Boolean,
      default: false
    }
  });
};

exports.checkboxProps = checkboxProps;
var CheckboxGroupContextKey = Symbol('CheckboxGroupContext');
exports.CheckboxGroupContextKey = CheckboxGroupContextKey;

/***/ }),

/***/ 43966:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.checkboxProps = void 0;

var _vue = __webpack_require__(77203);

var _objectSpread2 = _interopRequireDefault(__webpack_require__(42122));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(38416));

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _classNames2 = _interopRequireDefault(__webpack_require__(62678));

var _vueTypes = _interopRequireDefault(__webpack_require__(98566));

var _propsUtil = __webpack_require__(40070);

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var checkboxProps = {
  prefixCls: String,
  name: String,
  id: String,
  type: String,
  defaultChecked: {
    type: [Boolean, Number],
    default: undefined
  },
  checked: {
    type: [Boolean, Number],
    default: undefined
  },
  disabled: Boolean,
  tabindex: {
    type: [Number, String]
  },
  readonly: Boolean,
  autofocus: Boolean,
  value: _vueTypes.default.any,
  required: Boolean
};
exports.checkboxProps = checkboxProps;

var _default = (0, _vue.defineComponent)({
  name: 'Checkbox',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(checkboxProps, {
    prefixCls: 'rc-checkbox',
    type: 'checkbox',
    defaultChecked: false
  }),
  emits: ['click', 'change'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit,
        expose = _ref.expose;
    var checked = (0, _vue.ref)(props.checked === undefined ? props.defaultChecked : props.checked);
    var inputRef = (0, _vue.ref)();
    (0, _vue.watch)(function () {
      return props.checked;
    }, function () {
      checked.value = props.checked;
    });
    expose({
      focus: function focus() {
        var _a;

        (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: function blur() {
        var _a;

        (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    });
    var eventShiftKey = (0, _vue.ref)();

    var handleChange = function handleChange(e) {
      if (props.disabled) {
        return;
      }

      if (props.checked === undefined) {
        checked.value = e.target.checked;
      }

      e.shiftKey = eventShiftKey.value;
      var eventObj = {
        target: (0, _extends2.default)((0, _extends2.default)({}, props), {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e
      }; // fix https://github.com/vueComponent/ant-design-vue/issues/3047
      // 受控模式下维持现有状态

      if (props.checked !== undefined) {
        inputRef.value.checked = !!props.checked;
      }

      emit('change', eventObj);
      eventShiftKey.value = false;
    };

    var onClick = function onClick(e) {
      emit('click', e); // onChange没能获取到shiftKey，使用onClick hack

      eventShiftKey.value = e.shiftKey;
    };

    return function () {
      var _classNames;

      var prefixCls = props.prefixCls,
          name = props.name,
          id = props.id,
          type = props.type,
          disabled = props.disabled,
          readonly = props.readonly,
          tabindex = props.tabindex,
          autofocus = props.autofocus,
          value = props.value,
          required = props.required,
          others = __rest(props, ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value", "required"]);

      var className = attrs.class,
          onFocus = attrs.onFocus,
          onBlur = attrs.onBlur,
          onKeydown = attrs.onKeydown,
          onKeypress = attrs.onKeypress,
          onKeyup = attrs.onKeyup;
      var othersAndAttrs = (0, _extends2.default)((0, _extends2.default)({}, others), attrs);
      var globalProps = Object.keys(othersAndAttrs).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          prev[key] = othersAndAttrs[key];
        }

        return prev;
      }, {});
      var classString = (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-checked"), checked.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      var inputProps = (0, _extends2.default)((0, _extends2.default)({
        name: name,
        id: id,
        type: type,
        readonly: readonly,
        disabled: disabled,
        tabindex: tabindex,
        class: "".concat(prefixCls, "-input"),
        checked: !!checked.value,
        autofocus: autofocus,
        value: value
      }, globalProps), {
        onChange: handleChange,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeydown: onKeydown,
        onKeypress: onKeypress,
        onKeyup: onKeyup,
        required: required
      });
      return (0, _vue.createVNode)("span", {
        "class": classString
      }, [(0, _vue.createVNode)("input", (0, _objectSpread2.default)({
        "ref": inputRef
      }, inputProps), null), (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-inner")
      }, null)]);
    };
  }
});

exports["default"] = _default;

/***/ }),

/***/ 74704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var unsupportedIterableToArray = __webpack_require__(86116);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

module.exports = _createForOfIteratorHelper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=ui-kit.umd.a-checkbox.js.map