// botLogic.ts - Contains logic for the chatbot responses

/**
 * Generates a response from the bot based on user input
 * @param input - The user's message
 * @returns The bot's response
 */
export function getBotResponse(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("reverse string")) {
    return "Here's how you reverse a string in Python:\n\n```python\ndef reverse_string(s):\n    return s[::-1]```";
  }

  if (text.includes("factorial")) {
    return "Factorial in JavaScript:\n\n```js\nfunction factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}```";
  }

  if (text.includes("binary search")) {
    return "Binary Search in Python:\n\n```python\ndef binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1```";
  }

    return "🤖 Sorry, I can only help with basic coding questions like reverse strings, factorial, or binary search. Try asking one of those!";
  }