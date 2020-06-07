import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { defaultTasksData } from "./TaskList.stories";
import { PureInboxScreen } from "./InboxScreen";

export default {
	component: PureInboxScreen,
	decorators: [(story) => <Provider store={store}>{story()}</Provider>],
	title: "InboxScreen",
};

const store = {
	getState: () => {
		return {
			tasks: defaultTasksData,
		};
	},
	subscribe: () => 0,
	dispatch: action("dispatch"),
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
