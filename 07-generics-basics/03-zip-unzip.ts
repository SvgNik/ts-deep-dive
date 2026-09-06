function zip<A, B>(first: A[], second: B[]): [A, B][] {
  const result: [A, B][] = [];
  const pairCount = Math.min(first.length, second.length);
  for (let i = 0; i < pairCount; i++) {
    const firstCandidate = first[i];
    const secondCandidate = second[i];
    if (firstCandidate !== undefined && secondCandidate !== undefined) {
      result.push([firstCandidate, secondCandidate]);
    }
  }
  return result;
}

function unzip<A, B>(arr: [A, B][]): [A[], B[]] {
  const firstItems: A[] = [];
  const secondItems: B[] = [];
  for (const [first, second] of arr) {
    firstItems.push(first);
    secondItems.push(second);
  }
  return [firstItems, secondItems];
}

const zipped = zip(["a", "b", "c"], [1, 2, 3]);
console.log(zipped);

const zippedDifferent = zip(["a", "b", "c"], [1, 2]);
console.log(zippedDifferent);

const zippedEmpty = zip([], [1, 2, 3]);
console.log(zippedEmpty);

const unzipped = unzip(zipped);
console.log(unzipped);

export {};
