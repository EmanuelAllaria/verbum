const BIBLE_BOOKS = [
            { slug: 'genesis', name: 'Génesis', chapters: 50 },
            { slug: 'exodus', name: 'Éxodo', chapters: 40 },
            { slug: 'leviticus', name: 'Levítico', chapters: 27 },
            { slug: 'numbers', name: 'Números', chapters: 36 },
            { slug: 'deuteronomy', name: 'Deuteronomio', chapters: 34 },
            { slug: 'joshua', name: 'Josué', chapters: 24 },
            { slug: 'judges', name: 'Jueces', chapters: 21 },
            { slug: 'ruth', name: 'Rut', chapters: 4 },
            { slug: '1-samuel', name: '1 Samuel', chapters: 31 },
            { slug: '2-samuel', name: '2 Samuel', chapters: 24 },
            { slug: '1-kings', name: '1 Reyes', chapters: 22 },
            { slug: '2-kings', name: '2 Reyes', chapters: 25 },
            { slug: '1-chronicles', name: '1 Crónicas', chapters: 29 },
            { slug: '2-chronicles', name: '2 Crónicas', chapters: 36 },
            { slug: 'ezra', name: 'Esdras', chapters: 10 },
            { slug: 'nehemiah', name: 'Nehemías', chapters: 13 },
            { slug: 'esther', name: 'Ester', chapters: 10 },
            { slug: 'job', name: 'Job', chapters: 42 },
            { slug: 'psalms', name: 'Salmos', chapters: 150 },
            { slug: 'proverbs', name: 'Proverbios', chapters: 31 },
            { slug: 'ecclesiastes', name: 'Eclesiastés', chapters: 12 },
            { slug: 'song-of-solomon', name: 'Cantares', chapters: 8 },
            { slug: 'isaiah', name: 'Isaías', chapters: 66 },
            { slug: 'jeremiah', name: 'Jeremías', chapters: 52 },
            { slug: 'lamentations', name: 'Lamentaciones', chapters: 5 },
            { slug: 'ezekiel', name: 'Ezequiel', chapters: 48 },
            { slug: 'daniel', name: 'Daniel', chapters: 12 },
            { slug: 'hosea', name: 'Oseas', chapters: 14 },
            { slug: 'joel', name: 'Joel', chapters: 3 },
            { slug: 'amos', name: 'Amós', chapters: 9 },
            { slug: 'obadiah', name: 'Abdías', chapters: 1 },
            { slug: 'jonah', name: 'Jonás', chapters: 4 },
            { slug: 'micah', name: 'Miqueas', chapters: 7 },
            { slug: 'nahum', name: 'Nahúm', chapters: 3 },
            { slug: 'habakkuk', name: 'Habacuc', chapters: 3 },
            { slug: 'zephaniah', name: 'Sofonías', chapters: 3 },
            { slug: 'haggai', name: 'Hageo', chapters: 2 },
            { slug: 'zechariah', name: 'Zacarías', chapters: 14 },
            { slug: 'malachi', name: 'Malaquías', chapters: 4 },
            { slug: 'matthew', name: 'Mateo', chapters: 28 },
            { slug: 'mark', name: 'Marcos', chapters: 16 },
            { slug: 'luke', name: 'Lucas', chapters: 24 },
            { slug: 'john', name: 'Juan', chapters: 21 },
            { slug: 'acts', name: 'Hechos', chapters: 28 },
            { slug: 'romans', name: 'Romanos', chapters: 16 },
            { slug: '1-corinthians', name: '1 Corintios', chapters: 16 },
            { slug: '2-corinthians', name: '2 Corintios', chapters: 13 },
            { slug: 'galatians', name: 'Gálatas', chapters: 6 },
            { slug: 'ephesians', name: 'Efesios', chapters: 6 },
            { slug: 'philippians', name: 'Filipenses', chapters: 4 },
            { slug: 'colossians', name: 'Colosenses', chapters: 4 },
            { slug: '1-thessalonians', name: '1 Tesalonicenses', chapters: 5 },
            { slug: '2-thessalonians', name: '2 Tesalonicenses', chapters: 3 },
            { slug: '1-timothy', name: '1 Timoteo', chapters: 6 },
            { slug: '2-timothy', name: '2 Timoteo', chapters: 4 },
            { slug: 'titus', name: 'Tito', chapters: 3 },
            { slug: 'philemon', name: 'Filemón', chapters: 1 },
            { slug: 'hebrews', name: 'Hebreos', chapters: 13 },
            { slug: 'james', name: 'Santiago', chapters: 5 },
            { slug: '1-peter', name: '1 Pedro', chapters: 5 },
            { slug: '2-peter', name: '2 Pedro', chapters: 3 },
            { slug: '1-john', name: '1 Juan', chapters: 5 },
            { slug: '2-john', name: '2 Juan', chapters: 1 },
            { slug: '3-john', name: '3 Juan', chapters: 1 },
            { slug: 'jude', name: 'Judas', chapters: 1 },
            { slug: 'revelation', name: 'Apocalipsis', chapters: 22 }
        ];

        const themeProfiles = {
            jesus: {
                targetScore: 18,
                anchors: ['jesus', 'cristo', 'mesias', 'senor', 'salvador', 'maestro', 'hijo del hombre', 'hijo de dios'],
                traits: ['amor', 'perdon', 'misericordia', 'gracia', 'verdad', 'vida', 'paz', 'fe', 'salvacion', 'compasion', 'san', 'milagro', 'discipulos', 'reino'],
                phrases: ['de cierto', 'venid a mi', 'no temais', 'tu fe te ha salvado', 'el reino de dios', 'el reino de los cielos', 'yo soy', 'respondio jesus', 'dijo jesus'],
                negatives: ['anticristo', 'falso cristo']
            },
            padre: {
                targetScore: 16,
                anchors: ['dios', 'padre', 'jehova', 'senor', 'altisimo', 'todopoderoso'],
                traits: ['misericordia', 'fidelidad', 'amor', 'justicia', 'refugio', 'fortaleza', 'promesa', 'pacto', 'creador', 'hizo', 'sustenta', 'provee', 'pastor', 'eterno'],
                phrases: ['asi dice jehova', 'dice jehova', 'tu dios', 'yo soy', 'dios eterno', 'dios todopoderoso', 'el senor es mi pastor'],
                negatives: ['dios ajeno', 'dioses ajenos', 'idolos', 'idolatria']
            },
            espiritu: {
                targetScore: 14,
                anchors: ['espiritu', 'espiritu santo', 'santo espiritu', 'espiritu de dios', 'consolador'],
                traits: ['poder', 'fuego', 'aliento', 'soplo', 'ungio', 'guia', 'guiara', 'renueva', 'vida', 'lleno', 'llenos', 'consuelo', 'dones', 'profetizo'],
                phrases: ['vino sobre', 'descendio sobre', 'llenos del espiritu', 'guiados por el espiritu', 'el espiritu de jehova', 'el espiritu santo'],
                negatives: ['espiritu inmundo', 'espiritu malo']
            }
        };

        const fonts = ['style-serif-1', 'style-serif-2', 'style-classic', 'style-minimal'];
        const alignments = ['center', 'left', 'right'];
        const filterOptions = ['jesus', 'padre', 'espiritu'];
        const filterLabels = {
            jesus: 'Jesús',
            padre: 'Padre',
            espiritu: 'Espíritu Santo'
        };
        const filterThemeStyles = {
            jesus: {
                background: ['#0a0c10', '#0f1722', '#22151d'],
                glow: 'rgba(255,255,255,0.18)',
                accent: '#f5f5f7'
            },
            padre: {
                background: ['#121210', '#16182a', '#1d1622'],
                glow: 'rgba(245, 208, 92, 0.20)',
                accent: '#f5f5f7'
            },
            espiritu: {
                background: ['#0d0b12', '#16102a', '#121b27'],
                glow: 'rgba(147, 51, 234, 0.22)',
                accent: '#f5f5f7'
            }
        };
        let currentFilter = 'jesus';
        let currentDisplay = null;
        const API_BASE = 'https://api.midvash.com/v1/rvr1960';
        const BOOK_LOOKUP = new Map();
        const chapterVerseCache = new Map();
        let selectedBookSlug = 'john';
        let selectedChapter = 3;
        let selectedVerses = [];
        let pendingVerses = null;
        let controlsAreOpen = false;
        let compactViewport = false;

        function randomFrom(list) {
            return list[Math.floor(Math.random() * list.length)];
        }

        function isCompactViewport() {
            return window.matchMedia('(max-width: 768px)').matches;
        }

        function chapterCacheKey(bookSlug, chapter) {
            return `${bookSlug}:${chapter}`;
        }

        function cacheChapterVerses(bookSlug, chapter, verses) {
            chapterVerseCache.set(
                chapterCacheKey(bookSlug, chapter),
                verses.map(verse => String(verse || '').trim()).filter(Boolean)
            );
        }

        function getCachedChapterVerses(bookSlug, chapter) {
            return chapterVerseCache.get(chapterCacheKey(bookSlug, chapter)) || null;
        }

        function buildVerseRange(startVerse, endVerse) {
            return Array.from({ length: endVerse - startVerse + 1 }, (_, index) => startVerse + index);
        }

        function formatVerseSelectionReference(verses) {
            const sorted = [...new Set(verses)].sort((a, b) => a - b);
            if (!sorted.length) return '';
            const parts = [];
            let rangeStart = sorted[0];
            let previous = sorted[0];

            for (let index = 1; index <= sorted.length; index += 1) {
                const current = sorted[index];
                if (current === previous + 1) {
                    previous = current;
                    continue;
                }
                parts.push(rangeStart === previous ? `${rangeStart}` : `${rangeStart}-${previous}`);
                rangeStart = current;
                previous = current;
            }

            return parts.join(',');
        }

        function syncControlToggleCopy() {
            const label = document.getElementById('control-toggle-label');
            const helper = document.getElementById('control-toggle-helper');
            if (label) label.textContent = controlsAreOpen ? 'Ocultar controles' : 'Mostrar controles';
            if (helper) helper.textContent = `${filterLabels[currentFilter]} · Libro, capítulo y versículos`;
        }

        function setControlsPanelOpen(isOpen) {
            controlsAreOpen = Boolean(isOpen);
            const controlBar = document.getElementById('control-bar');
            const toggle = document.getElementById('control-toggle');
            if (!controlBar || !toggle) return;
            controlBar.classList.toggle('controls-open', controlsAreOpen);
            controlBar.classList.toggle('controls-collapsed', !controlsAreOpen);
            toggle.setAttribute('aria-expanded', String(controlsAreOpen));
            syncControlToggleCopy();
            if (!controlsAreOpen) closeVerseMenu();
        }

        function toggleControlsPanel() {
            setControlsPanelOpen(!controlsAreOpen);
        }

        function syncControlsLayout(force = false) {
            const nextCompactViewport = isCompactViewport();
            if (force || nextCompactViewport !== compactViewport) {
                compactViewport = nextCompactViewport;
                setControlsPanelOpen(!compactViewport);
            }
        }

        function selectedBook() {
            return BIBLE_BOOKS.find(book => book.slug === selectedBookSlug) || BIBLE_BOOKS[0];
        }

        function syncBookTriggerLabel() {
            const label = document.getElementById('book-trigger-label');
            const book = selectedBook();
            if (label) label.textContent = book?.name || '—';
        }

        function syncChapterTriggerLabel() {
            const label = document.getElementById('chapter-trigger-label');
            if (label) label.textContent = String(selectedChapter || '—');
        }

        function renderBookOptions(filterValue = '') {
            const container = document.getElementById('book-options');
            if (!container) return;
            const query = normalizeText(filterValue).trim();
            const list = query
                ? BIBLE_BOOKS.filter(book => normalizeText(book.name).includes(query))
                : BIBLE_BOOKS;
            container.innerHTML = list.map(book => {
                const active = book.slug === selectedBookSlug ? ' active' : '';
                return `<button type="button" class="select-option${active}" data-book-slug="${book.slug}"><span>${book.name}</span><span class="select-option-meta">${book.chapters}</span></button>`;
            }).join('');
        }

        function renderChapterOptions() {
            const container = document.getElementById('chapter-options');
            const book = selectedBook();
            if (!container || !book) return;
            const chapters = book.chapters || 1;
            const safeChapter = Math.min(Math.max(1, selectedChapter || 1), chapters);
            selectedChapter = safeChapter;
            container.innerHTML = Array.from({ length: chapters }, (_, index) => {
                const chapterNumber = index + 1;
                const active = chapterNumber === safeChapter ? ' active' : '';
                return `<button type="button" class="chapter-chip${active}" data-chapter="${chapterNumber}">${chapterNumber}</button>`;
            }).join('');
            syncChapterTriggerLabel();
        }

        function closeBookMenu() {
            const picker = document.getElementById('book-picker');
            const trigger = document.getElementById('book-trigger');
            if (picker) picker.classList.remove('open');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
        }

        function toggleBookMenu() {
            const picker = document.getElementById('book-picker');
            const trigger = document.getElementById('book-trigger');
            if (!picker || !trigger || trigger.disabled) return;
            const willOpen = !picker.classList.contains('open');
            picker.classList.toggle('open', willOpen);
            trigger.setAttribute('aria-expanded', String(willOpen));
            if (willOpen) {
                const search = document.getElementById('book-search');
                if (search) {
                    search.value = '';
                    search.focus();
                }
                renderBookOptions('');
            }
        }

        function filterBookOptions() {
            const search = document.getElementById('book-search');
            renderBookOptions(search?.value || '');
        }

        function selectBook(slug) {
            if (!BIBLE_BOOKS.some(book => book.slug === slug)) return;
            selectedBookSlug = slug;
            selectedChapter = 1;
            syncBookTriggerLabel();
            renderChapterOptions();
            closeBookMenu();
            closeChapterMenu();
            closeVerseMenu();
            loadVerseOptions({ preserveSelection: false }).catch(() => {});
        }

        function closeChapterMenu() {
            const picker = document.getElementById('chapter-picker');
            const trigger = document.getElementById('chapter-trigger');
            if (picker) picker.classList.remove('open');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
        }

        function toggleChapterMenu() {
            const picker = document.getElementById('chapter-picker');
            const trigger = document.getElementById('chapter-trigger');
            if (!picker || !trigger || trigger.disabled) return;
            const willOpen = !picker.classList.contains('open');
            picker.classList.toggle('open', willOpen);
            trigger.setAttribute('aria-expanded', String(willOpen));
            if (willOpen) renderChapterOptions();
        }

        function selectChapter(chapter) {
            const book = selectedBook();
            const maxChapters = book?.chapters || 1;
            const safeChapter = Math.min(Math.max(1, Number(chapter) || 1), maxChapters);
            selectedChapter = safeChapter;
            syncChapterTriggerLabel();
            renderChapterOptions();
            closeChapterMenu();
            closeVerseMenu();
            loadVerseOptions({ preserveSelection: false }).catch(() => {});
        }

        async function fetchChapterVerses(bookSlug, chapter) {
            const cached = getCachedChapterVerses(bookSlug, chapter);
            if (cached) return cached;

            const response = await fetch(`${API_BASE}/${bookSlug}/${chapter}`);
            if (!response.ok) throw new Error('No se pudo cargar el capítulo');

            const data = await response.json();
            const verses = data?.data?.verses;
            if (!Array.isArray(verses) || verses.length === 0) {
                throw new Error('Capítulo vacío');
            }

            cacheChapterVerses(bookSlug, chapter, verses);
            return getCachedChapterVerses(bookSlug, chapter) || [];
        }

        function getCurrentSelectionContext() {
            return { bookSlug: selectedBookSlug, chapter: selectedChapter };
        }

        function getCurrentSelectionVerses() {
            const { bookSlug, chapter } = getCurrentSelectionContext();
            if (!bookSlug || !chapter) return [];
            return getCachedChapterVerses(bookSlug, chapter) || [];
        }

        function updateVerseTriggerLabel() {
            const triggerLabel = document.getElementById('verse-trigger-label');
            if (!triggerLabel) return;
            if (!selectedVerses.length) {
                triggerLabel.textContent = 'Elegí uno o varios';
                return;
            }
            const compactLabel = formatVerseSelectionReference(selectedVerses);
            triggerLabel.textContent = selectedVerses.length <= 4 ? compactLabel : `${selectedVerses.length} versículos`;
        }

        function renderVerseOptions(verses, activeSelection) {
            const container = document.getElementById('verse-options');
            if (!container) return;

            if (!verses.length) {
                container.innerHTML = '<div class="verse-empty">No hay versículos disponibles</div>';
                return;
            }

            container.innerHTML = verses.map((_, index) => {
                const verseNumber = index + 1;
                const active = (activeSelection || []).includes(verseNumber) ? ' active' : '';
                return `<button type="button" class="verse-chip${active}" data-verse="${verseNumber}">${verseNumber}</button>`;
            }).join('');
        }

        async function loadVerseOptions({ preserveSelection = true, preselectedVerses = null } = {}) {
            const { bookSlug, chapter } = getCurrentSelectionContext();
            const container = document.getElementById('verse-options');
            const trigger = document.getElementById('verse-trigger');
            if (!bookSlug || !chapter || !container || !trigger) return [];

            container.innerHTML = '<div class="verse-empty">Cargando versículos...</div>';
            trigger.disabled = true;

            try {
                const verses = await fetchChapterVerses(bookSlug, chapter);
                const nextSelection = Array.isArray(preselectedVerses)
                    ? preselectedVerses
                    : preserveSelection
                        ? selectedVerses
                        : [];

                selectedVerses = [...new Set(nextSelection)]
                    .filter(verse => verse >= 1 && verse <= verses.length)
                    .sort((a, b) => a - b);
                pendingVerses = null;

                renderVerseOptions(verses, selectedVerses);
                updateVerseTriggerLabel();
                return verses;
            } catch (error) {
                selectedVerses = [];
                pendingVerses = null;
                updateVerseTriggerLabel();
                container.innerHTML = '<div class="verse-empty">No se pudieron cargar los versículos</div>';
                return [];
            } finally {
                trigger.disabled = false;
            }
        }

        function closeVerseMenu() {
            const picker = document.getElementById('verse-picker');
            const trigger = document.getElementById('verse-trigger');
            if (picker) picker.classList.remove('open');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
            pendingVerses = null;
        }

        function toggleVerseMenu() {
            const picker = document.getElementById('verse-picker');
            const trigger = document.getElementById('verse-trigger');
            if (!picker || !trigger || trigger.disabled) return;
            const willOpen = !picker.classList.contains('open');
            picker.classList.toggle('open', willOpen);
            trigger.setAttribute('aria-expanded', String(willOpen));
            if (willOpen) {
                pendingVerses = [...selectedVerses];
                renderVerseOptions(getCurrentSelectionVerses(), pendingVerses);
            } else {
                pendingVerses = null;
            }
        }

        function toggleVerseSelection(verseNumber) {
            const target = Array.isArray(pendingVerses) ? pendingVerses : [...selectedVerses];
            if (target.includes(verseNumber)) {
                pendingVerses = target.filter(value => value !== verseNumber);
            } else {
                pendingVerses = [...target, verseNumber].sort((a, b) => a - b);
            }
            renderVerseOptions(getCurrentSelectionVerses(), pendingVerses);
        }

        function clearVerseSelection() {
            if (Array.isArray(pendingVerses)) {
                pendingVerses = [];
                renderVerseOptions(getCurrentSelectionVerses(), pendingVerses);
                return;
            }
            selectedVerses = [];
            renderVerseOptions(getCurrentSelectionVerses(), selectedVerses);
            updateVerseTriggerLabel();
        }

        function selectAllVerses() {
            const verses = getCurrentSelectionVerses();
            const all = verses.map((_, index) => index + 1);
            if (Array.isArray(pendingVerses)) {
                pendingVerses = all;
                renderVerseOptions(verses, pendingVerses);
                return;
            }
            selectedVerses = all;
            renderVerseOptions(verses, selectedVerses);
            updateVerseTriggerLabel();
        }

        function applyVerseSelection() {
            if (!Array.isArray(pendingVerses)) return;
            selectedVerses = [...new Set(pendingVerses)].sort((a, b) => a - b);
            pendingVerses = null;
            renderVerseOptions(getCurrentSelectionVerses(), selectedVerses);
            updateVerseTriggerLabel();
            closeVerseMenu();
        }

        function cancelVerseSelection() {
            pendingVerses = null;
            renderVerseOptions(getCurrentSelectionVerses(), selectedVerses);
            closeVerseMenu();
        }

        async function syncSearchControlsToPassage(bookSlug, chapter, verseNumbers = []) {
            if (BIBLE_BOOKS.some(book => book.slug === bookSlug)) {
                selectedBookSlug = bookSlug;
                selectedChapter = Number(chapter) || 1;
                syncBookTriggerLabel();
                renderBookOptions('');
                renderChapterOptions();
            }
            await loadVerseOptions({ preserveSelection: false, preselectedVerses: verseNumbers });
        }

        function adjustVerseLayout(text) {
            const textElement = document.getElementById('verbum-text');
            const shell = document.getElementById('verse-shell');
            const length = String(text || '').trim().length;

            let size = 'clamp(1.8rem, 4vw, 3.5rem)';
            let lineHeight = '1.3';

            if (length > 280) {
                size = 'clamp(1.5rem, 2.8vw, 2.6rem)';
                lineHeight = '1.38';
            }
            if (length > 520) {
                size = 'clamp(1.2rem, 2.25vw, 2rem)';
                lineHeight = '1.48';
            }
            if (length > 820) {
                size = 'clamp(1rem, 1.8vw, 1.55rem)';
                lineHeight = '1.56';
            }

            textElement.style.fontSize = size;
            textElement.style.lineHeight = lineHeight;
            shell.scrollTop = 0;
        }

        function normalizeText(value) {
            return String(value || '')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase();
        }

        function registerBookAlias(alias, slug) {
            const normalized = normalizeText(alias).replace(/\./g, '').trim();
            if (normalized) BOOK_LOOKUP.set(normalized, slug);
        }

        BIBLE_BOOKS.forEach(book => {
            registerBookAlias(book.name, book.slug);
            registerBookAlias(book.slug, book.slug);
            registerBookAlias(book.slug.replace(/-/g, ' '), book.slug);
        });

        [
            ['gen', 'genesis'], ['gn', 'genesis'], ['ex', 'exodus'], ['exo', 'exodus'],
            ['lev', 'leviticus'], ['num', 'numbers'], ['deut', 'deuteronomy'], ['dt', 'deuteronomy'],
            ['jos', 'joshua'], ['jue', 'judges'], ['rut', 'ruth'], ['1 sam', '1-samuel'],
            ['2 sam', '2-samuel'], ['1 reyes', '1-kings'], ['2 reyes', '2-kings'],
            ['1 cronicas', '1-chronicles'], ['2 cronicas', '2-chronicles'], ['esd', 'ezra'],
            ['neh', 'nehemiah'], ['est', 'esther'], ['salmo', 'psalms'], ['sal', 'psalms'],
            ['pro', 'proverbs'], ['prov', 'proverbs'], ['ecl', 'ecclesiastes'], ['cantares', 'song-of-solomon'],
            ['cant', 'song-of-solomon'], ['isa', 'isaiah'], ['jer', 'jeremiah'], ['lam', 'lamentations'],
            ['eze', 'ezekiel'], ['dan', 'daniel'], ['os', 'hosea'], ['joe', 'joel'], ['amo', 'amos'],
            ['abd', 'obadiah'], ['jon', 'jonah'], ['miq', 'micah'], ['nah', 'nahum'], ['hab', 'habakkuk'],
            ['sof', 'zephaniah'], ['hag', 'haggai'], ['zac', 'zechariah'], ['mal', 'malachi'],
            ['mt', 'matthew'], ['mateo', 'matthew'], ['mar', 'mark'], ['mc', 'mark'], ['mr', 'mark'],
            ['lc', 'luke'], ['luc', 'luke'], ['jn', 'john'], ['jua', 'john'], ['hch', 'acts'],
            ['rom', 'romans'], ['1 co', '1-corinthians'], ['1 cor', '1-corinthians'],
            ['2 co', '2-corinthians'], ['2 cor', '2-corinthians'], ['gal', 'galatians'],
            ['efe', 'ephesians'], ['fil', 'philippians'], ['col', 'colossians'],
            ['1 tes', '1-thessalonians'], ['2 tes', '2-thessalonians'], ['1 tim', '1-timothy'],
            ['2 tim', '2-timothy'], ['tit', 'titus'], ['flm', 'philemon'], ['heb', 'hebrews'],
            ['stg', 'james'], ['sant', 'james'], ['1 ped', '1-peter'], ['2 ped', '2-peter'],
            ['1 jn', '1-john'], ['2 jn', '2-john'], ['3 jn', '3-john'], ['jud', 'jude'],
            ['ap', 'revelation'], ['apo', 'revelation']
        ].forEach(([alias, slug]) => registerBookAlias(alias, slug));

        function setExportButtonsDisabled(disabled) {
            ['copy-btn', 'download-btn', 'share-btn'].forEach(id => {
                const element = document.getElementById(id);
                if (element) element.disabled = disabled;
            });
        }

        function setBusyState(isBusy) {
            const triggerBtn = document.getElementById('trigger-btn');
            const searchBtn = document.getElementById('search-btn');
            const controlToggle = document.getElementById('control-toggle');
            const bookTrigger = document.getElementById('book-trigger');
            const chapterTrigger = document.getElementById('chapter-trigger');
            const verseTrigger = document.getElementById('verse-trigger');
            if (triggerBtn) triggerBtn.disabled = isBusy;
            if (searchBtn) searchBtn.disabled = isBusy;
            if (controlToggle) controlToggle.disabled = isBusy;
            if (bookTrigger) bookTrigger.disabled = isBusy;
            if (chapterTrigger) chapterTrigger.disabled = isBusy;
            if (verseTrigger) verseTrigger.disabled = isBusy;
            document.querySelectorAll('.filter-btn, .verse-inline-action, .verse-chip, .select-option, .chapter-chip').forEach(element => {
                element.disabled = isBusy;
            });
            if (isBusy) closeVerseMenu();
            if (isBusy) setExportButtonsDisabled(true);
        }

        function setActiveFilterUI(filter) {
            currentFilter = filter;
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
            document.body.style.backgroundColor = `var(--bg-${filter})`;
            syncControlToggleCopy();
        }

        function pulseActionLabel(button, label, fallbackLabel, duration = 1400) {
            if (!button) return;
            const original = fallbackLabel || button.dataset.originalLabel || button.textContent;
            button.dataset.originalLabel = original;
            button.textContent = label;
            window.clearTimeout(button._labelTimer);
            button._labelTimer = window.setTimeout(() => {
                button.textContent = original;
            }, duration);
        }

        function sanitizeFilePart(value) {
            return String(value || '')
                .toLowerCase()
                .replace(/[^\w\-]+/g, '-')
                .replace(/-+/g, '-')
                .replace(/^-|-$/g, '');
        }

        async function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
            const paragraphs = String(text || '').split('\n');
            const lines = [];

            paragraphs.forEach(paragraph => {
                const words = paragraph.split(/\s+/).filter(Boolean);
                if (!words.length) {
                    lines.push('');
                    return;
                }

                let line = words[0];
                for (let i = 1; i < words.length; i += 1) {
                    const testLine = `${line} ${words[i]}`;
                    if (ctx.measureText(testLine).width <= maxWidth) {
                        line = testLine;
                    } else {
                        lines.push(line);
                        line = words[i];
                    }
                }
                lines.push(line);
            });

            lines.forEach((line, index) => {
                ctx.fillText(line, x, y + index * lineHeight);
            });

            return lines;
        }

        async function buildShareCanvas() {
            if (!currentDisplay) throw new Error('No hay contenido para exportar');
            if (document.fonts?.ready) {
                try { await document.fonts.ready; } catch {}
            }

            const canvas = document.createElement('canvas');
            canvas.width = 1200;
            canvas.height = 1500;
            const ctx = canvas.getContext('2d');
            const theme = filterThemeStyles[currentDisplay.filter] || filterThemeStyles.jesus;
            const [bgA, bgB, bgC] = theme.background;

            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, bgA);
            gradient.addColorStop(0.55, bgB);
            gradient.addColorStop(1, bgC);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const orb = ctx.createRadialGradient(260, 220, 0, 260, 220, 420);
            orb.addColorStop(0, theme.glow);
            orb.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = orb;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const panelX = 90;
            const panelY = 90;
            const panelWidth = canvas.width - 180;
            const panelHeight = canvas.height - 180;
            const radius = 42;

            ctx.beginPath();
            ctx.moveTo(panelX + radius, panelY);
            ctx.lineTo(panelX + panelWidth - radius, panelY);
            ctx.quadraticCurveTo(panelX + panelWidth, panelY, panelX + panelWidth, panelY + radius);
            ctx.lineTo(panelX + panelWidth, panelY + panelHeight - radius);
            ctx.quadraticCurveTo(panelX + panelWidth, panelY + panelHeight, panelX + panelWidth - radius, panelY + panelHeight);
            ctx.lineTo(panelX + radius, panelY + panelHeight);
            ctx.quadraticCurveTo(panelX, panelY + panelHeight, panelX, panelY + panelHeight - radius);
            ctx.lineTo(panelX, panelY + radius);
            ctx.quadraticCurveTo(panelX, panelY, panelX + radius, panelY);
            ctx.closePath();
            ctx.fillStyle = 'rgba(255,255,255,0.055)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.08)';
            ctx.lineWidth = 1.2;
            ctx.stroke();

            ctx.fillStyle = 'rgba(255,255,255,0.68)';
            ctx.font = '500 28px Inter, system-ui, sans-serif';
            ctx.fillText(filterLabels[currentDisplay.filter] || 'Inspiración', panelX + 52, panelY + 70);

            ctx.fillStyle = theme.accent;
            const fontMap = {
                'style-serif-1': '600 "{FONT}", "Playfair Display", serif',
                'style-serif-2': '400 italic "{FONT}", "Instrument Serif", serif',
                'style-classic': '600 "{FONT}", "Cinzel", serif',
                'style-minimal': '300 "{FONT}", Inter, sans-serif'
            };
            const familyToken = currentDisplay.styleClass === 'style-serif-2'
                ? '72px'
                : currentDisplay.styleClass === 'style-classic'
                    ? '68px'
                    : currentDisplay.styleClass === 'style-minimal'
                        ? '62px'
                        : '70px';

            let textSize = parseInt(familyToken, 10);
            let lineHeight = textSize * 1.34;
            const maxTextWidth = panelWidth - 120;
            const maxTextHeight = 780;
            let lines = [];

            while (textSize >= 38) {
                const fontTemplate = fontMap[currentDisplay.styleClass] || fontMap['style-serif-1'];
                ctx.font = fontTemplate.replace('{FONT}', `${textSize}px`);
                lineHeight = textSize * 1.34;

                const words = currentDisplay.text.split(/\s+/).filter(Boolean);
                lines = [];
                let line = words[0] || '';
                for (let i = 1; i < words.length; i += 1) {
                    const testLine = `${line} ${words[i]}`;
                    if (ctx.measureText(testLine).width <= maxTextWidth) {
                        line = testLine;
                    } else {
                        lines.push(line);
                        line = words[i];
                    }
                }
                if (line) lines.push(line);

                if (lines.length * lineHeight <= maxTextHeight) break;
                textSize -= 4;
            }

            const blockHeight = lines.length * lineHeight;
            let textY = panelY + 220 + Math.max(0, (maxTextHeight - blockHeight) / 2);
            ctx.textAlign = currentDisplay.align;
            const textX = currentDisplay.align === 'left'
                ? panelX + 60
                : currentDisplay.align === 'right'
                    ? panelX + panelWidth - 60
                    : panelX + panelWidth / 2;

            lines.forEach((line, index) => {
                ctx.fillText(line, textX, textY + index * lineHeight);
            });

            ctx.textAlign = 'left';
            ctx.fillStyle = 'rgba(255,255,255,0.62)';
            ctx.font = '500 26px Inter, system-ui, sans-serif';
            ctx.fillText(currentDisplay.reference, panelX + 52, panelY + panelHeight - 84);

            ctx.textAlign = 'right';
            ctx.fillStyle = 'rgba(255,255,255,0.42)';
            ctx.font = '500 22px Inter, system-ui, sans-serif';
            ctx.fillText('Verbum', panelX + panelWidth - 52, panelY + panelHeight - 84);

            return canvas;
        }

        function canvasToBlob(canvas) {
            return new Promise((resolve, reject) => {
                canvas.toBlob(blob => {
                    if (blob) resolve(blob);
                    else reject(new Error('No se pudo generar la imagen'));
                }, 'image/png');
            });
        }

        async function copyCurrentImage() {
            const button = document.getElementById('copy-btn');
            try {
                if (!navigator.clipboard || typeof ClipboardItem === 'undefined') {
                    throw new Error('Clipboard no soportado');
                }
                const canvas = await buildShareCanvas();
                const blob = await canvasToBlob(canvas);
                await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
                pulseActionLabel(button, 'Copiado', 'Copiar');
            } catch (error) {
                pulseActionLabel(button, 'No se pudo', 'Copiar');
            }
        }

        async function downloadCurrentImage() {
            const button = document.getElementById('download-btn');
            try {
                const canvas = await buildShareCanvas();
                const blob = await canvasToBlob(canvas);
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                const filterPart = sanitizeFilePart(filterLabels[currentDisplay?.filter] || 'verbum');
                const refPart = sanitizeFilePart(currentDisplay?.reference || 'pasaje');
                link.href = url;
                link.download = `verbum-${filterPart}-${refPart}.png`;
                document.body.appendChild(link);
                link.click();
                link.remove();
                URL.revokeObjectURL(url);
                pulseActionLabel(button, 'Descargado', 'Descargar');
            } catch (error) {
                pulseActionLabel(button, 'No se pudo', 'Descargar');
            }
        }

        async function shareCurrentImage() {
            const button = document.getElementById('share-btn');
            try {
                const canvas = await buildShareCanvas();
                const blob = await canvasToBlob(canvas);
                const file = new File([blob], 'verbum.png', { type: 'image/png' });

                if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                    await navigator.share({
                        files: [file],
                        title: 'Verbum',
                        text: currentDisplay?.reference || 'Pasaje bíblico'
                    });
                    pulseActionLabel(button, 'Compartido', 'Compartir');
                    return;
                }

                await downloadCurrentImage();
                pulseActionLabel(button, 'Descargado', 'Compartir');
            } catch (error) {
                pulseActionLabel(button, 'No se pudo', 'Compartir');
            }
        }

        function bookNameFromSlug(slug) {
            return BIBLE_BOOKS.find(book => book.slug === slug)?.name || slug;
        }

        function parseReferenceInput(reference) {
            const raw = String(reference || '').trim();
            const match = raw.match(/^(.*?)\s+(\d+)\s*:\s*(\d+)(?:\s*-\s*(\d+))?$/i);
            if (!match) return null;

            const bookPart = normalizeText(match[1]).replace(/\./g, '').trim();
            const chapter = Number(match[2]);
            const verseStart = Number(match[3]);
            const verseEnd = match[4] ? Number(match[4]) : verseStart;
            const slug = BOOK_LOOKUP.get(bookPart);

            if (!slug || !chapter || !verseStart || !verseEnd || verseEnd < verseStart) {
                return null;
            }

            return {
                slug,
                chapter,
                verseStart,
                verseEnd,
                raw
            };
        }

        function applyDisplayResult(result) {
            const textElement = document.getElementById('verbum-text');
            const refElement = document.getElementById('verbum-reference');

            textElement.innerText = `"${result.text}"`;
            adjustVerseLayout(result.text);
            refElement.innerText = result.reference;

            textElement.className = '';
            const chosenFont = result.styleClass || randomFrom(fonts);
            textElement.classList.add(chosenFont);

            const chosenAlign = result.align || randomFrom(alignments);
            document.getElementById('canvas-container').style.alignItems =
                chosenAlign === 'left' ? 'flex-start' : chosenAlign === 'right' ? 'flex-end' : 'center';
            textElement.style.textAlign = chosenAlign;
            textElement.style.textShadow = result.filter === 'espiritu' ? '0 0 40px rgba(147, 51, 234, 0.15)' : 'none';

            currentDisplay = {
                text: result.text,
                reference: result.reference,
                filter: result.filter,
                styleClass: chosenFont,
                align: chosenAlign
            };

            textElement.style.opacity = '1';
            textElement.style.transform = 'translateY(0)';
            refElement.style.opacity = '1';
            setExportButtonsDisabled(false);
        }

        function showMessageState(message, referenceText) {
            const textElement = document.getElementById('verbum-text');
            const refElement = document.getElementById('verbum-reference');
            textElement.innerText = message;
            adjustVerseLayout(textElement.innerText);
            refElement.innerText = referenceText;
            currentDisplay = null;
            textElement.style.opacity = '1';
            textElement.style.transform = 'translateY(0)';
            refElement.style.opacity = '1';
            setExportButtonsDisabled(true);
        }

        function scorePassage(text, profile) {
            const normalized = normalizeText(text);
            let score = 0;
            let matches = 0;

            profile.anchors.forEach(keyword => {
                if (normalized.includes(keyword)) {
                    score += 10;
                    matches += 1;
                }
            });

            profile.traits.forEach(keyword => {
                if (normalized.includes(keyword)) {
                    score += 4;
                    matches += 1;
                }
            });

            profile.phrases.forEach(keyword => {
                if (normalized.includes(keyword)) {
                    score += 7;
                    matches += 1;
                }
            });

            (profile.negatives || []).forEach(keyword => {
                if (normalized.includes(keyword)) {
                    score -= 10;
                }
            });

            const wordCount = normalized.split(/\s+/).filter(Boolean).length;
            if (wordCount < 7) score -= 2;
            score -= Math.max(0, wordCount - 90) * 0.03;

            return matches > 0 ? score : 0;
        }

        function findBestPassageInChapter(verses, profile) {
            let best = null;

            for (let start = 0; start < verses.length; start += 1) {
                const maxLength = Math.min(5, verses.length - start);

                for (let length = 1; length <= maxLength; length += 1) {
                    const slice = verses.slice(start, start + length).map(verse => verse.trim()).filter(Boolean);
                    if (!slice.length) continue;

                    const passageText = slice.join(' ');
                    const score = scorePassage(passageText, profile);
                    if (score <= 0) continue;

                    const candidate = {
                        score,
                        startVerse: start + 1,
                        endVerse: start + length,
                        text: passageText,
                        length
                    };

                    if (
                        !best ||
                        candidate.score > best.score ||
                        (candidate.score === best.score && candidate.length < best.length)
                    ) {
                        best = candidate;
                    }
                }
            }

            return best;
        }

        function setFilter(filter) {
            setActiveFilterUI(filter);
            fetchBibleVersicle();
        }

        function inspireAny() {
            const randomFilter = randomFrom(filterOptions);
            setActiveFilterUI(randomFilter);
            fetchBibleVersicle(randomFilter);
        }

        async function searchReference() {
            const textElement = document.getElementById('verbum-text');
            const refElement = document.getElementById('verbum-reference');
            const { bookSlug, chapter } = getCurrentSelectionContext();
            const verseReference = formatVerseSelectionReference(selectedVerses);

            if (!bookSlug || !chapter || !selectedVerses.length) {
                showMessageState('Seleccioná uno o más versículos.', 'Elegí libro, capítulo y uno o varios versículos');
                return;
            }

            setBusyState(true);
            textElement.style.opacity = '0';
            textElement.style.transform = 'translateY(10px)';
            refElement.style.opacity = '0';

            try {
                const verses = await fetchChapterVerses(bookSlug, chapter);
                const cleanText = selectedVerses
                    .map(verseNumber => verses[verseNumber - 1])
                    .filter(Boolean)
                    .join(' ');
                if (!cleanText) throw new Error('Pasaje vacío');

                const display = {
                    text: cleanText,
                    reference: `${bookNameFromSlug(bookSlug)} ${chapter}:${verseReference}`,
                    filter: currentFilter
                };

                setTimeout(() => {
                    applyDisplayResult(display);
                    closeVerseMenu();
                    if (compactViewport) setControlsPanelOpen(false);
                    setBusyState(false);
                }, 220);
            } catch (error) {
                setTimeout(() => {
                    showMessageState('No se encontró ese pasaje.', 'Probá con otra selección dentro del capítulo');
                    setBusyState(false);
                }, 220);
            }
        }

        async function fetchBibleVersicle(filterOverride = currentFilter) {
            const textElement = document.getElementById('verbum-text');
            const refElement = document.getElementById('verbum-reference');
            const profile = themeProfiles[filterOverride];

            setBusyState(true);
            textElement.style.opacity = '0';
            textElement.style.transform = 'translateY(10px)';
            refElement.style.opacity = '0';

            try {
                let bestMatch = null;

                for (let attempt = 0; attempt < 12; attempt += 1) {
                    const randomBook = randomFrom(BIBLE_BOOKS);
                    const randomChapter = Math.floor(Math.random() * randomBook.chapters) + 1;
                    const response = await fetch(`${API_BASE}/${randomBook.slug}/${randomChapter}`);
                    if (!response.ok) continue;

                    const data = await response.json();
                    const verses = data?.data?.verses;
                    if (!Array.isArray(verses) || verses.length === 0) continue;
                    cacheChapterVerses(randomBook.slug, randomChapter, verses);

                    const candidate = findBestPassageInChapter(verses, profile);
                    if (!candidate) continue;

                    bestMatch = {
                        ...candidate,
                        book: randomBook,
                        chapter: randomChapter,
                        filter: filterOverride
                    };

                    if (candidate.score >= profile.targetScore) break;
                }

                if (!bestMatch || !bestMatch.text) {
                    throw new Error('No se encontró un pasaje temático');
                }

                setTimeout(() => {
                    const reference =
                        bestMatch.startVerse === bestMatch.endVerse
                            ? `${bestMatch.book.name} ${bestMatch.chapter}:${bestMatch.startVerse}`
                            : `${bestMatch.book.name} ${bestMatch.chapter}:${bestMatch.startVerse}-${bestMatch.endVerse}`;
                    const matchedVerses = buildVerseRange(bestMatch.startVerse, bestMatch.endVerse);
                    applyDisplayResult({
                        text: bestMatch.text,
                        reference,
                        filter: filterOverride,
                        styleClass: randomFrom(fonts),
                        align: randomFrom(alignments)
                    });
                    syncSearchControlsToPassage(bestMatch.book.slug, bestMatch.chapter, matchedVerses).catch(() => {});
                    closeVerseMenu();
                    if (compactViewport) setControlsPanelOpen(false);
                    setBusyState(false);
                }, 300);

            } catch (error) {
                setTimeout(() => {
                    showMessageState('No se pudo cargar un versículo ahora.', 'Verificá tu conexión o la disponibilidad de la API');
                    setBusyState(false);
                }, 300);
            }
        }

        function bindStaticEventListeners() {
            document.getElementById('control-toggle')?.addEventListener('click', toggleControlsPanel);
            document.getElementById('book-trigger')?.addEventListener('click', toggleBookMenu);
            document.getElementById('chapter-trigger')?.addEventListener('click', toggleChapterMenu);
            document.getElementById('verse-trigger')?.addEventListener('click', toggleVerseMenu);
            document.getElementById('book-search')?.addEventListener('input', filterBookOptions);
            document.getElementById('search-btn')?.addEventListener('click', searchReference);
            document.getElementById('trigger-btn')?.addEventListener('click', inspireAny);
            document.getElementById('copy-btn')?.addEventListener('click', copyCurrentImage);
            document.getElementById('download-btn')?.addEventListener('click', downloadCurrentImage);
            document.getElementById('share-btn')?.addEventListener('click', shareCurrentImage);

            document.querySelectorAll('.filter-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const { filter } = button.dataset;
                    if (filter) setFilter(filter);
                });
            });

            document.querySelectorAll('.verse-inline-action').forEach(button => {
                button.addEventListener('click', () => {
                    switch (button.dataset.verseAction) {
                        case 'select-all':
                            selectAllVerses();
                            break;
                        case 'clear':
                            clearVerseSelection();
                            break;
                        case 'apply':
                            applyVerseSelection();
                            break;
                        case 'cancel':
                            cancelVerseSelection();
                            break;
                        default:
                            break;
                    }
                });
            });
        }

        function bindDelegatedEventListeners() {
            document.getElementById('book-options')?.addEventListener('click', (event) => {
                const button = event.target.closest('[data-book-slug]');
                if (!button) return;
                selectBook(button.dataset.bookSlug);
            });

            document.getElementById('chapter-options')?.addEventListener('click', (event) => {
                const button = event.target.closest('[data-chapter]');
                if (!button) return;
                selectChapter(Number(button.dataset.chapter));
            });

            document.getElementById('verse-options')?.addEventListener('click', (event) => {
                const button = event.target.closest('[data-verse]');
                if (!button) return;
                toggleVerseSelection(Number(button.dataset.verse));
            });
        }

        async function initApp() {
            setActiveFilterUI(currentFilter);
            syncControlsLayout(true);
            selectedBookSlug = 'john';
            selectedChapter = 3;
            syncBookTriggerLabel();
            syncChapterTriggerLabel();
            bindStaticEventListeners();
            bindDelegatedEventListeners();
            renderBookOptions('');
            renderChapterOptions();
            await loadVerseOptions({ preserveSelection: false, preselectedVerses: [16] });
            fetchBibleVersicle();
            document.addEventListener('click', (event) => {
                const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
                const versePicker = document.getElementById('verse-picker');
                const bookPicker = document.getElementById('book-picker');
                const chapterPicker = document.getElementById('chapter-picker');
                if (versePicker && !(path.includes(versePicker) || versePicker.contains(event.target))) closeVerseMenu();
                if (bookPicker && !(path.includes(bookPicker) || bookPicker.contains(event.target))) closeBookMenu();
                if (chapterPicker && !(path.includes(chapterPicker) || chapterPicker.contains(event.target))) closeChapterMenu();
            });
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    closeVerseMenu();
                    closeBookMenu();
                    closeChapterMenu();
                }
            });
            window.addEventListener('resize', () => {
                syncControlsLayout();
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            initApp().catch(() => {
                showMessageState('No se pudo iniciar Verbum.', 'Recargá la página para intentarlo de nuevo');
            });
        });
