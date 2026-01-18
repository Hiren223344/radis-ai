import requests

# Configuration
API_URL = "https://radis.vercel.app/v1/chat/completions"
API_KEY = "sk_630a28463033840feb1116abe5ee7d6bafed78ad7e59ed0d8fca7e5441f7d7a3"

def chat(message: str, model: str = "gemini-3-pro-preview"):
    """Send a chat completion request to the Radis AI Gateway."""
    response = requests.post(
        API_URL,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": model,
            "messages": [{"role": "user", "content": message}]
        }
    )
    
    data = response.json()
    
    # Extract the assistant's response
    if "choices" in data and len(data["choices"]) > 0:
        return data["choices"][0]["message"]["content"]
    elif "error" in data:
        return f"Error: {data['error'].get('message', 'Unknown error')}"
    else:
        return data

def main():
    print("=" * 50)
    print("Radis AI Gateway Test")
    print("=" * 50)
    
    # Test message
    test_message = "Hello! What's 2 + 2?"
    print(f"\n📤 Sending: {test_message}")
    
    response = chat(test_message)
    print(f"\n📥 Response:\n{response}")
    
    print("\n" + "=" * 50)

if __name__ == "__main__":
    main()
