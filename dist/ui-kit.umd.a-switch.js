"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkui_kit"] = (typeof self !== 'undefined' ? self : this)["webpackChunkui_kit"] || []).push([[8718],{

/***/ 12734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.switchProps = exports["default"] = exports.SwitchSizes = void 0;

var _vue = __webpack_require__(77203);

var _objectSpread2 = _interopRequireDefault(__webpack_require__(42122));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(38416));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(61106));

var _vueTypes = _interopRequireDefault(__webpack_require__(98566));

var _KeyCode = _interopRequireDefault(__webpack_require__(55591));

var _wave = _interopRequireDefault(__webpack_require__(37455));

var _warning = _interopRequireDefault(__webpack_require__(3469));

var _type = __webpack_require__(49042);

var _propsUtil = __webpack_require__(40070);

var _useConfigInject2 = _interopRequireDefault(__webpack_require__(38369));

var _FormItemContext = __webpack_require__(19900);

var _omit = _interopRequireDefault(__webpack_require__(11262));

var SwitchSizes = (0, _type.tuple)('small', 'default');
exports.SwitchSizes = SwitchSizes;

var switchProps = function switchProps() {
  return {
    id: String,
    prefixCls: String,
    size: _vueTypes.default.oneOf(SwitchSizes),
    disabled: {
      type: Boolean,
      default: undefined
    },
    checkedChildren: _vueTypes.default.any,
    unCheckedChildren: _vueTypes.default.any,
    tabindex: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    autofocus: {
      type: Boolean,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: undefined
    },
    checked: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number, _vueTypes.default.looseBool]),
    checkedValue: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number, _vueTypes.default.looseBool]).def(true),
    unCheckedValue: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number, _vueTypes.default.looseBool]).def(false),
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onMouseup: {
      type: Function
    },
    'onUpdate:checked': {
      type: Function
    },
    onBlur: Function,
    onFocus: Function
  };
};

exports.switchProps = switchProps;
var Switch = (0, _vue.defineComponent)({
  name: 'ASwitch',
  __ANT_SWITCH: true,
  inheritAttrs: false,
  props: switchProps(),
  slots: ['checkedChildren', 'unCheckedChildren'],
  // emits: ['update:checked', 'mouseup', 'change', 'click', 'keydown', 'blur'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots,
        expose = _ref.expose,
        emit = _ref.emit;
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    (0, _vue.onBeforeMount)(function () {
      (0, _warning.default)(!('defaultChecked' in attrs), 'Switch', "'defaultChecked' is deprecated, please use 'v-model:checked'");
      (0, _warning.default)(!('value' in attrs), 'Switch', '`value` is not validate prop, do you mean `checked`?');
    });
    var checked = (0, _vue.ref)(props.checked !== undefined ? props.checked : attrs.defaultChecked);
    var checkedStatus = (0, _vue.computed)(function () {
      return checked.value === props.checkedValue;
    });
    (0, _vue.watch)(function () {
      return props.checked;
    }, function () {
      checked.value = props.checked;
    });

    var _useConfigInject = (0, _useConfigInject2.default)('switch', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction,
        size = _useConfigInject.size;

    var refSwitchNode = (0, _vue.ref)();

    var focus = function focus() {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.focus();
    };

    var blur = function blur() {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.blur();
    };

    expose({
      focus: focus,
      blur: blur
    });
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        if (props.autofocus && !props.disabled) {
          refSwitchNode.value.focus();
        }
      });
    });

    var setChecked = function setChecked(check, e) {
      if (props.disabled) {
        return;
      }

      emit('update:checked', check);
      emit('change', check, e);
      formItemContext.onFieldChange();
    };

    var handleBlur = function handleBlur(e) {
      emit('blur', e);
    };

    var handleClick = function handleClick(e) {
      focus();
      var newChecked = checkedStatus.value ? props.unCheckedValue : props.checkedValue;
      setChecked(newChecked, e);
      emit('click', newChecked, e);
    };

    var handleKeyDown = function handleKeyDown(e) {
      if (e.keyCode === _KeyCode.default.LEFT) {
        setChecked(props.unCheckedValue, e);
      } else if (e.keyCode === _KeyCode.default.RIGHT) {
        setChecked(props.checkedValue, e);
      }

      emit('keydown', e);
    };

    var handleMouseUp = function handleMouseUp(e) {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.blur();
      emit('mouseup', e);
    };

    var classNames = (0, _vue.computed)(function () {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-small"), size.value === 'small'), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-loading"), props.loading), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-checked"), checkedStatus.value), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-disabled"), props.disabled), (0, _defineProperty2.default)(_ref2, prefixCls.value, true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    return function () {
      var _a;

      return (0, _vue.createVNode)(_wave.default, {
        "insertExtraNode": true
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("button", (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(props, ['prefixCls', 'checkedChildren', 'unCheckedChildren', 'checked', 'autofocus', 'checkedValue', 'unCheckedValue', 'id', 'onChange', 'onUpdate:checked'])), attrs), {}, {
            "id": (_a = props.id) !== null && _a !== void 0 ? _a : formItemContext.id.value,
            "onKeydown": handleKeyDown,
            "onClick": handleClick,
            "onBlur": handleBlur,
            "onMouseup": handleMouseUp,
            "type": "button",
            "role": "switch",
            "aria-checked": checked.value,
            "disabled": props.disabled || props.loading,
            "class": [attrs.class, classNames.value],
            "ref": refSwitchNode
          }), [(0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls.value, "-handle")
          }, [props.loading ? (0, _vue.createVNode)(_LoadingOutlined.default, {
            "class": "".concat(prefixCls.value, "-loading-icon")
          }, null) : null]), (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls.value, "-inner")
          }, [checkedStatus.value ? (0, _propsUtil.getPropsSlot)(slots, props, 'checkedChildren') : (0, _propsUtil.getPropsSlot)(slots, props, 'unCheckedChildren')])])];
        }
      });
    };
  }
});

var _default2 = (0, _type.withInstall)(Switch);

exports["default"] = _default2;

/***/ })

}]);
//# sourceMappingURL=ui-kit.umd.a-switch.js.map