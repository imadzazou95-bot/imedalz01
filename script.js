// مثال: تنبيه عند إرسال النموذج في contact.html
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم إرسال الرسالة بنجاح! (هذا نموذج تجريبي)');
});
