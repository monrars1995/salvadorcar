criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        // Add smooth transitions for all interactive elements
        document.querySelectorAll('.btn-primary, .btn-secondary, .card-hover').forEach(element => {
            element.style.transition = 'all 0.3s ease';
        });

        // Enhanced form validation
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = '#d1d5db';
                }
            });
        });

        // Auto-hide messages after 5 seconds
        function autoHideMessage(element) {
            setTimeout(() => {
                if (element.style.display === 'block') {
                    element.style.display = 'none';
                }
            }, 5000);
        }

        // Enhanced error handling
        window.addEventListener('error', function(e) {
            console.error('JavaScript error:', e.error);
        });

        // Service Worker registration for better performance (optional)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                        console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    </script>
</body>
</html>