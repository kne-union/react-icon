### Iconfont

`Iconfont` 是一个基于字体图标的 React 组件，支持两种模式：

- **单色模式**：使用传统字体图标渲染
- **多彩模式**：通过 SVG 方式渲染彩色图标

#### 基础图标
```jsx
<Iconfont type="user" />
```

#### 指定尺寸
```jsx
<Iconfont type="search" size={24} />
```

#### 多彩图标模式
```jsx
<Iconfont type="feedback" colorful />
```

#### 注意事项

1. 需要预先引入对应的字体文件/CSS
2. 多彩模式需要确保 SVG 资源可用
3. 组件会自动处理 `icon-` 前缀（无需手动添加）

**以上资源可以通过`FontLoader`进行加载**

### FontLoader

`FontLoader` 是一个用于动态加载/卸载字体资源的 React 组件，具有以下特性：

- 按需加载字体文件
- 自动卸载机制（组件卸载时）
- 纯逻辑组件（无UI渲染）

#### 加载本地字体
```jsx
<FontLoader 
  path="../assets/fonts/iconfont.woff" 
  name="app-iconfont"
/>
```

#### 加载CDN字体
```jsx
<FontLoader
  path="https://cdn.example.com/fonts/iconfont.woff2"
  name="cdn-iconfont"
/>
```

#### 注意事项

1. 需要配合 `@font-face` CSS 规则使用
2. 字体名称(`name`)需与CSS定义保持一致
3. 建议在应用根组件或路由组件中使用
4. 多次加载同名字体时会自动去重

### loadFont

该函数提供了动态加载字体资源的功能，主要包含两个实用函数：

1. **路径处理函数** - `getLastFolderName`
    - 从文件路径中提取最后一个非空文件夹名
    - 自动处理路径末尾的冗余斜杠

2. **字体加载函数** - `loadFont`
    - 智能避免重复加载相同字体
    - 支持通过JS脚本方式加载字体资源
    - 自动使用路径最后一段作为默认字体名称

#### 基本用法
```javascript
import { loadFont } from './loadFont';

// 加载字体（自动使用路径最后一段作为名称）
await loadFont('/assets/fonts/roboto/roboto.js');

// 指定字体名称
await loadFont('/assets/fonts/roboto/main.js', 'Roboto');
```

#### 实现特点
1. **防重复加载**：通过检查head中是否已存在相同href的script标签
2. **路径标准化**：自动处理路径末尾的冗余斜杠
3. **容错处理**：过滤路径中的空字符串部分

#### 注意事项
1. 当前仅支持通过.js文件加载字体
2. 需要确保字体JS文件符合标准格式
3. 在浏览器环境中使用，依赖document对象