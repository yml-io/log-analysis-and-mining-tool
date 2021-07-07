/*
id: '3',
labelText: 'Child - 3',
labelIcon: () => InfoIcon,
labelInfo: '123,133',
color: 'rgba(255,255,255, 1)',
bgColor: 'rgba(200,200,200,.5)',
children:[]
*/
export default function TreeNodeInfo(_id, _labelText, _labelInfo, _color, _bgColor, _children=[]) {
    return {
        id: _id,
        labelText: _labelText,
        labelInfo: _labelInfo,
        color: _color,
        bgColor: _bgColor,
        children: _children,
    };
}