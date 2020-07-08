/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {JSIdentifier, NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export type JSMetaProperty = NodeBaseWithComments & {
	type: "JSMetaProperty";
	meta: JSIdentifier;
	property: JSIdentifier;
};

export const jsMetaProperty = createBuilder<JSMetaProperty>(
	"JSMetaProperty",
	{
		bindingKeys: {},
		visitorKeys: {
			meta: true,
			property: true,
		},
	},
);
