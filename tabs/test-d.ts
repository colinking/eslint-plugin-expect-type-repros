const _tests = async() => {
  const foo = {"test": 123}
  //    ^? const foo: {
  //           test: number;
  //       }

	const bar = {"test": 123}
	//    ^? const bar: {
	//           test: number;
	//       }

  const t1 = {"test": 123}
  // $ExpectType { test: number; }
  t1

	const t2 = {"test": 123}
	// $ExpectType { test: number; }
	t2
}