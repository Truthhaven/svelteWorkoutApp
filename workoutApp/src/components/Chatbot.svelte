<script>
  let isOpen = false;
  /**
   * @type {any[]}
   */
  let messages = [];
  let userMessage = "";
  let isLoading = false;

  // Toggle chat window visibility
  function toggleChat() {
    isOpen = !isOpen;
  }

  // Handle sending a message to the chatbot
  async function sendMessage() {
    if (!userMessage.trim()) return;
    messages = [...messages, { role: "user", content: userMessage }];
    userMessage = "";
    
    // Show loading indicator
    isLoading = true;

    const rawResponse = await fetch("/api/chat", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { messages: messages.at(-1) } }),
    });
    
    let responseMessage = await rawResponse.json();
    messages = [...messages, { role: "bot", content: responseMessage }];

    // Hide loading indicator
    isLoading = false;
  }
</script>

<button class="chat-button" on:click={toggleChat}>
  {isOpen ? "Close Chat" : "Your Fitness Assistant"}
</button>

{#if isOpen}
  <div class="chat-window">
    <div class="chat-header">Chat with Bot</div>
    <div class="chat-messages">
      {#each messages as message}
        <div class={message.role === "user" ? "user-message" : "bot-message"}>
          <strong>{message.role === "user" ? "You" : "Bot"}:</strong> {message.content}
        </div>
      {/each}
      {#if isLoading}
        <div class="bot-message">
          <strong>Bot:</strong> <span class="loading-dots">...</span>
        </div>
      {/if}
    </div>
    <div class="chat-input">
      <input
        type="text"
        bind:value={userMessage}
        placeholder="Type your message..."
        on:keydown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button on:click={sendMessage}>Send</button>
    </div>
  </div>
{/if}

<style>
  .chat-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #636363;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  .chat-window {
    position: fixed;
    bottom: 70px;
    right: 20px;
    width: 300px;
    max-height: 400px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .chat-header {
    background-color: #636363;
    color: white;
    padding: 10px;
    text-align: center;
  }

  .chat-messages {
    padding: 10px;
    overflow-y: auto;
    flex-grow: 1;
  }

  .chat-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
  }

  .chat-input input {
    flex-grow: 1;
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .chat-input button {
    padding: 5px 10px;
    font-size: 1rem;
    background-color: #636363;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;
  }

  .loading-dots::after {
    content: '...';
    animation: dots 1s steps(5, end) infinite;
  }

  @keyframes dots {
    0%, 20% {
      color: transparent;
    }
    40% {
      color: black;
    }
  }
</style>
