- 数据可视化
    svg + Canvas
    1. circle svg里的数学图形标签
        cx,cy,r
        xmlns = xml(数据格式 html是xml的web版<html></html>) + ns(namespace svg 数学图形的xml标签定义)
- stroke 描边
    借鉴border dashed 的理解
    stroke-dasharray:分多少段   周长；如果只有一段，则为实线长度
    如：stroke-dasharray:20 20    表示周长20 实线长20
        stroke-dasharray:10 20    表示周长20 实线长10  虚线10
    stroke-dashoffset:10;偏移量