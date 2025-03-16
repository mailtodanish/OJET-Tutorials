define(['exports'], (function(e){"use strict";const t={accAnnounceMovedKey:e=>"Đã di chuyển "+e.itemKey+" "+e.position+" "+e.referenceKey+".",accCommandKey:()=>"Lệnh",accControlKey:()=>"Đóng",accPositionAfter:()=>"sau",accPositionBefore:()=>"trước",accReorderInstructions:e=>"Nhấn và giữ phím "+e.keyPressed+" và phím shift, sau đó dùng các phím mũi tên để sắp xếp lại.",calendarDateConverter_parseError:e=>"Nhập ngày đầy đủ như sau: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Nhập tháng và năm như sau: "+e.dateExample+".",chart_labelGroup:()=>"Nhóm",chart_labelSeries:()=>"Chuỗi",chart_labelValue:()=>"Giá trị",checkboxSet_requiredMessageDetail:()=>"Bắt buộc",checkbox_requiredMessageDetail:()=>"Bắt buộc",close:()=>"Đóng",collection_noData:()=>"Không có dữ liệu để hiển thị.",collection_selectAllRows:()=>"Chọn toàn bộ các hàng",collection_selectRow:e=>"Chọn hàng "+e.ROW_NAME,collection_sortDisabled:()=>"Không thể sắp xếp",collection_sortEnabled:()=>"Có thể sắp xếp",confirmation:()=>"Xác nhận",datePicker_currentDate:()=>"Ngày hiện tại",datePicker_goToToday:()=>"Đi đến hôm nay",datePicker_label:()=>"Bộ chọn ngày",datePicker_month:()=>"Tháng",datePicker_months:()=>"Tháng",datePicker_next:()=>"Tiếp theo",datePicker_nextDecade:()=>"Thập kỷ tiếp theo",datePicker_nextMonth:()=>"Tháng tiếp theo",datePicker_prev:()=>"Trước",datePicker_prevDecade:()=>"Thập kỷ trước",datePicker_prevMonth:()=>"Tháng trước",datePicker_restricted:()=>"Bị hạn chế",datePicker_selected:()=>"Được chọn",datePicker_today:()=>"Hôm nay",datePicker_weekNum:e=>"Tuần "+e.NUM,datePicker_weekNumColLabel:()=>"Số hiệu tuần",datePicker_year:()=>"Năm",datePicker_years:()=>"Năm",error:()=>"Lỗi",expandableList_expandCollapseInstructionText:()=>"Sử dụng các phím mũi tên để mở rộng và thu gọn",expandableList_groupCollapse:()=>"Đã thu gọn",expandableList_groupExpand:()=>"Đã mở rộng",filePicker_addFiles:()=>"Thêm tập tin",filePicker_dropzonePrimaryText:()=>"Kéo và thả",filePicker_dropzoneSecondaryText:()=>"Chọn tập tin hoặc thả một tập tin vào đây",filePicker_dropzoneSecondaryTextMultiple:()=>"Chọn hoặc thả tập tin ở đây",filePicker_multipleFileTypeUploadError:e=>"Bạn không thể tải lên tập tin loại: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Tải lên một tập tin tại một thời điểm",filePicker_singleTypeUploadError:e=>"Bạn không thể tải lên tập tin loại "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"không xác định",formControl_clear:()=>"Xóa",formControl_day:()=>"Ngày",formControl_helpAvailable:()=>"Có sẵn trợ giúp",formControl_hide:()=>"Ẩn",formControl_limitReached:e=>"Bạn đã đạt đến giới hạn "+({one:new Intl.NumberFormat("vi").format(e.CHARACTER_LIMIT)+"-character"}[new Intl.PluralRules("vi").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("vi").format(e.CHARACTER_LIMIT)+"-character")+".",formControl_loading:()=>"Đang tải",formControl_maxLength:e=>"Bạn có thể nhập tối đa "+e.MAX_LENGTH+" ký tự.",formControl_maxLengthRemaining:e=>"Còn lại "+e.CHARACTER_COUNT+" ký tự.",formControl_month:()=>"Tháng",formControl_readOnly:()=>"Chỉ đọc",formControl_requiredMessageDetail:()=>"Nhập giá trị.",formControl_show:()=>"Hiển thị",formControl_year:()=>"Năm",gantt_labelDate:()=>"Ngày",gantt_labelEnd:()=>"Kết thúc",gantt_labelLabel:()=>"Nhãn",gantt_labelRow:()=>"Hàng",gantt_labelStart:()=>"Bắt đầu",indexer_disabledLabel:e=>e.SECTION+". Không tìm thấy phần nào phù hợp.",indexer_keyboardInstructionText:()=>"Nhấn enter để chọn giá trị.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Từ "+e.FROM_SECTION+" đến "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Chạm hai lần và giữ để truy cập chế độ cử chỉ, rồi kéo lên hoặc xuống để điều chỉnh giá trị.",info:()=>"Thông tin",inputDateMask_date_cleared:()=>"Ngày xóa",inputDateMask_dayPlaceholder:()=>"dd",inputDateMask_empty_segment:()=>"Trống",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"yyyy",inputDatePicker_dateRangeOverflowMessageDetail:e=>"Nhập một ngày trùng hoặc trước "+e.max+".",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"Nhập một ngày trùng hoặc sau "+e.min+".",inputDatePicker_dateRestrictionMessageDetail:()=>"Nhập một ngày sẵn có.",inputDatePicker_instruction:()=>"Nhấn Tab để truy cập lịch.",inputDatePicker_selectDate:()=>"Chọn một ngày",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Nhập tháng và năm vào hoặc trước "+e.max+".",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Nhập tháng và năm vào hoặc sau "+e.min+".",inputNumber_converterParseError:()=>"Nhập một số.",inputNumber_decrease:()=>"Giảm",inputNumber_increase:()=>"Tăng",inputPassword_hidden:()=>"Mật khẩu bị ẩn",inputPassword_hide:()=>"Ẩn mật khẩu",inputPassword_show:()=>"Hiển thị mật khẩu",inputSensitiveText_hidden:()=>"Đã ẩn văn bản nhạy cảm",list_msgFetchCompleted:()=>"Đã tải",list_msgFetchingData:()=>"Đang tải",list_suggestion:()=>"Gợi ý",messageToast_allMessagesClosed:()=>"Tất cả thông báo bật lên đều được đóng.",message_close:()=>"Đóng",message_confirmation:()=>"Thành công",message_error:()=>"Lỗi",message_info:()=>"Thông tin",message_navigationFromMessagesRegion:()=>"Truy cập khu vực thông báo. Nhấn F6 để chuyển trở lại yếu tố được làm nổi bật trước.",message_navigationToMessagesRegion:()=>"Có thông báo mới ở khu vực thông báo. Hãy nhấn F6 để chuyển đến khu vực thông báo gần đây nhất.",message_warning:()=>"Cảnh báo",noData_message:()=>"Không có mục nào để hiển thị",overflowItemLabel:()=>"Thêm tab",plural_separator:()=>", ",progressIndeterminate:()=>"Đang xử lý",radio_helpForRadio:()=>"Trợ giúp cho nút radio",radio_requiredMessageDetail:()=>"Chọn một giá trị.",selectMultiple_apply:()=>"Áp dụng",selectMultiple_back:()=>"Trở lại",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Sử dụng phím mũi tên trái và phải để đánh dấu các giá trị đã chọn.",selectMultiple_removeSelectedTagInstructionText:()=>"Nhấn phím Backspace hoặc Delete để xóa giá trị đã chọn.",selectMultiple_selectedValues:()=>"Giá trị đã chọn",selectMultiple_showSelectedValues:()=>"Chỉ hiển thị các giá trị đã chọn.",selectMultiple_valuesSelected:e=>"Đã chọn "+e.VALUE_COUNT+" giá trị.",select_addToList:()=>"Thêm vào danh sách",select_addToListAvailable:()=>"Có sẵn nút thêm vào danh sách",select_moreSearchOptions:()=>"Các tùy chọn tìm kiếm khác",select_moreSearchOptionsAvailable:()=>"Có sẵn các tùy chọn tìm kiếm khác",select_noMatchesFound:()=>"Không tìm thấy kết quả khớp nào.",select_oneMatchFound:()=>"Tìm thấy một kết quả khớp",select_requiredMessageDetail:()=>"Chọn một giá trị.",select_sizeMatchesFound:e=>"Tìm thấy "+e.TOTAL_SIZE+" kết quả phù hợp",select_sizeOrMoreMatchesFound:e=>"Tìm thấy "+e.TOTAL_SIZE+" kết quả phù hợp trở lên",selectorAll_deselectAll:()=>"Bỏ chọn tất cả",selectorAll_selectAll:()=>"Chọn tất cả",selector_selected:()=>"Đã đánh dấu vào hộp chọn",selector_unselected:()=>"Chưa đánh dấu vào hộp chọn",tabBarNavigationList_removeCueText:()=>"Có thể xóa",timeComponent_tooltipZoomIn:()=>"Phóng to",timeComponent_tooltipZoomOut:()=>"Thu nhỏ",train_current:()=>"Hiện tại",train_message_type:()=>"Loại thông báo",train_not_visited:()=>"Chưa truy cập",train_status:e=>"Bước "+e.currentStep+"/"+e.numberOfSteps,train_visited:()=>"Đã truy cập",userAssistance_learnMore:()=>"Tìm hiểu thêm",userAssistance_required:()=>"Bắt buộc",vis_clearSelection:()=>"Xóa mục chọn",vis_drillable:()=>"Có thể xem chi tiết",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+"/"+e.totalCount,vis_marqueeSelectTooltip:()=>"Chọn marquee",vis_marqueeZoomTooltip:()=>"Thu phóng marquee",vis_noData:()=>"Không có dữ liệu để hiển thị",vis_panTooltip:()=>"Xoay",vis_stateLoaded:()=>"Đã tải",vis_stateLoading:()=>"Đang tải",vis_stateSelected:()=>"Được chọn",vis_stateUnselected:()=>"Không được chọn",warn:()=>"Cảnh báo"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
