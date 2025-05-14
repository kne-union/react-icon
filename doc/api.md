### Iconfont

| 属性              | 类型            | 默认值          | 说明                     |
|-----------------|---------------|--------------|------------------------|
| `type`          | string        | **必填**       | 图标名称（如 `'home'`）       |
| `colorful`      | boolean       | `false`      | 是否启用多彩模式               |
| `className`     | string        | -            | 自定义 CSS 类名             |
| `fontClassName` | string        | `'iconfont'` | 字体图标基础类名               |
| `size`          | number/string | -            | 图标尺寸（如 `20` 或 `'2em'`） |
| `style`         | object        | -            | 行内样式对象                 |
| `prefix`        | string        | `''`         | 图标名前缀（自动处理 `icon-` 前缀） |
| `...other`      | any           | -            | 其他透传的 DOM 属性           |

### FontLoader

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `path` | string | 是 | 字体文件路径（支持相对/绝对路径） |
| `name` | string | 是 | 注册的字体名称（用于CSS引用） |

### `getLastFolderName(path)`
```javascript
/**
 * 从文件路径中提取最后一个文件夹名
 * @param {string} path - 文件路径
 * @return {string} 最后一个非空文件夹名
 */
```

### `loadFont(path, name)`
```javascript
/**
 * 动态加载字体资源
 * @param {string} path - 字体资源路径(.js)
 * @param {string} [name] - 可选字体名称，未提供时使用路径最后一段
 */
```