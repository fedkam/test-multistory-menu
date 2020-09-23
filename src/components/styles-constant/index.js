const font = {
  fontFamily: `Roboto, sans-serif`,
  fontSize: 14,
  fontWeight: 500,
};

const colors = {
  baseColorText: `#a8a8a8`,
  colorWhite: `#ffffff`,
  lightGray: `#e8ebee`,
  colorBlue: `#144f7f`,
  menuFirstVerticalDivider: `rgba(0, 0, 0, 0.1)`,
  menuSecondVerticalDivider: `rgba(255, 255, 255, 0.15)`
};

const size = {
  heightMenuLine: 69,
  widthItemFirstLevelMenu: 176,
}

const functions = {
  getSvgStyle: ({ color }) => (
    {
      '& svg': {
        '& .stroke path': { stroke: color, transition: `stroke .2s` },
        '& .fill path': { fill: color, transition: `fill .2s` }
      }
    }
  )
}

export default {
  font,
  colors,
  size,
  functions
};
