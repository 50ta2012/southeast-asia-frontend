import React from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import thaiDemoImage from '../thai/img/demo_001.jpg';

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
			<div style={{display: "flex", justifyContent: "center"}}>
				{/* <iframe title='thailand-lpr-demo' width="1120" height="630" src={`https://www.youtube.com/embed/tgbNymZ7vqY`} /> */}
				<img src={thaiDemoImage} alt={"Thailand Lpr Demo"} height="630"/>
			</div>
		</>
	);
}