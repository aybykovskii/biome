/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyJSExpression, NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export type JSConditionalExpression = NodeBaseWithComments & {
	type: "JSConditionalExpression";
	test: AnyJSExpression;
	alternate: AnyJSExpression;
	consequent: AnyJSExpression;
};

export const jsConditionalExpression = createBuilder<JSConditionalExpression>(
	"JSConditionalExpression",
	{
		bindingKeys: {},
		visitorKeys: {
			test: true,
			consequent: true,
			alternate: true,
		},
	},
);
