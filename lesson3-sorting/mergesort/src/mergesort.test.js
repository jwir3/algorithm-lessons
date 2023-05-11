import {expect, jest, test} from '@jest/globals';
import { mergesort, merge } from './mergesort';

describe ('merge', () => {
    describe ('with two arrays of 1 element each', () => {
        it ('should return a sorted array', () => {
            expect(merge([1], [2])).toEqual([1, 2]);
        });
    });

    describe ('when the left side is larger than the right side', () => {

    });
});

describe ('mergesort', () => {
    let array;

    describe ('with no elements in the array', () => {
        beforeEach(() => {
            array = [];
        });

        it ('should return the array as-is', () => {
            expect(mergesort(array)).toHaveLength(0);
        });
    });

    describe ('with a single element in the array', () => {
        beforeEach(() => {
            array = [1];
        });

        it ('should return the array as-is', () => {
            let sortedArray = mergesort(array);
            expect(sortedArray).toHaveLength(1);
            expect(sortedArray).toEqual([1]);
        });
    });

    describe ('with two elements in the array', () => {
        it ('should return a sorted version of the array', () => {

        });
    });
});