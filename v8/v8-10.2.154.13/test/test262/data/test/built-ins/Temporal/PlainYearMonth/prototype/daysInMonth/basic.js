// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plainyearmonth.prototype.daysinmonth
description: daysInMonth works
features: [Temporal]
---*/

const ym = new Temporal.PlainYearMonth(1976, 11);
assert.sameValue(ym.daysInMonth, 30);
