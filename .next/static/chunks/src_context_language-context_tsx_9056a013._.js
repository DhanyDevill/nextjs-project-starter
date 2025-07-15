(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/language-context.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const translations = {
    en: {
        title: "DEVILL AI",
        send: "Send",
        placeholder: "What do you want to know?",
        systemPrompt: "System Prompt",
        save: "Save",
        cancel: "Cancel",
        error: "An error occurred. Please try again.",
        loading: "Thinking...",
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        english: "English",
        indonesian: "Indonesian",
        editSystemPrompt: "Edit System Prompt",
        defaultSystemPrompt: "You are DEVILL AI, a helpful AI assistant. Please provide accurate and helpful responses to user questions.",
        register: "Register",
        login: "Login",
        editImage: "Edit Image",
        latestNews: "Latest News",
        persona: "Persona",
        welcomeMessage: "What would you like to know?",
        privacyPolicy: "Privacy Policy",
        terms: "Terms",
        sendMessageDisclaimer: "By sending a message to DEVILL AI, you agree to our Terms and Privacy Policy."
    },
    id: {
        title: "DEVILL AI",
        send: "Kirim",
        placeholder: "Apa yang ingin Anda ketahui?",
        systemPrompt: "Prompt Sistem",
        save: "Simpan",
        cancel: "Batal",
        error: "Terjadi kesalahan. Silakan coba lagi.",
        loading: "Sedang berpikir...",
        language: "Bahasa",
        theme: "Tema",
        light: "Terang",
        dark: "Gelap",
        english: "Inggris",
        indonesian: "Indonesia",
        editSystemPrompt: "Edit Prompt Sistem",
        defaultSystemPrompt: "Anda adalah DEVILL AI, asisten AI yang membantu. Berikan respons yang akurat dan membantu untuk pertanyaan pengguna.",
        register: "Daftar",
        login: "Masuk",
        editImage: "Edit Gambar",
        latestNews: "Berita Terbaru",
        persona: "Persona",
        welcomeMessage: "Apa yang ingin Anda ketahui?",
        privacyPolicy: "Kebijakan Privasi",
        terms: "Ketentuan",
        sendMessageDisclaimer: "Dengan mengirim pesan ke DEVILL AI, Anda setuju dengan Ketentuan dan Kebijakan Privasi kami."
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = ({ children })=>{
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/language-context.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
};
_s(LanguageProvider, "JgNS4s3wc06/6u6z+Ak7Ai5ELN8=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_context_language-context_tsx_9056a013._.js.map