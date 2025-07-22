export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  solved: boolean;
  solvedBy: number;
  helpRequests: number;
}

export const problems: Problem[] = [
  // Arrays (8 problems)
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topic: "Arrays",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    inputFormat: "nums = [2,7,11,15], target = 9",
    outputFormat: "[0,1]",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      }
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹", "-10⁹ ≤ target ≤ 10⁹"],
    solved: true,
    solvedBy: 15420,
    helpRequests: 234
  },
  {
    id: 2,
    title: "Maximum Subarray",
    difficulty: "Medium",
    topic: "Arrays",
    description: "Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.",
    inputFormat: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    outputFormat: "6",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "[4,-1,2,1] has the largest sum = 6."
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    solved: false,
    solvedBy: 8932,
    helpRequests: 456
  },
  {
    id: 3,
    title: "Merge Sorted Array",
    difficulty: "Easy",
    topic: "Arrays",
    description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge nums2 into nums1 as one sorted array.",
    inputFormat: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
    outputFormat: "[1,2,2,3,5,6]",
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]"
      }
    ],
    constraints: ["nums1.length == m + n", "0 ≤ m, n ≤ 200"],
    solved: true,
    solvedBy: 12340,
    helpRequests: 123
  },
  {
    id: 4,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    topic: "Arrays",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve.",
    inputFormat: "prices = [7,1,5,3,6,4]",
    outputFormat: "5",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
      }
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    solved: false,
    solvedBy: 9876,
    helpRequests: 345
  },
  {
    id: 5,
    title: "3Sum",
    difficulty: "Medium",
    topic: "Arrays",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    inputFormat: "nums = [-1,0,1,2,-1,-4]",
    outputFormat: "[[-1,-1,2],[-1,0,1]]",
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]"
      }
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    solved: false,
    solvedBy: 5432,
    helpRequests: 789
  },
  {
    id: 6,
    title: "Container With Most Water",
    difficulty: "Medium",
    topic: "Arrays",
    description: "You are given an integer array height of length n. Find two lines that together with the x-axis form a container that contains the most water.",
    inputFormat: "height = [1,8,6,2,5,4,8,3,7]",
    outputFormat: "49",
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49"
      }
    ],
    constraints: ["n >= 2", "1 ≤ height[i] ≤ 10⁴"],
    solved: false,
    solvedBy: 6789,
    helpRequests: 567
  },
  {
    id: 7,
    title: "Product of Array Except Self",
    difficulty: "Medium",
    topic: "Arrays",
    description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    inputFormat: "nums = [1,2,3,4]",
    outputFormat: "[24,12,8,6]",
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]"
      }
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    solved: true,
    solvedBy: 7654,
    helpRequests: 432
  },
  {
    id: 8,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    topic: "Arrays",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    inputFormat: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
    outputFormat: "6",
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6"
      }
    ],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴"],
    solved: false,
    solvedBy: 3456,
    helpRequests: 890
  },

  // Strings (6 problems)
  {
    id: 9,
    title: "Valid Palindrome",
    difficulty: "Easy",
    topic: "Strings",
    description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
    inputFormat: "s = \"A man, a plan, a canal: Panama\"",
    outputFormat: "true",
    examples: [
      {
        input: "s = \"A man, a plan, a canal: Panama\"",
        output: "true",
        explanation: "\"amanaplanacanalpanama\" is a palindrome."
      }
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵"],
    solved: true,
    solvedBy: 11234,
    helpRequests: 156
  },
  {
    id: 10,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "Strings",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    inputFormat: "s = \"abcabcbb\"",
    outputFormat: "3",
    examples: [
      {
        input: "s = \"abcabcbb\"",
        output: "3",
        explanation: "The answer is \"abc\", with the length of 3."
      }
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴"],
    solved: false,
    solvedBy: 8765,
    helpRequests: 678
  },
  {
    id: 11,
    title: "Valid Anagram",
    difficulty: "Easy",
    topic: "Strings",
    description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    inputFormat: "s = \"anagram\", t = \"nagaram\"",
    outputFormat: "true",
    examples: [
      {
        input: "s = \"anagram\", t = \"nagaram\"",
        output: "true"
      }
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴"],
    solved: true,
    solvedBy: 13456,
    helpRequests: 89
  },
  {
    id: 12,
    title: "Group Anagrams",
    difficulty: "Medium",
    topic: "Strings",
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    inputFormat: "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
    outputFormat: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
    examples: [
      {
        input: "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        output: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]"
      }
    ],
    constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100"],
    solved: false,
    solvedBy: 6543,
    helpRequests: 456
  },
  {
    id: 13,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    topic: "Strings",
    description: "Given a string s, return the longest palindromic substring in s.",
    inputFormat: "s = \"babad\"",
    outputFormat: "\"bab\"",
    examples: [
      {
        input: "s = \"babad\"",
        output: "\"bab\"",
        explanation: "\"aba\" is also a valid answer."
      }
    ],
    constraints: ["1 ≤ s.length ≤ 1000"],
    solved: false,
    solvedBy: 7890,
    helpRequests: 567
  },
  {
    id: 14,
    title: "Minimum Window Substring",
    difficulty: "Hard",
    topic: "Strings",
    description: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t is included in the window.",
    inputFormat: "s = \"ADOBECODEBANC\", t = \"ABC\"",
    outputFormat: "\"BANC\"",
    examples: [
      {
        input: "s = \"ADOBECODEBANC\", t = \"ABC\"",
        output: "\"BANC\"",
        explanation: "The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t."
      }
    ],
    constraints: ["m == s.length", "n == t.length", "1 ≤ m, n ≤ 10⁵"],
    solved: false,
    solvedBy: 2345,
    helpRequests: 890
  },

  // Recursion & Backtracking (5 problems)
  {
    id: 15,
    title: "Generate Parentheses",
    difficulty: "Medium",
    topic: "Recursion",
    description: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    inputFormat: "n = 3",
    outputFormat: "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
    examples: [
      {
        input: "n = 3",
        output: "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
      }
    ],
    constraints: ["1 ≤ n ≤ 8"],
    solved: false,
    solvedBy: 5678,
    helpRequests: 345
  },
  {
    id: 16,
    title: "Permutations",
    difficulty: "Medium",
    topic: "Recursion",
    description: "Given an array nums of distinct integers, return all the possible permutations.",
    inputFormat: "nums = [1,2,3]",
    outputFormat: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 6", "-10 ≤ nums[i] ≤ 10"],
    solved: false,
    solvedBy: 6789,
    helpRequests: 234
  },
  {
    id: 17,
    title: "Subsets",
    difficulty: "Medium",
    topic: "Recursion",
    description: "Given an integer array nums of unique elements, return all possible subsets (the power set).",
    inputFormat: "nums = [1,2,3]",
    outputFormat: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10"],
    solved: true,
    solvedBy: 7890,
    helpRequests: 123
  },
  {
    id: 18,
    title: "N-Queens",
    difficulty: "Hard",
    topic: "Recursion",
    description: "The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.",
    inputFormat: "n = 4",
    outputFormat: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"]]",
    examples: [
      {
        input: "n = 4",
        output: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"]]"
      }
    ],
    constraints: ["1 ≤ n ≤ 9"],
    solved: false,
    solvedBy: 1234,
    helpRequests: 567
  },
  {
    id: 19,
    title: "Word Search",
    difficulty: "Medium",
    topic: "Recursion",
    description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
    inputFormat: "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
    outputFormat: "true",
    examples: [
      {
        input: "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
        output: "true"
      }
    ],
    constraints: ["m == board.length", "n = board[i].length", "1 ≤ m, n ≤ 6"],
    solved: false,
    solvedBy: 4567,
    helpRequests: 678
  },

  // Linked Lists (4 problems)
  {
    id: 20,
    title: "Reverse Linked List",
    difficulty: "Easy",
    topic: "Linked Lists",
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    inputFormat: "head = [1,2,3,4,5]",
    outputFormat: "[5,4,3,2,1]",
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]"
      }
    ],
    constraints: ["The number of nodes in the list is the range [0, 5000]", "-5000 ≤ Node.val ≤ 5000"],
    solved: true,
    solvedBy: 14567,
    helpRequests: 234
  },
  {
    id: 21,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    topic: "Linked Lists",
    description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list.",
    inputFormat: "list1 = [1,2,4], list2 = [1,3,4]",
    outputFormat: "[1,1,2,3,4,4]",
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]"
      }
    ],
    constraints: ["The number of nodes in both lists is in the range [0, 50]", "-100 ≤ Node.val ≤ 100"],
    solved: true,
    solvedBy: 12345,
    helpRequests: 123
  },
  {
    id: 22,
    title: "Linked List Cycle",
    difficulty: "Easy",
    topic: "Linked Lists",
    description: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
    inputFormat: "head = [3,2,0,-4], pos = 1",
    outputFormat: "true",
    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation: "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)."
      }
    ],
    constraints: ["The number of the nodes in the list is in the range [0, 10⁴]", "-10⁵ ≤ Node.val ≤ 10⁵"],
    solved: false,
    solvedBy: 9876,
    helpRequests: 345
  },
  {
    id: 23,
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    topic: "Linked Lists",
    description: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    inputFormat: "head = [1,2,3,4,5], n = 2",
    outputFormat: "[1,2,3,5]",
    examples: [
      {
        input: "head = [1,2,3,4,5], n = 2",
        output: "[1,2,3,5]"
      }
    ],
    constraints: ["The number of nodes in the list is sz", "1 ≤ sz ≤ 30", "1 ≤ n ≤ sz"],
    solved: false,
    solvedBy: 7654,
    helpRequests: 456
  },

  // Trees (5 problems)
  {
    id: 24,
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topic: "Trees",
    description: "Given the root of a binary tree, return its maximum depth.",
    inputFormat: "root = [3,9,20,null,null,15,7]",
    outputFormat: "3",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3"
      }
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 10⁴]", "-100 ≤ Node.val ≤ 100"],
    solved: true,
    solvedBy: 16789,
    helpRequests: 123
  },
  {
    id: 25,
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    topic: "Trees",
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    inputFormat: "root = [2,1,3]",
    outputFormat: "true",
    examples: [
      {
        input: "root = [2,1,3]",
        output: "true"
      }
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 10⁴]", "-2³¹ ≤ Node.val ≤ 2³¹ - 1"],
    solved: false,
    solvedBy: 8765,
    helpRequests: 567
  },
  {
    id: 26,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    topic: "Trees",
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values.",
    inputFormat: "root = [3,9,20,null,null,15,7]",
    outputFormat: "[[3],[9,20],[15,7]]",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]"
      }
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 2000]", "-1000 ≤ Node.val ≤ 1000"],
    solved: false,
    solvedBy: 6543,
    helpRequests: 345
  },
  {
    id: 27,
    title: "Lowest Common Ancestor of a Binary Search Tree",
    difficulty: "Medium",
    topic: "Trees",
    description: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
    inputFormat: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
    outputFormat: "6",
    examples: [
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        output: "6",
        explanation: "The LCA of nodes 2 and 8 is 6."
      }
    ],
    constraints: ["The number of nodes in the tree is in the range [2, 10⁵]", "-10⁹ ≤ Node.val ≤ 10⁹"],
    solved: false,
    solvedBy: 5432,
    helpRequests: 234
  },
  {
    id: 28,
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    topic: "Trees",
    description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. Find the maximum sum of any non-empty path.",
    inputFormat: "root = [1,2,3]",
    outputFormat: "6",
    examples: [
      {
        input: "root = [1,2,3]",
        output: "6",
        explanation: "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6."
      }
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 3 * 10⁴]", "-1000 ≤ Node.val ≤ 1000"],
    solved: false,
    solvedBy: 2345,
    helpRequests: 678
  },

  // Graphs (4 problems)
  {
    id: 29,
    title: "Number of Islands",
    difficulty: "Medium",
    topic: "Graphs",
    description: "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
    inputFormat: "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
    outputFormat: "1",
    examples: [
      {
        input: "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        output: "1"
      }
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300"],
    solved: false,
    solvedBy: 7890,
    helpRequests: 456
  },
  {
    id: 30,
    title: "Clone Graph",
    difficulty: "Medium",
    topic: "Graphs",
    description: "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",
    inputFormat: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
    outputFormat: "[[2,4],[1,3],[2,4],[1,3]]",
    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]"
      }
    ],
    constraints: ["The number of nodes in the graph is in the range [0, 100]", "1 ≤ Node.val ≤ 100"],
    solved: false,
    solvedBy: 4567,
    helpRequests: 567
  },
  {
    id: 31,
    title: "Course Schedule",
    difficulty: "Medium",
    topic: "Graphs",
    description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. Return true if you can finish all courses.",
    inputFormat: "numCourses = 2, prerequisites = [[1,0]]",
    outputFormat: "true",
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
        explanation: "There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible."
      }
    ],
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000"],
    solved: false,
    solvedBy: 5678,
    helpRequests: 345
  },
  {
    id: 32,
    title: "Word Ladder",
    difficulty: "Hard",
    topic: "Graphs",
    description: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words such that adjacent words differ by exactly one letter.",
    inputFormat: "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    outputFormat: "5",
    examples: [
      {
        input: "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        output: "5",
        explanation: "One shortest transformation sequence is \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\", which is 5 words long."
      }
    ],
    constraints: ["1 ≤ beginWord.length ≤ 10", "endWord.length == beginWord.length"],
    solved: false,
    solvedBy: 2345,
    helpRequests: 789
  },

  // Dynamic Programming (6 problems)
  {
    id: 33,
    title: "Climbing Stairs",
    difficulty: "Easy",
    topic: "Dynamic Programming",
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    inputFormat: "n = 2",
    outputFormat: "2",
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways to climb to the top: 1. 1 step + 1 step, 2. 2 steps"
      }
    ],
    constraints: ["1 ≤ n ≤ 45"],
    solved: true,
    solvedBy: 18765,
    helpRequests: 123
  },
  {
    id: 34,
    title: "House Robber",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    description: "You are a professional robber planning to rob houses along a street. You cannot rob two adjacent houses. Determine the maximum amount of money you can rob.",
    inputFormat: "nums = [1,2,3,1]",
    outputFormat: "4",
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
        explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount = 1 + 3 = 4."
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
    solved: false,
    solvedBy: 9876,
    helpRequests: 345
  },
  {
    id: 35,
    title: "Coin Change",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    description: "You are given an integer array coins representing coins of different denominations and an integer amount. Return the fewest number of coins needed to make up that amount.",
    inputFormat: "coins = [1,3,4], amount = 6",
    outputFormat: "2",
    examples: [
      {
        input: "coins = [1,3,4], amount = 6",
        output: "2",
        explanation: "The minimum number of coins is 2 (3 + 3 = 6)."
      }
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
    solved: false,
    solvedBy: 6789,
    helpRequests: 567
  },
  {
    id: 36,
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    inputFormat: "nums = [10,9,2,5,3,7,101,18]",
    outputFormat: "4",
    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
        explanation: "The longest increasing subsequence is [2,3,7,18], therefore the length is 4."
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    solved: false,
    solvedBy: 5432,
    helpRequests: 456
  },
  {
    id: 37,
    title: "Unique Paths",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    description: "There is a robot on an m x n grid. The robot can only move either down or right at any point in time. How many possible unique paths are there?",
    inputFormat: "m = 3, n = 7",
    outputFormat: "28",
    examples: [
      {
        input: "m = 3, n = 7",
        output: "28"
      }
    ],
    constraints: ["1 ≤ m, n ≤ 100"],
    solved: true,
    solvedBy: 8765,
    helpRequests: 234
  },
  {
    id: 38,
    title: "Edit Distance",
    difficulty: "Hard",
    topic: "Dynamic Programming",
    description: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
    inputFormat: "word1 = \"horse\", word2 = \"ros\"",
    outputFormat: "3",
    examples: [
      {
        input: "word1 = \"horse\", word2 = \"ros\"",
        output: "3",
        explanation: "horse -> rorse (replace 'h' with 'r'), rorse -> rose (remove 'r'), rose -> ros (remove 'e')"
      }
    ],
    constraints: ["0 ≤ word1.length, word2.length ≤ 500"],
    solved: false,
    solvedBy: 3456,
    helpRequests: 678
  },

  // Stack/Queue (4 problems)
  {
    id: 39,
    title: "Valid Parentheses",
    difficulty: "Easy",
    topic: "Stack",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    inputFormat: "s = \"()\"",
    outputFormat: "true",
    examples: [
      {
        input: "s = \"()\"",
        output: "true"
      }
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    solved: true,
    solvedBy: 15432,
    helpRequests: 89
  },
  {
    id: 40,
    title: "Min Stack",
    difficulty: "Medium",
    topic: "Stack",
    description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    inputFormat: "MinStack minStack = new MinStack();",
    outputFormat: "null",
    examples: [
      {
        input: "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]",
        output: "[null,null,null,null,-3,null,0,-2]"
      }
    ],
    constraints: ["-2³¹ ≤ val ≤ 2³¹ - 1", "Methods pop, top and getMin operations will always be called on non-empty stacks"],
    solved: false,
    solvedBy: 7654,
    helpRequests: 345
  },
  {
    id: 41,
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    topic: "Stack",
    description: "Evaluate the value of an arithmetic expression in Reverse Polish Notation.",
    inputFormat: "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
    outputFormat: "9",
    examples: [
      {
        input: "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
        output: "9",
        explanation: "((2 + 1) * 3) = 9"
      }
    ],
    constraints: ["1 ≤ tokens.length ≤ 10⁴", "tokens[i] is either an operator or an integer"],
    solved: false,
    solvedBy: 5678,
    helpRequests: 234
  },
  {
    id: 42,
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    topic: "Queue",
    description: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right.",
    inputFormat: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
    outputFormat: "[3,3,5,5,6,7]",
    examples: [
      {
        input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        output: "[3,3,5,5,6,7]"
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "1 ≤ k ≤ nums.length"],
    solved: false,
    solvedBy: 2345,
    helpRequests: 567
  },

  // Sorting & Searching (4 problems)
  {
    id: 43,
    title: "Binary Search",
    difficulty: "Easy",
    topic: "Searching",
    description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.",
    inputFormat: "nums = [-1,0,3,5,9,12], target = 9",
    outputFormat: "4",
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation: "9 exists in nums and its index is 4"
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ < nums[i], target < 10⁴"],
    solved: true,
    solvedBy: 13456,
    helpRequests: 123
  },
  {
    id: 44,
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    topic: "Searching",
    description: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated.",
    inputFormat: "nums = [4,5,6,7,0,1,2], target = 0",
    outputFormat: "4",
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4"
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    solved: false,
    solvedBy: 6789,
    helpRequests: 456
  },
  {
    id: 45,
    title: "Merge Intervals",
    difficulty: "Medium",
    topic: "Sorting",
    description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.",
    inputFormat: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    outputFormat: "[[1,6],[8,10],[15,18]]",
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
        explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]."
      }
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2"],
    solved: false,
    solvedBy: 7890,
    helpRequests: 345
  },
  {
    id: 46,
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    topic: "Sorting",
    description: "Given an integer array nums and an integer k, return the kth largest element in the array.",
    inputFormat: "nums = [3,2,1,5,6,4], k = 2",
    outputFormat: "5",
    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5"
      }
    ],
    constraints: ["1 ≤ k ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    solved: false,
    solvedBy: 8765,
    helpRequests: 234
  },

  // Bit Manipulation (2 problems)
  {
    id: 47,
    title: "Single Number",
    difficulty: "Easy",
    topic: "Bit Manipulation",
    description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
    inputFormat: "nums = [2,2,1]",
    outputFormat: "1",
    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1"
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴"],
    solved: true,
    solvedBy: 12345,
    helpRequests: 89
  },
  {
    id: 48,
    title: "Number of 1 Bits",
    difficulty: "Easy",
    topic: "Bit Manipulation",
    description: "Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has.",
    inputFormat: "n = 00000000000000000000000000001011",
    outputFormat: "3",
    examples: [
      {
        input: "n = 00000000000000000000000000001011",
        output: "3",
        explanation: "The input binary string has a total of three '1' bits."
      }
    ],
    constraints: ["The input must be a binary string of length 32"],
    solved: true,
    solvedBy: 11234,
    helpRequests: 67
  },

  // Math & Number Theory (2 problems)
  {
    id: 49,
    title: "Palindrome Number",
    difficulty: "Easy",
    topic: "Math",
    description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
    inputFormat: "x = 121",
    outputFormat: "true",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left."
      }
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    solved: true,
    solvedBy: 16789,
    helpRequests: 45
  },
  {
    id: 50,
    title: "Pow(x, n)",
    difficulty: "Medium",
    topic: "Math",
    description: "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
    inputFormat: "x = 2.00000, n = 10",
    outputFormat: "1024.00000",
    examples: [
      {
        input: "x = 2.00000, n = 10",
        output: "1024.00000"
      }
    ],
    constraints: ["-100.0 < x < 100.0", "-2³¹ ≤ n ≤ 2³¹-1"],
    solved: false,
    solvedBy: 5678,
    helpRequests: 234
  }
];

export const getProblemsStats = () => {
  const totalProblems = problems.length;
  const solvedProblems = problems.filter(p => p.solved).length;
  const easyProblems = problems.filter(p => p.difficulty === 'Easy').length;
  const mediumProblems = problems.filter(p => p.difficulty === 'Medium').length;
  const hardProblems = problems.filter(p => p.difficulty === 'Hard').length;
  
  const topicCounts = problems.reduce((acc, problem) => {
    acc[problem.topic] = (acc[problem.topic] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalProblems,
    solvedProblems,
    easyProblems,
    mediumProblems,
    hardProblems,
    topicCounts
  };
};