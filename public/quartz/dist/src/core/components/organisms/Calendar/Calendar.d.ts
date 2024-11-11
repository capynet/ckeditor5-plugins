import { CSSResult } from 'lit';
import { Component } from '@/core/components/Component';
export declare class Calendar extends Component {
    activeDates: string[];
    direction: 'ltr' | 'rtl';
    entries: string[];
    locale: string;
    mode: 'light' | 'dark';
    weekStartDay: 'monday' | 'sunday';
    private _calendarMonth;
    private _invisible;
    private _optionMonths;
    private _optionYears;
    private _selectedMonth;
    private _selectedYear;
    private _weekdays;
    static get styles(): CSSResult[];
    attributeChangedCallback(name: string, old: string | null, value: string | null): void;
    firstUpdated(): void;
    private _buildCalendarMonth;
    private _buildOptionMonths;
    private _buildWeekdays;
    private _buildOptionYears;
    private _checkHasEntry;
    private _disablePrevMonth;
    private _disableNextMonth;
    private _handlePrevMonth;
    private _handleNextMonth;
    private _handleSelectDate;
    private _handleUpdateMonth;
    private _handleUpdateYear;
    private _setSelected;
    private _monthControl;
    private _nextControl;
    private _pageRtl;
    private _prevControl;
    private _day;
    private _turnCalendarPage;
    private _yearControl;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'qz-calendar': Calendar;
    }
}
//# sourceMappingURL=Calendar.d.ts.map