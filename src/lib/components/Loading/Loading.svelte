<div class="dots">
    <span></span>
    <span></span>
    <span></span>
</div>

<style>
    .dots {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        padding: 8px;
    }

    .dots span {
        width: 12px;
        height: 12px;
        background-color: #e74c3c;
        border-radius: 50%;
        animation: pulse 1.5s infinite ease-in-out;
    }

    .dots span:nth-child(2) {
        background-color: #2ecc71;
        animation-delay: 0.2s;
    }

    .dots span:nth-child(3) {
        background-color: #3498db;
        animation-delay: 0.4s;
    }

    @keyframes pulse {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }

</style>