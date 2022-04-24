/*
 * @Author: lilunze
 * @LastEditors: lilunze
 * @Desc: 全屏 Loading 遮罩
 */
import { Overlay, Icon } from "@nutui/nutui-react";

const WrapperStyle = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
};
const ContentStyle = {
  width: "150px",
  height: "150px",
  background: "#fff",
  borderRadius: "8px",
  textAlign: 'center',
  fontSize: '0px',
  paddingTop: '40px',
  boxSizing: "border-box"
};
const loadingStyle = {
    fontSize: '20px',
    marginTop: '10px'
}
export default function Loading() {
  return (
    <Overlay visible={true}>
      <div className="wrapper" style={WrapperStyle}>
        <div className="content" style={ContentStyle}>
            <div><Icon name="loading" size="24"></Icon></div>
            <div style={loadingStyle}>loading...</div>
        </div>
      </div>
    </Overlay>
  );
}
