import React from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import thaiDemoImage from '../thai/img/demo_001.jpg';
import image2 from '../thai/img/demo_002.jpg';

function ThaiTitle() {
	// 獨立 Component，避免 Re-render
	// 這是因為 useIntl() 只能在 Component 裡使用，才需要這種額外處理。
	document.title = useIntl().formatMessage({ id: "thailand-title" })
}

export default function Thailand() {

	return (
		<>
			<ThaiTitle />
			<div className="main-title">
				<FormattedMessage id="thailand-title"></FormattedMessage>
			</div>
			<div style={{display: "grid", gridTemplateColumns: "auto auto"}}>
				{/* <iframe title='thailand-lpr-demo' width="1120" height="630" src={`https://www.youtube.com/embed/tgbNymZ7vqY`} /> */}
				<img src={thaiDemoImage} alt={"demo1"} height="630"/>
				<img src={image2} alt={"demo2"} height="630"/>
			</div>
		</>
	);
}